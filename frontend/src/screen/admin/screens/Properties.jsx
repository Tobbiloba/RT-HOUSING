import React, { useEffect, useState } from "react";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import { Select } from "@mui/material";
import Dropdown from "../../../components/home/Dropdown";
import { IoMdAdd } from "react-icons/io";
import {Link} from "react-router-dom";
import {useDispatch, useSelector}  from 'react-redux'
import { getMyProperties } from "../../../action/property";
const AdminProperties = () => {
  const dispatch = useDispatch()

  
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

    useEffect(() => {
      dispatch(getMyProperties())
    }, [])

    const myProperties = useSelector((state) => state?.myProperties)
    console.log(myProperties.properties)
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

          {/* "https://v5.airtableusercontent.com/v2/24/24/1704571200000/wWnepiJ4SV_LGiaIS8NRXg/JdcOGaY7VTODbSsDjd7mvHl8x7Hc4soDwO3H-byFSROpvIiERio_3lOSbpfPv1SU6s2h1ixS6AIOvmBuP5VUAZp56oIcXAixUXXZEeOq7ZQa4DRwOGAXVhWvDLEznYQOhuhu-FgWBI-ug8UKNDMUaf4tjGeo5SWlolmuVrpsjqdbsI3jGDVSwrnff1ogsSUk/DrpLtaP1WkBDoT0Auiq4pJL7c0Xp6Cfb0zw6DeVl_FY" */}
          <div className="grid grid-cols-1 gap-x-12 mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {
              myProperties?.properties?.map((item, index) => {
                  console.log(item)
                return(
                  <div key={index}>
                    <div className="relative">
                      <img src={item.property_information.property_images[0]}
                       className="rounded-sm min-h-[15rem]"/>
                      <h1 className="absolute top-4 right-4 text-[12px] bg-slate-600 text-white px-2 py-1">{item.property_information.peoperty_bedrooms} BEDROOMS</h1>
                    </div>
                    <div className="bg-slate-600 text-white p-8">
                      <h1 className="text-xl">{item.property_information.property_name}</h1>
                      <p>{item.property_information.property_location.country}, {item.property_information.property_location.state}</p>

                      <div className="mt-8 pt-4 border-2 border-slate-600 border-t-slate-400">
                        <p>#{item.property_information.pricing},000</p>


                        <div className="mt-10 flex justify-center">
                        <button className="bg-gray-700 text-[14px] px-4 py-2 text-white font-[400]">VIEW DETAILS</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      
    </div>
  );
};

export default AdminProperties;
