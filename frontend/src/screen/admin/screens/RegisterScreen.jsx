import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Dropzone from "../../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "../../../action/auth";
import {useNavigate} from 'react-router-dom'
const AdminRegisterScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [image, setImage] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [city, setCity] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    if(!email || !password || !username || !country || !state || !city || !firstname || !lastname || !image || !phoneNo) {
        setIsActive(false)
    } else {
        setIsActive(true)
    }
  }, [email, password, username, country, state, city, phoneNo, firstname, lastname, image])

  const handleRegisterAdmin = () => {
    if(!isActive) {
        return;
    }

    dispatch(registerAdmin(firstname, lastname, username, email, phoneNo, state, country, city, password, image))

  }

  const registerAdmin = useSelector((state) => state.adminRegister)
  console.log(registerAdmin)

  useEffect(() => {
    if(registerAdmin.adminInfo) {
      navigate('/admin/login')
    }
  }, [registerAdmin])
  
  return (
    <div className="flex exo flex-row w-[100vw] h-fit overflow-hidden justify-end bg-[#e9e9e9] p-12 relative">
      {/* <div className="w-8/12 bg-[#2d3133] flex flex-col p-[2rem] justify-evenly"></div> */}

      <div className="absolute left-0 border border--500 top-[20%]">
        <img src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center"/>
      </div>
      <div className="w-[35rem] relative z-10 bg-[#ffffff] p-[2rem] flex flex-col justify-between rounded-xl">
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
          <h1 className="text-4xl font-[600] text-slate-600">Welcome back!</h1>
          <p className="mt-4 text-slate-500">Please enter your details</p>
        </div>



        <div className="w-[100%] mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Input
              placeholder="Type in your firstname"
              type="text"
              label="Firstname"
              value={firstname}
              setValue={setFirstname}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />
            <Input
              placeholder="Type in your lastname"
              type="text"
              label="Lastname"
              value={lastname}
              setValue={setLastname}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />
          <Input
              placeholder="Type in your username"
              type="text"
              label="Username"
              value={username}
              setValue={setUsername}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />
            <Input
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
              placeholder="Type in your phone no"
              type="text"
              label="Phone no"
              value={phoneNo}
              setValue={setPhoneNo}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />

            
            <Input
              placeholder="Type in your country"
              type="text"
              label="Country"
              value={country}
              setValue={setCountry}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />

<Input
              placeholder="Type in your state"
              type="text"
              label="State"
              value={state}
              setValue={setState}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />

<Input
              placeholder="Type in your city"
              type="text"
              label="City"
              value={city}
              setValue={setCity}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />



    <div className="col-span-2">
    <Input
              placeholder="Type in your password"
              type="password"
              label="Password"
              value={password}
              setValue={setPassword}
              style="border border-white border-b-gray-400"
              bigText="18px"
              smallText="14px"
            />
    </div>

            <div className="col-span-2">
                <Dropzone state={image} setState={setImage} showImage={false}/>
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
               <button onClick={handleRegisterAdmin} disabled={!isActive} className={`border ${!isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-slate-900'} py-4 text-white rounded-full`}>Create Account</button>
 
            </div>
          
        </div>
        </div>
        

      

        <p className="text-slate-600 mt-10 ">Don't have an account? <span className="text-slate-400 cursor-pointer">Sign Up</span></p>
      </div>
    </div>
  );
};

export default AdminRegisterScreen;
