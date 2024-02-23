// @ts-nocheck
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../chatbot/chatbot.css'
import { NotificationCard } from '@/cards'
import { CircularProgress } from '@mui/material'
import { getNotifications, updateNotification } from '@/action/notification'
const Notification = () => {
  const dispatch = useDispatch()
  const { notifications, loading } = useSelector(
    state => state.getNotifications,
  )


  useEffect(() => {
    // Filter notifications with status 'unread' and extract their _id
    if (notifications && notifications.length > 0 && !loading) {
      const unreadIds = notifications
        .filter(notification => notification.status === 'unread')
        .map(notification => notification._id)
      // Set the array of unread _id to the state
      dispatch(updateNotification(unreadIds))
    }
  }, [])
  useEffect(() => {
    dispatch(getNotifications('65c77993a24964910729d98d'))
  }, [])

  return (
    <div className="fixed w-[90vw] md:w-[30rem] right-6 top-[13rem] md:top-[5rem] h-fit bg-slate-900 exo">
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
          <div className='h-[100%] flex items-center justify-center'>
            <p className="text-center py-4  text-[14px]">
            You do not have any notification
          </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notification
