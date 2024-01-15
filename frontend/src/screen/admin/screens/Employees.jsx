
import { CouponTable } from '@/components/admin/table/CouponTable';
import { EmployeeTable } from '@/components/admin/table/EmployeeTable';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

console.log(couponArray);


const Employees = () => {
  const navigate = useNavigate()
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className='rounded hif-t w-[100%] bg-slate-700'>
        <div className='flex p-4 text-slate-100 flex-row gap-x-7 gap-y-4 text-[15px] justify-end'>
          <button className='px-5 py-2 border' onClick={() => navigate('/admin/employees/add-employee')}>ADD EMPLOYEE</button>
          <button className='px-5 py-2 border cursor-not-allowed'>DELETE</button>
        </div>

        <div>
          <EmployeeTable data={couponArray}/>
        </div>
      </div>
    </div>
  );
}

export default Employees;
