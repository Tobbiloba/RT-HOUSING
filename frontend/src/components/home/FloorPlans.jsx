import React, { useEffect, useState } from "react";

const FloorPlans = () => {
  const [currentTab, setCurrentTab] = useState({
    id: 1,
    floor: "BASEMENT",
    ft: "2,537",
    parking: "2",
    half_bath: "3",
    full_bath: "1",
    bed_room: "3",
    top: 1
  });
  const [currentFloorPlac, setCurrentFloorPlan] = useState("");

  const floors = [
    {
      id: 1,
      floor: "BASEMENT",
      ft: "2,537",
      parking: "2",
      half_bath: "3",
      full_bath: "1",
      bed_room: "3",
      top: 1
    },
    {
      id: 2,
      floor: "GROUND FLOOR",
      ft: "5,537",
      parking: "4",
      half_bath: "2",
      full_bath: "5",
      bed_room: "4",
      top: 20
    },
    {
      id: 3,
      floor: "1ST FLOOR",
      ft: "2,537",
      parking: "2",
      half_bath: "3",
      full_bath: "1",
      bed_room: "3",
      top: 36
    },
    {
      id: 4,
      floor: "2ND FLOOR",
      ft: "27,764",
      parking: "2",
      half_bath: "3",
      full_bath: "1",
      bed_room: "3",
      top: 56
    },
    {
      id: 5,
      floor: "ROOFTOP",
      ft: "6,464",
      parking: "6",
      half_bath: "3",
      full_bath: "1",
      bed_room: "3",
      top: 72
    },
  ];

//   console.log(currentTab)
  return (
    <div className="flex items-center exo justify-center py-12 bg-slate-50">
      <div className="container flex px-[5%] md:px-0 flex-col gap-y-24 w-[100%] lg:flex-row justify-evenly items-center gap-4">
        <div className="">
          <h1 className="md:text-5xl text-4xl lg:w-[30rem] text-slate-900">SQUAT PROPERTY FLOOR PLANS</h1>
          <div className="lg:mt-6 mt-16 flex flex-col  md:flex-row  gap-12">
            <div className="flex flex-col gap-6 md:w-[50%] w-[100%]">
              {floors.map((item) => (
                <div key={item.id} onClick={() => setCurrentTab(item)} className={` hover:bg-white hover:border border-slate-600 hover:text-slate-500 cursor-pointer w-[100%] text-white md:w-[15rem] flex items-center justify-center py-3 ${currentTab.id === item.id ? 'shadow-xl bg-white border text-slate-600': ' bg-slate-600'}`}>
                  <p>{item.floor}</p>
                </div>
              ))}
            </div>
            <div className="lg:w-[20rem] md:w-[50%] shadow-md px-5 flex items-center h-[20rem] md:h-[inherit] flex-col justify-evenly bg-white border-slate-600 rounded-md relative border">
                <div className={`hidden md:flex triangle absolute -rotate-90 -left-9`} style={{ top: `${currentTab.top * 4}px` }}
></div>

                <div className="flex flex-row justify-between w-[100%]">
                    <p className="text-[15px]">SQUARE FEET</p>
                    <h1 className="text-xl text-slate-800">{currentTab.ft}</h1>
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <p className="text-[15px]">PARKINGS</p>
                    <h1 className="text-xl text-slate-800">{currentTab.parking}</h1>
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <p className="text-[15px]">FULL BATHS</p>
                    <h1 className="text-xl text-slate-800">{currentTab.full_bath}</h1>
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <p className="text-[15px]">FULL BATHS</p>
                    <h1 className="text-xl text-slate-800">{currentTab.half_bath}</h1>
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <p className="text-[15px]">BED ROOM</p>
                    <h1 className="text-xl text-slate-800">{currentTab.bed_room}</h1>
                </div>
                <button className="bg-slate-600 px-6 w-fit py-2 text-white">Start Now</button>
            </div>
          </div>
        </div>
        <div>
          <img src="https://wpolive.com/suqat/wp-content/uploads/2023/09/plan-2.png" alt="plan" className="lg:w-[35rem]"/>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
