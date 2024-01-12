import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import Input from "../input/Input";
const Topbar = ({ setShowSlide, showSlide }) => {
  const [search, setSearch] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div
      className={` bg-slate-700 z-[999] md:z-[100] exo ml-auto px-[1rem] md:px-[3rem] md:fixed shadow-b-md h-fit md:h-[4.25rem] flex flex-col md:flex-row md:items-center justify-between  ${
        showSlide ? "sidebar-slide-in-topbar" : "sidebar-slide-out-in-topbar"
      }`}
    >
      <div className=" flex flex-row justify-between items-center h-[4.25rem]">
        <div className="cursor-pointer" onClick={() => (setShowSlide(!showSlide), setShowMobileMenu(false))}>
          <HiOutlineMenuAlt2 className="text-white text-[32px]" />
        </div>

        <div className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <CiMenuKebab className="text-white text-[32px]" />
        </div>
      </div>

      {
        showMobileMenu && <div className="flex md:hidden  mb-4 mt-2 justify-end flex-col px-[1rem]  items-center text-slate-500">
        {/* label, value, setValue */}
        {/* <div className="w-[10rem] h-[2rem]"> */}
        {/* <Input label="Search..." value={search} setValue={setSearch}/>  */}
        <input
          placeholder="search"
          className="bg-slate-700 w-[100%] border-slate-500 border px-6 py-2 rounded-md"
        />
        {/* </div> */}
        <div className="flex flex-row gap-9 w-[100%] items-center justify-end mt-2">

        <div className="border-l-2  text-[15px] py-1 px-4 border-slate-500">
          EN
        </div>
        <div className="border-l-2 border-r-2 text-[18px] py-1 px-4 border-slate-500">
          <FaRegBell />
        </div>
        <div className="border-r-2 text-[20px] py-1 px-4 border-slate-500">
          <LuMessageSquare />
        </div>
        <div className="">
          <img
            src="https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/man.png"
            className="w-12 h-12 rounded-full"
          />
        </div>
        </div>

        
      </div>
      }

      <div className="hidden md:flex flex-row  items-center text-slate-500">
        {/* label, value, setValue */}
        {/* <div className="w-[10rem] h-[2rem]"> */}
        {/* <Input label="Search..." value={search} setValue={setSearch}/>  */}
        <input
          placeholder="search"
          className="bg-slate-700 mr-4 border-slate-500 border px-4 py-2 rounded-md"
        />
        {/* </div> */}

        <div className="border-l-2  text-[15px] py-1 px-4 border-slate-500">
          EN
        </div>
        <div className="border-l-2 relative border-r-2 text-[18px] py-1 px-4 border-slate-500">
        <span className="absolute bottom-0 right-1 flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-800 opacity-80"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
</span>
          <FaRegBell />
          
          {/* <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-slate-800 opacity-75 top-0 right-0"></span> */}
        </div>
        <div className="border-r-2 relative text-[20px] py-1 px-4 border-slate-500">
        <span className="absolute bottom-0 right-1 flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-800 opacity-80"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
</span>
          <LuMessageSquare />
        </div>

        <div className="ml-4">
          <img
            src="https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/man.png"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
