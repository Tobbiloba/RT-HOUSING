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
        
        <body>
            <div class="">
                <h1 class="tilli text-xl flex text-[30px] flex-row pt-3 capitalized">
                    Fe
                    BT
                    oS
                </h1>
                <div class="">
                <p class="thank-you">
                        Howdy! We appreciate your trust in Febtos. To activate your account, click the button below:
                    </p>
                    <p class="description">
                        Thank you for choosing Febtos, your go-to rental company. We appreciate your business and welcome you to
                        our community!
                    </p>
                    
                </div>
        
                <a href=${url} class="activation-button">Activate
                    Account</a>
            </div>
        </body>
        
        </html>`
    };


    await transporter.sendMail(mailOptions);
}
