import express from "express";

import {
  createEmployeeModel,
  getAllEmployeeByEmailModel,
  getAllEmployeeByEmployerIdModel,
  getEmployeeByIdModel,
  getAllEmployeesModel,
  updateEmployeeStatusModel,
  deleteEmplyeeModel,
} from "../controllers/employee.controller.js";

const router = express.Router();


router.route("/:id").post(createEmployeeModel);
router.route("/:id").delete(deleteEmplyeeModel)
router.route("/:id").put(updateEmployeeStatusModel);
router.route("/:id").get(getEmployeeByIdModel);
router.route("/email").get(getAllEmployeeByEmailModel);
router.route("/employer/:id").get(getAllEmployeeByEmployerIdModel);

router.route("/").get(getAllEmployeesModel);

export default router;