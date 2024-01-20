import express from "express"

import { getAllCouponsModel, getCompanyCouponByIdModel, verifyCouponModel, createCouponModel } from "../controllers/coupon.controller.js"

const router = express.Router()

router.route("/").get(getAllCouponsModel);
router.route("/create/:id").post(createCouponModel);
router.route("/activate/:id").put(verifyCouponModel);
router.route("/:id").get(getCompanyCouponByIdModel);

export default router