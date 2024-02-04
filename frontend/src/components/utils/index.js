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
