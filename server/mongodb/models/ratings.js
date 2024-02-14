import mongoose from "mongoose"


const RatingsSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    property_id: {type: String, required: true},
    property_ratings: {
        rating: {type: Number, required: true},
        review: {type: String, required: true},
        likes: {type: Number, required: true}
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    status: {type: String, required: true}
})



const RatingsModel = mongoose.model("Ratings", RatingsSchema);


export const getRatings = (no) => RatingsModel.find({}).limit(no);
export const getRatingsById = (id) => RatingsModel.findOne({"_id": id});
export const getRatingsByUserId = (id) => RatingsModel.find({"user_id": id})
export const getRatingsByPropertyId = (id) => RatingsModel.find({"property_id": id})
export const createRatings = (values) => new RatingsModel(values)
    .save().then((user) => user.toObject())
export const updateRatingsById = (id, ratings) => RatingsModel.findByIdAndUpdate(id, property);
export const deleteRatingsById = (id) => RatingsModel.findByIdAndDelete(id);




export default RatingsModel