import React from "react";
import { SlRefresh } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { TbBus } from "react-icons/tb";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { OrderTable } from "@/components/profile/table/OrderTable";
const items = [
  {
    name: "Total Booking",
    number: 299,
    icon: <SlRefresh className="text-[20px]"/>,
  },
  {
    name: "Pending Booking",
    number: 299,
    icon: <BsCart2 className="text-[20px]"/>,
  },
  {
    name: "Processing Booking",
    number: 299,
    icon: <TbBus className="text-[24px]"/>,
  },
  {
    name: "Declined Booking",
    number: 299,
    icon: <IoCheckmarkDoneSharp className="text-[20px]"/>,
  },
];

const orders = [
  {

  }
]
const Dashboard = () => {
  return (
    <div className="bg-white exo p-3 rounded-md">
      <div>
        <h1 className="text-xl font-[600]">Dashboard</h1>

        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              className={`border ${
                index == 0
                  ? "bg-green-100"
                  : index == 1
                  ? "bg-yellow-100"
                  : index == 2
                  ? "bg-slate-100"
                  : "bg-red-100"
              }
              flex flex-row justify- gap-6 items-center px-4 h-[5.5rem] rounded-md`}
              key={index}
            >
              <div className="border bg-white/60 w-10 h-10 justify-center flex items-center rounded-full ">{item.icon}</div>
              <div>
                <p className=" text-[14px] mb-1">{item.name}</p>
                <h1 className="text-xl font-[600]">{item.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[16px] mb-4 font-[600]">Recent Orders</h1>
        <OrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
