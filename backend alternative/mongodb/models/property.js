import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true },
    ownerId: {type: String, required: true},
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_no_bedrooms: {type: String, required: true},
        property_no_bathroom: {type: String, required: true},
        property_size: {type: String, required: false},
        property_amenities: {type: [String], required: false},
        property_images: {type: [String], required: true},
        
        property_review: {type: [String], required: false},
        property_avg_ratings: {type: [String], required: false},
        property_location: {
            country: {type: String, required: true},
            state: {type: String, required: true},
            zip_code: {type: String, required: true}
        },
        property_policy: {
            pet_policy: {type: Boolean, required: false},
            smoking_policy: {type: Boolean, required: false},
        },
        // pricing: {
        pricing: {type: String, required: false},
        // },
        availability: {
            available_date_from: {type: String, required: true},
            available_date_till: {type: String, required: true},
            unavailable_date_from: {type: String, required: true},
            unavailable_date_till: {type: String, required: true},
            occupied_date_from: {type: String, required: true},
            occupied_date_till: {type: String, required: true},
        },
        guest: {
            maximum_adults: {type: String, required: true},
            maximum_children: {type: String, required: true},
            maximum_infants: {type: String, required: true},
        },
        // additional_features: [],
        booking_status: { type: String, enum: ['available', 'booked', 'under maintenance', 'unavailable'], default: 'available' },
        
    },
    // location: { type: String, required: true },
    // price: { type: Number, required: true },
    // photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    status: {type: String, required: true}
});

const propertyModel = mongoose.model("Property", PropertySchema);

export default propertyModel;
