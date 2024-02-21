// @ts-nocheck
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
    <div className="flex exo flex-row w-[100vw] min-h-[100vh] overflow-hidden justify-end bg-[#e9e9e9] md:p-12 relative">
      {/* <div className="w-8/12 bg-[#2d3133] flex flex-col p-[2rem] justify-evenly"></div> */}

      <div className="absolute left-0 border border--500 top-[20%]">
        <img src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center" />
      </div>
      <div className="w-[32rem] relative z-10 bg-[#ffffff] p-[1rem] md:p-[2rem] flex flex-col justify-between rounded-">
        <div></div>
        <div className="items-center flex flex-col">
          <h1 className=" flex text-[28px] text-slate-400 flex-row pt-3 capitalized">
            Fe
            <div className="rotate-12 w-[30px] h-[60px] flex flex-col items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-slate-600"></div>
              <span className="text-slate-600 relative bottom-2">bt</span>
            </div>
            oS
          </h1>

          <div className="mt-6 text-center">
            <h1 className="text-4xl font-[600] text-slate-600">
              Welcome back!
            </h1>
            <p className="mt-4 text-slate-500">Please enter your details</p>
          </div>

          <form onSubmit={handleSubmit} className="w-[100%] mt-16">
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
              {/* <Input
              placeholder="Type in your email"
              type="text"
              label="Email"
              value={email}
              setValue={setEmail}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />

            <Input
              placeholder="Type in your password"
              type="password"
              label="Password"
              value={password}
              setValue={setPassword}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            /> */}
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
            <div className=" px-[10%] mt-12">
              <button
                type="submit"
                // disabled={!isActive}
                className={`border w-[100%] bg-slate-900 py-3 text-white text-[14px] rounded-`}
              >
                {loading ? 'Please wait...' : 'Log In'}
              </button>
            </div>
          </form>
          <div className="w-[100%] px-[10%] mt-6 flex justify-center">
            <button className="flex  w-[100%] flex-row border text-[14px] justify-center gap-4 items-center py-3 rounded- text-slate-600">
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
  )
}

export default AdminLoginScreen