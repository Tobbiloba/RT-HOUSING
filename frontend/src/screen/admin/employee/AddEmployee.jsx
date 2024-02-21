// @ts-nocheck
import React from 'react'
// import { IoCloseOutline, IoCheckmarkDoneOutline } from 'react-icons/io5'
// import { RiDeleteBin4Line } from 'react-icons/ri'
import Input from '@/components/Input'
import { startOfTomorrow } from 'date-fns'
// import { FaCalendarAlt } from 'react-icons/fa'
import Calendar from '@/components/common/calendar/Calendar'
import { useFormik } from 'formik'
import { createEmployeeSchema } from '@/schemas'
import Dropdown from '@/components/common/dropdown/Dropdown'
import Box from '../../../components/common/box/Box'
import Dropzone from '@/components/common/dropzone/Dropzone'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, createEmployee } from '@/action/employee'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
const AddEmployee = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let tomorrow = startOfTomorrow()
  const [showCalendar, setShowCalendar] = useState(false)
  const jobRole = [
    'Agent',
    'Housekeeper',
    'Personal Assistant',
    'Driver',
    'Nanny',
    'Maintenance Worker',
    'Laundry Attendant',
    'Personal Trainer',
    'Event Planner',
    'Technology Specialist',
    'Pet Caretaker',
    "Caretaker's Assistant",
  ]
  const employeeStatus = ['Available', 'Unavailable', 'On a Break', 'On Leave']
  const jobType = ['Remote', 'Hybrid', 'On Site']

  const onSubmit = values => {
    console.log(values)
    dispatch(createEmployee(values))
  }

  const employee = useSelector(state => state.createEmployee)
  // console.log(employee.status)
  useEffect(() => {
    if (employee.status) {
      navigate('/admin/employees')
      dispatch(clear())
    }
  }, [employee])

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phone: '',
      role: '',
      start_date: tomorrow,
      job_type: '',
      status: '',
      img: '',
    },
    validationSchema: createEmployeeSchema,
    onSubmit: () => {
      // same shape as initial values
      // console.log(errors)

      // console.log(values);
      onSubmit(values)
    },
  })
  // console.log(errors)
  return (
    <form
      onSubmit={handleSubmit}
      className="exo  pb-8 w-[100%] md:p-[1rem] md:p-[2%] flex"
    >
      <div className=" relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-900 h-fit p-[1rem]">
        <h1 className="text-[17px] text-slate-100">Employee details</h1>

        <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
        </div>
        <div className="md:grid flex flex-col md:grid-cols-2 lg:grid-cols-3 mt-5 gap-y-9 gap-x-12">
          <Input
            placeholder="Firstname"
            type="text"
            label="Firstname"
            value={values.firstname}
            handleChange={handleChange}
            error={
              errors.firstname && touched.firstname
                ? errors.firstname
                : undefined
            }
            id="firstname"
          />
          <Input
            placeholder="Lastname"
            type="text"
            label="Lastname"
            value={values.lastname}
            handleChange={handleChange}
            error={
              errors.lastname && touched.lastname ? errors.lastname : undefined
            }
            id="lastname"
          />
          <Input
            placeholder="Username"
            type="text"
            label="Lastname"
            value={values.username}
            handleChange={handleChange}
            error={
              errors.username && touched.username ? errors.username : undefined
            }
            id="username"
          />
          <Input
            placeholder="Email"
            type="text"
            label="Email"
            value={values.email}
            handleChange={handleChange}
            error={errors.email && touched.email ? errors.email : undefined}
            id="email"
          />
          <Input
            placeholder="Phone"
            type="text"
            label="Phone"
            value={values.phone}
            handleChange={handleChange}
            error={errors.phone && touched.phone ? errors.phone : undefined}
            id="phone"
          />

          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
              label=" Role"
              data={jobRole}
              field={{ name: 'role', value: values.role }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={errors.role && touched.role ? errors.role : undefined}
            />
          </div>
          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
              label="Job Type"
              data={jobType}
              field={{ name: 'job_type', value: values.job_type }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={
                errors.job_type && touched.job_type
                  ? errors.job_type
                  : undefined
              }
            />
          </div>
          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
              label=" Status"
              data={employeeStatus}
              field={{ name: 'status', value: values.status }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={
                errors.status && touched.status ? errors.status : undefined
              }
            />
          </div>
          <div className="relative ">
            {showCalendar && (
              <div className="mt-4 bottom-[5rem] absolute z-50">
                <Calendar
                  selectedDay={values.start_date}
                  // setSelectedDay={setProperty_availability_from_date}
                  setShowCalendar={setShowCalendar}
                  id="start_date"
                  setFieldValue={setFieldValue}
                />
              </div>
            )}
            <div>
              <Box
                label="Available from"
                value={values.start_date.toDateString()}
                setShowState={setShowCalendar}
                showState={showCalendar}
              />
            </div>
          </div>

          <div className="col-span-2">
            <Dropzone
              field={{ name: 'img', value: values.img }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={errors.img && touched.img ? errors.img : undefined}
            />
          </div>
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row">
          <button
            className="bg-slate-600 px-6 py-3 text-white border-slate-500"
            type="submit"
            disabled={employee.loading}
          >
            {employee.loading ? (
              <div className="flex items-center cursor-not-allowed gap-4 px-4">
                <CircularProgress size="1.5rem" />
                <p>Loading...</p>
              </div>
            ) : (
              'Add Employee'
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddEmployee
