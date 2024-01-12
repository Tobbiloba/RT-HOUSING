import express from "express"

import { getAllCouponsModel, getCompanyCouponByIdModel, getCompanyCouponByNameModel, verifyCouponModel, createCouponModel } from "../controllers/coupon.controller.js"

const router = express.Router()

router.route("/").get(getAllCouponsModel);
router.route("/company").get(getCompanyCouponByNameModel);
router.route("/create/:id").post(createCouponModel);
router.route("/activate/:id").patch(verifyCouponModel);
router.route("/:id").get(getCompanyCouponByIdModel);

export default router