import React, { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import Calendar from '@/components/common/calendar/Calendar'
import { startOfToday, startOfTomorrow } from 'date-fns'
import Dropdown from '@/components/home/Dropdown'
const Input = ({ state, setState, label, placeholder }) => {
  return (
    <div className="w-[100%] flex flex-row gap-[2rem] justify-between items-center md:pr-[5%] pr-[1rem]">
      <label className="text-slate-400 flex flex-row items-center gap-4 w-fit">
        <span className="text-white h-4">*</span>
        {label}
      </label>

      <input
        className="border flex-1 bg-transparent h-[3rem] md:min-w-[10rem] md:max-w-[35rem] border-slate-500 rounded-sm outline-none pl-3 text-white"
        onChange={e => setState(e.target.value)}
        value={state}
      />
    </div>
  )
}

const DateSelect = ({ state, setState, label }) => {
  const [showCalendar, setShowCalendar] = useState(false)
  return (
    <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
      <p className="text-slate-400 flex flex-row items-center gap-4 w-fit">
        <span className="text-white h-4">*</span>
        {label}
      </p>
      <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row">
        <input
          className="border w-[100%] h-[100%] bg-transparent  border-slate-500 rounded-l-sm outline-none pl-3 text-white"
          // onChange={(e) => setState(e.target.value)}
          value={state.toLocaleDateString()}
        />
        <div
          className="w-16 rounded-r-md flex text-white items-center justify-center bg-slate-500"
          onClick={() => setShowCalendar(true)}
        >
          <FaCalendarAlt />
        </div>
      </div>
      {showCalendar && (
        <div className="absolute right-0 -bottom-[21rem] z-[100]">
          <Calendar
            selectedDay={state}
            setSelectedDay={setState}
            setShowCalendar={setShowCalendar}
          />
        </div>
      )}
    </div>
  )
}

const options = ['Fixed', 'Percent']
const AddCoupon = () => {
  let today = startOfToday()
  let tomorrow = startOfTomorrow()

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(tomorrow)
  const [freeShipping, setFreeShipping] = useState(false)
  const [discountType, setDiscountType] = useState('--Select--')

  function generateRandomCouponId() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let couponId = ''

    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      couponId += characters.charAt(randomIndex)
    }

    setCode(couponId)
    return couponId
  }

  return (
    <div className="p-[1rem] md:p-[2rem] exo">
      <div className=" bg-slate-700 p-[1rem] md:p-[2rem]  ">
        <h1 className="text-3xl text-slate-400">Discount Coupon Details</h1>

        <div className="flex flex-row gap-4 mt-5 text-slate-400 border-b">
          <h1 className="border-b p-2 border-b-slate-500 cursor-pointer">
            General
          </h1>
          <h1 className="p-2 cursor-not-allowed">Restriction</h1>
          <h1 className="p-2 cursor-not-allowed">Usage</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12  justify-between gap-y-16 gap-x-12">
          <Input
            state={title}
            setState={setTitle}
            label="Coupon Title"
            placeholder=""
          />
          <Input
            state={code}
            setState={setCode}
            label="Coupon Code"
            placeholder=""
          />
          <DateSelect
            state={startDate}
            setState={setStartDate}
            label="Start Date"
          />
          <DateSelect state={endDate} setState={setEndDate} label="End Date" />
          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
            <p className="text-slate-400 flex flex-row items-center gap-4 w-fit">
              <span className="text-white h-4">*</span>
              Free Shipping
            </p>

            <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row gap-5 items-center text-white">
              <input type="checkbox" className="" />

              <h1>Allow Free Shipping</h1>
            </div>
          </div>

          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
            <p className="text-slate-400 flex flex-row items-center gap-4 w-fit">
              <span className="text-white h-4">*</span>
              Discount Type
            </p>

            <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row gap-5 items-center text-white">
              <Dropdown
                data={options}
                state={discountType}
                setState={setDiscountType}
                height="border border-slate-600 py-3 h-fit px-3 w-[100%] rounded-md text-[18px] text-white"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex gap-8 flex-row justify-end">
          <button
            className="border px-4 py-3 text-slate-300 border-slate-500"
            onClick={generateRandomCouponId}
          >
            Generate Coupon Code
          </button>
          <button className="border px-4 py-3 text-slate-300 border-slate-500">
            Create Coupon
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddCoupon
