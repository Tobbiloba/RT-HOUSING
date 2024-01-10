import mongoose from "mongoose"


const filterSchema = new mongoose.Schema({
    room_type: {type: String, required: false},
    no_guests: {type: String, required: false},
    accomodation_type: {type: [String], required: false},
    area_size: {type: [String], required: false},
    no_bathroom: {type: String, required: false},
    no_bedroom: {type: String, required: false},
    amenities: {type: [String], required: false},
    facilities: {type: [String], required: false}
}) 


const FilterModel = mongoose.model("Filter")