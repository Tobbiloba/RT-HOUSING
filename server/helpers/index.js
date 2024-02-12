import crypto from 'crypto'
import nodemailer from "nodemailer"

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
        
        <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0; ">
        <div class="" style="background-color: #1e293b; padding: 0rem .5rem; font-family: 'Open Sans', sans-serif; max-width: 35rem; width: 100%; margin: 0rem auto; height: 45rem; display: flex; flex-direction: column; justify-content: space-between;">
    
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
          
          <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0;">
            <div class="" style="background-color: #64748b; padding: 0 .5rem; font-family: 'Open Sans', sans-serif; max-width: 35rem; width: 100%; margin: 1rem auto;">

        <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: 1rem 0;">
            Fe
            <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
              <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
            </div>
            oS
          </h1>
        <div style="background-color: #334155; color: white; padding: .25rem .5rem; font-size: 13px; border-radius: 5px;">
            <p style="color: #d3d0d0; font-size: 14px;">
                Thank you for choosing FeBToS to make your next stay unforgettable! ${
                  status === "active" ? "We are thrilled to confirm your reservation for the property you selected." : status === "pending" && ""
                }
  
            </p>

           <div style="display: flex;">
            <img src="https://t4.ftcdn.net/jpg/05/96/54/57/240_F_596545787_hgFhMVRG5f2aZpQiPAxbbHabxSQYRvQJ.jpg" style="width: 64px; border-radius: 4px; margin-top: 8px; margin-bottom: 8px;"/>
           </div>
          
            <P style="font-color: "white"s">
               Here are some details for your upcoming stay: 
            </P>
          

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px;">
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
          
          <body style="display: flex; justify-content: center; align-items: center; width: 100%; max-width: 100vw; margin: 0 auto; background-color: #e2e8f0;">
            <div style="background-color: #64748b; padding: 0 .5rem; font-family: 'Open Sans', sans-serif; max-width: 35rem; width: 100%; margin: 1rem auto;">

                <h1 style="font-size: 1.25rem; display: flex; color: #f0ecec; align-items: center; text-transform: capitalize; margin: 1rem 0;">
                    Fe
                    <div style="transform: rotate(12deg); width: 30px; height: 46px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #798584;"></div>
                        <span style="color: #798584; position: relative; bottom: -2px;">bt</span>
                    </div>
                    oS
                </h1>
                <div style="background-color: #334155; color: white; padding: .25rem .5rem; font-size: 13px; border-radius: 5px;">
                    <p style="color: #d3d0d0; font-size: 14px;">
                        Thank you for choosing FeBToS! Your recent stay has now ended. 
                    </p>

                    <div style="display: flex;">
                        <img src="https://t4.ftcdn.net/jpg/05/96/54/57/240_F_596545787_hgFhMVRG5f2aZpQiPAxbbHabxSQYRvQJ.jpg" style="width: 64px; border-radius: 4px; margin-top: 8px; margin-bottom: 8px;" />
                    </div>

                    <p style="color: #d3d0d0; font-size: 14px; margin-top: 10px;">
                        Here are some details for your recent stay:
                    </p>

                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;  font-size: 12px;">
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
                            <td style="width: 70%; text-align: left; padding-left: 4px;">expired</td>
                        </tr>
                        
                    </table>
                    <div style="display: flex; justify-content: end; margin-top: 20px;">
                        <img src="https://cdn-icons-png.flaticon.com/128/11153/11153590.png" style="width: 60px;" />
                    </div>
                </div>
            </div>
          </body>
          
          </html>`
    };

    await transporter.sendMail(mailOptions);
};
