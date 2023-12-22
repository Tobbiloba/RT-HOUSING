import express from 'express'
import { random } from '../helpers';
import { createProperty, getProperties } from '../db/property';


export const addProperty = async (req: express.Request, res: express.Response) => {
  
    try{
        const { id } = req.params;
        const { property_information } = req.body;
          console.log(id)
        const property: any = await createProperty({
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
                property_images: {
                  bedrooms: property_information?.property_images?.bedrooms,
                  bathrooms: property_information?.property_images?.bathrooms,
                  sitting_room: property_information?.property_images?.sitting_room,
                  balcony: property_information?.property_images?.balcony,
                  swimming_pool: property_information?.property_images?.swimming_pool,
                },
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
                pricing: {
                  pricing_night: property_information?.pricing?.pricing_night,
                  pricing_week: property_information?.pricing?.pricing_week,
                  pricing_month: property_information?.pricing?.pricing_month,
                  security_deposit: property_information?.pricing?.security_deposit,
                  cleaning_fee: property_information?.pricing?.cleaning_fee,
                  additional_fee: property_information?.pricing?.additional_fee,
                },
                availability: {
                  availability_calendar: property_information?.availability?.availability_calendar,
                  minimun_stay_duration: property_information?.availability?.minimun_stay_duration,
                  maximum_stay_duration: property_information?.availability?.maximum_stay_duration,
                },
                guest: {
                  maiximum_ruest: property_information?.guest?.maiximum_ruest,
                  additional_fee: property_information?.guest?.additional_fee,
                },
                additional_features: {
                  wifi: property_information?.additional_features?.wifi,
                  air_conditioning: property_information?.additional_features?.air_conditioning,
                  kitchen: property_information?.additional_features?.kitchen,
                },
                booking_status: property_information?.booking_status,
              },
              
              status: 'success',
        })

        console.log(property)
        return res.status(200).json(property).end()
    } catch(error) {
        console.log(error);

        return res.sendStatus(400);
    }
} 


export const getAllProperties = async (req: express.Request, res: express.Response) => {
  try {
    const properties = await getProperties();
    console.log('get all properties')
    return res.status(200).json(properties);
  } catch (error) {
    console.log(error);

    return res.sendStatus(400);
  }
}