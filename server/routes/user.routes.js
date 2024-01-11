import express from "express";

import {
    createUser,
    getAllUsers,
    getUserInfoByEmail,
    getUserInfoByID,
    loginUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/email").get(getUserInfoByEmail);
router.route("/:id").get(getUserInfoByID);


export default router;
