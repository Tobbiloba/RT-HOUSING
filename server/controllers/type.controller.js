import { getAllPropertyType, getPropertyTypeByName, createPropertyType } from "../mongodb/models/type.js";
import mongoose from "mongoose"


const getAllPropertyTypeModel = async (req, res) => {

    try {
        console.log('called')
        const types = await getAllPropertyType()
        console.log(types)
        return res.status(200).json(types)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}




 const createPropertyTypeModel = async (req, res) => {
    try {
        const {name} = req.body;
        console.log(name)

        const type = await createPropertyType({
            name: name,
            property_count: 0
        })

        console.log(type)

        return res.status(200).json(type)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}


export {getAllPropertyTypeModel, createPropertyTypeModel}