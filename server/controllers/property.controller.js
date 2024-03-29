import Property, {
  createPropertyAdmin,
  getActivatedProperties,
  getPropertyById,
  getPropertyByAdminId,
  updatePropertyById,
  getPropertyByType,
  getProperties,
  deletePropertyByIdSchema
} from "../mongodb/models/property.js";
import User, { getUserById } from "../mongodb/models/user.js";
import PropertyModel from "../mongodb/models/property.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { random } from "../helpers/index.js";
import { getAdminUserById, updateAdminUser } from "../mongodb/models/admin.js";
import { getCompanyByIdSchema } from "../mongodb/models/company.js";
import { createNotificationModel } from "./notification.controller.js";
import { getPropertyTypeByName } from "../mongodb/models/type.js";
dotenv.config();

const getAllProperties = async (req, res) => {
  try {
    const properties = await getProperties();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// const getProp = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const search = req.query.search || "";
//     let sort = req.query.sort || "rating";
//     let type = req.query.type || "All";
//     console.log(page, limit);

//     const propertyTypes = [
//       "apartment",
//       "condo",
//       "multi family space",
//       "single family space",
//       "farm",
//       "loft",
//       "villa",
//       "townhouse",
//     ];
//     console.log(propertyTypes)

//     type === "All"
//       ? (type = [...propertyTypes])
//       : (type = req.query.type.split(","));

//     req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

//     let sortBy = {};
//     if (sort[1]) {
//       sortBy[sort[0]] = sort[1];
//     } else {
//       sortBy[sort[0]] = "asc";
//     }

//     const properties = await Property.find({
//       name: { $regex: search, $options: "i" },
//       type: { $in: type },
//     })
//       .sort(sortBy)
//       .skip(page * limit)
//       .limit(limit);

//     const total = await Property.countDocuments({
//       type: { $in: type },
//       name: { $regex: search, $options: "i" },
//     });

//     const response = {
//       error: false,
//       total,
//       page: page + 1,
//       limit,
//       types: propertyTypes,
//       properties,
//     };

//     console.log(response)

//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: true, message: "Internal Server Error" });
//   }
// };




// const getProp = async (req, res) => {
//   try {
//     const search = req.query.search || "";
//     const propertyType = req.query.type || "All";
//     const property = req.query.property || "";
//     const propertyNoBathrooms = req.query.property_no_bathrooms || "";

//     const propertyTypes = [
//       "Apartment",
//       "Condo",
//       "Multi family space",
//       "Single family space",
//       "Farm",
//       "Loft",
//       "Villa",
//       "Townhouse",
//     ];
// // console.log(propertyType)
//     // let type = propertyType === "All" ? [...propertyTypes] : propertyType.split(",");

//     // // Define the filter criteria
//     const filterCriteria = {
//       name: { $regex: search, $options: "i" },
//       type: { $in: type },
//     };
//     // // console.log(type)
    
//     // if (property) {
//     //   filterCriteria['property_information.property'] = property;
//     // }

//     if (propertyNoBathrooms) {
//       filterCriteria['property_information.property_no_bathrooms'] = propertyNoBathrooms;
//     }
// // console.log(filterCriteria)
//     const properties = await PropertyModel.find(filterCriteria);
//     console.log(properties)

// //     const total = await Property.countDocuments(filterCriteria);

// //     const response = {
// //       error: false,
// //       total,
// //       properties,
// //     };
// // console.log(response)
// //     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: true, message: "Internal Server Error" });
//   }
// };

const getProp = async (req, res) => {
  try {
    const search = req.query.search || "";
    const propertyType = req.query.type || "All";
    const propertyName = req.query.property_name || "";
    const propertyNoBathrooms = req.query.property_no_bathrooms || "";

    const propertyTypes = [
      "Apartment",
      "Condo",
      "Multi family space",
      "Single family space",
      "Farm",
      "Loft",
      "Villa",
      "Townhouse",
    ];

    let type = propertyType === "All" ? [...propertyTypes] : propertyType.split(",");

    // Define the filter criteria
    const filterCriteria = {
      name: { $regex: search, $options: "i" },
      type: { $in: type },
    };

    // Check if propertyName is provided to add it to the filter criteria
    if (propertyName) {
      filterCriteria['property_information.property_name'] = { $regex: propertyName, $options: "i" };
    }

    // Check if propertyNoBathrooms is provided to add it to the filter criteria
    if (propertyNoBathrooms) {
      filterCriteria['property_information.property_no_bathrooms'] = propertyNoBathrooms;
    }

    // Check if any filter criteria are provided
    const shouldFilter = Object.keys(filterCriteria).length > 2; // 2 because 'name' and 'type' are always present

    const properties = shouldFilter
      ? await PropertyModel.find(filterCriteria)
      : await PropertyModel.find();

    const total = shouldFilter
      ? await PropertyModel.countDocuments(filterCriteria)
      : await PropertyModel.countDocuments();

    const response = {
      error: false,
      total,
      properties,
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};





const getAllPropertiesUser = async (req, res) => {
  try {
    const properties = await getActivatedProperties(); // Add await here
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPropertyByAdmin = async (req, res) => {
  try{
    const { id } = req.params;
  const propertyExists = await getPropertyByAdminId(id);
  if (propertyExists) {
    res.status(200).json(propertyExists);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
  } catch (error) {
    return res.status(500)
  }
};

const getPropertyByTypeModel = async (req, res) => {
  const { type } = req.params;
  try {
    console.log(type)
    if (!type) {
      return res.status(500).json({ message: "Input type" });
    }
    const getType = await getPropertyTypeByName(type);
    if (!getType) {
      return res.status(404).json({ message: "Property type not found" });
    }
    const property = await getPropertyByType(type);
    console.log(property)
    return res.status(200).json(property);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getPropertyDetailById = async (req, res) => {
  const { id } = req.params;
  try {
    decodeURIComponent(id);
    const propertyExists = await getPropertyById(id);

    console.log(propertyExists);
    if (propertyExists) {
      res.status(200).json(propertyExists);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    // console.log(error)
    return res.status(500).json(error.message);
  }
};

const getPropertyDetail = async (req, res) => {
  const { id } = req.params;
  const propertyExists = await getPropertyById(id);
  console.log(id);
  if (propertyExists) {
    res.status(200).json(propertyExists);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
};

const createProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const { property_information } = req.body;
    // console.log(property_information?.agent)
// console.log(id, property_information)
    if (!id || !property_information) {
      return res
        .status(404)
        .json({ message: "Pass in the necessary parameters" });
    }
    if(!property_information?.agent.username) {
      return res.status(500).json({message: "You need to have atleast one agent. You can create it in the employee page."})
    }

    const admin = await getAdminUserById(id);

    if (!admin) {
      throw new Error("Admin not found");
      // console.log("end");
      return res.status(500).end();
    }
    // console.log('1')
    const propertyType = await getPropertyTypeByName(
      property_information?.propertyType
    );
    // console.log(property_information?.propertyType)
    if (!propertyType) {

      return res.status(404).json({ messsage: "Property type not found" });
    }

    
    const getRandomBoolean = () => Math.random() < 0.5;

    const newProperty = await createPropertyAdmin({
      isActive: false,
      property_information: {
        property_name: property_information?.propertyName,
        property_type: property_information?.propertyType,
        property_description: property_information?.propertyDescription,
        property_no_bedrooms: property_information?.bedrooms,
        property_no_bathrooms: property_information?.bathrooms,
        property_no_floor: property_information?.floors,
        property_no_garages: property_information?.garages,
        property_size: property_information?.propertySize, // Assuming you want the upper limit of the size range
        property_amenities: property_information?.amenities,
        property_images: property_information?.images,
        property_location: {
          country: property_information?.country,
          state: property_information?.state,
          city: property_information?.city,
          postal_code: property_information?.postalCode,
          address: property_information?.address,
        },
        property_policy: {
          pet_policy: property_information?.pet_policy,
          smoking_policy: property_information?.smoking_policy,
        },
        pricing: property_information.pricing,
        availability: {
          available_date_from: property_information?.availableFromDate,
          available_date_till: property_information?.availableTillDate,
        },
        guest: {
          maximum_children: property_information?.children,
          maximum_adults: property_information?.adults,
          maximum_infants: property_information?.infants,
        },
        booking_status: property_information?.isUnavailable
          ? "unavailable"
          : "available",
      },

      // Use updatedPropertyInformation as needed in your application.
      agent: property_information?.agent,
      isFeatured: getRandomBoolean(), // Randomly set to true or false
      isPopular: getRandomBoolean(), // Randomly set to true or false
      isTopRated: getRandomBoolean(),
      admin_name: admin.username,
      admin_id: admin._id,
      created_by: id,
    });
    // console.log('1')
    // if(property_information?.agent) {
    //   admin.employee = property_information?.agent
    //   await admin.save()
    // }

    propertyType.property_count = propertyType.property_count + 1;
    await propertyType.save();
    // console.log('newProperty');
    // console.log(newProperty);
    // notifyEmployees(company);

    createNotificationModel({
      id,
      title: "Property Creation Successful",
      message: `Dear User, 
    
    We are pleased to inform you that your recent property creation has been successfully completed. The property, named ${newProperty.property_information.property_name}, has been registered with the unique identifier ${newProperty._id}.
    
    Thank you for choosing our platform. If you have any further inquiries or require assistance, please feel free to contact our support team.
    
    Best Regards,
    Febtos`,
    });

    console.log('success')

    res.status(200).json(newProperty);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Assuming createNotificationModel is a function that creates a notification for a given userId
// const createNotificationModel = async (userId, title, message) => {
//     try {
//         // Implementation of createNotificationModel
//         // ...
//         console.log(`Notification created for userId: ${userId}`);
//     } catch (error) {
//         console.error(error.message);
//     }
// };

// Function to map over company.employees and call createNotificationModel for each employee_id
const notifyEmployees = async (company) => {
  if (!company || !company.employees || !Array.isArray(company.employees)) {
    console.error("Invalid company object or employees array.");
    return;
  }

  // Assuming you have title and message for the notification
  const title = "Notification Title";
  const message = "Notification Message";

  // Map over employees and call createNotificationModel for each employee_id
  await Promise.all(
    company.employees.map(async (employee) => {
      if (employee && employee.employee_id) {
        // console.log(employee.employee_id)
        await createNotificationModel({
          id: employee.employee_id,
          title: title,
          message: message,
        });
      }
    })
  );

  console.log("Notification process completed for all employees.");
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { property_information } = req.body;

    const existingPropertyInformation = await getPropertyById(id);

    if (!existingPropertyInformation) {
      return res.status(400).json({ message: "Property doesn't exist" });
    }

    const updatedProperty = await updatePropertyById(
      { _id: id },
      {
        $set: {
          property_information: {
            ...existingPropertyInformation.property_information,
            ...property_information,
          },
        },
      }
    );

    console.log(updatedProperty);

    res
      .status(200)
      .json({ message: "Property updated successfully", updatedProperty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// const updateProperty = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { property_information } = req.body;

//     const existingPropertyInformation = await getPropertyById(id);

//     if (!existingPropertyInformation) {
//       return res.status(500).json({ message: "property doesn't exist" });
//     }
//     // console.log(existingPropertyInformation.property_information)

//     const updateProperty = await updatePropertyById(
//       // const updateProperty = await updatePropertyById(
//       { _id: id },
//       {
//         $set: {
//           property_information: {
//             /* ...property_information */
//           },
//         },
//       }
//       //   );
//       // { _id: id },
//       // {
//       //     property_information: {
//       //         ...existingPropertyInformation, // Copy existing properties
//       //         property_name:property_information?.property_name || existingPropertyInformation.property_information.property_name,
//       //         property_type: property_information?.property_type,
//       //         property_description: property_information?.property_description,
//       //         property_no_bedrooms: property_information?.property_no_bedrooms,
//       //         property_no_bathroom: property_information?.property_no_bathroom,
//       //         property_size: property_information?.property_size,
//       //         property_amenities: property_information?.property_amenities,
//       //         property_images: property_information?.property_images,
//       //         property_review: property_information?.property_review,
//       //         property_avg_ratings: property_information?.property_avg_ratings,
//       //         property_location: {
//       //           ...existingPropertyInformation?.property_location, // Copy existing location properties
//       //           country: property_information?.property_location?.country,
//       //           state: property_information?.property_location?.state,
//       //           zip_code: property_information?.property_location?.zip_code,
//       //         },
//       //         property_policy: {
//       //           ...existingPropertyInformation?.property_policy, // Copy existing policy properties
//       //           pet_policy: property_information?.property_policy?.pet_policy,
//       //           smoking_policy: property_information?.property_policy?.smoking_policy,
//       //         },
//       //         pricing: property_information?.pricing,
//       //         availability: {
//       //           ...existingPropertyInformation?.availability, // Copy existing availability properties
//       //           available_date_from: property_information?.availability?.available_date_from,
//       //           available_date_till: property_information?.availability?.available_date_till,
//       //           unavailable_date_from: property_information?.availability?.unavailable_date_from,
//       //           unavailable_date_till: property_information?.availability?.unavailable_date_till,
//       //           occupied_date_from: property_information?.availability?.occupied_date_from,
//       //           occupied_date_till: property_information?.availability?.occupied_date_till,
//       //         },
//       //         guest: {
//       //           ...existingPropertyInformation?.guest, // Copy existing guest properties
//       //           maximum_children: property_information?.guest?.maximum_children,
//       //           maximum_adults: property_information?.guest?.maximum_adults,
//       //           maximum_infants: property_information?.guest?.maximum_infants,
//       //         },
//       //         booking_status: property_information?.booking_status,
//       //       }
//       // },
//     );

//     console.log(updateProperty);

//     res
//       .status(200)
//       .json({ message: "Property updated successfully", updateProperty });
//   } catch (error) {
//     // console.log(error)
//     res.status(500).json({ message: error.message });
//   }
// };

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
    // const existingPropertyInformation = await getPropertyById(id);
    // // console.log(existingPropertyInformation);

    // if (!existingPropertyInformation) {
    //   return res.status(404).json({ message: "Property doesn't exist" });
    // }

    // const updatedProperty = {
    //   ...existingPropertyInformation.toObject(), // Use toObject() to convert Mongoose document to a plain object
    //   activated: true,
    // };

    // const activated = await updatePropertyById(id, updatedProperty);
    const property = await getPropertyById(id);
    if (!property) {
      return res.status(500).json({ message: "Property not found" });
    }
    console.log(property);
    property.isActive = true;
    await property.save();
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
    // console.log(activated);
    const property = await getPropertyById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    console.log(property);
    property.isActive = false;
    await property.save();
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
    const filterObject = req.query;
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
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    if(!id) {
      return res.status(400).json({message: "Id not found"})
    }
const deleteProperty = await deletePropertyByIdSchema(id)
console.log(deleteProperty)
    // const propertyToDelete = await Property.findById({ _id: id }).populate(
    //   "creator"
    // );

    // if (!propertyToDelete) throw new Error("Property not found");

    // const session = await mongoose.startSession();
    // session.startTransaction();

    // propertyToDelete.remove({ session });
    // propertyToDelete.creator.allProperties.pull(propertyToDelete);

    // await propertyToDelete.creator.save({ session });
    // await session.commitTransaction();

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const propertyToDelete = await findPropertyById(id);

    if (!propertyToDelete) {
      return res.status(404).json({ message: "Property doesn't exist" });
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
  getPropertyByAdmin,
  getPropertyDetailById,
  activateProperty,
  getAllPropertiesUser,
  deActivateProperty,
  filterProperty,
  getPropertyByTypeModel,
  getProp,
};
