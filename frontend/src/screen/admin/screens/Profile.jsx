import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from "formik";
import { updateAdminProfileSchema } from "@/schemas";
import Input from "@/components/Input";
const UpdateProfile = ({setShowState}) => {

  const onSubmit = () => {
    console.log('lol')
  
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
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      password: ""
    },
    validationSchema: updateAdminProfileSchema,
    onSubmit,
  });



  return (
    <form onSubmit={handleSubmit} className="w-[100vw] top-0 left-0 flex items-center justify-center h-[100vh] bg-white/20 z-[100] fixed">
      <div className="max-w-[35rem] relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-900 h-fit p-[1rem]">
      <IoCloseOutline className="absolute -right-4 -top-4 text-black hover:bg-red-500 cursor-pointer bg-white text-[34px]  shadow-md hover:text-white p-[1px]" onClick={() => setShowState(false)}/>
        <h1 className="text-[17px] text-slate-100">Update User Profile</h1>

        <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  mt-5  justify-between gap-y-9 gap-x-12">

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
              placeholder="Email"
              type="text"
              label="Email"
              value={values.email}
              handleChange={handleChange}
              error={
                errors.email && touched.email
                  ? errors.firstname
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
            <Input
              placeholder="City"
              type="text"
              label="City"
              value={values.city}
              handleChange={handleChange}
              error={
                errors.city && touched.city
                  ? errors.city
                  : undefined
              }
              id="city"
            />
            <Input
              placeholder="State"
              type="text"
              label="State"
              value={values.state}
              handleChange={handleChange}
              error={
                errors.state && touched.state
                  ? errors.state
                  : undefined
              }
              id="state"
            />
            <Input
              placeholder="Country"
              type="text"
              label="Country"
              value={values.country}
              handleChange={handleChange}
              error={
                errors.country && touched.country
                  ? errors.country
                  : undefined
              }
              id="country"
            />

<Input
              placeholder="Password"
              type="password"
              label="Password"
              value={values.password}
              handleChange={handleChange}
              error={
                errors.password && touched.password
                  ? errors.password
                  : undefined
              }
              id="password"
            />



 
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row justify-end">
          <button className="bg-green-700 px-4 py-3 text-white border-slate-500" type="submit">
            Update Profile
          </button>
        </div>
      </div>
    </form>
  );
}
const Profile = () => {
  const [showUpdateOption, setShowUpdateOption] = useState(false);
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className=" h-fit w-[100%] relative px-[5%] py-[5%] bg-slate-500 flex flex-col gap-[5%]">
        <div className="absolute top-0  shadow-sm left-0 w-[100%] bg-slate-700 h-[8rem]"></div>
        <div className="relative z-10 w-[100%] h-fit flex flex-row justify-between items-center mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&usqp=CAU"
            className="w-36 h-36 bg-slate-700 p-2"
          />

          <button onClick={() => setShowUpdateOption(true)} className="flex flex-row gap-4 text-[14px] px-4 border-4 border-slate-700 shadow-md py-2 bg-slate-900 items-center text-white">
            <LuPencilLine className="text-[18px]" /> Edit Profile
          </button>
        </div>

        <div className="text-white">
          <h1>Clay Jensen</h1>
          <div className="flex flex-row gap-2 items-center mt-1">
            <img
              src="https://cdn-icons-png.flaticon.com/128/317/317262.png"
              className="w-6 h-6"
            />
            |
            <p className="h-fit text-[15px]">
              Northridge, California(CA), 91326, USA
            </p>
          </div>
          <p className="mt-1 text-[15px]">
            Age: 24 | Gender: Male | Status:{" "}
            <span className="text-green-500 ml-1">Active*</span>
          </p>

          <div className="max-w-[30rem] w-[100%] mt-8 flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <FaBuilding className="text-[18px]" /> Company:
              </h1>
              <p className="text-[15px]">Febtos LTD</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlinePersonOutline className="text-[18px]" /> Role:
              </h1>
              <p className="text-[15px]">Administrator</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlineEmail className="text-[18px]" /> Email:
              </h1>
              <p className="text-[15px]">clay.jensen@email.com</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlinePhone className="text-[18px]" /> Contact:
              </h1>
              <p className="text-[15px]">(+234) 70 8455 7988</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <FaLocationDot className="text-[18px] fill-white" /> Region:
              </h1>
              <p className="text-[15px]">Central US</p>
            </div>
          </div>
        </div>
        

        {
          showUpdateOption && <UpdateProfile setShowState={setShowUpdateOption}/>
        }
      </div>
    </div>
  );
};

export default Profile;
