import mongoose from "mongoose";

// const CompanySchema = new mongoose.Schema({
//     company_name: {type: String, required: true},
//     company_id: {type: String, required: true},
//     c
// })
const AgentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    img: {type: String, required: true}
})
const PropertySchema = new mongoose.Schema({
    isActive: {type: Boolean, enum: [true, false], default: false},
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_no_bedrooms: {type: String, required: true},
        property_no_bathrooms: {type: String, required: true},
        property_no_garages: {type: String, required: true},
        property_no_floor: {type: String, required: true},
        property_size: {type: [String], required: false},
        property_amenities: {type: [String], required: false},
        property_images: {type: [String], required: true},
        property_location: {
            address: {type: String, required: true},
            country: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true},
            latitude: {type: String, required: false},
            longitude: {type: String, required: false},
            postal_code: {type: String, required: false}
        },
        property_policy: {
            pet_policy: {type: Boolean, required: false},
            smoking_policy: {type: Boolean, required: false},
        },
        pricing: {type: String, required: false},
        availability: {
            available_date_from: {type: [String], required: true},
            available_date_till: {type: [String], required: true},
        },
        guest: {
            maximum_adults: {type: String, required: true},
            maximum_children: {type: String, required: true},
            maximum_infants: {type: String, required: true},
        },
        
        booking_status: { type: String, enum: ['available', 'booked', 'under maintenance', 'unavailable'], default: 'available' },
    },
    agent: [AgentSchema],
    isFeatured: {type: String, required: true},
    isPopular: {type: String, required: true},
    isTopRated: {type: String, required: false},
    admin_id: {type: String, required: true},
    admin_name: {type: String, required: true},
    created_by: {type: String, required: false},
    created_at: { type: Date, default: Date.now },
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export const getProperties = () => PropertyModel.find({});
export const getActivatedProperties = (query) => PropertyModel.find({"isActive": true, query});
export const getPropertyById = (id) => PropertyModel.findOne({"_id": id});
export const getPropertyByAdminId = (id) => PropertyModel.find({"admin_id": id})
export const getPropertyByType = (property_type) => {
    console.log('Searching for property_type:', property_type);
    return PropertyModel.find({ "property_information.property_type": "Apartment" });
  };
  
export const createPropertyAdmin = (values) => new PropertyModel(values)
    .save().then((user) => user.toObject())
export const updatePropertyById = (id, property) => PropertyModel.findByIdAndUpdate(id, property);
export const deletePropertyById = (id) => PropertyModel.findByIdAndDelete(id);

export default PropertyModel;