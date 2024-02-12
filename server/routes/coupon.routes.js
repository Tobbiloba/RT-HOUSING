import express from "express"

import { getAllCouponsModel, getAdminCouponByIdModel, verifyCouponModel, createCouponModel } from "../controllers/coupon.controller.js"

const router = express.Router()


router.route("/create/:id").post(createCouponModel);
router.route("/activate/:id").put(verifyCouponModel);
router.route("/:id").get(getAdminCouponByIdModel);
router.route("/").get(getAllCouponsModel);
export default router