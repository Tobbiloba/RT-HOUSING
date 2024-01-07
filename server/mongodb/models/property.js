import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    property_id: { type: String, required: true },
    owner_id: {type: String, required: true},
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_no_bedrooms: {type: String, required: true},
        property_no_bathroom: {type: String, required: true},
        property_size: {type: [String], required: false},
        property_amenities: {type: [String], required: false},
        property_images: {type: [String], required: true},
        property_location: {
            country: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true}
        },
        property_policy: {
            pet_policy: {type: Boolean, required: false},
            smoking_policy: {type: Boolean, required: false},
        },
        pricing: {type: String, required: false},
        availability: {
            available_date_from: {type: [String], required: true},
            available_date_till: {type: [String], required: true},
            unavailable_date_from: {type: [String], required: true},
            unavailable_date_till: {type: [String], required: true},
            occupied_date_from: {type: [String], required: true},
            occupied_date_till: {type: [String], required: true},
        },
        guest: {
            maximum_adults: {type: String, required: true},
            maximum_children: {type: String, required: true},
            maximum_infants: {type: String, required: true},
        },
        booking_status: { type: String, enum: ['available', 'booked', 'under maintenance', 'unavailable'], default: 'available' },
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    status: {type: String, required: true}
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export const getProperties = (no) => PropertyModel.find({}).limit(no);
export const getPropertyById = (id) => PropertyModel.findOne({"property_id": id});
export const getPropertyByOwnerId = (id) => PropertyModel.find({"owner_id": id}).populate(
    "creator",
);
export const createPropertyAdmin = (values) => new PropertyModel(values)
    .save().then((user) => user.toObject())
export const updatePropertyById = (id, property) => PropertyModel.findByIdAndUpdate(id, property);


export default PropertyModel;