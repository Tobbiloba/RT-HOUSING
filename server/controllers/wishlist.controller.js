import {  getWishlists, getWishlistByUserId, createWishlist, deleteWishlistById } from "../mongodb/models/wishlist";
import { getPropertyById } from "../mongodb/models/property";
import { random } from "../helpers";


const getAllWishlists = async (req, res) => {

    try {
         const wishlists = await getAllWishlists()

         return res.status(200).json(wishlists)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}






const getWishlistById = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
         const wishlists = await getWishlistByUserId(id)

         return res.status(200).json(wishlists)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}


const createWishlists = async (req, res) => {
    const {id} = req.params;
    const {
        property_id,
    } = req.body

    console.log(id)

    const property = getPropertyById(id)
    if(!property) {
        return res.status(500).json({message: "Not found"})
    }

    try {
         const wishlists = await createWishlist({
            user_id: id,
            property_id: property_id,
            wishlist_id: random(),
            property_information: {

            },
            status: 'Successful'
         })

         return res.status(200).json(wishlists)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}



const deleteWishlistsById = async (req, res) => {
    const {id} = req.params;

    console.log(id)

    try {
         const wishlists = await deleteWishlistById(id)

         return res.status(200).json({message: 'Successful'})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
   
}


export {
    getAllWishlists,
    getWishlistById,
    createWishlists,
    deleteWishlistsById
}