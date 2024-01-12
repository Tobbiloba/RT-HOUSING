import express from "express";

import { getAllCompanyModel, getCompanyByEmailModel, getCompanyByIdModel, createCompanyModel, addEmployee, deleteEmployee } from "../controllers/company.controller.js";

const router = express.Router();

router.route('/').get(getAllCompanyModel)
router.route('/email').get(getCompanyByEmailModel)
router.route('/add/:id').post(addEmployee)
router.route('/delete/:id').post(deleteEmployee)
router.route('/:id').get(getCompanyByIdModel)
router.route('/:id').post(createCompanyModel)

export default router;