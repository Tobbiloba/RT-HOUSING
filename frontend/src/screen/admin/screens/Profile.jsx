import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Input from "@/components/Input";
const UpdateProfile = ({setShowState}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [phoneNo, setPhoneNo] = useState("")

  return (
    <div className="fixed text-white top-0 left-0 z-[100] w-[100%]  h-[100%] bg-black/50 flex items-center justify-center">
      <div className="max-w-[45rem] w-[90%] mt-[6rem] md:mt-0 h-fit bg-slate-700 relative">
        <IoIosClose className="absolute -right-4 -top-4 text-black hover:animate-spin cursor-pointer bg-white text-[34px] shadow-md border p-[1px]" onClick={() => setShowState(false)}/>

        <h1 className="p-[1rem]">Edit Profile</h1>

        <div>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-[1rem] p-[1rem] border-t">
            <div className="max-w-[25rem] w-[100%] mt-10 flex flex-col gap-10">
            <Input
              placeholder=""
              type="text"
              label="Lastname"
              value={username}
              setValue={setUsername}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            <Input
              placeholder=""
              type="text"
              label="Email"
              value={email}
              setValue={setEmail}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            <Input
              placeholder=""
              type="text"
              label="Contact"
              value={phoneNo}
              setValue={setPhoneNo}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            <div className="
            flex flex-row gap-6">
            <Input
              placeholder=""
              type="text"
              label="City"
              value={city}
              setValue={setCity}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            <Input
              placeholder=""
              type="text"
              label="State"
              value={state}
              setValue={setState}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            </div>
            <Input
              placeholder=""
              type="text"
              label="Country"
              value={country}
              setValue={setCountry}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            </div>
            <div className="mr-[1rem] h-fit">
              <p className="text-[14px] mb-4">Profile Picture:</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&usqp=CAU" className="w-32 h-32 rounded-full"/>
            </div>
            
          </div>
          <div className=" text-[14px] flex p-[1rem] mt-4 flex-row gap-6 justify-end">
            <button className=" border border-red-500 text-red-500 px-5 py-2">Discard changes</button>
            <button className="px-5 py-2 bg-green-600">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
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
