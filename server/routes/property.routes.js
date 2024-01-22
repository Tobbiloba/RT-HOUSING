import express from "express";

import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty,
    getPropertyByCompany,
    getPropertyDetailById,
    activateProperty,
    getAllPropertiesUser,
    deActivateProperty,
    filterProperty,
    getPropertyByTypeModel
} from "../controllers/property.controller.js";

const router = express.Router();
router.route("/property-details/:id").get(getPropertyDetailById);
router.route("/").get(getAllProperties);
router.route("/type/:type").get(getPropertyByTypeModel);
router.route("/user").get(getAllPropertiesUser);
router.route("/:id").get(getPropertyDetail);
router.route("/:id").post(createProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);
router.route("/activate/:id").post(activateProperty);
router.route("/deactivate/:id").post(deActivateProperty);
router.route("/company/:id").get(getPropertyByCompany);
router.route("/fsearch").get(filterProperty);


export default router;
