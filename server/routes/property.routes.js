import express from "express";

import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty,
    getPropertyByAdmin,
    getPropertyDetailById,
    activateProperty,
    getAllPropertiesUser,
    deActivateProperty,
    filterProperty,
    getPropertyByTypeModel,
    getProp
} from "../controllers/property.controller.js";

const router = express.Router();
router.route("/").get(getAllProperties);
router.route("/property-details/:id").get(getPropertyDetailById);

router.route("/prop").get(getProp);
router.route("/type/:type").get(getPropertyByTypeModel);
router.route("/user").get(getAllPropertiesUser);
router.route("/:id").get(getPropertyDetail);
router.route("/:id").post(createProperty);
router.route("/:id").patch(updateProperty);

router.route("/:id").delete(deleteProperty);
router.route("/activate/:id").post(activateProperty);
router.route("/deactivate/:id").post(deActivateProperty);
router.route("/admin/:id").get(getPropertyByAdmin);



export default router;