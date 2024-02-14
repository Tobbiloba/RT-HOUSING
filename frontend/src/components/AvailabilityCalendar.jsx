import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AvailabilityCalendar = ({
  availableFromDate,
  availableToDate,
}) => {
  // Get current date
  let today = startOfToday()

  // Initialize state for selected day and current month
  const [selectedDay, setSelectedDay] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))

  // Calculate the first day of the current month
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  // Generate an array of days for the current month
  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  // Function to handle previous month button click
  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  // Function to handle next month button click
  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  // Function to check if a date is available based on props
  const isDateAvailable = date => {
    // Replace these with actual props passed to the component
    // const availableFromDate = '03/01/2024'; // Example date format: 'dd/MM/yyyy'
    // const availableToDate = '08/01/2024';
    // const unavailableFromDate = '13/01/2024';
    // const unavailableToDate = '18/01/2024';

    // Current date
    const currentDate = startOfToday()

    // Check if the date is not before the current date
    if (date >= currentDate) {
      // Implement the availability logic based on props
       if (
        availableFromDate &&
        availableToDate &&
        date >= parse(availableFromDate, 'dd/MM/yyyy', new Date()) &&
        date <= parse(availableToDate, 'dd/MM/yyyy', new Date())
      ) {
        return 'available'
      } 
    }

    //  console.log('lol')
    return 'gray'
  }

  return (
    <div className="w-[23rem] border p-3 shadow-md">
      <div className=" w-[100%]">
        <div className="">
          <div className="">
            <div className="flex items-center p-2">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <MdKeyboardArrowLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <MdKeyboardArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && 'col-start-2',
                    'py-1.5',
                  )}
                >
                  <button
                    type="button"
                    className={classNames(
                      isEqual(day, today) && 'text-black',
                      isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900',
                      !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-sm',
                      isDateAvailable(day) === 'available' && 'bg-green-500',
                      isDateAvailable(day) === 'gray' && 'bg-gray-200',
                      isDateAvailable(day) == 'unavailable' && 'bg-red-500',
                      isDateAvailable(day) == 'occupied' && 'bg-gray-500',
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailabilityCalendar