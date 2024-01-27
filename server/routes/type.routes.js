import express from "express"
import { getPropertyTypeByName, getAllPropertyType, createPropertyType } from "../mongodb/models/type.js"


const router = express.Router()

router.route('/').get(getAllPropertyType);
router.route('/:name').get(getPropertyTypeByName);
router.route('/').post(createPropertyType)


export default router;