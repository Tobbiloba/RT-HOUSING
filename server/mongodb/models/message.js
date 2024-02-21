import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
    email: {type: String, required: false},
    message: {type: String, required: false},
    propertyId: {type: String, required: false},
    created_at: { type: Date, default: Date.now },
    phone: {type: String, required: false},
    tourDate: {type: Object, required: false},
    messageType: {type: String, required: false},
    additionalNote: {type: String, required: false},
    username: {type: String, required: true},
    propertyId: {type: String, required: true}
})

const MessageModel = mongoose.model("Message", MessageSchema)

export const getAllMessageSchema = () => MessageModel.find();
export const getMessageTypeSchema = (type) => MessageModel.find({"messageType": type})
export const createTourRequestSchema = (values) => new MessageModel(values)
    .save().then((user) => user.toObject())
export const createContactAgentSchema = (values) => new MessageModel(values)
    .save().then((user) => user.toObject())