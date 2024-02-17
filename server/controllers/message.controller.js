import { sendTourRequestVerification } from "../helpers/index.js";
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
        const {
            name, email, date, phone, propertyId, requestDate, additionalNote
        } = req.body

        if(!name || !email || !phone || !date || !requestDate) {
            return res.status(500).json({message: "Pass in necessary parameters"})
        }
        const property = await getPropertyById(propertyId)

        if(!property) {
            return res.status(500).json({message: "Property not found"})
        }
        const propertyName = property.property_information.property_name
        
       

        const tourRequest = await createTourRequestSchema({
            messageType: "tourRequest",
            phone,
            email,
            name
        })

         sendTourRequestVerification(email, name, tourRequest._id, propertyName, requestDate, additionalNote)

         return res.status(200).json({status: "Successful"})
    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}




 const createAgentMessageModel = async (req, res) => {
    try{
        const {
            name, email, phone, message
        } = req.body

        if(!name || !email || !phone || !message) {
            return res.status(500).json({message: "Pass in necessary parameters"})
        }
        console.log(name, email, phone, message)
     

        const createAgentMessage = createContactAgentSchema({
            
        })
        

    } catch(error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}

export {
    getAllMessageModel,
    getAllMessageRequestModel,
    getAllTourRequestModel,
    createAgentMessageModel,
    createTourRequestModel
}


