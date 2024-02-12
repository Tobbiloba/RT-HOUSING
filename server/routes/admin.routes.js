import express from "express";

import { getAllAdminUsers, createAdminUser, loginAdminUser, getAdminUserInfoByID, activateAdminUser, updateAdminUser } from "../controllers/admin.controller.js";

const router = express.Router();

router.route("/").get(getAllAdminUsers);
router.route("/:id").put(updateAdminUser);
router.route("/activate/token/:id").post(activateAdminUser);
router.route("/register").post(createAdminUser);
router.route("/login").post(loginAdminUser);
router.route("/:id").get(getAdminUserInfoByID);

export default router;