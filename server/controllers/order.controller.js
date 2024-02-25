import {
  getOrderByUserId,
  getOrders,
  getOrderByProperty,
  createOrder,
  updateOrderById,
  getOrdersByPropertyIds,
  getOrderById,
  // getOrderByCompany,
  getOrderByAdminId,
  getActiveOrderByUserId,
  getUserIsOrderExist,
} from "../mongodb/models/order.js";
import PropertyModel, { getPropertyByAdminId } from "../mongodb/models/property.js";
import moment from "moment";
import {
  random,
  sendOrderConfirmation,
  sendOrderEnd,
  sendOrderVerificationAdmin,
  sendOrderVerificationUser,
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
    const admin = await getAdminUserById(id)
    if(!admin) {
      return res.status(500).json({message: "Admin doesn't exist"})
    }

    console.log(admin)

    const orders = await getOrderByAdminId(id);

    console.log(orders)
    // const user = await getAdminUserById(id);
    // // console.log(user)

    // if (user) {
    //   const propertyIds = user.allProperties.map((property) =>
    //     property._id.toString()
    //   );
    //   // const propertyIds = user.allProperties.map(property => new ObjectId(property._id));
    //   // console.log(propertyIds)
    //   const orders = await getOrdersByPropertyIds(propertyIds);
    //   // console.log(orders)
    //   return res.status(200).json({ orders });
    // } else {
    //   return res.status(404).json({ message: "Admin not found" });
    // }

    return res.status(200).json(orders)
  } catch (error) {
    console.error("Error fetching orders for admin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUserOrder = async (req, res) => {
  const { id } = req.params;
  const { expense, user_id, checkinDate, checkoutDate, couponCode, totalPrice } = req.body;

  const extractNecessaryPropertyInfo = (property) => {
    // console.log(property);
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
    // console.log(expense, user_id, checkinDate, checkoutDate, couponCode, totalPrice, id)
    if (!id || !expense || !user_id || !checkinDate || !checkoutDate || !totalPrice) {
      // console.log('error')
      return res.status(500).json({ message: "Pass all necessary parameters" });
    }
    // console.log('working')
    const user = await getUserById(user_id);
    const property = await getPropertyById(id);
    const coupon = await getCouponByCodeSchema(couponCode)
    const orderExist = await getUserIsOrderExist(id, user_id)
    const admin = await getAdminUserById(property.admin_id)

    if(orderExist) {
      return res.status(400).json({message: "You already have an order for this property"})
    } 



    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!user.firstname) {
      return res.status(404).json({ message: "Please update your profile" });
    }
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
// console.log(property)
    const necessaryPropertyInfo = extractNecessaryPropertyInfo(property);
    // console.log(necessaryPropertyInfo);
    if (
      property &&
      property.property_information.booking_status !== "available"
    ) {
      // console.log(property.status);
      return res.status(400).json({
        message: "Property unavailable at the moment. Please check back later.",
      });
    }
// console.log(expense)
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
// console.log(checkinDate.toLocaleString('en-US', options))

    const newOrder = await createOrder({
      propertyId: id,
      adminId: property.admin_id,
      userInformation: {
        userId: user._id,
        username: user.username,
        email: user.email,
        phoneNo: user.phoneNo,
      },
      // checkinDate: checkinDate.toLocaleDateString(),
      // checkoutDate: checkoutDate.toLocaleDateString(),
      checkinDate: checkinDate.toLocaleString('en-US', options),
checkoutDate: checkoutDate.toLocaleString('en-US', options),
      propertyInformation: {
        propertyName: necessaryPropertyInfo.propertyName,
        propertyLocation: necessaryPropertyInfo.propertyLocation,
        propertyType: necessaryPropertyInfo.propertyType,
        propertyImage: necessaryPropertyInfo.propertyImage,
      },
      pricing: {
        expenses: expense,
        totalPrice,
        rentalPrice: property.property_information.pricing

      },
      promotions: {
        couponCode: couponCode || null,
        discount: (coupon && coupon.discount_price) ? coupon.discount_price : null
      }
    });

    // console.log(newOrder.pricing.expenses)

    const checkin = new Date(newOrder.checkinDate);
    const checkout = new Date(newOrder.checkoutDate);
    // console.log(check.toLocaleDateString())
// console.log(property.property_information.guest.)
    const order = {
      orderId: newOrder._id,
      propertyName: newOrder.propertyInformation.propertyName,
      propertyAddress: `${newOrder.propertyInformation.propertyLocation.country}, ${newOrder.propertyInformation.propertyLocation.state}, ${newOrder.propertyInformation.propertyLocation.city}`,
      expenses: newOrder.pricing.expenses,
      usedDiscount: {
        couponId: newOrder.promotions.couponCode || null,
        couponDiscount: newOrder.promotions.discount || null,
      },
      totalPrice: newOrder.pricing.totalPrice,
      checkinDate: checkin.toLocaleDateString(),
      checkoutDate: checkout.toLocaleDateString(),
      status: newOrder.bookingStatus,
      reason: newOrder.reason,
      customerName: `${user.firstname} ${user.lastname}`,
      customerEmail: user.email
    };

    sendOrderVerificationAdmin(admin.email, order, property.property_information.property_name);
    sendOrderVerificationUser(user.email, order);
    createNotificationModel({userId: property.admin_id, title: "Property Order Notification", title: "Property Order Notification", message: "Hello Admin, a new order has been placed for your property. Please review and take necessary actions."})
// console.log(order)
   
    
    return res.status(201).json({ order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserActiveOrderById = async (req, res) => {
  try{
    const {id} = req.params;
    const {propertyId} = req.body;

    // console.log(id)


    const orders = await getActiveOrderByUserId(id, propertyId);
    console.log(orders)

    return res.status(200).json(orders)

  } catch(error) {
    console.log(error.message)
    return res.status(500).json(error.message)
  }
}












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

const scheduleJobHandler = (minute, hour, dayOfMonth, month, propertyId, status) => {
  const cronSchedule = `${minute} ${hour} ${dayOfMonth} ${month} *`;
  
  const job = cron.schedule(
    cronSchedule,
    () => updateBookingStatus(propertyId, status)
  );

  return job;
};


import cron from "node-cron";
import { getCouponByCodeSchema } from "../mongodb/models/coupon.js";
import { createNotificationModel } from "./notification.controller.js";
// Function to schedule a job to update booking status on check-in and check-out dates
const scheduleBookingStatusUpdate = (checkinDate, checkoutDate, propertyId) => {
  console.log(`57 18 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]} *`, propertyId, 'start')
  // console.log(`22 16 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]}`);


  // updateBookingStatus(orderId, 'end')
  // const checkinJob = cron.schedule(
  //   `10 21 ${checkinDate.split("/")[0]} ${checkinDate.split("/")[1]} *`,
  //   () => updateBookingStatus(propertyId, "start")
  // );
  // const checkoutJob = cron.schedule(
  //   `48 15 ${checkoutDate.split("/")[0]} ${checkoutDate.split("/")[1]} *`,
  //   () => updateBookingStatus(propertyId, "expired")
  // );

  // const checkinJob = cron.schedule(
  //   `41 16 28 01 *`,
  //   () => updateBookingStatus(propertyId, "start")
  // );

  // scheduleJobHandler(57, 22, 12, 2, propertyId, 'start');
  scheduleJobHandler(57, 18, `${checkinDate.split("/")[0]}`, `${checkinDate.split("/")[1]}` , propertyId, 'start');
  scheduleJobHandler(57, 18, `${checkoutDate.split("/")[0]}`, `${checkoutDate.split("/")[1]}` , propertyId, 'end');
  // scheduleJobHandler(`48 18 ${checkoutDate.split("/")[0]} ${checkinDate.split("/")[1]} *`, propertyId, 'start');
  // scheduleJobHandler(56, 18, 12, 2, propertyId, 'start');
  // scheduleJobHandler(57, 18, 12, 2, propertyId, 'start');
  // scheduleJobHandler(58, 18, 12, 2, propertyId, 'start');

  // const checkinJob = cron.schedule(
  //   '49 18 12 2 *', // Minute: 47, Hour: 18 (6 PM), Day of the Month: 12, Month: 2 (February), Any Day of the Week
  //   () => console.log(propertyId, 'start')
  // );
  
  // const checkoutJob = cron.schedule(
  //   '50 18 12 2 *', // Minute: 48, Hour: 18 (6 PM), Day of the Month: 12, Month: 2 (February), Any Day of the Week
  //   () => console.log(propertyId, 'end')
  // );

};


const convertDate = dateString => {
  if (dateString) {
    const dateObject = new Date(dateString)

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    const formattedDate = dateObject.toLocaleDateString('en-GB', options)
    return formattedDate
  }
  return
}





const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { orderId, status, reason } = req.body;

  try {
    const admin = await getAdminUserById(id);

    if (!admin) {
      return res.status(403).json({ message: "Not authorized as an admin" });
    }

    const order = await getOrderById(orderId);
    const checkoutDate = convertDate(order.checkoutDate);
    const checkinDate = convertDate(order.checkinDate);
    // console.log(checkinDate, checkoutDate)
    const property = await getPropertyById(order.propertyId);

    // console.log(order.userInformation.email)

    if (!checkinDate || !checkoutDate) {
      return res.status(400).json({ message: "Date is undefined" });
    }
console.log(status)
    if (order) {
      if (status === "active" || status === "declined") {
        if (status === "declined" && !reason) {
          return res.status(500).json({ message: "Pass in your reason" });
        } 
        if(status == "declined") {
          order.bookingStatus = "declined"
          order.reason = reason
          await order.save()
          return res.status(200).json({message: "Successfully declined order."})
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
  getUserActiveOrderById
};
