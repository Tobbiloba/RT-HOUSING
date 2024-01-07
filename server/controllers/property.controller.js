import Property, { createPropertyAdmin, getPropertyById, getPropertyByOwnerId, updatePropertyById } from "../mongodb/models/property.js";
import User, { getUserById } from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { random } from "../helpers/index.js";
import { getAdminUserById } from "../mongodb/models/admin.js";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProperties = async (req, res) => {
    const {
        _end,
        _order,
        _start,
        _sort,
        title_like = "",
        propertyType = "",
    } = req.query;

    const query = {};

    if (propertyType !== "") {
        query.propertyType = propertyType;
    }

    if (title_like) {
        query.title = { $regex: title_like, $options: "i" };
    }

    try {
        const count = await Property.countDocuments({ query });

        const properties = await Property.find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order });

        res.header("x-total-count", count);
        res.header("Access-Control-Expose-Headers", "x-total-count");

        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getPropertyByOwner = async (req, res) => {
    const { id } = req.params;

    console.log(id)
    const propertyExists = await getPropertyByOwnerId({ _id: id })


    console.log(propertyExists)
    if (propertyExists) {
        res.status(200).json(propertyExists);
    } else {
        res.status(404).json({ message: "Property not found" });
    }
};



const getPropertyDetailById = async (req, res) => {
    const { id } = req.params;

    console.log(id)
    decodeURIComponent(id)
    const propertyExists = await getPropertyById({ _id: decodeURIComponent(id) })


    console.log(propertyExists)
    if (propertyExists) {
        res.status(200).json(propertyExists);
    } else {
        res.status(404).json({ message: "Property not found" });
    }
};

const getPropertyDetail = async (req, res) => {
    const { id } = req.params;
    const propertyExists = await Property.findOne({ _id: id }).populate(
        "creator",
    );

    if (propertyExists) {
        res.status(200).json(propertyExists);
    } else {
        res.status(404).json({ message: "Property not found" });
    }
};










const createProperty = async (req, res) => {
    try {
        // const { id } = req.params;

        const {
            id,
            property_information
        } = req.body;

        console.log(id, property_information)

        if(!id || !property_information) {
            return res.status(500).json({message: "Pass in the necessary parameters"})
        }

        console.log(id)

        // const session = await mongoose.startSession();
        // session.startTransaction();

        const user = await getAdminUserById(id);
        console.log(user)

        if (!user) {throw new Error("User not found")
        return res.status(500).end()
    };

    console.log({
        property_id: random(),
        owner_id: id,
        property_information: {
            property_name: property_information?.property_name,
            property_type: property_information?.property_type,
            property_description: property_information?.property_description,
            property_no_bedrooms: property_information?.property_no_bedrooms,
            property_no_bathroom: property_information?.property_no_bathroom,
            property_size: property_information?.property_size,
            property_amenities: property_information?.property_amenities,
            property_images: property_information?.property_images,
            property_review: property_information?.property_review,
            property_avg_ratings: property_information?.property_avg_ratings,
            property_location: {
              country: property_information?.property_location?.country,
              state: property_information?.property_location?.state,
              city: property_information?.property_location?.city,
            },
            property_policy: {
                pet_policy: property_information?.property_policy?.pet_policy,
                smoking_policy: property_information?.property_policy?.smoking_policy,
              },
              pricing: property_information.pricing,
              availability: {
                available_date_from: property_information?.availability?.available_date_from,
                available_date_till: property_information?.availability?.available_date_till,
                unavailable_date_from: property_information?.availability?.available_date_from,
                unavailable_date_till: property_information?.availability?.available_date_till,
                occupied_date_from: property_information?.availability?.occupied_date_from,
                occupied_date_till: property_information?.availability?.occupied_date_till,
              },
              guest: {
                maximum_children: property_information?.guest?.maximum_children,
                maximum_adults: property_information?.guest?.maximum_adults,
                maximum_infants: property_information?.guest?.maximum_infants,
              },
              booking_status: property_information?.booking_status,
        }
    })
        const newProperty = await createPropertyAdmin({
            property_id: random(),
            owner_id: id,
            property_information: {
                property_name: property_information?.property_name,
                property_type: property_information?.property_type,
                property_description: property_information?.property_description,
                property_no_bedrooms: property_information?.property_no_bedrooms,
                property_no_bathroom: property_information?.property_no_bathroom,
                property_size: property_information?.property_size,
                property_amenities: property_information?.property_amenities,
                property_images: property_information?.property_images,
                property_location: {
                  country: property_information?.property_location?.country,
                  state: property_information?.property_location?.state,
                  city: property_information?.property_location?.city,
                },
                property_policy: {
                    pet_policy: property_information?.property_policy?.pet_policy,
                    smoking_policy: property_information?.property_policy?.smoking_policy,
                  },
                  pricing: property_information.pricing,
                  availability: {
                    available_date_from: property_information?.availability?.available_date_from,
                    available_date_till: property_information?.availability?.available_date_till,
                    unavailable_date_from: property_information?.availability?.available_date_from || [],
                    unavailable_date_till: property_information?.availability?.available_date_till || [],
                    occupied_date_from: property_information?.availability?.occupied_date_from || [],
                    occupied_date_till: property_information?.availability?.occupied_date_till || [],
                  },
                  guest: {
                    maximum_children: property_information?.guest?.maximum_children,
                    maximum_adults: property_information?.guest?.maximum_adults,
                    maximum_infants: property_information?.guest?.maximum_infants,
                  },
                  booking_status: property_information?.booking_status || 'available',
                  
            },
            status: 'Successful'
        });

        // user.allProperties.push(newProperty._id);
        // await user.save({ session });

        // await session.commitTransaction();

        res.status(200).json({ message: "Property created successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};




























const updateProperty = async (req, res) => {
    try {
        const {
            id,
            property_information
        } = req.body;


        await updatePropertyById(
            { _id: id },
            {
                property_information: {
                    property_name: property_information?.property_name || null,
                    property_type: property_information?.property_type || null,
                    property_description: property_information?.property_description || null,
                    property_no_bedrooms: property_information?.property_no_bedrooms || null,
                    property_no_bathroom: property_information?.property_no_bathroom || null,
                    property_size: property_information?.property_size || null,
                    property_amenities: property_information?.property_amenities || null,
                    property_images: property_information?.property_images || null,
                    property_review: property_information?.property_review || null,
                    property_avg_ratings: property_information?.property_avg_ratings || null,
                    property_location: {
                      country: property_information?.property_location?.country || null,
                      state: property_information?.property_location?.state || null,
                      zip_code: property_information?.property_location?.zip_code || null,
                    },
                    property_policy: {
                        pet_policy: property_information?.property_policy?.pet_policy || null,
                        smoking_policy: property_information?.property_policy?.smoking_policy || null,
                      },
                      pricing: property_information.pricing || null,
                      availability: {
                        available_date_from: property_information?.availability?.available_date_from || null,
                        available_date_till: property_information?.availability?.available_date_till || null,
                        unavailable_date_from: property_information?.availability?.available_date_from || null,
                        unavailable_date_till: property_information?.availability?.available_date_till || null,
                        occupied_date_from: property_information?.availability?.occupied_date_from || null,
                        occupied_date_till: property_information?.availability?.occupied_date_till || null,
                      },
                      guest: {
                        maximum_children: property_information?.guest?.maximum_children || null,
                        maximum_adults: property_information?.guest?.maximum_adults || null,
                        maximum_infants: property_information?.guest?.maximum_infants || null,
                      },
                      booking_status: property_information?.booking_status || null,
                }
            },
        );

        res.status(200).json({ message: "Property updated successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const propertyToDelete = await Property.findById({ _id: id }).populate(
            "creator",
        );

        if (!propertyToDelete) throw new Error("Property not found");

        const session = await mongoose.startSession();
        session.startTransaction();

        propertyToDelete.remove({ session });
        propertyToDelete.creator.allProperties.pull(propertyToDelete);

        await propertyToDelete.creator.save({ session });
        await session.commitTransaction();

        res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};






const deletePropertyById = async (req, res) => {
    try {
        const { id } = req.params;

        const propertyToDelete = await findPropertyById(id)

        if(!propertyToDelete) {
            return res.status(500).json({message: "Property doesn't exist"})
        }

        // const deleteProperty= await deletePropertyId

        res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty,
    getPropertyByOwner,
    getPropertyDetailById
};
