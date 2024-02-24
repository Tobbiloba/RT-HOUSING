import express from "express";

import { getAllAdminUsers, resendAdminTOken, createAdminUser, loginAdminUser, getAdminUserInfoByID, activateAdminUser, updateAdminUser } from "../controllers/admin.controller.js";

const router = express.Router();
router.route("/resend-token/:id").get(resendAdminTOken);
router.route("/").get(getAllAdminUsers);

router.route("/:id").put(updateAdminUser);
router.route("/activate/token/:id").post(activateAdminUser);
router.route("/register").post(createAdminUser);
router.route("/login").post(loginAdminUser);
router.route("/:id").get(getAdminUserInfoByID);

export default router;