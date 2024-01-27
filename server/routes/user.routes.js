import express from "express";

import {
    activateUser,
    createUser,
    getAllUsers,
    getUserInfoByEmail,
    getUserInfoByID,
    loginUser,
    updateUserPassword
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/activate/token/:id").post(activateUser);
router.route("/login").post(loginUser);
router.route("/email").get(getUserInfoByEmail);
router.route("/update-password").get(updateUserPassword);
router.route("/:id").get(getUserInfoByID);


export default router;
