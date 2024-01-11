import User, {
  getUserByEmail,
  getUserById,
  registerUser,
} from "../mongodb/models/user.js";
import { authentication, random } from "../helpers/index.js";
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

    console.log(username);
    if (!email || !password || !username || !phoneNo) {
      return res.status(500).json({ message: "Pass all parameters" });
    }

    const userExists = await getUserByEmail(email);

    if (userExists) {
      return res.status(500).json({ message: "User already exists" });
    }

    const salt = random();

    const newUser = await registerUser({
      username,
      email,
      avatar: avatar ? avatar : null,
      phoneNo,
      socials: socials || null,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    res.status(200).json({ newUser }).end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

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


export { getAllUsers, createUser, getUserInfoByID, loginUser, getUserInfoByEmail };
