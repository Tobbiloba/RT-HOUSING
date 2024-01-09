import express from "express";


import { getAllRatings, createRating, getPropertyRatings, getUserRatings, updateRatings, deleteRatingById } from "../controllers/ratings.controller.js";

const router = express.Router();


router.route('/').get(getAllRatings)
router.route('/property/:id').get(getPropertyRatings)
router.route('/user/:id').get(getUserRatings)
router.route('/create-rating/:id').post(createRating)
router.route('/update-rating/:id').put(updateRatings)
router.route('/user/:id').delete(deleteRatingById)









export default router;