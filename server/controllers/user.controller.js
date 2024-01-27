import User, {
  getUserByEmail,
  getUserById,
  registerUser,
} from "../mongodb/models/user.js";
import { authentication, generateRandomToken, random, sendVerificationToken } from "../helpers/index.js";
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
    const { name, email, avatar, password, phoneNo, socials } = req.body;
    console.log(name, email, avatar, password, phoneNo, socials)
    const token = generateRandomToken()
    // console.log(name);
    if (!email || !password || !name || !phoneNo) {
      return res.status(500).json({ message: "Pass all parameters" });
    }

    const userExists = await getUserByEmail(email);

    if (userExists) {
      return res.status(500).json({ message: "User already exists" });
    }

    const salt = random();

    const newUser = await registerUser({
      activationToken: token,
      username: name,
      email,
      avatar: avatar ? avatar : null,
      phoneNo,
      socials: socials || null,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
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
        return res.sendStatus(403);
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



const updateUserPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password" });
    }

    // Assuming you have a function to get user by email
    const user = getUserByEmail(email);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a salt
    const salt = random();

    // Update user's authentication details
    user.authentication = {
      salt,
      password: authentication(salt, password),
    };

    // Assuming you have a function to save the updated user
    saveUser(user);

    // Send a success response
    return res.status(200).json({ message: "Password updated successfully" });

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

    await user.save();

    return res.status(200).json({ message: 'Account successfully activated.' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { getAllUsers, createUser, getUserInfoByID, loginUser, getUserInfoByEmail, updateUserPassword, activateUser };