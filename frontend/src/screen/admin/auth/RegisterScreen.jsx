// @ts-nocheck
import React, { useEffect } from 'react'
import Input from '../../../components/Input'
import Dropzone from '@/components/common/dropzone/Dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { registerAdmin } from '../../../action/auth'
import { useNavigate, Link } from 'react-router-dom'
import { registerAdminSchema } from '@/schemas'
import { useFormik } from 'formik'
import Spinner from '@/components/common/spinner/Spinner'
const AdminRegisterScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    dispatch(registerAdmin(values))
    // dispatch(login(values));
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      username: '',
      phone_no: '',
      state: '',
      country: '',
      city: '',
      profile_img: ''
    },
    validationSchema: registerAdminSchema,
    onSubmit,
  })

  const registerAdminUser = useSelector(state => state.adminRegister)
  // console.log(registerAdmin)

  useEffect(() => {
    if (registerAdminUser.adminInfo) {
      navigate('/admin/login')
    }
  }, [registerAdminUser])

  return (
    <div className="flex exo flex-row w-[100vw] h-fit overflow-hidden justify-end bg-[#e9e9e9] p-[1rem] md:p-12 relative">
    
      <div className="absolute left-0 border border--500 top-[20%]">
        <img src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center" />
      </div>
      <div className="w-[35rem] relative z-10 bg-[#ffffff] p-[1rem] md:p-[2rem] flex flex-col justify-between">
        <div></div>
        <div className="items-center flex flex-col">
          <Link to="/" className=" flex text-[28px] text-slate-400 flex-row pt-3 capitalized">
            Fe
            <div className="rotate-12 w-[30px] h-[60px] flex flex-col items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-slate-600"></div>
              <span className="text-slate-600 relative bottom-2">bt</span>
            </div>
            oS
          </Link>

          <div className="mt-6 text-center">
            <h1 className="text-4xl font-[600] text-slate-600">
              Welcome back!
            </h1>
            <p className="mt-4 text-slate-500">Please enter your details</p>
          </div>

          <form onSubmit={handleSubmit} className="w-[100%] mt-16">
            <div className="flex flex-col gap-y-8 md:grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-y-2">
              <Input
                placeholder="Type in your firstname"
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
                placeholder="Type in your lastname"
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
                placeholder="Type in your username"
                type="text"
                label="Username"
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
                placeholder="Type in your email"
                type="text"
                label="Email"
                value={values.email}
                handleChange={handleChange}
                error={errors.email && touched.email ? errors.email : undefined}
                id="email"
              />
              <Input
                placeholder="Type in your phone"
                type="text"
                label="Phone"
                value={values.phone_no}
                handleChange={handleChange}
                error={errors.phone_no && touched.phone_no ? errors.phone_no : undefined}
                id="phone_no"
              />

              <Input
                placeholder="Type in your country"
                type="text"
                label="Country"
                value={values.country}
                handleChange={handleChange}
                error={
                  errors.country && touched.country ? errors.country : undefined
                }
                id="country"
              />
              <Input
                placeholder="Type in your state"
                type="text"
                label="State"
                value={values.state}
                handleChange={handleChange}
                error={errors.state && touched.state ? errors.state : undefined}
                id="state"
              />
              <Input
                placeholder="Type in your city"
                type="text"
                label="City"
                value={values.city}
                handleChange={handleChange}
                error={errors.city && touched.city ? errors.city : undefined}
                id="city"
              />

              <div className="col-span-2">
                <Input
                  placeholder="Type in your password"
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

              <div className="col-span-2">
              <Dropzone
                  field={{ name: 'profile_img', value: values.profile_img }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.profile_img && touched.profile_img ? errors.profile_img : undefined
                  }
                  red
                />
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-between">
              <div className="flex flex-row gap-5 items-center">
                <input type="checkbox" className="" />

                <p>Remember me</p>
              </div>

              <p className="text-slate-400 cursor-pointer">Forgot password?</p>
            </div>
            <div className="flex flex-col px-[10%] mt-12 gap-6">
              <button
                type="submit"
                disabled={registerAdminUser.loading}
                className={`border ${
                  registerAdminUser.loading ? 'bg-gray-300 cursor-not-allowed flex flex-row justify-center' : 'bg-slate-900'
                } py-3 text-white`}
              >
                {
                  registerAdminUser.loading ? <div className='flex gap-5 item-center'>
                    <Spinner />
                    <p>Please wait...</p>
                  </div> : "Create Account"
                }
              </button>
            </div>
          </form>
        </div>

        <Link to="/admin/login" className="mt-8">
          <p className="text-slate-600  ">
            Dont have an account?{' '}
            <span className="text-slate-400 cursor-pointer">Sign In</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default AdminRegisterScreen
