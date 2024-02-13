import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const notificationsArray = [
  {
    title: 'Notification 1',
    message: 'Random message 123',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)), // Random date within January 2022
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/5125/5125453.png',
  },
  {
    title: 'Notification 2',
    message: 'Random message 456',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
  },
  {
    title: 'Notification 3',
    message: 'Random message 789',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
    imageUrl: 'https://example.com/image3.jpg',
  },
  {
    title: 'Notification 4',
    message: 'Random message 101',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
  },
  {
    title: 'Notification 5',
    message: 'Random message 202',
    status: 'unread',
    date: new Date(2024, 0, 1 + Math.floor(Math.random() * 30)),
  },
  {
    title: 'Notification 6',
    message: 'Random message 303',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/4140/4140039.png',
  },
  {
    title: 'Notification 7',
    message: 'Random message 404',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
  },
  {
    title: 'Notification 8',
    message: 'Random message 505',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
  },
  {
    title: 'Notification 9',
    message: 'Random message 606',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/2940/2940654.png',
  },
  {
    title: 'Notification 10',
    message: 'Random message 707',
    status: 'unread',
    date: new Date(2022, 0, 1 + Math.floor(Math.random() * 30)),
  },
]
import '../chatbot/chatbot.css'
import { NotificationCard } from '@/cards'
import { CircularProgress } from '@mui/material'
import { getNotifications, updateNotification } from '@/action/notification'
const Notification = () => {
  const dispatch = useDispatch()
  const { notifications, loading } = useSelector(
    state => state.getNotifications,
  )
  const [unreadNotificationIds, setUnreadNotificationIds] = useState([])

  //   console.log(notifications)

  useEffect(() => {
    // Filter notifications with status 'unread' and extract their _id
    if (notifications && notifications.length > 0 && !loading) {
      const unreadIds = notifications
        .filter(notification => notification.status === 'unread')
        .map(notification => notification._id)
      // Set the array of unread _id to the state
      setUnreadNotificationIds(unreadIds)
      dispatch(updateNotification(unreadIds))
    }
  }, [])
  useEffect(() => {
    // dispatch(getNotifications('65c77993a24964910729d98d'))
  }, [])

  console.log(unreadNotificationIds)

  //   useEffect(() => {
  //     if(unreadNotificationIds) {
  //         console.log(unreadNotificationIds)
  //     }
  //   }, [])

  return (
    <div className="fixed w-[90vw] md:w-[30rem] right-6 top-[13rem] md:top-[5rem] h-fit bg-slate-800">
      <h1 className="border-b p-4 text-[14px] font-[600]">Notifications</h1>
      <div className="flex-1 h-[25rem] ">
        {loading ? (
          <div className="flex justify-center py-[4rem]">
            <CircularProgress />
          </div>
        ) : notifications && notifications.length > 0 ? (
          <div className="overflow-y-scroll h-[100%]">
            {notifications.map((item, index) => (
              <NotificationCard item={item} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center py-4 text-[13px]">
            You do not have any notifications.
          </p>
        )}
      </div>
    </div>
  )
}

export default Notification
