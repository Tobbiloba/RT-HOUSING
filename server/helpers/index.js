import crypto from 'crypto'
import nodemailer from "nodemailer"
import { createNotificationModel } from '../controllers/notification.controller.js'

const SECRET = 'TOBILOBA-REST-API'
export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest("hex")
}
export const generateRandomToken = () => {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export const sendVerificationToken = async (email, url) => {
    console.log(email, url)
    const transporter = nodemailer.createTransport({
        // Configure your email service
        service: 'gmail',
        auth: {
            user: 'tobiloba.a.salau@gmail.com',
            pass: 'gdbu hltz lxbr ipyw',
        },
    });
console.log('called')


    const mailOptions = {
        from: 'tobiloba.a.salau@gmail.com',
        to: email,
        subject: 'Account Activation',
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Include Google Font -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">

        </head>
        
        <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; flex-direction: column;">
        <div class="" style="background-color: #1e293b; padding: 0rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 35rem; width: 100%; margin: 0rem auto; height: fit; ">
    
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
    
                <!-- Activation Button -->
                <a href=${url} class="activation-button" style="color: #475569;">Activate Account</a>
    
                <!-- Additional Texts (e.g., Terms and Conditions, Privacy Policy, Contact Us) -->
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
                <div style="background: linear-gradient(to right, #919292, #5c8884); padding: .1rem .5rem; font-family: 'Open Sans', sans-serif;  width: 100%; margin: 1rem auto; height: 1rem;">
    
                    <!-- ... (rest of your content) ... -->
                
                </div>
               
            </div>
             <!-- Footer Section -->
             <div class="foote" style="margin-top: 1rem; color: white; font-size: 14px; text-align: center;">
                <p class="copyright">
                    &copy; 2024 Febtos. All rights reserved.
                </p>
                <p class="footer-info">
                    Febtos Inc. | 123 Main Street, Cityville, Country
                </p>
            </div>
        </div>
    </body>
        
        </html>`
    };


    await transporter.sendMail(mailOptions);
}







export const sendOrderConfirmation = async (email, orderDetails) => {
    // console.log(email)
    // console.log(orderDetails)
    const transporter = nodemailer.createTransport({
        // Configure your email service
        service: 'gmail',
        auth: {
          user: 'tobiloba.a.salau@gmail.com',
          pass: 'gdbu hltz lxbr ipyw',
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
        from: 'tobiloba.a.salau@gmail.com',
        to: email,
        subject: 'Order Confirmation',
        html: `<!DOCTYPE html>
          <html lang="en">
          
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <!-- Include Google Font -->
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">
          </head>
          
          <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; ">
          <div class="" style="background-color: #1e293b; color: white; padding: .5rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 35rem; width: 100%; margin: 0rem auto;">
        
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
              <p style="font-size: 14px; color: #fff; margin-top: 2rem;">Hello there! 👋</p>
      
              <p style="color: white; font-size: 13px;">
                Get ready for an unforgettable stay filled with joy and excitement! 🌟✨ Your upcoming adventure is just around the corner, and we've got some delightful details to make your experience even more special! 😊
              </p>
        
      
          <table style="width: 100%; color: white; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px; margin-top: 2rem;">
              <tr style="margin-top: 4px; padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Order ID:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${orderId}</td>
              </tr>
              <tr style="margin-top: 6px; padding: 2rem 0">
                <td style="width: 100%; text-align: left; display: flex; justify-content: start; align-items: start;">Property Title:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyName}</td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Address:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${propertyAddress}</td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Total Price:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${totalPrice}</td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Expenses:</td>
                <td style="width: 70%; text-align: left;">
                <ul style="list-style: none; padding: 0;">
          ${expenses.map(({ description, price }) => `<li>${description}: $${price}</li>`).join('') || '<li>No expenses</li>'}
        </ul>
      </td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; ">Used Discount:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">
                  <p>Coupon ID: 43564564</p>
                  <p>Coupon Discount: ${usedDiscount.couponDiscount}</p>
                </td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Check-in Date:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${checkinDate}</td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Checkout Date:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${checkoutDate}</td>
              </tr>
              <tr style="padding: 2rem 0">
                <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start;">Status:</td>
                <td style="width: 70%; text-align: left; padding-left: 4px;">${status}</td>
              </tr>
              ${
                  
                  status === 'declined' ? `<tr style="padding: 2rem 0">
                  <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; padding-bottom: 10px;">Reason:</td>
                  <td style="width: 70%; text-align: left; padding-left: 4px;">${reason}</td>
                </tr>` : ''
              }
          </table>
          <div style="display: flex; justify-content: end; margin-top: 20px;">
            <img src="https://cdn-icons-png.flaticon.com/128/11153/11153590.png" style="width: 60px;"/>
          </div>
        </div>
      </div>
        </body>
          
          </html>`
      };
    
      await transporter.sendMail(mailOptions);
    
  };

































 



  export const sendLoginNotification = ({ id }) =>{
    // Assuming 'id' is provided, you can customize this part accordingly
    if (!id) {
      throw new Error('Notification ID is required.');
    }
  
    // Get the current date and time
    const currentDate = new Date();
  
    // Format the date and time
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    // Create the notification model with the formatted date and time
    const notificationModel = {
      id,
      title: 'Login activity',
      message: `You have logged into your account on ${formattedDate} at ${formattedTime}.`,
    };
  
    createNotificationModel({notificationModel})
    // You can return or use the notificationModel as needed
    // return notificationModel;
  }







  export const sendOrderEnd = async (email, orderDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tobiloba.a.salau@gmail.com',
            pass: 'gdbu hltz lxbr ipyw',
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
    console.log(orderDetails)

    const mailOptions = {
        from: 'tobiloba.a.salau@gmail.com',
        to: email,
        subject: 'Rent Duration Ended',
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
                                  ${expenses.map(({ description, price }) => `<li>${description}: $${price}</li>`).join('') || '<li>No expenses</li>'}
                              </ul>
                          </td>
                      </tr>
                      <tr style="padding: 2rem 0; margin-top: 8px;">
                          <td style="width: 100%; text-align: left;  display: flex; justify-content: start; align-items: start; ">USED COUPON:</td>
                          <td style="width: 70%; text-align: left; padding-left: 4px;">
                              <p>Coupon ID: 43564564</p>
                              <p>Coupon Discount: ${usedDiscount.couponDiscount}</p>
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
                  <div style="display: flex; justify-content: end; margin-top: 20px;">
                      <img src="https://cdn-icons-png.flaticon.com/128/11153/11153590.png" style="width: 60px;" />
                  </div>
              </div>
              <div class="foote" style="margin-top: 1rem; color: white; font-size: 14px; text-align: center;">
                <p class="copyright">
                    &copy; 2024 Febtos. All rights reserved.
                </p>
                <p class="footer-info">
                    Febtos Inc. | 123 Main Street, Cityville, Country
                </p>
            </div>
          </div>
        </body>
          
          </html>`
    };

    await transporter.sendMail(mailOptions);
};
