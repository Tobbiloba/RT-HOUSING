import { CouponTable } from '@/components/admin/table/CouponTable'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'
import { startOfToday, startOfTomorrow } from 'date-fns'
import Dropdown from '@/components/admin/dropdown/Dropdown'
import { IoCloseOutline } from 'react-icons/io5'
import { useFormik } from 'formik'
import { couponSchema, tourSchema } from '@/schemas'
import Input from '@/components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { createCompanyCoupon, getCompanyCoupon } from '@/action/coupon'
import { CircularProgress } from '@mui/material'
import { clear } from '@/action/employee'

const options = ['Fixed', 'Percent']
const AddCoupon = ({ setState }) => {
  let today = startOfToday()
  let tomorrow = startOfTomorrow()

  const [freeShipping, setFreeShipping] = useState(false)
  const [discountType, setDiscountType] = useState('--Select--')

  const dispatch = useDispatch()

  const onSubmit = values => {
    const id = ''
    console.log(values)
    dispatch(createCompanyCoupon({ values, id }))
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      code: '',
      free_shipping: false,
      discount_type: '',
      discount_price: '',
      min_price: '',
    },
    validationSchema: couponSchema,
    onSubmit: values => {
      // same shape as initial values
      // console.log(errors)

      console.log(values)
      onSubmit(values)
    },
  })
  console.log(errors)

  function generateRandomCouponId() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let couponId = ''

    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      couponId += characters.charAt(randomIndex)
    }

    // Set the generated coupon ID to the formik.values.code
    setFieldValue('code', couponId)
    // return couponId;
  }

  const { status } = useSelector(state => state?.createCoupon)
  console.log(status)
  useEffect(() => {
    if (status == 'successful') {
      setState(false)
      dispatch(clear())
      dispatch(getCompanyCoupon('65c77993a24964910729d98d'))
    }
  }, [status])

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100vw] top-0 left-0 flex items-center justify-center h-[100vh] bg-white/20 z-[100] fixed"
    >
      <div className="max-w-[35rem] relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-900 h-fit p-[1rem]">
        <IoCloseOutline
          className="absolute -right-4 -top-4 text-black hover:bg-red-500 cursor-pointer bg-white text-[34px]  shadow-md hover:text-white p-[1px]"
          onClick={() => setState(false)}
        />
        <h1 className="text-[17px] text-slate-100">Discount Coupon Details</h1>

        <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
          <h1 className="p-2 cursor-not-allowed">Restriction</h1>
          <h1 className="p-2 cursor-not-allowed">Usage</h1>
        </div>
        <div className="grid grid-cols-1  mt-5  justify-between gap-y-9 gap-x-12">
          {/* <Input
              placeholder="Title"
              type="text"
              label="Coupon Title"
              value={values.title}
              handleChange={handleChange}
              error={
                errors.title && touched.title
                  ? errors.title
                  : undefined
              }
              id="title"
            /> */}
          <Input
            placeholder="Code"
            type="text"
            label="Coupon Code"
            value={values.code}
            handleChange={handleChange}
            error={errors.code && touched.code ? errors.code : undefined}
            id="code"
          />

          <div className="w-[100%] relative flex flex-row gap-[1rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
            <p className="text-slate-600 flex text-[14px] flex-row items-center gap-4 w-fit">
              <span className="text-white h-4 ">*</span>
              Free Shipping
            </p>

            <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] ml-4 flex flex-row gap-5 items-center text-white">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={values.free_shipping}
                onChange={e => {
                  handleChange(e)
                  setFieldValue('free_shipping', !values.free_shipping)
                }}
              />

              <h1 className="text-[14px]">Allow Free Shipping</h1>
            </div>
          </div>

          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
              label="Discount Type"
              data={options}
              field={{ name: 'discount_type', value: values.discount_type }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={
                errors.discount_type && touched.discount_type
                  ? errors.discount_type
                  : undefined
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="NG"
              type="text"
              label="Discount Price"
              value={values.discount_price}
              handleChange={handleChange}
              error={
                errors.discount_price && touched.discount_price
                  ? errors.discount_price
                  : undefined
              }
              id="discount_price"
            />
            <Input
              placeholder="NG"
              type="text"
              label="Min Order Price"
              value={values.min_price}
              handleChange={handleChange}
              error={
                errors.min_price && touched.min_price
                  ? errors.min_price
                  : undefined
              }
              id="min_price"
            />
          </div>
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row justify-end">
          <button
            className="border px-4 py-3 text-slate-300 border-slate-500"
            onClick={generateRandomCouponId}
            type="button"
          >
            Generate Coupon Code
          </button>
          <button
            className="bg-green-700 px-4 py-3 text-white border-slate-500"
            type="submit"
          >
            Create Coupon
          </button>
        </div>
      </div>
    </form>
  )
}
const Coupon = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showAddCoupon, setShowAddCoupon] = useState(false)

  useEffect(() => {
    dispatch(getCompanyCoupon('65c77993a24964910729d98d'))
  }, [])
  const { loading, coupon } = useSelector(state => state.fetchCoupon)
  console.log(coupon)

  // const loading = true

  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className="rounded h-fit w-[100%]">
        <div className="flex pb-4 text-slate-100 flex-row gap-x-7 gap-y-4 text-[13px] justify-end">
          <button className="px-5 py-2 bg-red-600 cursor-not-allowed">
            DELETE
          </button>
          <button
            className="px-5 py-2 bg-green-600"
            onClick={() => setShowAddCoupon(true)}
          >
            ADD COUPON
          </button>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          ) : (
            coupon && <CouponTable data={coupon} />
          )}
        </div>
        {showAddCoupon && <AddCoupon setState={setShowAddCoupon} />}
      </div>
    </div>
  )
}
export default Coupon
