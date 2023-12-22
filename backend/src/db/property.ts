import mongoose from 'mongoose'


const PropertySchema = new mongoose.Schema({
    property_id: {type: String, required: true},
    owner_id: {type: String, required: true},
    // owner_information: {
    //     firstname: {type: String, required: true},
    //     lastname: {type: String, required: true},
    //     username: {type: String, required: true},
    //     profile_img: {type: String, required: true},
    //     about: {type: String, required: true},
    //     contact_phone: {type: String, required: false},
    //     contact_mail: {type: String, required: false},
    //     socials: {
    //         linkedin: {type: String, required: false},
    //         whatsapp: {type: String, required: false},
    //         instagram: {type: String, required: false},
    //     }
    // },
    property_information: {
        property_name: {type: String, required: true},
        property_type: {type: String, required: true},
        property_description: {type: String, required: true},
        property_no_bedrooms: {type: String, required: true},
        property_no_bathroom: {type: String, required: true},
        property_size: {type: String, required: false},
        property_amenities: {type: [String], required: false},
        property_images: {
            bedrooms: {type: [String], required: true},
            bathrooms: {type: [String], required: true},
            sitting_room: {type: [String], required: false},
            balcony: {type: [String], required: false},
            swimming_pool: {type: [String], required: false},
        },
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
        pricing: {
            pricing_night: {type: String, required: false},
            pricing_week: {type: String, required: false},
            pricing_month: {type: String, required: false},
            security_deposit: {type: String, required: false},
            cleaning_fee: {type: String, required: false},
            additional_fee: {type: String, required: false}
        },
        availability: {
            availability_calendar: {type: String, required: false},
            minimun_stay_duration: {type: String, required: true},
            maximum_stay_duration: {type: String, required: true},
        },
        guest: {
            maiximum_ruest: {type: String, required: false},
            additional_fee: {type: String, required: false}
        },
        additional_features: {
            wifi: {type: Boolean, required: false},
            air_conditioning: {type: Boolean, required: false},
            kitchen: {type: Boolean, required: false},
        },
        booking_status: { type: String, enum: ['available', 'booked', 'under maintenance', 'unavailable'], default: 'available' },
        
    },
    created_at: { type: Date, default: Date.now },
    status: {type: String, required: true}
})


export const PropertyModel = mongoose.model('Property', PropertySchema);

export const getProperties = () => PropertyModel.find();
export const getPropertyById = (id: string) => PropertyModel.findOne({"property_id": id});
export const getPropertyByOwner = (id: string) => PropertyModel.findOne({"owner_id": id});
export const createProperty = (values: Record<string, any>) => new PropertyModel(values)
    .save().then((user: any) => user.toObject())