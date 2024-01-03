import express from "express";

import {
    createUser,
    getAllUsers,
    getUserInfoByID,
    loginUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserInfoByID);

export default router;
