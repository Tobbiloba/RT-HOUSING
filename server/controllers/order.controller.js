import {
  getOrderByUserId,
  getOrders,
  getOrderByProperty,
  createOrder,
  updateOrderById,
  getOrdersByPropertyIds,
  getOrderById,
} from "../mongodb/models/order.js";
import PropertyModel from "../mongodb/models/property.js";
import moment from "moment";
import {
  random,
  sendOrderConfirmation,
  sendOrderEnd,
} from "../helpers/index.js";
import { getAdminUserById } from "../mongodb/models/admin.js";
import { getPropertyById } from "../mongodb/models/property.js";
import { getUserById } from "../mongodb/models/user.js";
// const { scheduleJob } = require('node-schedule');
import { scheduleJob } from "node-schedule";
import { getCompanyByIdSchema } from "../mongodb/models/company.js";

const getAllOrders = async (req, res) => {
  try {
    const orders = await getOrders();
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getUserOrder = async (req, res) => {
  const { id } = req.params;
  console.log(id)

  try {
    const orders = await getOrderByUserId(id);
    console.log(orders)

    return res.status(200).json(orders);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(error.message);
  }
};

const getOrdersByAdmin = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const user = await getAdminUserById(id);
    // console.log(user)

    if (user) {
      const propertyIds = user.allProperties.map((property) =>
        property._id.toString()
      );
      // const propertyIds = user.allProperties.map(property => new ObjectId(property._id));
      // console.log(propertyIds)
      const orders = await getOrdersByPropertyIds(propertyIds);
      // console.log(orders)
      return res.status(200).json({ orders });
    } else {
      return res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    console.error("Error fetching orders for admin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUserOrder = async (req, res) => {
  const { id } = req.params;
  const { pricing, promotions, user_id, checkinDate, checkoutDate } = req.body;

  const extractNecessaryPropertyInfo = (property) => {
    console.log(property);
    const { property_name, property_type, property_location, property_images } =
      property.property_information;
    return {
      propertyName: property_name,
      propertyType: property_type,
      propertyLocation: property_location,
      propertyImage: property_images[0],
    };
  };

  try {
    if (!id || !pricing || !user_id || !checkinDate || !checkoutDate) {
      return res.status(500).json({ message: "Pass all necessary parameters" });
    }
    const user = await getUserById(user_id);
    const property = await getPropertyById(id);

    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    if (!property) {
      return res.status(500).json({ message: "Property not found" });
    }

    const necessaryPropertyInfo = extractNecessaryPropertyInfo(property);
    console.log(property.property_information.booking_status);
    if (
      property &&
      property.property_information.booking_status !== "available"
    ) {
      console.log(property.status);
      return res.status(500).json({
        message: "Property unavailable at the moment. Please check back later.",
      });
    }

    const newOrder = await createOrder({
      orderId: random(),
      propertyId: id,
      companyId: property.company_id,
      userInformation: {
        userId: user._id,
        username: user.username,
        email: user.email,
        phoneNo: user.phoneNo,
      },
      checkinDate: checkinDate,
      checkoutDate: checkoutDate,
      propertyInformation: {
        propertyName: necessaryPropertyInfo.propertyName,
        propertyLocation: necessaryPropertyInfo.propertyLocation,
        propertyType: necessaryPropertyInfo.propertyType,
        propertyImage: necessaryPropertyInfo.propertyImage,
      },
      promotions: {
        couponCode: promotions.couponCode || null,
        discount: promotions.discount || null,
      },
      pricing: {
        ...pricing,
      },
    });

    // console.log({
    //   orderId: random(),
    //   propertyId: id,
    //   companyId: property.company_id,
    //   userInformation: {
    //     userId: user._id,
    //     username: user.username,
    //     email: user.email,
    //     phoneNo: user.phoneNo
    //   },
    //   propertyInformation: {
    //     propertyName: necessaryPropertyInfo.propertyName,
    //     propertyLocation: necessaryPropertyInfo.propertyLocation,
    //     propertyType: necessaryPropertyInfo.propertyType,
    //     propertyImage: necessaryPropertyInfo.propertyImage,
    //     checkinDate: checkinDate,
    //     checkoutDate: checkoutDate
    //   },
    //   promotions: {
    //     couponCode: promotions.couponCode || null,
    //     discount: promotions.discount || null
    //   },
    //   pricing: {
    //     ...pricing
    //   }
    // })

    console.log(newOrder);
    return res.status(201).json({ order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



// Placeholder function for updating booking status in the database
const updateBookingStatus = async (orderId, newStatus) => {
  try {
    const orderDetails = await getOrderById(orderId);
    if (!orderDetails) {
      return;
      // return res.status(500).json({ message: "Not found" });
    }
    const propertyId = orderDetails.propertyId;
    const property = await getPropertyById(propertyId);
    if (newStatus === "end") {
      console.log("expired", newStatus);
      
    }
    
console.log(newStatus)
    const order = {
      orderId: orderDetails._id,
      propertyName: orderDetails.propertyInformation.propertyName,
      propertyAddress: `${orderDetails.propertyInformation.propertyLocation.country}, ${orderDetails.propertyInformation.propertyLocation.state}, ${orderDetails.propertyInformation.propertyLocation.city}`,
      expenses: orderDetails.pricing.expenses,
      usedDiscount: {
        couponId: orderDetails.promotions.couponCode || null,
        couponDiscount: orderDetails.promotions.discount || null,
      },
      totalPrice: orderDetails.pricing.totalPrice,
      checkinDate: orderDetails.checkinDate,
      checkoutDate: orderDetails.checkoutDate,
      status: orderDetails.bookingStatus,
      reason: orderDetails.reason,
    };

    if (property) {
      if (newStatus === "start") {
        console.log("activated order");
        sendOrderConfirmation("abayomitobiloba410@gmail.com", order);
        orderDetails.bookingStatus = "ongoing";
      } else if (newStatus === "end") {
        console.log("ended order");
        sendOrderEnd("abayomitobiloba410@gmail.com", order);
        orderDetails.bookingStatus = "expired";
      }

      await orderDetails.save();
      // property.property_information.booking_status = newStatus;
      // await property.save();
      console.log(
        `Booking status updated to '${newStatus}' for property with ID: ${propertyId}`
      );
    } else {
      console.log(`Property with ID ${propertyId} not found.`);
    }
  } catch (error) {
    console.error(
      `Error updating booking status for order with ID ${orderId}:`,
      error
    );
  }
};

import cron from "node-cron";
// Function to schedule a job to update booking status on check-in and check-out dates
const scheduleBookingStatusUpdate = (checkinDate, checkoutDate, orderId) => {
  console.log(`22 16 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]}`);


  // updateBookingStatus(orderId, 'end')
  const checkinJob = cron.schedule(
    `10 21 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]} *`,
    () => updateBookingStatus(propertyId, "start")
  );
  // const checkoutJob = cron.schedule(
  //   `48 15 ${checkoutDate.split("/")[0]} ${checkoutDate.split("/")[1]} *`,
  //   () => updateBookingStatus(propertyId, "expired")
  // );

  // const checkinJob = cron.schedule(
  //   `41 16 28 01 *`,
  //   () => updateBookingStatus(propertyId, "start")
  // );



  // const checkinJob = cron.schedule(
  //   `0 21 28 01 *`,
  //   () => console.log(propertyId, "start")
  // );

  // const checkoutJob = cron.schedule(
  //   `1 21 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]} *`,
  //   () => console.log(propertyId, "end")
  // );

  // const checkinJob = cron.schedule(
  //   `22 20 28 01 *`,
  //   () => updateBookingStatus(propertyId, "start")
  // );

  // const checkoutJob = cron.schedule(
  //   `23 20 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]} *`,
  //   () => updateBookingStatus(propertyId, "end")
  // );
};








const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { companyId, status, reason } = req.body;

  try {
    const company = await getCompanyByIdSchema(companyId);

    if (!company) {
      return res.status(403).json({ message: "Not authorized as an admin" });
    }

    const order = await getOrderById(id);
    const checkoutDate = "28/01/2024";
    const checkinDate = "28/01/2024";
    const property = await getPropertyById(order.propertyId);

    // console.log(order.userInformation.email)

    if (!checkinDate || !checkoutDate) {
      return res.status(400).json({ message: "Date is undefined" });
    }

    if (order) {
      if (status === "active" || status === "declined") {
        if (status === "declined" && !reason) {
          return res.status(500).json({ message: "Pass in your reason" });
        }

        const [day, month, year] = checkinDate.split("/");
        const parsedCheckinDate = moment(
          `${year}-${month}-${day}`,
          "YYYY-MM-DD"
        );

        if (!parsedCheckinDate.isValid()) {
          console.log("not passed");
          return res
            .status(500)
            .json({ message: "Invalid checkin date format" });
        }

        // // Check if checkinDate is after or the same as the current moment, and not before the current moment

        const diffInDays =
          (new Date(checkoutDate) - new Date(checkinDate)) /
          (1000 * 60 * 60 * 24);

        if (diffInDays < 1) {
          return res.status(400).json({
            message:
              "Invalid checkin and checkout dates. Must be at least one day apart.",
          });
        }

        if (checkinDate && parsedCheckinDate.isBefore(moment())) {
          console.log("Valid checkin date");

          // Your logic to send mail to the user and call cron job function here
        } else {
          console.log("Invalid checkin date");
          return;
        }
        const orderDetails = {
          orderId: order._id,
          propertyName: order.propertyInformation.propertyName,
          propertyAddress: `${order.propertyInformation.propertyLocation.country}, ${order.propertyInformation.propertyLocation.state}, ${order.propertyInformation.propertyLocation.city}`,
          expenses: order.pricing.expenses,
          usedDiscount: {
            couponId: order.promotions.couponCode || null,
            couponDiscount: order.promotions.discount || null,
          },
          totalPrice: order.pricing.totalPrice,
          checkinDate: order.checkinDate,
          checkoutDate: order.checkoutDate,
          status: status,
          reason: reason,
        };

        order.bookingStatus = "active"
          scheduleBookingStatusUpdate(checkinDate, checkoutDate, order._id);

          
        await order.save();
        return res
          .status(200)
          .json({ message: `Order ${status} successfully` });
      } else {
        return res.status(400).json({ message: `Invalid status: ${status}` });
      }
    } else {
      return res.status(404).json({ message: `Order with ID ${id} not found` });
    }
  } catch (error) {
    console.error(`Error ${status}ing order:`, error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  createUserOrder,
  getOrdersByAdmin,
  getUserOrder,
  getAllOrders,
  updateOrderStatus,
};
