import { getNotificationSchema, getUserNotificationSchema, createNotificationSchema, updateNotificationSchema, getNotificationByIdSchema } from "../mongodb/models/notification.js";

const getAllNotificationModel = async (req, res) => {
    try {
        const notification = await getNotificationSchema()
        console.log(notification)

        return res.status(200).json(notification)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}


const getUserNotificationModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // Assuming getUserNotificationSchema is a function that retrieves notifications for a given user
        const notifications = await getUserNotificationSchema(id);

        console.log(notifications);

        let filteredNotifications;

        if (status === 'read') {
            filteredNotifications = notifications.filter((item) => item.status === 'read');
        } else if (status === 'unread') {
            filteredNotifications = notifications.filter((item) => item.status === 'unread');
        } else {
            // If no status is provided, return all notifications
            filteredNotifications = notifications;
        }

        return res.status(200).json(filteredNotifications);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};


// const createNotificationModel = async (req, res) => {
//     try {
//         const {id} = req.params;
//         const {title, }
//     } catch() {
//         console.log(error.message) 
//         return res.status(500).json(error.message)
//     }
// }


const createNotificationModel = async ({id, title, message}) => {
    try {
        console.log('notification')
        console.log(id, title, message)
        const notification = await createNotificationSchema({
            userId: id,
            title: title,
            message: message,
            status: 'unread'
        });

        console.log(notification)
        // Optionally, you can return the created notification or perform other actions here
        // return notification;
    } catch (error) {
        console.error(error.message);
        // Optionally, you can throw or handle the error further
    }
};

// const getUserReadNotification = (async)


const updateNotificationModel = async (req, res) => {
    const { ids } = req.body; // Assuming the array of IDs is passed in the request body
  
    try {
      // Find all notifications with the given IDs
      const notifications = await getNotificationByIdSchema(ids);
      console.log(notifications)
  
      if (!notifications || notifications.length === 0) {
        console.log('Notifications not found');
        return res.status(404).json({ message: "No notifications found" });
      }
  
      // Update the status of each notification to 'read'
      notifications.forEach(async (notification) => {
        notification.status = 'read';
        await notification.save();
      });
  
      console.log(notifications);
      return res.status(200).json({ message: "Marked as read" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

export {updateNotificationModel, createNotificationModel, getUserNotificationModel, getAllNotificationModel}