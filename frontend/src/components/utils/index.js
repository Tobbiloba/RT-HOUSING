import { addDays, format, startOfToday } from 'date-fns';

export const getNext7Days = () => {
  const currentDate = startOfToday();
  const next7Days = [];

  for (let i = 0; i < 7; i++) {
    const nextDate = addDays(currentDate, i);
    const dayOfWeek = format(nextDate, 'eeee'); // Full day name (e.g., Monday)
    const dateOfMonth = format(nextDate, 'do'); // Day of the month with ordinal suffix (e.g., 1st, 2nd)
    const monthOfYear = format(nextDate, 'MMMM'); // Full month name (e.g., January)

    next7Days.push({
      dayOfWeek,
      dateOfMonth,
      monthOfYear,
    });
  }

  return next7Days;
};


export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12) || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};




export function timeAgo(isoDateString) {
  const date = new Date(isoDateString);
  const now = new Date();
  const diffInMillis = now - date;
  const diffInSeconds = Math.floor(diffInMillis / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
}