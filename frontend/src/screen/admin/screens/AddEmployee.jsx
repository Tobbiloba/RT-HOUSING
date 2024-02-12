import { IoCloseOutline , IoCheckmarkDoneOutline} from "react-icons/io5";
import { RiDeleteBin4Line } from "react-icons/ri";
import Input from '@/components/Input';
import { startOfToday, startOfTomorrow } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "@/components/Calendar";
import { useFormik } from 'formik';
import { createEmployeeSchema } from '@/schemas';
import Dropdown from '@/components/admin/dropdown/Dropdown';
import Box from "../../../components/admin/box/Box";
import Dropzone from '@/components/admin/dropzone/Dropzone';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, createEmployee } from "@/action/employee";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let tomorrow = startOfTomorrow();
  const [showCalendar, setShowCalendar] = useState(false)
  const jobRole = [
    "Agent",
    "Housekeeper",
    "Personal Assistant",
    "Driver",
    "Nanny",
    "Maintenance Worker",
    "Laundry Attendant",
    "Personal Trainer",
    "Event Planner",
    "Technology Specialist",
    "Pet Caretaker",
    "Caretaker's Assistant"
  ]
  const employeeStatus = [
    'Available',
    'Unavailable',
    'On a Break',
    'On Leave'
  ];
  const jobType = [
    'Remote',
    'Hybrid',
    'On Site'
  ]

  const onSubmit = (values) => {
    console.log(values)
    dispatch(createEmployee(values))
  
  }

  const employee = useSelector((state) => state.createEmployee)
  // console.log(employee.status)
   useEffect(() => {
    if(employee.status) {
      navigate('/admin/employees')
      dispatch(clear())
    }
   }, [employee])

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
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      role: "",
      start_date: tomorrow,
      job_type: "",
      status: "",
      img: ""
    },
    validationSchema: createEmployeeSchema,
    onSubmit: (values) => {
      // same shape as initial values
      // console.log(errors)

      // console.log(values);
      onSubmit(values);
    },
  });
  // console.log(errors)
  return (
    <form onSubmit={handleSubmit} className="exo  pb-8 w-[100%] p-[1rem] md:p-[2%] flex">
    <div className=" relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-900 h-fit p-[1rem]">
    {/* <IoCloseOutline className="absolute -right-4 -top-4 text-black hover:bg-red-500 cursor-pointer bg-white text-[34px]  shadow-md hover:text-white p-[1px]" onClick={() => setState(false)}/> */}
      <h1 className="text-[17px] text-slate-100">Employee details</h1>

      <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
        <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
          General
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5  justify-between gap-y-9 gap-x-12">

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
              errors.lastname && touched.lastname
                ? errors.lastname
                : undefined
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
              errors.username && touched.username
                ? errors.username
                : undefined
            }
            id="username"
          />
          <Input
            placeholder="Email"
            type="text"
            label="Email"
            value={values.email}
            handleChange={handleChange}
            error={
              errors.email && touched.email
                ? errors.email
                : undefined
            }
            id="email"
          />
          <Input
            placeholder="Phone"
            type="text"
            label="Phone"
            value={values.phone}
            handleChange={handleChange}
            error={
              errors.phone && touched.phone
                ? errors.phone
                : undefined
            }
            id="phone"
          />

    


        <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
            label=" Role"
            data={jobRole}
            field={{ name: "role", value: values.role }}
            form={{ setFieldValue, handleBlur, values, errors, touched }}
            error={
              errors.role && touched.role
                ? errors.role
                : undefined
            }
          />
        </div>
        <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <Dropdown
            label="Job Type"
            data={jobType}
            field={{ name: "job_type", value: values.job_type }}
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
            field={{ name: "status", value: values.status }}
            form={{ setFieldValue, handleBlur, values, errors, touched }}
            error={
              errors.status && touched.status
                ? errors.status
                : undefined
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

            <div className='col-span-2'>
            <Dropzone
                  field={{ name: "img", value: values.img }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.img && touched.img ? errors.img : undefined
                  }
                />
            </div>
      </div>
      <div className="mt-16 text-[14px] flex gap-8 flex-row">
        <button className="bg-green-700 px-4 py-3 text-white border-slate-500" type="submit">
          Add Employee
        </button>
      </div>
    </div>
  </form>
  )
}

export default AddEmployee