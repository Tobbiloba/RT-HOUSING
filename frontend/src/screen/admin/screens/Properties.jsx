import React, { useState } from "react";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import { Select } from "@mui/material";
import Dropdown from "../../../components/home/Dropdown";
import { IoMdAdd } from "react-icons/io";
import {Link} from "react-router-dom";
const AdminProperties = () => {
    const [option, setOption] = useState('All')
    const [sortBy, setSortBy] = useState(true)

    const options = [
        "Apartment",
                                    "Villa",
                                    "Farmhouse",
                                    "Condos",
                                    "Townhouse",
                                    "Duplex",
                                    "Studio",
                                    "Chalet",
    ]
  return (
    <div className="exo p-4 md:px-[5%]">
      <h1 className="text-white text-xl">All Properties</h1>

      <div className=" flex flex-row flex-wrap gap-4 mt-12">
        <button className="px-8 py-5 text-[18px] bg-slate-500 rounded-md text-white flex flex-row gap-5 cursor-pointer items-center" onClick={() => setSortBy(!sortBy)}>
          Sort Price
          {
            sortBy ? <HiArrowLongDown /> : <HiArrowLongUp />
          }
          
        </button>

        <input placeholder="Search by title" className="min-w-[20rem] py-5 bg-transparent border px-3 border-slate-500 text-white placeholder-text-white rounded-md" />
        <div>
    

          <Dropdown data={options} state={option} setState={setOption} height="border border-slate-500 py-5 px-3 w-32 rounded-md text-[14px] text-slate-500"/>
        </div>
      </div>

          <Link to="/admin-add-property">
            <button className="mt-10 rounded-md text-[18px] gap-5 flex text-white bg-slate-500 px-8 py-5 items-center"><IoMdAdd className="text-[22px]"/> Add Property</button>
          </Link>
      
    </div>
  );
};

export default AdminProperties;
