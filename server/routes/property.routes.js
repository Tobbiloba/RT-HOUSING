import express from "express";

import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty,
    getPropertyByOwner,
    getPropertyDetailById,
    activateProperty,
    getAllPropertiesUser,
    deActivateProperty,
    filterProperty
} from "../controllers/property.controller.js";

const router = express.Router();
router.route("/property-details/:id").get(getPropertyDetailById);
router.route("/").get(getAllProperties);
router.route("/user").get(getAllPropertiesUser);
router.route("/:id").get(getPropertyDetail);
router.route("/:id").post(createProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);
router.route("/activate/:id").post(activateProperty);
router.route("/deactivate/:id").post(deActivateProperty);
router.route("/owner/:id").get(getPropertyByOwner);
router.route("/fsearch").get(filterProperty);


export default router;
