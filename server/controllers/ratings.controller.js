import { getRatings, getRatingsByUserId, createRatings, updateRatingsById, deleteRatingsById, getRatingsByPropertyId, getRatingsById } from "../mongodb/models/ratings.js";

import { random } from "../helpers/index.js";
import { getPropertyById } from "../mongodb/models/property.js";



const getAllRatings = async (req, res) => {

    try {
         const ratings = await getRatings()

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




const getPropertyRatings = async (req, res) => {
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
    const { id } = req.params;
    const {
        property_id,
        property_ratings
    } = req.body;

    console.log(property_id);

    try {
        // Assuming getPropertyById is a function that fetches the property by ID
        const property = await getPropertyById(property_id);

        console.log(property)

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        if(!property_ratings) {
            return res.status(400).json({message: 'Pass necessary parameters'})
        }

        const newRating = createRatings({
            user_id: id,
            property_id: property_id,
            ratings_id: random(), // Assuming random() generates a unique ID
            property_ratings: {
                rating: property_ratings.rating,
                review: property_ratings.review
            },
            status: 'Successful'
        });

        // const savedRating = await newRating.save();

        return res.status(200).json(newRating);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};



const updateRatings = async (req, res) => {
    const { id } = req.params;
    const {
        property_id,
        property_ratings,
        ratings_id
    } = req.body;

    console.log(id);

    try {
        // Fetch existing ratings
        const ratings = await getRatingsById(ratings_id);

        if (!ratings) {
            return res.status(404).json({ message: "Ratings not found" });
        }

        // Check if the ratings belong to the user
        if (ratings.user_id.toString() !== id) {
            return res.status(403).json({ message: "Not authorized to update these ratings" });
        }

        // Update the ratings
        const updatedRatings = await updateRatingsById(ratings_id, {
            property_id: property_id,
            property_ratings: { ...property_ratings },
        });

        return res.status(200).json(updatedRatings);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



// const deleteRatingById = async (req, res) => {
//     const {id} = req.params;

//     console.log(id)

//     try {
//          const ratings = await deleteRatingsById(id)

//          return res.status(200).json({message: 'Successful'})
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json(error.message)
//     }
   
// }


const deleteRatingById = async (req, res) => {
    const { id } = req.params;

    console.log(id);

    try {
        // Assuming deleteRatingsById is a function that deletes the rating by ID
        const deletedRating = await deleteRatingsById(id);

        if (!deletedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }

        return res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
export {getAllRatings, getUserRatings, getPropertyRatings, createRating, updateRatings, deleteRatingById}