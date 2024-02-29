// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { startOfToday, startOfTomorrow } from 'date-fns'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Drawer } from '@mui/material'
import Calendar from '../calendar/Calendar'
import { toast } from 'react-toastify'
import { createUserOrder, getUserActiveOrder } from '@/action/order'
import add_ons from '@/data/add_ons'
const FilterBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(true)
  return (
    <div className="p-[1rem] exo text-[13px] bg-slate-100">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h1 className="text-slate-900 text-[14px]">{title}:</h1>
        {showChildren ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>

      {showChildren && (
        <div
          style={{
            height: showChildren ? 'auto' : 0,
            overflow: '',
            transition: 'height 3.3s ease-in-out',
          }}
          className="mt-4"
        >
          {children}
        </div>
      )}
    </div>
  )
}

import { useFormik } from 'formik'
import { createOrderSchema } from '@/schemas'
import { verifyCouponCode } from '@/action/coupon'
import Spinner from '../spinner/Spinner'
import { addCommasToNumber } from '@/components/utils'
const PropertyOptionCard = ({ items }) => {
  let today = startOfToday()
  let tomorrow = startOfTomorrow()
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false)
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false)

  const dispatch = useDispatch()

  const calculateDayDifference = (checkinDate, checkoutDate) => {
    const [checkinDay, checkinMonth, checkinYear] = checkinDate
      .split('/')
      .map(Number)
    const [checkoutDay, checkoutMonth, checkoutYear] = checkoutDate
      .split('/')
      .map(Number)

    const checkin = new Date(checkinYear, checkinMonth - 1, checkinDay)
    const checkout = new Date(checkoutYear, checkoutMonth - 1, checkoutDay)

    if (checkout < checkin) {
      console.error("Error: Checkout date can't be before checkin date")
      return null
    }

    const differenceInMilliseconds = checkout - checkin
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (24 * 60 * 60 * 1000),
    )
    return differenceInDays
  }

  const calculateTotalPrice = () => {
    return (
      values.expenses.reduce((total, addOn) => total + addOn.price, 0) +
      items.pricing *
        calculateDayDifference(
          values.checkinDate.toLocaleDateString(),
          values.checkoutDate.toLocaleDateString(),
        )
    )
  }

  const { id } = useParams()
  const onSubmit = e => {
    e.preventDefault()
   dispatch(
      createUserOrder({
        id,
        expenses: values.expenses,
        checkinDate: values.checkinDate,
        checkoutDate: values.checkoutDate,
        couponCode: couponCode,
        totalPrice: coupon
          ? calculateTotalPrice() +
            calculateTotalPrice() * 0.05 -
            coupon.discount_price
          : calculateTotalPrice() + calculateTotalPrice() * 0.05,
      }),
    )
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      expenses: [],
      checkoutDate: tomorrow,
      checkinDate: today,
      couponCode: '',
      checkBox: false,
    },
    validationSchema: createOrderSchema,
    onSubmit,
  })
  const { details, loading } = useSelector(state => state.createOrder)
  const { coupon, verificationLoader } = useSelector(
    state => state.verifyCoupon,
  )
  const { orders } = useSelector(state => state.activeUserOrder)

  useEffect(() => {
    dispatch(getUserActiveOrder('65ca388cf1369640b78fbeb5', id))
  }, [details])

  const handleAddOnsCheckboxChange = (name, price) => {
    // Check if the item is already in the state based on name
    const isItemInState = values.expenses.some(addOn => addOn.name === name)

    if (isItemInState) {
      // If yes, remove it
      setFieldValue(
        'expenses',
        values.expenses.filter(addOn => addOn.name !== name),
      )
      // console.log('removed', name)
    } else {
      // If not, add it with name and price
      // Create a new array with the existing add-ons and the new one
      setFieldValue('expenses', [...values.expenses, { name, price }])
      // console.log('added', name)
    }
  }

  const [couponCode, setCouponCode] = useState('')

  const handleSubmitCoupon = () => {
    if (couponCode) {
      dispatch(verifyCouponCode({ amount: calculateTotalPrice(), couponCode }))
    } else {
      toast.info('Please input your coupon code')
    }
  }
  useEffect(() => {
    if (coupon && coupon.couponCode) {
      values.couponCode = coupon.couponCode
    }
  }, [coupon])
  return (
    <form onSubmit={onSubmit} className="">
      <div className="w-[20.5rem] md:w-[24rem] exo mb-6 h-fit overflow-hidden">
        <div className="flex flex-col gap-6">
          <FilterBox title="Pricing">
            <div>
              <h1 className="text-[17px]  text-slate-800">
                ₦{addCommasToNumber(calculateTotalPrice())}{' '}
                <span className="text-[12px] text-slate-500 font-[500]">
                  /{' '}
                  {addCommasToNumber(calculateDayDifference(
                    values.checkinDate.toLocaleDateString(),
                    values.checkoutDate.toLocaleDateString(),
                  ))}{' '}
                  night
                </span>
              </h1>

              <div className="flex flex-row justify-between items-center mt-5">
                <p className="text-slate-600 text-[13px]">
                  {items.price} x{' '}
                  {calculateDayDifference(
                    values.checkinDate.toLocaleDateString(),
                    values.checkoutDate.toLocaleDateString(),
                  )}{' '}
                  nights
                </p>

                <p className=" text-slate-800 text-[13px]">
                  ₦
                  {addCommasToNumber(items.pricing *
                    calculateDayDifference(
                      values.checkinDate.toLocaleDateString(),
                      values.checkoutDate.toLocaleDateString(),
                    ))}
                </p>
              </div>
              <div className="">
                {values.expenses.map((itm, index) => (
                  <div key={index}>
                    {index !== 0 && (
                      <div className="flex flex-row justify-between items-center mt-3">
                        <p className="text-slate-600 text-[13px]">{itm.name}</p>

                        <p className=" text-slate-800 text-[14px]">
                          ₦ {addCommasToNumber(itm.price)}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex flex-row justify-between items-center mt-6 border border-x-slate-50 py-3">
                  <p className="text-slate-600 text-[13px]">Taxes & Fees</p>
                  <p className=" text-slate-800 text-[13px]">
                    ₦ {addCommasToNumber(calculateTotalPrice() * 0.05)}
                  </p>
                </div>

                {coupon && (
                  <div className="flex flex-row justify-between items-center border-b border-x-slate-50 py-3">
                    <p className="text-slate-600 text-[13px]">
                      Coupon discount
                    </p>
                    <p className=" text-slate-600 text-[14px]">
                      ₦ {addCommasToNumber(coupon.discount_price)}
                    </p>
                  </div>
                )}

                <div className="flex flex-row justify-between border-b py-3 items-center mt-2 mb-2">
                  <p className="text-red-500 text-[13px]">Total</p>
                  {coupon ? (
                    <p className=" text-red-500 text-[13px] flex flex-col">
                      <span className="line-through">
                        ₦ {calculateTotalPrice() + calculateTotalPrice() * 0.05}
                      </span>
                      ₦ {addCommasToNumber(calculateTotalPrice() +
                        calculateTotalPrice() * 0.05 -
                        coupon.discount_price)}
                    </p>
                  ) : (
                    <p className=" text-red-500 text-[14px]">
                      ₦ {addCommasToNumber(calculateTotalPrice() + calculateTotalPrice() * 0.05)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </FilterBox>

          <FilterBox title="Date">
            <div className="my- px-3 relative">
              <h1 className="text-slate-800 text-[13px]">When To Check In?</h1>

              <div className="flex flex-col mt-3">
                <div
                  className=" border-b flex justify-center px-2 py-3 flex-col"
                  onClick={() => (
                    setShowCheckInCalendar(true), setShowCheckOutCalendar(false)
                  )}
                >
                  <p className="text-[13px] text-slate-500">Check-In:</p>
                  <h1 className="text-[13px] text-slate-800 cursor-text">
                    {values.checkinDate.toLocaleDateString()}
                  </h1>
                </div>
                <div
                  className=" border-b flex justify-center px-2 py-3 flex-col"
                  onClick={() => (
                    setShowCheckOutCalendar(true), setShowCheckInCalendar(false)
                  )}
                >
                  <p className="text-[12px] text-slate-500">Check-Out:</p>
                  <h1 className="text-[13px] text-slate-800 cursor-text">
                    {values.checkoutDate.toLocaleDateString()}
                  </h1>
                </div>
              </div>
              <div className="absolute z-[100]  drop-shadow-md rounded-md bg-white w-fit">
                {showCheckInCalendar && (
                  <Calendar
                    selectedDay={values.checkinDate}
                    setShowCalendar={setShowCheckInCalendar}
                    id="checkinDate"
                    setFieldValue={setFieldValue}
                  />
                )}
                {showCheckOutCalendar && (
                  <Calendar
                    selectedDay={values.checkoutDate}
                    setShowCalendar={setShowCheckOutCalendar}
                    id="checkoutDate"
                    setFieldValue={setFieldValue}
                  />
                )}
              </div>
            </div>
          </FilterBox>

          <FilterBox title="Guests">
            <div className="my-6 px-1">
              <div className="mt-4">
                <div className="flex flex-row">
                  <h1 className="w-7/12 border px-4 flex items-center text-[13px] text-slate-800">
                    Adults
                  </h1>
                  <p className="w-5/12 border px-4 py-3 text-[13px] text-slate-500">
                    {items.guest.maximum_adults}
                  </p>
                </div>
                <div className="flex flex-row">
                  <h1 className="w-7/12 border px-4  flex items-center text-[13px] text-slate-800">
                    Children{' '}
                    <span className="font-[500] text-[12px] text-slate-600 ml-2">
                      (Age 2-12)
                    </span>
                  </h1>
                  <p className="w-5/12 border px-4 py-3   text-[13px] text-slate-500">
                    {items.guest.maximum_children}
                  </p>
                </div>
                <div className="flex flex-row">
                  <h1 className="w-7/12 border px-4 flex items-center text-[13px] text-slate-800">
                    Infants{' '}
                    <span className="font-[500] text-[12px] text-slate-600 ml-2">
                      (Age 0-2)
                    </span>
                  </h1>
                  <p className="w-5/12 border px-4 py-3  text-[13px] text-slate-500">
                    {items.guest.maximum_infants}
                  </p>
                </div>
              </div>
            </div>
          </FilterBox>

          <FilterBox title="Add-on Services">
            <div className="my-6 px-3">
              <div className="grid mt-5 grid-cols-1 gap-3">
                {add_ons.map((item, index) => (
                  <div className="flex gap-3" key={index}>
                    <input
                      type="checkbox"
                      className="custom-checkbox  bg-blue-500"
                      onChange={() =>
                        handleAddOnsCheckboxChange(item.name, item.price)
                      }
                      checked={values.expenses.some(
                        addOn => addOn.name === item.name,
                      )}
                    />
                    <p className="text-[13px] text-slate-600">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </FilterBox>

          <FilterBox title="Available Amenitites">
            <div className="my-6 px-3">
              <div className="mt-5 flex flex-row flex-wrap gap-3">
                {items.property_amenities.map((item, index) => (
                  <div className="flex gap-3" key={index}>
                    <p className="text-[13px] px-3 py-1 bg-slate-600 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FilterBox>

          <FilterBox title="Apply Coupon">
            <div className="my-6 px-3">
              <div className="mt-5 flex flex-col gap-3">
                <input
                  placeholder="Coupon Code"
                  className="p-3 outline-none"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                />
                <button
                  type="button"
                  className={`bg-slate-600 w-fit text-white px-12 py-2 ${coupon && 'cursor-not-allowed'}`}
                  onClick={handleSubmitCoupon}
                  disabled={coupon}
                >
                  {verificationLoader ? (
                    <div className="flex gap-3 item-center py-1">
                      <CircularProgress size="1rem" color="info" />
                      Please wait
                    </div>
                  ) : (
                    'Activate Coupon'
                  )}
                </button>
              </div>

              {coupon && (
                <div className="mt-4">
                  <h1 className="text-green-500 text-[15px]">
                    Successfully activated coupon!
                  </h1>
                  <p className="text-[13px]">
                    You have gotten a discount of ₦{coupon.discount_price}
                  </p>
                </div>
              )}
            </div>
          </FilterBox>
          <div>
            <div className="flex gap-5 items-center">
              <input
                type="checkbox"
                className=""
                name="checkBox"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.checkBox}
              />

              <p className="text-slate-600 text-[13px]">
                I agree to the terms and condition
              </p>
            </div>

            {touched.checkBox && errors.checkBox && (
              <p className="text-red-500 text-[12px] mt-2">{errors.checkBox}</p>
            )}
          </div>
        </div>
        <button
          className={`border w-[100%] bg-slate-800 rounded-md text-white py-3 mt-5 ${loading || (orders?.bookingStatus && 'cursor-not-allowed')}`}
          type="submit"
          disabled={orders?.bookingStatus || loading}
        >
          {loading ? (
            <div className="flex gap-3 item-center justify-center">
              <Spinner style="w-6 h-6" />
              <p>Please wait...</p>
            </div>
          ) : orders?.bookingStatus ? (
            <p className="uppercase">{orders?.bookingStatus}</p>
          ) : (
            'Book Now'
          )}
        </button>
      </div>
    </form>
  )
}

const PropertyOptions = ({ state, setState, item }) => {
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const anchor = 'right' // Set your desired anchor position (e.g., 'right', 'left', 'top', 'bottom')

  // }, [isMobile, isDesktop])

  return (
    <div className=" bg-slate-100 z-50">
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div
          // style={{ width: '22.5rem' }}
          className="py-[1rem] flex w-[22.5rem] md:w-[26rem]  justify-center relative"
        >
          <PropertyOptionCard items={item} />
        </div>
      </Drawer>
    </div>
  )
}

export default PropertyOptions
