import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Dropzone from "./ImageUploader";
import Input from "./Input";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../action/auth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 0
};
const RegisterForm = ({setShowRegister, showRegister}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [avatar, setAvatar] = useState('')
    const handleClose = () => {
        setShowRegister(false);
      };

      const handleCreateAccount = () => {

        if(!email || !password || !phoneNo || !name || !avatar) {
          console.log('fill in all fields')


          toast.error("Fill in all forms", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

            return ;
        }

        dispatch(register(email, password, phoneNo, name, avatar))
      }
  return (
    <div>
      {/* {showDetails && */}
      <Modal
        open={showRegister}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-white text-[14px] exo z-10 rounded-md overflow-hidden mx-[1rem] w-[90vw] max-w-[27.5rem] md:w-[27.5rem] h-fit">
            <div  className="flex flex-row rounded-md justify-between py-4 px-8 bg-gray-100 ">
                {/* <div> */}
                    <p className="text-yellow-900 font-[600] text-[15px]">Register</p>
                    <p className="text-red-500 cursor-pointer" onClick={handleClose}>Close</p>
                {/* </div> */}
            </div>

            <div className="px-8 pt-8 flex flex-col gap-y-4">
            {/* <input placeholder="Name*" className="border w-[100%] p-3 rounded-md outline-none" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Email*" className="border w-[100%] p-3 rounded-md mt-4 outline-none" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password*" className="border w-[100%] p-3 rounded-md mt-4 outline-none" value={password} onChange={(e) => setPassord(e.target.value)}/>
            <input placeholder="Phone no*" className="border w-[100%] p-3 rounded-md mt-4 outline-none" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/> */}


            <div className="flex flex-col sm:flex-row gap-4">
              <Input
              placeholder="Type in your Fullname"
              type="text"
              label="Name"
              value={name}
              setValue={setName}
            />

<Input
              placeholder="Type in your Email"
              type="email"
              label="Email"
              value={email}
              setValue={setEmail}
            />
            </div>





            <Input
              placeholder="Type in your password"
              type="password"
              label="Password"
              value={password}
              setValue={setPassword}
            />



<Input
              placeholder="Type in your Phone no"
              type="text"
              label="Phone no"
              value={phoneNo}
              setValue={setPhoneNo}
            />


            {/* <input placeholder="Retype Password*" className="border w-[100%] p-3 rounded-md mt-4"/> */}
            <Dropzone state={avatar} setState={setAvatar}/>
            <div className="mt-6 flex flex-row justify-between items-center w-[100%]">
              <button className="border-2 w-[40%] py-3 border-yellow-500 rounded-md" onClick={handleCreateAccount}>Register</button>
              <div className="flex flex-row gap-4">
                <input type="checkbox" className="w-5 border outline-green-500"/>
                <p className="text-gray-400 text-[15px]">Remember me here</p>
              </div>
            </div>
            <div className="mt-7 flex flex-row gap-3 items-center">
              <div className="flex-1 h-[1px] bg-yellow-600"></div>
              <p className="text-gray-500">or</p>
              <div className="flex-1 h-[1px] bg-yellow-600"></div>
            </div>
            <div className="mt-7 flex flex-row gap-3">
                <div className="flex flex-row flex-1 rounded-sm overflow-hidden items-center">


                    <div className="py-2 px-3 bg-yellow-900">
                                            <img src="/facebook.png" alt="facebook icon" className="w-5 h-5 " />
                    </div>
                    <p className="flex-1 text-[14px] h-[100%] flex items-center pl-3 bg-yellow-700 text-white">Via facebook</p>  
                 
                </div>
                <div className="flex flex-row flex-1 rounded-sm overflow-hidden items-center">

                <p className="flex-1 text-[14px] h-[100%] flex items-center pl-3 bg-yellow-700 text-white">Via Gmail</p> 
                <div className="py-2 px-3 bg-yellow-900">
                                            <img src="/gmail.png" alt="facebook icon" className="w-5 h-5 " />
                    </div>


              
                </div>
            </div>
            
            </div>
            <div className="mt-8 border px-6 py-7">
                <p className="text-[14px] text-center text-slate-600">By signing in you agree to these <span className="text-yellow-400">Terms & Conditions</span> <br /> & consent to <span className="text-yellow-400">Cookie Policy & Privacy Policy</span></p>
            </div>

            <div className="flex flex-row">
                <div className="flex-1 text-center border border-white border-r-gray-200 py-5">
                    <p>Not a member? <span className="text-yellow-400">Signup Now</span></p>
                </div>
                <div className="flex-1 text-center py-5">
                    <p>Forgot password?</p>
                </div>
            </div>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default RegisterForm;
