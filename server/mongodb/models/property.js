import mongoose from "mongoose";

// const CompanySchema = new mongoose.Schema({
//     company_name: {type: String, required: true},
//     company_id: {type: String, required: true},
//     c
// })
const PropertySchema = new mongoose.Schema({
    isActive: {type: Boolean, enum: [true, false], default: false},
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_no_bedrooms: {type: String, required: true},
        property_no_bathrooms: {type: String, required: true},
        property_size: {type: [String], required: false},
        property_amenities: {type: [String], required: false},
        property_images: {type: [String], required: true},
        property_location: {
            country: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true},
            latitude: {type: String, required: false},
            longitude: {type: String, required: false}
        },
        property_policy: {
            pet_policy: {type: Boolean, required: false},
            smoking_policy: {type: Boolean, required: false},
        },
        pricing: {type: String, required: false},
        availability: {
            available_date_from: {type: [String], required: true},
            available_date_till: {type: [String], required: true},
            unavailable_date_from: {type: [String], required: false},
            unavailable_date_till: {type: [String], required: false},
            occupied_date_from: {type: [String], required: false},
            occupied_date_till: {type: [String], required: false},
            unavailability_reason: {type: String, required: false}
        },
        guest: {
            maximum_adults: {type: String, required: true},
            maximum_children: {type: String, required: true},
            maximum_infants: {type: String, required: true},
        },
        
        booking_status: { type: String, enum: ['available', 'booked', 'under maintenance', 'unavailable'], default: 'available' },
    },
    company_id: {type: String, required: true},
    company_name: {type: String, required: true},
    created_by: {type: String, required: false},
    created_at: { type: Date, default: Date.now },
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export const getProperties = (no) => PropertyModel.find({}).limit(no);
export const getActivatedProperties = (query) => PropertyModel.find({"activated": true, query});
export const getPropertyById = (id) => PropertyModel.findOne({"_id": id});
export const getPropertyByCompanyId = (id) => PropertyModel.find({"company_id": id})
export const getPropertyByType = (property_type) => {
    console.log('Searching for property_type:', property_type);
    return PropertyModel.find({ "property_information.property_type": "Apartment" });
  };
  
export const createPropertyAdmin = (values) => new PropertyModel(values)
    .save().then((user) => user.toObject())
export const updatePropertyById = (id, property) => PropertyModel.findByIdAndUpdate(id, property);
export const deletePropertyById = (id) => PropertyModel.findByIdAndDelete(id);

export default PropertyModel;