import express from "express"

import { getUserNotificationModel, getAllNotificationModel, updateNotificationModel } from "../controllers/notification.controller.js"

const router = express.Router();

router.route('/').get(getAllNotificationModel);
router.route('/:id').get(getUserNotificationModel);
router.route('/read/:id').put(updateNotificationModel)

export default router;