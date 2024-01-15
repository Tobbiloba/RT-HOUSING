import Property, { createPropertyAdmin, getActivatedProperties, getPropertyById, getPropertyByOwnerId, updatePropertyById } from "../mongodb/models/property.js";
import User, { getUserById } from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { random } from "../helpers/index.js";
import { getAdminUserById, updateAdminUser } from "../mongodb/models/admin.js";
import { getCompanyByIdSchema } from "../mongodb/models/company.js";
dotenv.config();


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



const getAllPropertiesUser = async (req, res) => {
    try {
        // console.log(req.query)
        const properties = await getActivatedProperties(req.query); // Add await here

        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPropertyByOwner = async (req, res) => {
    const { id } = req.params;

    // console.log(id)
    const propertyExists = await getPropertyByOwnerId({ _id: id })


    // console.log(propertyExists)
    if (propertyExists) {
        res.status(200).json(propertyExists);
    } else {
        res.status(404).json({ message: "Property not found" });
    }
};
const getPropertyDetailById = async (req, res) => {
    const { id } = req.params;
    try{
        console.log(decodeURIComponent(id))
        decodeURIComponent(id)
        const propertyExists = await getPropertyById(id)
    
    
        console.log(propertyExists)
        if (propertyExists) {
            // console.log(propertyExists)
            res.status(200).json(propertyExists);
        } else {
            
            res.status(404).json({ message: "Property not found" });
        }
    }

    catch(error) {
        // console.log(error)
        return res.status(500).json(error.message)
    }
   
};

const getPropertyDetail = async (req, res) => {
    const { id } = req.params;
    const propertyExists = await getPropertyById(id)
console.log(id)
    if (propertyExists) {
        res.status(200).json(propertyExists);
    } else {
        res.status(404).json({ message: "Property not found" });
    }
};










const createProperty = async (req, res) => {
    try {
        const {id} = req.params;

        const {
            property_information
        } = req.body;

        // console.log(id, property_information)

        

        if(!id || !property_information) {
            return res.status(500).json({message: "Pass in the necessary parameters"})
        }

        // console.log(id)

        // const session = await mongoose.startSession();
        // session.startTransaction();

        // const user = await getAdminUserById(id);
        const company = await getCompanyByIdSchema(id)
        // console.log(company)

        if (!company) {throw new Error("Company not found")
        return res.status(500).end()
    };
    // console.log(user)
    const property_id = random()

        const newProperty = await createPropertyAdmin({
            property_id: property_id,
            isActive: false,
            property_information: {
                property_name: property_information?.property_name,
                property_type: property_information?.property_type,
                property_description: property_information?.property_description,
                property_no_bedrooms: property_information?.property_no_bedrooms,
                property_no_bathrooms: property_information?.property_no_bathroom,
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
                    unavailability_reason: property_information?.availability?.unavailability_reason || '',
                  },
                  guest: {
                    maximum_children: property_information?.guest?.maximum_children,
                    maximum_adults: property_information?.guest?.maximum_adults,
                    maximum_infants: property_information?.guest?.maximum_infants,
                  },
                  booking_status: property_information?.booking_status || 'available',
                  
            },
        company_name: company.company_name,
        company_id: company._id,
            created_by: id
        });


        // console.log(newProperty)
        // company.allProperties.push(newProperty._id);
        // console.log(newProperty._id)
        // newProperty.creator.push(newProperty.owner_id)
        // await company.save();
        // await newProperty.save()


        res.status(200).json(newProperty);
    } catch (error) {
        // console.log(error)
        res.status(500).json({ message: error.message });
    }
};


const updateProperty = async (req, res) => {
    try {
        const {id} = req.params;
        const {
            
            property_information
        } = req.body;


        const existingPropertyInformation = getPropertyById(id)

        if(!existingPropertyInformation) {
            return res.status(500).json({message: "property doesn't exist"})
        }


        await updatePropertyById(
            { _id: id },
            {
                property_information: {
                    ...existingPropertyInformation, // Copy existing properties
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
                      ...existingPropertyInformation?.property_location, // Copy existing location properties
                      country: property_information?.property_location?.country,
                      state: property_information?.property_location?.state,
                      zip_code: property_information?.property_location?.zip_code,
                    },
                    property_policy: {
                      ...existingPropertyInformation?.property_policy, // Copy existing policy properties
                      pet_policy: property_information?.property_policy?.pet_policy,
                      smoking_policy: property_information?.property_policy?.smoking_policy,
                    },
                    pricing: property_information?.pricing,
                    availability: {
                      ...existingPropertyInformation?.availability, // Copy existing availability properties
                      available_date_from: property_information?.availability?.available_date_from,
                      available_date_till: property_information?.availability?.available_date_till,
                      unavailable_date_from: property_information?.availability?.unavailable_date_from,
                      unavailable_date_till: property_information?.availability?.unavailable_date_till,
                      occupied_date_from: property_information?.availability?.occupied_date_from,
                      occupied_date_till: property_information?.availability?.occupied_date_till,
                    },
                    guest: {
                      ...existingPropertyInformation?.guest, // Copy existing guest properties
                      maximum_children: property_information?.guest?.maximum_children,
                      maximum_adults: property_information?.guest?.maximum_adults,
                      maximum_infants: property_information?.guest?.maximum_infants,
                    },
                    booking_status: property_information?.booking_status,
                  }
            },
        );

        res.status(200).json({ message: "Property updated successfully" });
    } catch (error) {
        // console.log(error)
        res.status(500).json({ message: error.message });
    }
};



// const activateProperty = async (req, res) => {
//     const {id} = req.params;
//     // const {mode} = r

//     console.log(id)
//     const  existingPropertyInformation = await getPropertyById(id)
//     console.log(existingPropertyInformation)
//     try {

//         if(!existingPropertyInformation) {
//             return res.status(500).json({message: "property doesn't exist"})
//         }

//         const updatedProperty = {
//             ...existingPropertyInformation,
//             activated: true
//           };

          

         

//     const activated = await updatePropertyById(id, updatedProperty)
//     console.log(activated)

//     return res.status(201).json({message: "Successfully activated"})
//     } catch (error) {
//         return res.status(500).json(error.message)
//     }
// }


const activateProperty = async (req, res) => {
    const { id } = req.params;
    // console.log(id);

    try {
        const existingPropertyInformation = await getPropertyById(id);
        // console.log(existingPropertyInformation);

        if (!existingPropertyInformation) {
            return res.status(404).json({ message: "Property doesn't exist" });
        }

        const updatedProperty = {
            ...existingPropertyInformation.toObject(), // Use toObject() to convert Mongoose document to a plain object
            activated: true,
        };

        const activated = await updatePropertyById(id, updatedProperty);
        // console.log(activated);

        return res.status(201).json({ message: "Successfully activated" });
    } catch (error) {
        // console.error(error);
        return res.status(500).json({ message: error.message });
    }
};



const deActivateProperty = async (req, res) => {
    const { id } = req.params;
    // console.log(id);

    try {
        const existingPropertyInformation = await getPropertyById(id);
        // console.log(existingPropertyInformation);

        if (!existingPropertyInformation) {
            return res.status(404).json({ message: "Property doesn't exist" });
        }

        const updatedProperty = {
            ...existingPropertyInformation.toObject(), // Use toObject() to convert Mongoose document to a plain object
            activated: false,
        };

        const activated = await updatePropertyById(id, updatedProperty);
        // console.log(activated);

        return res.status(201).json({ message: "Successfully deactivated" });
    } catch (error) {
        // console.error(error);
        return res.status(500).json({ message: error.message });
    }
};



const filterProperty = async (req, res) => {
    try {
        // console.log('lol')
    //   Fetch all activated properties
      const activatedProperties = await getActivatedProperties();
      const filterObject = req.query
    //   console.log(filterObject)

      // Filter the activated properties based on dynamic criteria in filterObject
    //   const result = activatedProperties.filter(property => {
    //     // Check each filter criteria
    //     for (const key in filterObject) {
    //       if (Object.hasOwnProperty.call(filterObject, key)) {
    //         const filterValue = filterObject[key];
  
    //         // Handle array of amenities
    //         if (key === 'property_amenities' && filterValue instanceof Array) {
    //           const propertyAmenities = property[key] || [];
    //           const matchingAmenities = filterValue.filter(amenity => propertyAmenities.includes(amenity));
    //           if (matchingAmenities.length === 0) {
    //             return false; // No matching amenities, skip this property
    //           }
    //         } else if (property[key] !== filterValue) {
    //           return false; // Criteria doesn't match, skip this property
    //         }
    //       }
    //     }
  
    //     return true; // All criteria match, include this property
    //   });

    //   console.log(result)
  
    //   return result;


      
      } catch (error) {
        // console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    
}

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
    getPropertyDetailById,
    activateProperty,
    getAllPropertiesUser,
    deActivateProperty,
    filterProperty
};
