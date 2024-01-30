import { CouponTable } from "@/components/admin/table/CouponTable";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { startOfToday, startOfTomorrow } from "date-fns";
import Dropdown from "@/components/home/Dropdown";
import { IoCloseOutline } from "react-icons/io5";
const couponArray = [
  {
    id: "bhqecj4p",
    title: "10% off",
    status: "active",
    code: "BDIe4#",
    discount: "10%",
  },
  {
    id: "sdf23dfs",
    title: "20% off",
    status: "pending",
    code: "EFGg6@",
    discount: "20%",
  },
  {
    id: "ghe9fg8d",
    title: "Free Shipping",
    status: "used",
    code: "XYZr3!",
    discount: "Free",
  },
  {
    id: "fgh45fgs",
    title: "15% off",
    status: "used",
    code: "LMNp2%",
    discount: "15%",
  },
  {
    id: "abc12xyz",
    title: "25% off",
    status: "pending",
    code: "PQRt7@",
    discount: "25%",
  },
  {
    id: "jkl89pqr",
    title: "Free Gift",
    status: "inactive",
    code: "STUv5!",
    discount: "Free Gift",
  },
  // Add 9 more objects with random data
  {
    id: "mno34abc",
    title: "12% off",
    status: "active",
    code: "XYZp8#",
    discount: "12%",
  },
  {
    id: "uvw56def",
    title: "30% off",
    status: "active",
    code: "JKLq1@",
    discount: "30%",
  },
  {
    id: "rst78ghi",
    title: "Buy One Get One",
    status: "pending",
    code: "ABCw2!",
    discount: "BOGO",
  },
  {
    id: "xyz90jkl",
    title: "5% off",
    status: "inactive",
    code: "DEFx4%",
    discount: "5%",
  },
  {
    id: "pqr23mno",
    title: "Free Item",
    status: "active",
    code: "GHIy3!",
    discount: "Free Item",
  },
  {
    id: "lmn45rst",
    title: "18% off",
    status: "pending",
    code: "UVWz6%",
    discount: "18%",
  },
  {
    id: "abc67uvw",
    title: "Buy Two Get One",
    status: "active",
    code: "XYZa7!",
    discount: "BTGO",
  },
  {
    id: "def89xyz",
    title: "7% off",
    status: "inactive",
    code: "PQRb8%",
    discount: "7%",
  },
  {
    id: "ghi01pqr",
    title: "Free Upgrade",
    status: "active",
    code: "STUc9!",
    discount: "Free Upgrade",
  },
  {
    id: "jkl23stu",
    title: "22% off",
    status: "inactive",
    code: "VWXd0%",
    discount: "22%",
  },
  {
    id: "mno45vwx",
    title: "Buy Three Get One",
    status: "pending",
    code: "YZAe1!",
    discount: "BTGO",
  },
];
const Input = ({ state, setState, label, placeholder }) => {
  return (
    <div className="w-[100%] flex flex-row gap-[2rem] justify-between items-center md:pr-[5%] pr-[1rem]">
      <label className="text-slate-400 flex flex-row text-[14px] items-center gap-4 w-fit">
        <span className="text-white h-4">*</span>
        {label}
      </label>

      <input
        className="border flex-1 text-[14px] bg-transparent h-[2.5rem] w-[100%] border-slate-500 outline-none pl-3 text-white"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
    </div>
  );
};
const DateSelect = ({ state, setState, label }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
      <p className="text-slate-400 flex flex-row text-[14px] items-center gap-4 w-fit">
        <span className="text-white h-4">*</span>
        {label}
      </p>
      <div className="h-[2.5rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row">
        <input
          className="border w-[100%] text-[14px] h-[100%] bg-transparent  border-slate-500  outline-none pl-3 text-white"
          // onChange={(e) => setState(e.target.value)}
          value={state.toLocaleDateString()}
        />
        <div
          className="w-16 rounded-r-md flex text-white items-center justify-center bg-slate-500"
          onClick={() => setShowCalendar(true)}
        >
          <FaCalendarAlt />
        </div>
      </div>
      {showCalendar && (
        <div className="absolute right-0 -bottom-[21rem] z-[100]">
          <Calendar
            selectedDay={state}
            setSelectedDay={setState}
            setShowCalendar={setShowCalendar}
          />
        </div>
      )}
    </div>
  );
};
const options = ["Fixed", "Percent"];
const AddCoupon = ({setState}) => {
  let today = startOfToday();
  let tomorrow = startOfTomorrow();

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [freeShipping, setFreeShipping] = useState(false);
  const [discountType, setDiscountType] = useState("--Select--");

  function generateRandomCouponId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let couponId = "";

    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      couponId += characters.charAt(randomIndex);
    }

    setCode(couponId);
    return couponId;
  }

  return (
    <div className="w-[100vw] top-0 left-0 flex items-center justify-center h-[100vh] bg-black/40 z-[100] fixed">
      <div className="max-w-[40rem] relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-700 h-fit p-[1rem]">
      <IoCloseOutline className="absolute -right-4 -top-4 text-black hover:animate-spin cursor-pointer bg-white text-[34px]  shadow-md border p-[1px]" onClick={() => setState(false)}/>
        <h1 className="text-[18px] text-slate-400">Discount Coupon Details</h1>

        <div className="flex flex-row gap-4 mt-5 text-slate-900 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
          <h1 className="p-2 cursor-not-allowed">Restriction</h1>
          <h1 className="p-2 cursor-not-allowed">Usage</h1>
        </div>
        <div className="grid grid-cols-1  mt-12  justify-between gap-y-9 gap-x-12">
          <Input
            state={title}
            setState={setTitle}
            label="Coupon Title"
            placeholder=""
          />
          <Input
            state={code}
            setState={setCode}
            label="Coupon Code"
            placeholder=""
          />
      
          <div className="w-[100%] relative flex flex-row gap-[1rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
            <p className="text-slate-400 flex flex-row items-center gap-4 w-fit">
              <span className="text-white h-4 text-[14px]">*</span>
              Free Shipping
            </p>

            <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row gap-5 items-center text-white">
              <input type="checkbox" className="" />

              <h1 className="text-[14px]">Allow Free Shipping</h1>
            </div>
          </div>

          <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center md:pr-[5%] pr-[1rem]">
            <p className="text-slate-400 flex flex-row items-center gap-4 w-fit">
              <span className="text-white h-4 text-[14px]">*</span>
              Discount Type
            </p>

            <div className="h-[3rem] relative flex-1  md:min-w-[10rem] md:max-w-[35rem] flex flex-row gap-5 items-center text-white">
              <Dropdown
                data={options}
                state={discountType}
                setState={setDiscountType}
                height="border border-slate-600  h-[2.5rem] px-3 w-[100%] text-[14px] text-white"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row justify-end">
          <button
            className="border px-4 py-3 text-slate-300 border-slate-500"
            onClick={generateRandomCouponId}
          >
            Generate Coupon Code
          </button>
          <button className="bg-green-600 px-4 py-3 text-slate-300 border-slate-500">
            Create Coupon
          </button>
        </div>
      </div>
    </div>
  );
};
const Coupon = () => {
  const navigate = useNavigate();
  const [showAddCoupon, setShowAddCoupon] = useState(false);
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className="rounded h-fit w-[100%]">
        <div className="flex p-4 text-slate-100 flex-row gap-x-7 gap-y-4 text-[13px] justify-end">
        <button className="px-5 py-2 bg-red-600 cursor-not-allowed">
            DELETE
          </button>
          <button
            className="px-5 py-2 bg-green-600"
            onClick={() => setShowAddCoupon(true)}
          >
            ADD COUPON
          </button>
          
        </div>

        <div>
          <CouponTable data={couponArray} />
        </div>
        {showAddCoupon && <AddCoupon setState={setShowAddCoupon}/>}
      </div>
    </div>
  );
};
export default Coupon;