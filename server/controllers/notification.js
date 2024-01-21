import { getNotificationSchema, getUserNotificationSchema, createNotificationSchema, updateNotificationSchema, getNotificationByIdSchema } from "../mongodb/models/notification";

const getAllNotificationModel = async (req, res) => {
    try {
        const notification = getNotificationSchema()
        console.log(notification)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}


const getUserNotificationModel = async (req, res) => {
    try{
        const {id} = req.params

        const notifications = getUserNotificationSchema(id)

        console.log(notifications)

        return res.status(500).json(notifications)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error.messsage)
    }
}


// const createNotificationModel = async (req, res) => {
//     try {
//         const {id} = req.params;
//         const {title, }
//     } catch() {
//         console.log(error.message) 
//         return res.status(500).json(error.message)
//     }
// }


const createNotificationModel = async (userId, title, message) => {
    try {
        const notification = await createNotificationSchema({
            userId: userId,
            title: title,
            message: message,
            status: 'unread'
        });
        // Optionally, you can return the created notification or perform other actions here
        return notification;
    } catch (error) {
        console.error(error.message);
        // Optionally, you can throw or handle the error further
    }
};



const updateNotificationModel = async (req, res) => {
    const {id} = req.params;

    try{
        const notification = getNotificationByIdSchema(id)

        if(!notification ) {
            console.log('not found')
            return res.status(500).json({message: "Can't find notification"})
        }

        console.log(notification)
    } catch(error){
        console.log(error)
    } 
}

export {updateNotificationModel, createNotificationModel, getUserNotificationModel, getAllNotificationModel}