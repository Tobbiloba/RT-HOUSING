import { CouponTable } from "@/components/admin/table/CouponTable";
import { EmployeeTable } from "@/components/admin/table/EmployeeTable";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import { useDispatch, useSelector } from "react-redux";
import { getAdminEmployee } from "@/action/employee";
import { CircularProgress } from "@mui/material";
const couponArray = [
  {
    id: "1",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user5.jpg",
    last_name: "Doe",
    first_name: "John",
    email: "johndoe@gmail.com",
    role: "Care taker",
    last_login: "3 days ago",
  },
  {
    id: "2",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user3.jpg",
    last_name: "James",
    first_name: "Smith",
    email: "johndoe@gmail.com",
    role: "Care taker",
    last_login: "3 days ago",
  },
  {
    id: "3",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user1.jpg",
    last_name: "Williams",
    first_name: "Emma",
    email: "emmawilliams@gmail.com",
    role: "Customer Support",
    last_login: "1 day ago",
  },
  {
    id: "4",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user2.jpg",
    last_name: "Anderson",
    first_name: "Daniel",
    email: "daniel.anderson@gmail.com",
    role: "Manager",
    last_login: "2 days ago",
  },
  {
    id: "5",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user4.jpg",
    last_name: "Brown",
    first_name: "Olivia",
    email: "olivia.brown@gmail.com",
    role: "Developer",
    last_login: "4 days ago",
  },
  {
    id: "6",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user6.jpg",
    last_name: "Martin",
    first_name: "Sophia",
    email: "sophia.martin@gmail.com",
    role: "Designer",
    last_login: "2 days ago",
  },
  {
    id: "7",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user7.jpg",
    last_name: "Garcia",
    first_name: "Lucas",
    email: "lucas.garcia@gmail.com",
    role: "Marketing",
    last_login: "5 days ago",
  },
  {
    id: "8",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user8.jpg",
    last_name: "Robinson",
    first_name: "Ava",
    email: "ava.robinson@gmail.com",
    role: "Sales",
    last_login: "3 days ago",
  },
  {
    id: "9",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user9.jpg",
    last_name: "White",
    first_name: "Ethan",
    email: "ethan.white@gmail.com",
    role: "Finance",
    last_login: "2 days ago",
  },
  {
    id: "10",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user10.jpg",
    last_name: "Clark",
    first_name: "Mia",
    email: "mia.clark@gmail.com",
    role: "HR",
    last_login: "4 days ago",
  },
  {
    id: "11",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user11.jpg",
    last_name: "Lee",
    first_name: "Jackson",
    email: "jackson.lee@gmail.com",
    role: "IT",
    last_login: "1 day ago",
  },
  {
    id: "12",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user12.jpg",
    last_name: "Perez",
    first_name: "Emily",
    email: "emily.perez@gmail.com",
    role: "Quality Assurance",
    last_login: "3 days ago",
  },
  {
    id: "13",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user13.jpg",
    last_name: "Harris",
    first_name: "Liam",
    email: "liam.harris@gmail.com",
    role: "Logistics",
    last_login: "2 days ago",
  },
  {
    id: "14",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user14.jpg",
    last_name: "Smith",
    first_name: "Ella",
    email: "ella.smith@gmail.com",
    role: "Content Writer",
    last_login: "4 days ago",
  },
  {
    id: "15",
    avatar:
      "https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/user15.jpg",
    last_name: "Taylor",
    first_name: "Logan",
    email: "logan.taylor@gmail.com",
    role: "Operations",
    last_login: "2 days ago",
  },
];

const Employees = () => {
  const dispatch = useDispatch();
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const navigate = useNavigate();
  const {status} = useSelector((state) => state?.deleteEmployee)
  console.log(status)
  useEffect(() => {
    dispatch(getAdminEmployee({ id: "65c77993a24964910729d98d" }));
  }, [status]);
  const { loading, employees} = useSelector((state) => state?.fetchAdminEmployee)

  // const loading = false;
  // const error = true;
  // const employees = [];
  console.log(employees);
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2%] flex">
      <div className="rounded h-fit w-[100%]">
        <div className="flex p-4 text-[13px] text-slate-100 flex-row gap-x-7 gap-y-4 justify-end">
          <button className="px-5 py-2 bg-red-600 cursor-not-allowed">
            DELETE
          </button>
          <button
            className="px-5 py-2 bg-green-600"
            onClick={() => navigate("/admin/employees/add-employee")}
          >
            ADD EMPLOYEE
          </button>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          ) : !loading && employees && employees.length > 0 ? (
            <EmployeeTable data={employees} />
          ) : (
            !loading &&
            employees &&
            employees.length == 0 && (
              <div className="text-center">
                {/* <div> */}
                <h1 className="text-slate-400 text-[14px]">No employee found</h1>
                {/* </div> */}
              </div>
            )
          )}
        </div>
      </div>

      {/* {
        showAddEmployee && <AddEmployee setState={setShowAddEmployee}/>
      } */}
    </div>
  );
};

export default Employees;
