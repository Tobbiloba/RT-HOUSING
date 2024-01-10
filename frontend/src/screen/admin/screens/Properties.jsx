import React, { useEffect, useState } from "react";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import { Select } from "@mui/material";
import Dropdown from "../../../components/home/Dropdown";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyProperties } from "../../../action/property";
const AdminProperties = () => {
  const dispatch = useDispatch();

  const encode = encodeURIComponent("fieubfeiwub/elwukbekwnkeudkeu");
  console.log(encode);
  const [option, setOption] = useState("All");
  const [sortBy, setSortBy] = useState(true);

  const options = [
    "Apartment",
    "Villa",
    "Farmhouse",
    "Condos",
    "Townhouse",
    "Duplex",
    "Studio",
    "Chalet",
  ];

  useEffect(() => {
    dispatch(getMyProperties());
  }, []);

  const {properties, loading} = useSelector((state) => state?.myProperties);
  // console.log(myProperties);
  return (
    <div className="exo">
      <div className="pt-6 items-center flex-wrap gap-y-6 pb-4 px-4 bg-slate-800 mt-0  md:px-[5%] flex flex-row justify-between">
        <h1 className="text-white text-xl">All Orders</h1>


        <div className="flex flex-row  gap-6 flex-wrap">
          <div className=" flex flex-row flex-wrap gap-4">
          <button
            className="px-5 py-3 h-fit text-[15px] bg-slate-900 rounded-md text-white flex flex-row gap-5 cursor-pointer items-center"
            onClick={() => setSortBy(!sortBy)}
          >
            Sort Price
            {sortBy ? <HiArrowLongDown /> : <HiArrowLongUp />}
          </button>

          <input
            placeholder="Search by title"
            className="min-w-[17rem] py-3 h-fit bg-transparent border px-3 border-slate-900 text-white placeholder-text-white rounded-md"
          />
          <div>
            <Dropdown
              data={options}
              state={option}
              setState={setOption}
              height="border border-slate-900 py-3 h-fit px-3 w-32 rounded-md text-[14px] text-slate-500"
            />
          </div>
        </div>

        <Link to="/admin/add-property">
          <button className="rounded-md text-[15px] gap-5 flex text-white bg-slate-900 px-5 py-3 items-center">
            <IoMdAdd className="text-[22px]" /> Add Property
          </button>
        </Link>
        </div>

        
      </div>

      {/* "https://v5.airtableusercontent.com/v2/24/24/1704571200000/wWnepiJ4SV_LGiaIS8NRXg/JdcOGaY7VTODbSsDjd7mvHl8x7Hc4soDwO3H-byFSROpvIiERio_3lOSbpfPv1SU6s2h1ixS6AIOvmBuP5VUAZp56oIcXAixUXXZEeOq7ZQa4DRwOGAXVhWvDLEznYQOhuhu-FgWBI-ug8UKNDMUaf4tjGeo5SWlolmuVrpsjqdbsI3jGDVSwrnff1ogsSUk/DrpLtaP1WkBDoT0Auiq4pJL7c0Xp6Cfb0zw6DeVl_FY" */}


      <div>
        {
          loading ? <div></div> : properties?.length ?
        
      <div className="grid grid-cols-1 gap-x-12 mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {properties?.map((item, index) => {
          // console.log(item)
          return (
            <div key={index} className="border p-1 border-slate-600 rounded-md">
              <div className="relative ">
                <img
                  src={item.property_information.property_images[0]}
                  className="rounded-sm min-h-[15rem] w-[100%]"
                />
                <h1 className="absolute top-4 right-4 text-[12px] bg-slate-600 text-white px-2 py-1">
                  {item.property_information.peoperty_bedrooms} BEDROOMS
                </h1>
              </div>
              <div className="bg-slate-600 text-white p-8">
                <h1 className="text-xl">
                  {item.property_information.property_name}
                </h1>
                <p>
                  {item.property_information.property_location.country},{" "}
                  {item.property_information.property_location.state}
                </p>

                <div className="mt-8 pt-4 border-2 border-slate-600 border-t-slate-400">
                  <p>#{item.property_information.pricing},000</p>

                  <div className="mt-10 flex justify-center">
                    <Link
                      to={`/admin/property-detail/${encodeURIComponent(
                        item.property_id
                      )}`}
                    >
                      <button className="bg-gray-700 text-[14px] px-4 py-2 text-white font-[400]">
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
: <div className="w-[100%] h-[80vh] flex items-center justify-center flex-col">
  <img src="/empty.png" className="w-[40rem] object-contain"/>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono text-slate-300">No property</h1>
    <p className="text-[15px] mt-3 text-slate-500 text-center">Seems like you haven't added any properties yet. Ready to begin? <br /> Click the button below to start adding your first property.</p>
    <Link to="/admin/add-property">
          <button className="rounded-md mt-6 text-[15px] gap-5 flex text-white bg-slate-600 px-5 py-3 items-center">
            <IoMdAdd className="text-[22px]" /> Add Property
          </button>
        </Link>
</div>
}
</div>
    </div>
  );
};

export default AdminProperties;
