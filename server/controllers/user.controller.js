import User, {
  getUserByEmail,
  getUserById,
  registerUser,
} from "../mongodb/models/user.js";
import { authentication, generateRandomToken, random, sendVerificationToken } from "../helpers/index.js";
import { createNotificationModel } from "./notification.controller.js";
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).limit(req.query._end);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, avatar, password, phoneNo, socials } = req.body;
    console.log(username, email, avatar, password, phoneNo, socials)
    const token = generateRandomToken()
    // console.log(name);
    if (!email || !password || !username || !phoneNo) {
      return res.status(500).json({ message: "Pass all parameters" });
    }

    const userExists = await getUserByEmail(email);

    if (userExists) {
      console.log('user exist')
      return res.status(404).json({ message: "User already exists" });
    }

    const salt = random();

    const newUser = await registerUser({
      activationToken: token,
      username,
      email,
      avatar: avatar ? avatar : null,
      phoneNo,
      socials: socials || null,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
      isActivated: false
    });

    sendVerificationToken('abayomitobiloba410@gmail.com', `http://localhost:5173/user/profile/activate/${newUser._id}/${token}`)

    res.status(200).json({ newUser }).end();
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password)

    const userExists = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    if (userExists) {

      const expectedHash = authentication(
        userExists.authentication.salt,
        password
      );

      if (userExists.authentication.password != expectedHash) {
        console.log("password doesnt match");
        return res.status(403).json({message: "Incorrect password! Please try again"});
      } else {
        const salt = random();
        userExists.authentication.sessionToken = authentication(
          salt,
          userExists._id.toString()
        );

        await userExists.save();
        console.log("successful");
        res.cookie("TOBBIE-AUTH", userExists.authentication.sessionToken, {
          domain: "localhost",
          path: "/",
        });

        
        
        return res.status(200).json(userExists).end();
      }
    } else {
      return res.status(500).json({ message: "User doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserInfoByEmail = async (req, res) => {
  console.log('called')
  try {
    const { email } = req.body;
    console.log(email)

    const user = await getUserByEmail(email);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log('error')
    res.status(500).json({ message: error.message });
  }
};





const validatePassword = (salt, enteredPassword, storedHash) => {
  const enteredHash = authentication(salt, enteredPassword);
  return enteredHash === storedHash;
};






const updateUserPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    console.log(email, oldPassword, newPassword );

    // Check if email, oldPassword, and newPassword are provided
    if (!email || !oldPassword || !newPassword) {
      return res.status(400).json({ message: "Please provide email, old password, and new password" });
    }

    const userExists = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    // Check if user exists
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const expectedHash = authentication(
      userExists.authentication.salt,
      oldPassword
    );

    // console.log(userExists);

    if (userExists.authentication.password != expectedHash) {
      console.log("password doesnt match");
      return res.status(403).json({message: "Incorrect password! Please try again"});
    } else {
      console.log('equal')
    }

    // Check if the old password matches
  

    // // Generate a new salt and hash for the new password
    const salt = random();
    const newHash = authentication(salt, newPassword);

    // // Update user's authentication details with the new password
    userExists.authentication = {
      salt,
      password: newHash,
    };

    // Assuming you have a function to save the updated user
    await userExists.save();

    // Send a success response
    return res.status(200).json({ message: "Password updated successfully" });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};











// const updateUserPassword = async (req, res) => {
//   try {
//     const { email, oldPassword, newPassword } = req.body;
//     console.log(email, oldPassword, newPassword )
//     // Check if email, oldPassword, and newPassword are provided
//     if (!email || !oldPassword || !newPassword) {
//       return res.status(400).json({ message: "Please provide email, old password, and new password" });
//     }

//     // Assuming you have a function to get user by email
//     const user = await getUserByEmail(email);

//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     console.log(user)


//     const expectedHash = authentication(
//       user.authentication.salt,
//       password
//     );


//     // Check if the old password matches
//     const isPasswordMatch = validatePassword(user.authentication.salt, oldPassword, user.authentication.password);

//     if (!isPasswordMatch) {
//       return res.status(401).json({ message: "Old password is incorrect" });
//     }

//     // Generate a new salt
//     const newSalt = random();

//     // Update user's authentication details with the new password
//     user.authentication = {
//       salt: newSalt,
//       password: authentication(newSalt, newPassword),
//     };

//     // Assuming you have a function to save the updated user
//     await user.save();

//     // Send a success response
//     return res.status(200).json({ message: "Password updated successfully" });

//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };




const updateUserInfo = async (req, res) => {
  try {
    const {id} = req.params
    const { username, firstname, lastname, avatar, phoneNo } = req.body;

    console.log(username, firstname, lastname, avatar, phoneNo, id )

    // Check if required fields are provided
    if (!id || !username || !firstname || !lastname || !avatar  || !phoneNo) {
      return res.status(400).json({ message: "Incomplete user information provided" });
    }

    console.log(id, username, firstname, lastname, avatar, phoneNo)

    // Assuming you have a function to get user by email
    const user = await getUserById(id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(user)

    // Update user information
    user.username = username;
    user.firstname = firstname;
    user.lastname = lastname;
    user.avatar = avatar;
    user.phoneNo = phoneNo;

    // // Assuming you have a function to save the updated user
    await user.save()

    // // Send a success response
    return res.status(200).json({ message: "User information updated successfully" });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const activateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {token} = req.body;

    if (!token || !id) {
      return res.status(400).json({ error: 'Token not provided' });
    }

    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found for the given token' });
    }
if(token != user.activationToken) {
  return res.status(500).json({message: "Token doesn't match"})
}

    user.activationToken = undefined;
    user.isActivated = true;
    
    createNotificationModel({id, title: "Account Activation", message: "You have successfully activated your account"})

    await user.save();

    return res.status(200).json({ message: 'Account successfully activated.' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { getAllUsers, createUser, getUserInfoByID, loginUser, getUserInfoByEmail, updateUserPassword, activateUser, updateUserInfo };