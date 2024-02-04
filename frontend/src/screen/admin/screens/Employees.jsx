
import { CouponTable } from '@/components/admin/table/CouponTable';
import { EmployeeTable } from '@/components/admin/table/EmployeeTable';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline , IoCheckmarkDoneOutline} from "react-icons/io5";
import { RiDeleteBin4Line } from "react-icons/ri";
import Input from '@/components/Input';
import { startOfToday, startOfTomorrow } from "date-fns";
import Dropdown from '@/components/home/Dropdown';
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "@/components/Calendar";
const couponArray = [
  {
    id: "1",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user5.jpg",
    last_name: "Doe",
    first_name: "John",
    email: "johndoe@gmail.com",
    role: "Care taker",
    last_login: "3 days ago"
  },
  {
    id: "2",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user3.jpg",
    last_name: "James",
    first_name: "Smith",
    email: "johndoe@gmail.com",
    role: "Care taker",
    last_login: "3 days ago"
  },
  {
    id: "3",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user1.jpg",
    last_name: "Williams",
    first_name: "Emma",
    email: "emmawilliams@gmail.com",
    role: "Customer Support",
    last_login: "1 day ago"
  },
  {
    id: "4",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user2.jpg",
    last_name: "Anderson",
    first_name: "Daniel",
    email: "daniel.anderson@gmail.com",
    role: "Manager",
    last_login: "2 days ago"
  },
  {
    id: "5",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user4.jpg",
    last_name: "Brown",
    first_name: "Olivia",
    email: "olivia.brown@gmail.com",
    role: "Developer",
    last_login: "4 days ago"
  },
  {
    id: "6",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user6.jpg",
    last_name: "Martin",
    first_name: "Sophia",
    email: "sophia.martin@gmail.com",
    role: "Designer",
    last_login: "2 days ago"
  },
  {
    id: "7",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user7.jpg",
    last_name: "Garcia",
    first_name: "Lucas",
    email: "lucas.garcia@gmail.com",
    role: "Marketing",
    last_login: "5 days ago"
  },
  {
    id: "8",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user8.jpg",
    last_name: "Robinson",
    first_name: "Ava",
    email: "ava.robinson@gmail.com",
    role: "Sales",
    last_login: "3 days ago"
  },
  {
    id: "9",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user9.jpg",
    last_name: "White",
    first_name: "Ethan",
    email: "ethan.white@gmail.com",
    role: "Finance",
    last_login: "2 days ago"
  },
  {
    id: "10",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user10.jpg",
    last_name: "Clark",
    first_name: "Mia",
    email: "mia.clark@gmail.com",
    role: "HR",
    last_login: "4 days ago"
  },
  {
    id: "11",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user11.jpg",
    last_name: "Lee",
    first_name: "Jackson",
    email: "jackson.lee@gmail.com",
    role: "IT",
    last_login: "1 day ago"
  },
  {
    id: "12",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user12.jpg",
    last_name: "Perez",
    first_name: "Emily",
    email: "emily.perez@gmail.com",
    role: "Quality Assurance",
    last_login: "3 days ago"
  },
  {
    id: "13",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user13.jpg",
    last_name: "Harris",
    first_name: "Liam",
    email: "liam.harris@gmail.com",
    role: "Logistics",
    last_login: "2 days ago"
  },
  {
    id: "14",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user14.jpg",
    last_name: "Smith",
    first_name: "Ella",
    email: "ella.smith@gmail.com",
    role: "Content Writer",
    last_login: "4 days ago"
  },
  {
    id: "15",
    avatar: "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user15.jpg",
    last_name: "Taylor",
    first_name: "Logan",
    email: "logan.taylor@gmail.com",
    role: "Operations",
    last_login: "2 days ago"
  }
  
];
const DateSelect = ({ state, setState, label }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center">
      <p className="text-slate-400 text-[14px] flex flex-row items-center gap-4 w-fit">
        <span className="text-white h-4">*</span>
        {label}
      </p>
      <div className="h-[3rem] relative flex-1  lg:min-w-[10rem] md:max-w-[35rem] flex flex-row">
        <input
          className="border w-[100%] h-[100%] bg-transparent text-[14px] border-slate-500  outline-none pl-3 text-white"
          // onChange={(e) => setState(e.target.value)}
          value={state.toLocaleDateString()}
        />
        <div
          className="w-16 r flex text-white items-center justify-center bg-slate-500"
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
const AddEmployee = ({setState}) => {
  let today = startOfToday();
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname]= useState("")
  const [email, setEmail] = useState("")
  const [startDate, setStartDate] = useState(today);
  const [role, setRole] = useState("--Select--");
  const options = [
    "Housekeeper",
    "Personal Assistant",
    "Driver",
    "Nanny",
    "Maintenance Worker",
    "Laundry Attendant",
    "Personal Trainer",
    "Event Planner",
    "Technology Specialist",
    "Pet Caretaker",
    "Caretaker's Assistant"
  ]
  return (
    <div className='fixed flex items-center justify-center w-[100vw] h-[100vh] top-0 left-0 bg-black/40 z-[100]'>
      <div className="max-w-[40rem] w-[100%] mt-[6rem] md:mt-0 h-fit bg-slate-700  relative">
        <IoCloseOutline className="absolute -right-4 -top-4 text-black hover:animate-spin cursor-pointer bg-white text-[34px] shadow-md border p-[1px]" onClick={() => setState(false)}/>

        <h1 className="p-[1rem] text-white">Edit Profile</h1>

        <div>
          <div className=" p-[1rem] border-t">
            <div className=" w-[100%] mt-10 flex flex-col gap-10">
            <Input
              placeholder=""
              type="text"
              label="Firstname"
              value={firstname}
              setValue={setFirstname}
              style="border border-white border-b-gray-400 text-black"
              bigText="18px"
              smallText="14px"
            />
            <Input
              placeholder=""
              type="text"
              label="Lastname"
              value={lastname}
              setValue={setLastname}
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
            <DateSelect
            state={startDate}
            setState={setStartDate}
            label="Start Date"
          />
            <div className="w-[100%] relative flex flex-row gap-[2rem]  justify-between items-center ">
            <p className="text-slate-400 text-[14px] flex flex-row items-center gap-4 w-fit">
              <span className="text-white h-4">*</span>
              Employee Role
            </p>

            <div className="h-[3rem] relative flex-1  w-[100%] flex flex-row gap-5 items-center text-white">
            <Dropdown
              data={options}
              state={role}
              setState={setRole}
              height="border border-slate-600 py-3 h-fit px-3 w-[100%] text-[14px] text-white"
            />
            </div>
          </div>
            </div>

          </div>
          <div className=" text-[14px] flex p-[1rem] mt-4 flex-row gap-6 justify-end">
            <button className="border border-red-500 text-red-500 px-5 py-2">Discard changes</button>
            <button className="px-5 py-2 bg-green-600">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
const Employees = () => {
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2%] flex">
      <div className='rounded h-fit w-[100%]'>
        <div className='flex p-4 text-[13px] text-slate-100 flex-row gap-x-7 gap-y-4 justify-end'>
          <button className='px-5 py-2 bg-red-600 cursor-not-allowed'>DELETE</button>
          <button className='px-5 py-2 bg-green-600' onClick={() => setShowAddEmployee(true)}>ADD EMPLOYEE</button>
          
        </div>

        <div>
          <EmployeeTable data={couponArray}/>
        </div>

      </div>

      {
        showAddEmployee && <AddEmployee setState={setShowAddEmployee}/>
      }
    </div>
  );
}

export default Employees;