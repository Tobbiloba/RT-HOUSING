import { sendAgentMessageVerification, sendTourRequestVerification } from "../helpers/index.js";
import { getAllMessageSchema, getMessageTypeSchema, createContactAgentSchema, createTourRequestSchema } from "../mongodb/models/message.js";
import { getPropertyById } from "../mongodb/models/property.js";

const getAllMessageModel = async (req, res) => {
    try{
        const requests = await getAllMessageSchema()
        console.log(requests)

        return res.status(200).json(requests)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}

const getAllTourRequestModel = async (req, res) => {
    try{
        const tourRequest = await getMessageTypeSchema("tourRequest")
        console.log(tourRequest)

        return res.status(200).json(tourRequest)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}


const getAllMessageRequestModel = async (req, res) => {
    try{
        const agentMessage = await getMessageTypeSchema("agentMessage")
        console.log(agentMessage)

        return res.status(200).json(agentMessage)
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}

 const createTourRequestModel = async (req, res) => {
    try{
        const {id} = req.params
        const {
            username, email, phone, tourDate, additionalNote
        } = req.body


        console.log(id, username, email, phone, tourDate, additionalNote)
        if(!username || !email || !phone || !tourDate || !additionalNote ) {
            return res.status(500).json({message: "Pass in necessary parameters"})
        }
        const property = await getPropertyById(id)

        if(!property) {
            return res.status(500).json({message: "Property not found"})
        }
        const propertyName = property.property_information.property_name
        
        console.log(propertyName)

        const tourRequest = await createTourRequestSchema({
            messageType: "tourRequest",
            phone,
            email,
            username,
            tourDate,
            additionalNote,
            propertyId: id
        })

         sendTourRequestVerification(email, username, tourRequest._id, propertyName, tourDate, additionalNote)
        console.log('success')
         return res.status(200).json({status: "Successful"})
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}




 const createAgentMessageModel = async (req, res) => {
    try{
        const {id} = req.params
        const {
            username, email, phone, message
        } = req.body

        const property = await getPropertyById(id)

        if(!username || !email || !phone || !message) {
            return res.status(500).json({message: "Pass in necessary parameters"})
        }

        if(!property) {
            return res.status(404).json({message: "Property not found"})
        }
        console.log(username, email, phone, message)
     

        const createAgentMessage = await createContactAgentSchema({
            username, email, phone, message, propertyId: id
        })
        
        sendAgentMessageVerification(email, username)
        console.log('success')
        return res.status(200).json({status: "Successful"})
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}

export {
    getAllMessageModel,
    getAllMessageRequestModel,
    getAllTourRequestModel,
    createAgentMessageModel,
    createTourRequestModel
}


