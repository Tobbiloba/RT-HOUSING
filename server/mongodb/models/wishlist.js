import mongoose from "mongoose"


const WishlistSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    wishlist_id: {type: String, required: true},
    property_id: {type: String, required: true},
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_images: {type: String, required: true},
        pricing: {type: String, required: false},
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    status: {type: String, required: true}
})


const WishlistModel = mongoose.model("Wishlist", WishlistSchema);


export const getWishlists = (no) => WishlistModel.find({}).limit(no);
// export const getWishlistById = (id) => WishlistModel.findOne({"rating_id": id});
export const getWishlistByUserId = (id) => WishlistModel.find({"user_id": id})
export const createWishlist = (values) => new WishlistModel(values)
    .save().then((user) => user.toObject());
export const deleteWishlistById = (id) => WishlistModel.findByIdAndDelete(id);







export default WishlistModel;