import { getRatings, getRatingsByUserId, createRatings, updateRatingsById, deleteRatingsById, getRatingsByPropertyId, getRatingsById } from "../mongodb/ratings";

import { random } from "../helpers";
import { getPropertyById } from "../mongodb/models/property";



const getAllRatings = async (req, res) => {

    try {
         const ratings = await getAllRatings()

         return res.status(200).json(ratings)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}



const getUserRatings = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
         const ratings = await getRatingsByUserId(id)

         return res.status(200).json(ratings)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}




const getAdminRatings = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
         const ratings = await getRatingsByPropertyId(id)

         return res.status(200).json(ratings)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}




const createRating = async (req, res) => {
    const {id} = req.params;
    const {
        property_id,
        property_ratings
    } = req.body

    console.log(id)

    const property = getPropertyById(id)
    if(!property) {
        return res.status(500).json({message: "Not found"})
    }

    try {
         const wishlists = await createRatings({
            user_id: id,
            property_id: property_id,
            ratings_id: random(),
            property_ratings: {
                ...property_ratings
            },
            status: 'Successful'
         })

         return res.status(200).json(wishlists)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}



const updateRatings = async (req, res) => {
    const {id} = req.params;
    const {
        property_id,
        property_ratings,
        ratings_id
    } = req.body

    console.log(id)

    const ratings = getRatingsById(ratings_id)
    if(!ratings) {
        return res.status(500).json({message: "Not found"})
    }

    try {
         const rating = await updateRatingsById({
            user_id: id,
            property_id: property_id,
            ratings_id: ratings_id,
            property_ratings: {
                ...property_ratings
            },
            status: 'Successful'
         })

         return res.status(200).json(rating)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}



const deleteRatingById = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
         const ratings = await deleteRatingsById(id)

         return res.status(200).json({message: 'Successful'})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}