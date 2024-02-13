import express from "express"
import { createPropertyTypeModel, getAllPropertyTypeModel } from "../controllers/type.controller.js";

const router = express.Router()
router.route('/').post(createPropertyTypeModel)
router.route('/').get(getAllPropertyTypeModel);



export default router;