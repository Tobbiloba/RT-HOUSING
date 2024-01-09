import express from "express";

import {
  getOrdersByAdmin,
  getAllOrders,
  getUserOrder,
  createUserOrder,
  updateOrderStatus,
} from "../controllers/order.controller.js";

const router = express.Router();

router.route('/').get(getAllOrders);
router.route('/user/:id/orders').get(getUserOrder);
router.route('/admin/:id/orders').get(getOrdersByAdmin)
router.route('/create-order/:id').post(createUserOrder);
router.route('/admin/:id/update').put(updateOrderStatus);

export default router;
