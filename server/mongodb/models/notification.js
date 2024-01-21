import mongoose from "mongoose"

const NotificationSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
    status: {type: String,
        enum: ["read", "unread"],
        default: "unread"},
    timeStamp: {type: Date, default: Date.now }
})

const NotificationModel = mongoose.model("Notification", NotificationSchema)

export const getNotificationSchema = (no) => NotificationModel.find({}).limit(no)
export const getUserNotificationSchema = (id) => NotificationModel.find({"userId": id})
export const getNotificationByIdSchema = (id) => NotificationModel.findOne({"_id": id})
export const createNotificationSchema = (values) => new NotificationModel(values).save().then((notification) => notification.toObject())
export const updateNotificationSchema = (id, value) => NotificationModel.findByIdAndUpdate(id, value)