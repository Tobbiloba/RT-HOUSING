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

import { random } from "../helpers/index.js";
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

  try {
    const orders = await getOrderByUserId(id);

    return res.status(200).json(orders);
  } catch (error) {
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
    const { property_name, property_type, property_location, property_images } =
      property[0].property_information;
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

    const necessaryPropertyInfo = extractNecessaryPropertyInfo(property);

    if (
      property &&
      property[0].property_information.booking_status !== "available"
    ) {
      console.log(property[0].status);
      return res
        .status(500)
        .json({
          message:
            "Property unavailable at the moment. Please check back later.",
        });
    }

    const newOrder = await createOrder({
      orderId: random(),
      propertyId: id,
      companyId: property[0].company_id,
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
    //   companyId: property[0].company_id,
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
const updateBookingStatus = async (propertyId, newStatus) => {
  try {
    const property = await PropertyModel.findById(propertyId);
    // console.log(property);
    if (property) {
      property.property_information.booking_status = newStatus;
      await property.save();
      console.log(`Booking status updated to '${newStatus}' for property with ID: ${propertyId}`);
    } else {
      console.log(`Property with ID ${propertyId} not found.`);
    }
  } catch (error) {
    console.error(
      `Error updating booking status for property with ID ${propertyId}:`,
      error
    );
  }
};

import cron from 'node-cron'
// Function to schedule a job to update booking status on check-in and check-out dates
const scheduleBookingStatusUpdate = (propertyId, checkinDate, checkoutDate) => {
  // Logic to schedule a job (e.g., using a scheduler library like cron)
  // Set up a job to run on check-in date to update status to 'booked'
  // Set up another job to run on check-out date to update status to 'available'
  // You can use libraries like node-schedule, cron, or others for scheduling jobs
  // Example using node-schedule:
  // console.log(propertyId, checkinDate, checkoutDate)

  // const checkinJob = cron.schedule(`03 15 ${checkinDate.split('/')[0]} ${checkinDate.split('/')[1]} *`, () =>
  //   updateBookingStatus(propertyId, "booked")
  // );
  // const checkoutJob = updateBookingStatus(propertyId, "available");

  // console.log(checkinDate.split('/'))

  const checkinJob = cron.schedule(`08 15 ${checkinDate.split('/')[0]} ${checkinDate.split('/')[1]} *`, () => updateBookingStatus(propertyId, 'booked'));
  const checkoutJob = cron.schedule(`10 15 ${checkinDate.split('/')[0]} ${checkinDate.split('/')[1]} *`, () => updateBookingStatus(propertyId, 'available'));
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { companyId, status, reason } = req.body;

  try {
    // Check if the user is an admin
    const company = await getCompanyByIdSchema(companyId);

    if (!company) {
      return res.status(403).json({ message: "Not authorized as an admin" });
    }

    const order = await getOrderById(id);
    const checkinDate = order.checkinDate;
    const checkoutDate = order.checkoutDate;
    const property = await getPropertyById(order.propertyId);

    if (!checkinDate || !checkoutDate) {
      return res.status(400).json({ message: "Date is undefined" });
    }

    // console.log(checkinDate, checkoutDate)

    if (order) {
      // Assuming the admin checks if they are the owner before updating the order
      // ... your logic to check if admin is the owner of the property
      if (status === "active" && status !== "declined") {
        // Update the order status
        order.bookingStatus = status;

        // Check if the difference between checkinDate and checkoutDate is at least one day
        const diffInDays =
          (new Date(checkoutDate) - new Date(checkinDate)) /
          (1000 * 60 * 60 * 24);
        if (diffInDays < 1) {
          console.log(
            "Invalid checkin and checkout dates. Must be at least one day apart."
          );
          return res
            .status(400)
            .json({
              message:
                "Invalid checkin and checkout dates. Must be at least one day apart.",
            });
        }

        // Assuming checkoutDate is in "DD/MM/YYYY" format
        const [day, month, year] = checkoutDate.split("/");
        const parsedCheckoutDate = new Date(`${month}/${day}/${year}`);

        if (!isNaN(parsedCheckoutDate)) {
          // The parsedCheckoutDate is a valid date object
          // console.log(parsedCheckoutDate);
        } else {
          // Invalid date string
          console.log("Invalid date format");
        }

        // console.log(new Date(checkoutDate))
        // console.log(new Date())
        // Schedule a job to set booking status to "booked" on the checkoutDate
        if (checkoutDate && new Date(parsedCheckoutDate) > new Date()) {
          scheduleBookingStatusUpdate(
            property[0]._id,
            checkinDate,
            checkoutDate
          );
          // console.log('called')

          // Add code here to send an email or perform any other actions after scheduling
          // e.g., sendEmail(order.userEmail, 'Booking Confirmed', 'Your booking has been confirmed.');
        } else {
          console.log("Invalid checkout date");
        }

        // Update the reason only if status is "declined"
        if (status === "declined") {
          order.bookingStatus = status;
          order.reason = reason;
        }

        // Save the order after all updates
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
