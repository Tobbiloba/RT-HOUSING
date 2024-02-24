// // @ts-nocheck
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginAdmin } from '../../../action/auth'
// import Input from '@/components/Input'
// import { loginSchema } from '@/schemas'
// import { useFormik } from 'formik'
// const AdminLoginScreen = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')
//   // const [isActive, setIsActive] = useState(false)

//   // useEffect(() => {
//   //   if ((!email, !password)) {
//   //     setIsActive(false)
//   //   } else {
//   //     setIsActive(true)
//   //   }
//   // }, [email, password])

//   // const handleLoginAdmin = () => {
//   //   dispatch(loginAdmin(email, password))
//   // }

//   const { adminInfo, loading } = useSelector(state => state.adminLogin)

//   useEffect(() => {
//     if (adminInfo) {
//       navigate('/admin/dashboard')
//     }
//   }, [adminInfo])

//   const onSubmit = async (values) => {
//     // console.log(values)
//     dispatch(loginAdmin(values))
//     // dispatch(register({...values}));
//     // dispatch(login(values));
//   }

//   const {
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: loginSchema,
//     onSubmit,
//   })

//   return (
//     <div className="flex exo flex-row w-[100vw] min-h-[100vh] overflow-hidden justify-end bg-[#e9e9e9] p-[1rem] md:p-12 relative">
//       {/* <div className="w-8/12 bg-[#2d3133] flex flex-col p-[2rem] justify-evenly"></div> */}

//       <div className="absolute left-0 border border--500 top-[20%]">
//         <img src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center" />
//       </div>
//       <div className="w-[35rem] relative z-10 bg-[#ffffff] p-[1rem] md:p-[2rem] flex flex-col justify-between rounded-">
//         <div></div>
//         <div className="items-center flex flex-col">
//           <h1 className=" flex text-[28px] text-slate-400 flex-row pt-3 capitalized">
//             Fe
//             <div className="rotate-12 w-[30px] h-[60px] flex flex-col items-center justify-center">
//               <div className="w-[10px] h-[10px] rounded-full bg-slate-600"></div>
//               <span className="text-slate-600 relative bottom-2">bt</span>
//             </div>
//             oS
//           </h1>

//           <div className="mt-6 text-center">
//             <h1 className="text-4xl font-[600] text-slate-600">
//               Welcome back!
//             </h1>
//             <p className="mt-4 text-slate-500">Please enter your details</p>
//           </div>

//           <form onSubmit={handleSubmit} className="w-[100%] mt-16">
//             <div className="flex flex-col gap-8">
//               <Input
//                 placeholder="Type in your Email"
//                 type="text"
//                 label="Email"
//                 value={values.email}
//                 handleChange={handleChange}
//                 error={errors.email && touched.email ? errors.email : undefined}
//                 id="email"
//               />
//               <Input
//                 placeholder="Type in your Password"
//                 type="password"
//                 label="Password"
//                 value={values.password}
//                 handleChange={handleChange}
//                 error={
//                   errors.password && touched.password
//                     ? errors.password
//                     : undefined
//                 }
//                 id="password"
//               />
//               {/* <Input
//               placeholder="Type in your email"
//               type="text"
//               label="Email"
//               value={email}
//               setValue={setEmail}
//               style="border border-white border-b-gray-400"
//               bigText="18px"
//               smallText="14px"
//             />

//             <Input
//               placeholder="Type in your password"
//               type="password"
//               label="Password"
//               value={password}
//               setValue={setPassword}
//               style="border border-white border-b-gray-400"
//               bigText="18px"
//               smallText="14px"
//             /> */}
//             </div>

//             <div className="mt-12 flex flex-row justify-between">
//               <div className="flex flex-row gap-5 text-[14px] items-center">
//                 <input type="checkbox" className="" />

//                 <p>Remember me</p>
//               </div>

//               <p className="text-slate-400 text-[14px] cursor-pointer">
//                 Forgot password?
//               </p>
//             </div>
//             <div className=" px-[10%] mt-12">
//               <button
//                 type="submit"
//                 // disabled={!isActive}
//                 className={`border w-[100%] bg-slate-900 py-3 text-white text-[14px] rounded-`}
//               >
//                 {loading ? 'Please wait...' : 'Log In'}
//               </button>
//             </div>
//           </form>
//           <div className="w-[100%] px-[10%] mt-6 flex justify-center">
//             <button className="flex  w-[100%] flex-row border text-[14px] justify-center gap-4 items-center py-3 rounded- text-slate-600">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
//                 className="w-5 h-5"
//               />{' '}
//               Login in with Google
//             </button>
//           </div>
//         </div>

//         <Link to="/admin/register" className="mt-6">
//           <p className="text-slate-600 text-[14px]">
//             Don't have an account?{' '}
//             <span className="text-slate-400 ml-2 cursor-pointer">Sign Up</span>
//           </p>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default AdminLoginScreen















































//@ts-nocheck
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginAdmin } from '../../../action/auth'
import Input from '@/components/Input'
import { loginSchema } from '@/schemas'
import { useFormik } from 'formik'
const AdminLoginScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [isActive, setIsActive] = useState(false)

  // useEffect(() => {
  //   if ((!email, !password)) {
  //     setIsActive(false)
  //   } else {
  //     setIsActive(true)
  //   }
  // }, [email, password])

  // const handleLoginAdmin = () => {
  //   dispatch(loginAdmin(email, password))
  // }

  const { adminInfo, loading } = useSelector(state => state.adminLogin)

  useEffect(() => {
    if (adminInfo) {
      navigate('/admin/dashboard')
    }
  }, [adminInfo])

  const onSubmit = async (values) => {
    // console.log(values)
    dispatch(loginAdmin(values))
    // dispatch(register({...values}));
    // dispatch(login(values));
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <div className="flex exo flex-col md:flex-row w-[100vw] min-h-[100vh] overflow-hidden justify-end bg-[#e9e9e9]  relative">


      <div className="flex-1 flex item-center relative justify-center  left-0 top-[20%]">
      <div className="absolute w-[100%] z-10 h-[100%] top-0 left-0 bg-black/40"></div>
        <img src="/bg.png" />
      </div>
      <div className='md:w-[30%] flex justify-center items-center bg-white'>
      <div className="md:min-w-[30rem] w-[100%] h-fit  relative z-10 bg-[#ffffff] p-[1rem] md:p-[2rem] flex flex-col justify-between rounded-">
        <div></div>
        <div className="items-center flex flex-col">
          {/* <h1 className=" flex text-[28px] text-slate-400 flex-row pt-3 capitalized">
            Fe
            <div className="rotate-12 w-[30px] h-[60px] flex flex-col items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-slate-600"></div>
              <span className="text-slate-600 relative bottom-2">bt</span>
            </div>
            oS
          </h1> */}

          <div className="mt-4 md:mt-6 -center">
            <h1 className="text-4xl font-[600] text-slate-600">
              Sign In
            </h1>
            {/* <p className="mt-1 md:mt-4 text-slate-500">Please enter your details</p> */}
          </div>

          <form onSubmit={handleSubmit} className="w-[100%] mt-8 md:mt-16">
            <div className="flex flex-col gap-8">
              <Input
                placeholder="Type in your Email"
                type="text"
                label="Email"
                value={values.email}
                handleChange={handleChange}
                error={errors.email && touched.email ? errors.email : undefined}
                id="email"
              />
              <Input
                placeholder="Type in your Password"
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

            <div className="mt-12 flex flex-row justify-between">
              <div className="flex flex-row gap-5 text-[14px] items-center">
                <input type="checkbox" className="" />

                <p>Remember me</p>
              </div>

              <p className="text-slate-400 text-[14px] cursor-pointer">
                Forgot password?
              </p>
            </div>
            <div className=" mt-12">
              <button
                type="submit"
                // disabled={!isActive}
                className={` w-[100%] bg-slate-900 py-3 text-white text-[14px] rounded-`}
              >
                {loading ? 'Please wait...' : 'Log In'}
              </button>
            </div>
          </form>
          <div className="w-[100%]  mt-6 flex justify-center">
            <button className="flex  w-[100%] flex-row bg-slate-200 text-[14px] justify-center gap-4 items-center py-3 rounded- text-slate-600">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
                className="w-5 h-5"
              />{' '}
              Login in with Google
            </button>
          </div>
        </div>

        <Link to="/admin/register" className="mt-6">
          <p className="text-slate-600 text-[14px]">
            Don't have an account?{' '}
            <span className="text-slate-400 ml-2 cursor-pointer">Sign Up</span>
          </p>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default AdminLoginScreen

















// // @ts-nocheck
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginAdmin } from '../../../action/auth'
// import Input from '@/components/Input'
// import { loginSchema } from '@/schemas'
// import { useFormik } from 'formik'
// const AdminLoginScreen = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')
//   // const [isActive, setIsActive] = useState(false)

//   // useEffect(() => {
//   //   if ((!email, !password)) {
//   //     setIsActive(false)
//   //   } else {
//   //     setIsActive(true)
//   //   }
//   // }, [email, password])

//   // const handleLoginAdmin = () => {
//   //   dispatch(loginAdmin(email, password))
//   // }

//   const { adminInfo, loading } = useSelector(state => state.adminLogin)

//   useEffect(() => {
//     if (adminInfo) {
//       navigate('/admin/dashboard')
//     }
//   }, [adminInfo])

//   const onSubmit = async (values) => {
//     // console.log(values)
//     dispatch(loginAdmin(values))
//     // dispatch(register({...values}));
//     // dispatch(login(values));
//   }

//   const {
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: loginSchema,
//     onSubmit,
//   })

//   return (
//     <div className="flex exo flex-row w-[100vw] min-h-[100vh] overflow-hidden justify-end  p-[1rem] md:p-12 relative">
//       <div className="w-[100%] bg-black/80 absolute z-10 flex flex-col top-0 left-0 h-[100%]  justify-evenly"></div>

//       <div className="absolute left-0 border--500 top-[0%]">
//         <img 
//         src='/bg.png'
//         // src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center"
//          />
//       </div>
//       <div className="w-[32.5rem] min-h-[90vh] relative z-10  md:bg-slate-900 md:p-[2rem] flex flex-col justify-between rounded-">
//         <div></div>
//         <div className="items-center flex flex-col">
//         <Link to="/" className=" flex text-[28px] text-slate-400 flex-row pt-3 capitalized">
//             Fe
//             <div className="rotate-12 w-[30px] h-[60px] flex flex-col items-center justify-center">
//               <div className="w-[10px] h-[10px] rounded-full bg-slate-600"></div>
//               <span className="text-slate-600 relative bottom-2">bt</span>
//             </div>
//             oS
//           </Link>

//           <div className="mt-6 text-center">
//             <h1 className="text-4xl font-[600] text-slate-200">
//               Welcome back!
//             </h1>
//             <p className="mt-4 text-slate-500">Please enter your details</p>
//           </div>

//           <form onSubmit={handleSubmit} className="w-[100%] mt-16">
//             <div className="flex flex-col gap-8">
//               <Input
//                 placeholder="Type in your Email"
//                 type="text"
//                 label="Email"
//                 value={values.email}
//                 handleChange={handleChange}
//                 error={errors.email && touched.email ? errors.email : undefined}
//                 id="email"
//               />
//               <Input
//                 placeholder="Type in your Password"
//                 type="password"
//                 label="Password"
//                 value={values.password}
//                 handleChange={handleChange}
//                 error={
//                   errors.password && touched.password
//                     ? errors.password
//                     : undefined
//                 }
//                 id="password"
//               />
//             </div>

//             <div className="mt-12 flex flex-row justify-between">
//               <div className="flex flex-row gap-5 text-[14px] items-center">
//                 <input type="checkbox" className="" />

//                 <p className='text-white'>Remember me</p>
//               </div>

//               <p className="text-slate-400 text-[14px] cursor-pointer">
//                 Forgot password?
//               </p>
//             </div>
//             <div className=" mt-12">
//               <button
//                 type="submit"
//                 // disabled={!isActive}
//                 className={`w-[100%] bg-slate-600 py-3 text-white text-[14px] rounded-`}
//               >
//                 {loading ? 'Please wait...' : 'Log In'}
//               </button>
//             </div>
//           </form>
//           <div className="w-[100%] mt-6 flex justify-center">
//             <button className="flex  w-[100%] bg-white flex-row border text-[14px] justify-center gap-4 items-center py-3 rounded- text-slate-600">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
//                 className="w-5 h-5"
//               />{' '}
//               Login in with Google
//             </button>
//           </div>
//         </div>

//         <Link to="/admin/register" className="mt-6">
//           <p className="text-slate-600 text-[14px]">
//             Don't have an account?{' '}
//             <span className="text-slate-400 ml-2 cursor-pointer">Sign Up</span>
//           </p>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default AdminLoginScreen



































// // import "./App.css";
// import React from "react";
// // import img from "";
// import {
//   FaUser,
//   FaLock,
//   FaFacebook,
//   FaGoogle,
//   FaTwitter,
// } from "react-icons/fa";

// const AdminLogin = () => {
//   return (
//     <div className="px-32 py-5 h-screen overflow-y-hidden bg-slate-200">
//       <div className="navbar pt-3 flex items-center justify-between px-5">
//         <div className="text-black text-3xl font-bold cursor-pointer">
//           <span className="text-blue-400 font-extrabold text-4xl">3D</span>
//           Maker
//         </div>
//         <div>
//           <p className="font-bold text-xl">
//             New User?{" "}
//             <span className="pl-1 text-blue-400 cursor-pointer">SignUp</span>
//           </p>
//         </div>
//       </div>

//       <div className="hero-section flex items-center justify-evenly h-full">
//         <div className="hero-right flex-1">
//           <img className="w-screen" src='/bg.png' alt="" />
//         </div>
//         <div className="hero-left flex-1 flex justify-center items-center">
//           <div className="border-4 border-blue-400 p-14 rounded-md shadow-slate-700 shadow-2xl">
//             <div className="mb-10">
//               <h2 className="text-black text-3xl font-bold">Welcome Back!</h2>
//               <p className="text-black text-opacity-70 font-bold text-xl">
//                 Login to continue
//               </p>
//             </div>
//             <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
//               <FaUser className="text-blue-400 text-2xl" />
//               <input
//                 className="outline-none w-full px-5"
//                 type="text"
//                 placeholder="Ex: john@gmail.com"
//               />
//             </div>
//             <div className="flex items-center mb-10 bg-white p-5 border-2 rounded-md border-blue-400">
//               <FaLock className="text-blue-400 text-2xl" />
//               <input
//                 className="outline-none w-full px-5"
//                 type="password"
//                 placeholder="Enter
//                 the
//                 password"
//               />
//             </div>
//             <div className=" flex items-center gap-10">
//               <button className=" bg-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 duration-300">
//                 LOGIN
//               </button>
//               <h3 className="text-blue-400 font-bold">
//                 <a href="">FORGET PASSWORD?</a>{" "}
//               </h3>
//             </div>
//             <div className="flex gap-10 items-center justify-center mt-10">
//               <h2 className="mr-2 font-bold">Login with</h2>
//               <FaFacebook className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
//               <FaGoogle className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
//               <FaTwitter className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;