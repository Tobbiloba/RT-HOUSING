import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { random } from "../helpers/index.js";
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
        const {
            user_id,
            property_information
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found");

        // Assuming property_image is an array of image objects
const propertyImages = property_information?.propery_information.property_image;

// if (propertyImages && propertyImages.length > 0) {
  // Use Promise.all to upload all images concurrently
  const uploadedImages = await Promise.all(
    propertyImages.map(async (image) => {
      const { url } = await cloudinary.uploader.upload(image);
      return url;
    })
  );
console.log(uploadedImages)
// }

        const newProperty = await Property.create({
            property_id: random(),
            owner_id: user_id,
            property_information: {
                property_name: property_information?.property_name,
                property_type: property_information?.property_type,
                property_description: property_information?.property_description,
                property_no_bedrooms: property_information?.property_no_bedrooms,
                property_no_bathroom: property_information?.property_no_bathroom,
                property_size: property_information?.property_size,
                property_amenities: property_information?.property_amenities,
                property_images: uploadedImages,
                property_review: property_information?.property_review,
                property_avg_ratings: property_information?.property_avg_ratings,
                property_location: {
                  country: property_information?.property_location?.country,
                  state: property_information?.property_location?.state,
                  zip_code: property_information?.property_location?.zip_code,
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
        });

        user.allProperties.push(newProperty._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Property created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, propertyType, location, price, photo } =
            req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        await Property.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                propertyType,
                location,
                price,
                photo: photoUrl.url || photo,
            },
        );

        res.status(200).json({ message: "Property updated successfully" });
    } catch (error) {
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

export {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty,
};
