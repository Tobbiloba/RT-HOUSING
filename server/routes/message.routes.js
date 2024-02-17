import express from "express"

import { getAllMessageModel, getAllMessageRequestModel, getAllTourRequestModel,
createAgentMessageModel, createTourRequestModel } from "../controllers/message.controller.js"


const router = express.Router()

router.route("/").get(getAllMessageModel);
router.route("/tour-request").get(getAllTourRequestModel);
router.route("/agent-message").get(getAllMessageRequestModel);
router.route("/tour-request/:id").post(createTourRequestModel);
router.route("/agent-message/:id").post(createAgentMessageModel);
export default router;