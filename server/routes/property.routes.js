import express from "express";

import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty,
    getPropertyByOwner,
    getPropertyDetailById
} from "../controllers/property.controller.js";

const router = express.Router();

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyDetail);
router.route("/").post(createProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);
router.route("/owner/:id").get(getPropertyByOwner);
router.route("/property-details/:id").get(getPropertyDetailById);
export default router;
