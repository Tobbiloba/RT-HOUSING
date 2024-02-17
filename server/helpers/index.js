import crypto from "crypto";
import nodemailer from "nodemailer";
import { createNotificationModel } from "../controllers/notification.controller.js";

const SECRET = "TOBILOBA-REST-API";
export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt, password) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
export const generateRandomToken = () => {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const sendLoginNotification = ({ id }) => {
  // Assuming 'id' is provided, you can customize this part accordingly
  if (!id) {
    throw new Error("Notification ID is required.");
  }

  // Get the current date and time
  const currentDate = new Date();

  // Format the date and time
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Create the notification model with the formatted date and time
  const notificationModel = {
    id,
    title: "Login activity",
    message: `You have logged into your account on ${formattedDate} at ${formattedTime}.`,
  };

  createNotificationModel({ notificationModel });
  // You can return or use the notificationModel as needed
  // return notificationModel;
};

export const sendVerificationToken = async (email, url) => {
  console.log(email, url);
  const transporter = nodemailer.createTransport({
    // Configure your email service
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });
  console.log("called");

  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Account Activation",
    html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">

      </head>
      
     <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; flex-direction: column;">
  <div class="" style="background-color: #1e293b; padding: 0rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 25rem; width: 100%; margin: 0rem auto; height: fit; ">

      <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: 1rem 0;">
          Fe
          <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
              <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
          </div>
          oS
      </h1>

      <div class="">
          <h1 style="color: #f1f5f9; font-family: 'Mono', monospace; text-align: center; font-size: 17px;">Thank you for choosing Febtos</h1>

          <p class="thank-you" style="color: #cbd5e1; font-size: 14px; margin-top: 30px;">
              Howdy! We appreciate your trust in Febtos. To activate your account, click the button below:
          </p>
          <p class="description" style="color: #cbd5e1; font-size: 14px; margin-top: 30px;">
              Thank you for choosing Febtos, your go-to rental company. We appreciate your business and welcome you to our community!
          </p>

          <a href=${url} class="activation-button" style="color: #758192; font-size: 15px;">Activate Account</a>

          <div class="additional-texts" style="color: #cbd5e1; font-size: 14px; margin-top: 30px;">
              <p class="terms-and-conditions">
                  By clicking the "Activate Account" button, you agree to our
                  <a href="/terms" style="color: #475569; text-decoration: none;">Terms and Conditions</a>.
              </p>
              <p class="privacy-policy">
                  Our <a href="/privacy" style="color: #475569; text-decoration: none;">Privacy Policy</a> explains how we protect
                  your privacy.
              </p>
              <p class="contact-us">
                  Need assistance? Contact us at <a href="mailto:support@febtos.com" style="color: #475569; text-decoration: none;">support@febtos.com</a>.
              </p>
          </div>
          <div style="background: linear-gradient(to right, #919292, #5c8884); padding: .1rem .5rem; font-family: 'Open Sans', sans-serif;  width: 95%; margin: 2rem auto; height: .2rem;">

          
          </div>
         
      </div>

       <div class="foote" style="margin-top: 3rem; color: white; font-size: 14px; text-align: center;">
          <p class="copyright">
              &copy; 2024 Febtos. All rights reserved.
          </p>
          <p class="footer-info">
              Febtos Inc. | 123 Main Street, Cityville, Country
          </p>
      </div>
  </div>
</body>
      
      </html>`,
  };

  await transporter.sendMail(mailOptions);
};






























export const sendOrderVerificationUser = async (email, orderDetails) => {
  // console.log(email)
  // console.log(orderDetails)
  const transporter = nodemailer.createTransport({
    // Configure your email service
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });

  const {
    orderId,
    propertyName,
    propertyAddress,
    totalPrice,
    expenses,
    usedDiscount,
    checkinDate,
    checkoutDate,
    status
  } = orderDetails;

  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
        </head>
        
        <body
        style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; ">
        <div class=""
          style="background-color: #1e293b; color: white; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 25rem; width: 100%; margin: 0rem auto;">
      
          <h1
            style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
            Fe
            <div
              style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
              <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
            </div>
            oS
          </h1>
          <div style="height: 150px; overflow: hidden; position: relative;">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
              style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image" />
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>
          </div>
          <p style="font-size: 14px; color: #fff; margin-top: 2rem;">Hello there! 👋</p>
      
          <p>
    Dear [Customer Name],

    Thank you for choosing [Your Company]! 🌟✨ We acknowledge the receipt of your order request, and we appreciate
    your trust in our services.

    Our dedicated team is diligently processing your request. Please be assured that we strive to provide you with the
    best possible experience. Kindly allow us a brief period to review and respond to your inquiry.

    Our administration team will get back to you within the next 48 hours. In the meantime, if you have any urgent
    concerns, feel free to contact our customer support.

    We look forward to the opportunity to serve you and create a memorable experience.

    Best Regards,
    [Your Company Name]
</p>

          <p style="color: #ffffff; font-size: 13px;  margin-top: 20px;">
            What we offer:
          </p>
          <ul style="color: #ffffff; font-size: 13px; margin-left: 0px;">
            <li>🛏️ Cozy accommodation that felt just like home</li>
            <li>🍽️ Delicious meals that satisfied your taste buds</li>
            <li>🎉 Memorable experiences and adventures</li>
            <li>💤 Restful nights and rejuvenating sleep</li>
          </ul>
      
      
          <table
            style="width: 100%; color: white; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px; margin-top: 2rem; padding-left: 1rem;">
            <tr style="margin-top: 4px; padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Order ID:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${orderId}</td>
            </tr>
            <tr style="margin-top: 6px; padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Property
                Title:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${propertyName}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Address:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${propertyAddress}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Total
                Price:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${totalPrice}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Expenses:
              </td>
              <td style="width: 70%; text-align: left;">
                <ul style="list-style: none; padding: 0;">
                  ${
                    expenses
                      .map(
                        ({ name, price }) =>
                          `<li style="padding-top: 2rem;">${name}: $${price}</li>`
                      )
                      .join("") || "<li>No expenses</li>"
                  }
                </ul>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; ">Used
                Discount:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">
                <p>Coupon ID: 43564564</p>
                <p>Coupon Discount: ${usedDiscount.couponDiscount}</p>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Check-in
                Date:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${checkinDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Checkout
                Date:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${checkoutDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Status:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${status}</td>
            </tr>
            ${
              status === "declined"
                ? `<tr style="padding: 2rem 0; padding-top: 2rem;">
              <td
                style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; padding-bottom: 10px;">
                Reason:</td>
              <td style="width: 70%; padding-top: 2rem; text-align: left; padding-left: 4px;">${reason}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="display: flex; justify-content: end; margin-top: 20px;">
            <img src="https://cdn-icons-png.flaticon.com/128/3714/3714884.png" style="width: 60px;" />
          </div>
          <div>
            <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
            <ul className="help-links">
              <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
            </ul>
          </div>
      
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
          </div>
          <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
            <p class="copyright">
                &copy; 2024 Febtos. All rights reserved.
            </p>
            <p class="footer-info">
                Febtos Inc. | 123 Main Street, Cityville, Country
            </p>
        </div>
        </div>
        
        </div>
      </body>
        
        </html>`,
  };

  await transporter.sendMail(mailOptions);
};


















export const sendOrderVerificationAdmin = async (email, orderDetails, adminName) => {
  // console.log(email)
  // console.log(orderDetails)
  const transporter = nodemailer.createTransport({
    // Configure your email service
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });

  const {
    orderId,
    propertyName,
    propertyAddress,
    totalPrice,
    expenses,
    usedDiscount,
    checkinDate,
    checkoutDate,
    status
  } = orderDetails;

  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
        </head>
        
        <body
        style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #0c1622; padding: .5rem 0;">
        <div class=""
          style="background-color: #1e293b; color: white; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 25rem; width: 100%; margin: 0rem auto;">
      
          <h1
            style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
            Fe
            <div
              style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
              <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
            </div>
            oS
          </h1>
          <div style="height: 150px; overflow: hidden; position: relative;">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
              style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image" />
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>
          </div>
          <p style="font-size: 14px; color: #fff; margin-top: 2rem;">Hello ${adminName}  👋</p>
      
          <p style="color: white; font-size: 13px;">
            A new booking request has been received for the property. Please review the details below and take action.
        </p>
        
      
      
          <table
            style="width: 100%; color: white; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px; margin-top: 2rem; padding-left: 1rem;">
            <tr style="margin-top: 4px; padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; padding-top: 2rem; justify-content: start; align-items: start;">Order ID:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${orderId}</td>
            </tr>
            <tr style="margin-top: 6px; padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Property
                Title:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${propertyName}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Address:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${propertyAddress}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Total
                Price:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${totalPrice}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Expenses:
              </td>
              <td style="width: 70%; text-align: left;">
                <ul style="list-style: none; padding: 0;">
                  ${
                    expenses
                      .map(
                        ({ name, price }) =>
                          `<li style="padding-top: 1rem;">${name}: $${price}</li>`
                      )
                      .join("") || "<li>No expenses</li>"
                  }
                </ul>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start; ">Used
                Discount:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">
                <p>Coupon ID: 43564564</p>
                <p>Coupon Discount: ${usedDiscount.couponDiscount}</p>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Check-in
                Date:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${checkinDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem;  display: flex; justify-content: start; align-items: start;">Checkout
                Date:</td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${checkoutDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left; padding-top: 2rem; display: flex; justify-content: start; align-items: start;">Status:
              </td>
              <td style="width: 70%; text-align: left; padding-top: 2rem; padding-left: 4px;">${status}</td>
            </tr>
            ${
              status === "declined"
                ? `<tr style="padding: 2rem 0">
              <td
                style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; padding-bottom: 10px;">
                Reason:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${reason}</td>
            </tr>`
                : ""
            }

            <td style="width: 100%; text-align: left; display: flex; justify-content: start; align-items: start; margin-top: 3rem;">
              Action:
          </td>
          <td style="width: 70%; text-align: left; padding-left: 4px; padding-top: 3rem; ">
              <a href="[INSERT_LINK_TO_ACCEPT_BOOKING]" style="background-color: #3498db; color: white; text-decoration: none;  padding: .5rem; font-weight: bold;">
                  Accept Booking
              </a>
              <a href="[INSERT_LINK_TO_ACCEPT_BOOKING]" style="background-color: #db3f34; color: white; padding: .5rem; margin-left: 1rem; text-decoration: none; font-weight: bold;">
                Decline Booking
            </a>
          </td>

          </table>
          <div>
            <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
            <ul className="help-links">
              <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
            </ul>
          </div>
      
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
          </div>
          <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
            <p class="copyright">
                &copy; 2024 Febtos. All rights reserved.
            </p>
            <p class="footer-info">
                Febtos Inc. | 123 Main Street, Cityville, Country
            </p>
        </div>
        </div>
        
        </div>
      </body>
        
        </html>`,
  };

  await transporter.sendMail(mailOptions);
};



















export const sendOrderConfirmation = async (email, orderDetails) => {
  // console.log(email)
  // console.log(orderDetails)
  const transporter = nodemailer.createTransport({
    // Configure your email service
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });

  const {
    orderId,
    propertyName,
    propertyAddress,
    totalPrice,
    expenses,
    usedDiscount,
    checkinDate,
    checkoutDate,
    status,
    reason,
  } = orderDetails;

  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
        </head>
        
        <body
        style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; ">
        <div class=""
          style="background-color: #1e293b; color: white; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 25rem; width: 100%; margin: 0rem auto;">
      
          <h1
            style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
            Fe
            <div
              style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
              <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
            </div>
            oS
          </h1>
          <div style="height: 150px; overflow: hidden; position: relative;">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
              style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image" />
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);">
            </div>
          </div>
          <p style="font-size: 14px; color: #fff; margin-top: 2rem;">Hello there! 👋</p>
      
          <p style="color: white; font-size: 13px;">
            Get ready for an unforgettable stay filled with joy and excitement! 🌟✨ Your upcoming adventure is just around the
            corner, and we've got some delightful details to make your experience even more special! 😊
          </p>
          <p style="color: #ffffff; font-size: 13px;  margin-top: 20px;">
            What we offer:
          </p>
          <ul style="color: #ffffff; font-size: 13px; margin-left: 0px;">
            <li>🛏️ Cozy accommodation that felt just like home</li>
            <li>🍽️ Delicious meals that satisfied your taste buds</li>
            <li>🎉 Memorable experiences and adventures</li>
            <li>💤 Restful nights and rejuvenating sleep</li>
          </ul>
      
      
          <table
            style="width: 100%; color: white; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px; margin-top: 2rem;">
            <tr style="margin-top: 4px; padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Order ID:
              </td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${orderId}</td>
            </tr>
            <tr style="margin-top: 6px; padding: 2rem 0">
              <td style="width: 100%; text-align: left; display: flex; justify-content: start; align-items: start;">Property
                Title:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyName}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Address:
              </td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyAddress}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Total
                Price:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${totalPrice}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Expenses:
              </td>
              <td style="width: 70%; text-align: left;">
                <ul style="list-style: none; padding: 0;">
                  ${
                    expenses
                      .map(
                        ({ name, price }) =>
                          `<li>${name}: $${price}</li>`
                      )
                      .join("") || "<li>No expenses</li>"
                  }
                </ul>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; ">Used
                Discount:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">
                <p>Coupon ID: 43564564</p>
                <p>Coupon Discount: ${usedDiscount.couponDiscount}</p>
              </td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Check-in
                Date:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${checkinDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Checkout
                Date:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${checkoutDate}</td>
            </tr>
            <tr style="padding: 2rem 0">
              <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Status:
              </td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${status}</td>
            </tr>
            ${
              status === "declined"
                ? `<tr style="padding: 2rem 0">
              <td
                style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; padding-bottom: 10px;">
                Reason:</td>
              <td style="width: 70%; text-align: left; padding-left: 4px;">${reason}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="display: flex; justify-content: end; margin-top: 20px;">
            <img src="https://cdn-icons-png.flaticon.com/128/3714/3714884.png" style="width: 60px;" />
          </div>
          <div>
            <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
            <ul className="help-links">
              <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
              <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
            </ul>
          </div>
      
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
          </div>
          <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
            <p class="copyright">
                &copy; 2024 Febtos. All rights reserved.
            </p>
            <p class="footer-info">
                Febtos Inc. | 123 Main Street, Cityville, Country
            </p>
        </div>
        </div>
        
        </div>
      </body>
        
        </html>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendOrderEnd = async (email, orderDetails) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });

  const {
    orderId,
    propertyName,
    propertyAddress,
    totalPrice,
    expenses,
    usedDiscount,
    checkinDate,
    checkoutDate,
  } = orderDetails;
  console.log(orderDetails);

  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Rent Duration Ended",
    html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
        </head>
        
    
        <body style="width: 100vw; margin: 0 0; background-color: #e2e8f0; ">
        <div class="" style="background-color: #1e293b; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 20rem; width: 100vw; ">
      
            <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
                Fe
                <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
                    <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
                </div>
                oS
            </h1>
            <div style="height: 150px; overflow: hidden; position: relative;">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww" style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image"/>
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);"></div>
            </div>
          
            <div style=" color: white; padding: .25rem .5rem; font-size: 13px; border-radius: 5px;">
              <p style="font-size: 14px; color: #5c5c5c; ">Greetings, Traveler! 👋</p>
      
      <p style="color: #d3d0d0; font-size: 13px; ">
        We hope you had an amazing time at FeBToS during your recent stay! 🌟 Thank you for choosing us as your home away from home. Your comfort is our top priority, and we're thrilled to have been a part of your journey. 😊
      </p>
      
      <p style="color: #d3d0d0; font-size: 13px;  margin-top: 20px;">
        Here's a quick recap of your delightful stay with us:
      </p>
      
      <ul style="color: #d3d0d0; font-size: 13px; margin-left: 20px;">
        <li>🛏️ Cozy accommodation that felt just like home</li>
        <li>🍽️ Delicious meals that satisfied your taste buds</li>
        <li>🎉 Memorable experiences and adventures</li>
        <li>💤 Restful nights and rejuvenating sleep</li>
      </ul>
      
      <p style="color: #d3d0d0; font-size: 13px;  margin-top: 20px;">
        We can't wait to welcome you back for another fantastic stay! 🌈 If there's anything we can do to enhance your future experiences with us, feel free to let us know. Safe travels until we meet again! 🌍✈️
      </p>
      
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;  font-size: 13px; display: flex; flex-direction: column; gap: 4;>
                    <tr style="margin-top: 4px; padding: 2rem 0;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">ORDER ID:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${orderId}</td>
                    </tr>
                    <tr style="margin-top: 8px; padding: 2rem 0">
                        <td style="width: 100%; text-align: left; display: flex; justify-content: start; align-items: start;">PROPERTY TITLE:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyName}</td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">ADDRESS:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyAddress}</td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">TOTAL PRICE:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${totalPrice}</td>
                    </tr>
                    <div style="height: 1rem;"></div>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">EXPENSES:</td>
                        <td style="width: 70%; text-align: left; ">
                            <ul style="list-style: none; padding: 0;">
                                ${
                                  expenses
                                    .map(
                                      ({ name, price }) =>
                                        `<li>${name}: $${price}</li>`
                                    )
                                    .join("") || "<li>No expenses</li>"
                                }
                            </ul>
                        </td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; ">USED COUPON:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">
                            <p>Coupon ID: 43564564</p>
                            <p>Coupon Discount: ${
                              usedDiscount.couponDiscount
                            }</p>
                        </td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">CHECK-IN DATE:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${checkinDate}</td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">CHECKOUT DATE:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">${checkoutDate}</td>
                    </tr>
                    <tr style="padding: 2rem 0; margin-top: 8px;">
                        <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">STATUS:</td>
                        <td style="width: 70%; text-align: left; padding-left: 4px;">expired</td>
                    </tr>
                    
                </table>
            </div>
            <div style="display: flex; justify-content: end; margin-top: 20px;">
              <img src="https://cdn-icons-png.flaticon.com/128/3714/3714884.png" style="width: 60px;" />
            </div>
            <div style="color: white;">
              <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
              <ul className="help-links">
                <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
                <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
                <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
              </ul>
            </div>
            
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
              <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
            </div>
            <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
              <p class="copyright">
                  &copy; 2024 Febtos. All rights reserved.
              </p>
              <p class="footer-info">
                  Febtos Inc. | 123 Main Street, Cityville, Country
              </p>
              </div>
              </div>
              
              </div> 
        </body>
          
          </html>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendTourRequestVerification = async (email, name, tourId, propertyName, requestDate, additionalNote) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });



  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Confirmation of Tour Request Submission",
    html: `<!DOCTYPE html>
          <html lang="en">
          
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
          </head>
          
          <body style="width: 100vw; margin: 0 0; background-color: #e2e8f0; ">
          <div class="" style="background-color: #1e293b; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 100vw; width: 100vw; ">
        
              <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
                  Fe
                  <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                      <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
                      <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
                  </div>
                  oS
              </h1>
              <div style="height: 150px; overflow: hidden; position: relative;">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww" style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image"/>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);"></div>
              </div>
            
              <div style=" color: white; padding: .25rem .5rem; font-size: 13px; border-radius: 5px;">
      
              <p style="font-size: 14px; color: #d1d1d1; ">Greetings 👋</p>

              <div>
                <h1 style="font-size: 24px; margin-bottom: 16px; color: #bbbbbb;">Confirmation of Tour Request Submission</h1>
                <p style="font-size: 15px; ">Dear ${name},</p>
              
                <p style="font-size: 13px;">We hope this message finds you well. We would like to inform you that your recent tour request for the property has been successfully submitted. Our team is diligently reviewing your request, and we want to express our gratitude for considering our property.</p>
              
                <p style="font-size: 13px;">Your interest in our property is important to us, and we want to assure you that our team is working diligently to ensure a prompt and thorough review of your tour request. The property owner will be personally reviewing your request and considering the details provided.</p>
              
                <p style="font-size: 13px;">Here are the details of your request:</p>
              
                <ul style="font-size: 13px; list-style-type: none; padding: 0;">
                  <li><strong>Tour Request ID:</strong> ${tourId}</li>
                  <li><strong>Property Name:</strong> ${propertyName}</li>
                  <li><strong>Requested Tour Date and Time:</strong> ${requestDate}</li>
                  ${additionalNote ? `<li><strong>Additional Notes or Preferences:</strong> ${additionalNote}</li>` : ''}
                </ul>
              
                <p style="font-size: 14px; ">Please be assured that we are committed to providing you with the best possible service and ensuring a seamless experience throughout the tour request process.</p>
              
                
                <p style="font-size: 13px;">Thank you once again for choosing our property, and we look forward to the opportunity to assist you further.</p>
              
                <p style="font-size: 13px; ">Best regards,<br>Febtos<br>febtos@febtos.com<br>febtos.com</p>
              </div>
                 
              </div>
              <div style="display: flex; justify-content: end; margin-top: 20px;">
                <img src="https://cdn-icons-png.flaticon.com/128/3714/3714884.png" style="width: 60px;" />
              </div>
              <div style="color: white;">
                <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
                <ul className="help-links">
                  <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
                  <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
                  <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
                </ul>
              </div>
              
              <div>
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
                <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
              </div>
              <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
                <p class="copyright">
                    &copy; 2024 Febtos. All rights reserved.
                </p>
                <p class="footer-info">
                    Febtos Inc. | 123 Main Street, Cityville, Country
                </p>
                </div>
                </div>
                
                </div> 
          </body>
            
            </html>`,
  };

  await transporter.sendMail(mailOptions);
};












export const agentMessageVerification = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tobiloba.a.salau@gmail.com",
      pass: "gdbu hltz lxbr ipyw",
    },
  });


  const mailOptions = {
    from: "tobiloba.a.salau@gmail.com",
    to: email,
    subject: "Rent Duration Ended",
    html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
            </head>
            
            <body style="width: 100vw; margin: 0 0; background-color: #e2e8f0; ">
            <div class="" style="background-color: #1e293b; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 100vw; width: 100vw; ">
          
                <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: .5rem 0;">
                    Fe
                    <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
                        <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
                    </div>
                    oS
                </h1>
                <div style="height: 150px; overflow: hidden; position: relative;">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww" style="width: 100%; height: 100%; object-fit: cover;" alt="Overlay Image"/>
                  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);"></div>
                </div>
              
                <div style=" color: white; padding: .25rem .5rem; font-size: 13px; border-radius: 5px;">
        
                <p style="font-size: 14px; color: #d1d1d1; ">Greetings 👋</p>

                <div style="color: white;">
                  <h1 style="font-size: 24px; margin-bottom: 16px;">Acknowledgment of Your Message</h1>
                  <p style="font-size: 14px;">Dear ${name},</p>
                
                  <p style="font-size: 13px;">We trust this message finds you well. We would like to extend our gratitude for reaching out to us. Your message has been successfully received, and we want to assure you that our team is dedicated to providing you with a prompt response.</p>
                
                  <p style="font-size: 13px;">Here at Febtos, we understand the importance of your inquiry, and we are committed to addressing your needs as swiftly as possible. Our team of professionals is reviewing the details you provided, and you can expect to receive a response within the next 48 hours.</p>
                
                  <p style="font-size: 13px;">Should there be any additional information required or if you have specific preferences, please do not hesitate to let us know. We value your interest in our services, and we look forward to the opportunity to assist you further.</p>
                
                  <p style="font-size: 13px;">Thank you for choosing Febtos. We appreciate your trust and confidence, and we are dedicated to ensuring your experience with us is exceptional.</p>
                
                  <p style="font-size: 13px;">If you have any urgent matters or if you require immediate assistance, please feel free to contact us directly at febtos@febtos.com.</p>
                
                  <p style="font-size: 13px;">Once again, thank you for considering Febtos. We look forward to serving you.</p>
                
                  <p style="font-size: 13px;">Best regards,<br>Febtos<br>febtos@febtos.com<br>febtos.com</p>
                </div>
                   
                </div>
                <div style="display: flex; justify-content: end; margin-top: 20px;">
                  <img src="https://cdn-icons-png.flaticon.com/128/3714/3714884.png" style="width: 60px;" />
                </div>
                <div style="color: white;">
                  <p className="help-info" style="font-size: 13px;">Questions? Visit the <a href="" style="color: white;">Help Centre</a></p>
                  <ul className="help-links">
                    <li style="padding: 4px  0;"><a style="color: white; font-size: 12px;" href="/faq">FAQs</a></li>
                    <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/contact">CONTACT US</a></li>
                    <li style="padding: 4px 0;"><a style="color: white; font-size: 12px;" href="/support">CUSTOMER SUPPORT</a></li>
                  </ul>
                </div>
                
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style="width: 30px; padding: 10px 10px;"/>
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" style="width: 30px; padding: 10px 10px;"/>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" style="width: 30px; padding: 10px 10px;"/>
                </div>
                <div class="foote" style="margin-top: 3rem; color: white; font-size: 13px; text-align: center;">
                  <p class="copyright">
                      &copy; 2024 Febtos. All rights reserved.
                  </p>
                  <p class="footer-info">
                      Febtos Inc. | 123 Main Street, Cityville, Country
                  </p>
                  </div>
                  </div>
                  
                  </div> 
            </body>
              
              </html>`,
  };

  await transporter.sendMail(mailOptions);
};
