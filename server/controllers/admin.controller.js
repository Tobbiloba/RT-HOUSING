import AdminUser, { getAdminUserByEmail, getAdminUserById, getAdminUserByToken, registerAdminUser } from "../mongodb/models/admin.js";

import { authentication, generateRandomToken, random, sendVerificationToken } from "../helpers/index.js";
const getAllAdminUsers = async (req, res) => {
    try {
        const users = await AdminUser.find({}).limit(req.query._end);
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createAdminUser = async (req, res) => {
  try {
    const { username, firstname, lastname, email, phone, password, profile_img, country, state, city, socials } = req.body;
    console.log(phone)
    // console.log( username, firstname, lastname, email, phone, password, profile_img, country, state, city, socials );
    const token = generateRandomToken()
    if (!email || !password || !username || !firstname || !lastname || !profile_img || !state || !country || !city  || !phone) {
      return res.status(500).json({ message: "Pass necessary parameters" });
    }
    const userExists = await getAdminUserByEmail(email);
    if (userExists) {
      return res.status(500).json({ message: "User already exists" });
    }
    const salt = random();
    // console.log({
    //   activationToken: token,
    //   isActivated: false,
    //   username,
    //   email,
    //   lastname: lastname || null,
    //   firstname: firstname || null,
    //   phone_no: phone_no || null,
    //   profile_img: profile_img || null,
    //   country: country || null,
    //   state: state || null,
    //   city: city || null,
    //   socials: socials || null,
    //   company_information: {
    //     company_id: null,
    //     company_name: null,
    //     role: null
    //   },
    //   authentication: {
    //     password: authentication(salt, password),
    //     salt,
    //   },
    // });
    const newUser = await registerAdminUser({
      activationToken: token,
      username,
      email,
      lastname: lastname || null,
      firstname: firstname || null,
      phone_no: phone || null,
      profile_img: profile_img || null,
      country: country || null,
      state: state || null,
      city: city || null,
      socials: socials || null,
      company_information: {
        company_id: null,
        company_name: null,
        role: null
      },
      authentication: {
        salt, password: authentication(salt, password)
    }
    });

    sendVerificationToken('abayomitobiloba410@gmail.com', `https://rt-housing.vercel.app/admin/profile/activate/${newUser._id}/${token}`)
    res.status(200).json(newUser).end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};




const loginAdminUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await getAdminUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    if (userExists) {
      console.log(userExists);

      const expectedHash = authentication(userExists.authentication.salt, password);
      
      if (userExists.authentication.password != expectedHash) {
        console.log('password doesnt match')
        return res.sendStatus(403);
      } else {
        const salt = random();
        userExists.authentication.sessionToken = authentication(salt, userExists._id.toString());
    
        await userExists.save();
        console.log('successful')
        res.cookie('TOBBIE-AUTH', userExists.authentication.sessionToken, { domain: 'localhost', path: '/' });
        return res.status(200).json(userExists).end();
      }
    } else {
      return res.status(500).json({ message: "Admin User doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const getAdminUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getAdminUserById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Admin User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const activateAdminUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {token} = req.body;
    console.log(id)

    if (!token) {
      return res.status(400).json({ error: 'Token not provided' });
    }

    const adminUser = await getAdminUserById(id);
    console.log(adminUser)

    if (!adminUser) {
      return res.status(404).json({ error: 'Admin user not found for the given token' });
    }

    if(token != adminUser.activationToken) {
      return res.status(500).json({message: "Token not correct"})
    }
// // console.log(adminUser)
    adminUser.activationToken = undefined;
    adminUser.isActivated = true;

    await adminUser.save();

    return res.status(200).json({ message: 'Account successfully activated.' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


export {getAllAdminUsers, createAdminUser, loginAdminUser, getAdminUserInfoByID, activateAdminUser}