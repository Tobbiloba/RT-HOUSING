import { CouponTable } from '@/components/admin/table/CouponTable'
import { EmployeeTable } from '@/components/admin/table/EmployeeTable'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddEmployee from './AddEmployee'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminEmployee } from '@/action/employee'
import { CircularProgress } from '@mui/material'


const Employees = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status } = useSelector(state => state?.deleteEmployee)
  console.log(status)
  useEffect(() => {
    dispatch(getAdminEmployee({ id: '65c77993a24964910729d98d' }))
  }, [status])
  const { loading, employees } = useSelector(state => state?.fetchAdminEmployee)

  // const loading = false;
  // const error = true;
  // const employees = [];
  console.log(employees)
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2%] flex">
      <div className="rounded h-fit w-[100%]">
        <div className="flex p-4 text-[13px] text-slate-100 flex-row gap-x-7 gap-y-4 justify-end">
          <button className="px-5 py-2 bg-red-600 cursor-not-allowed">
            DELETE
          </button>
          <button
            className="px-5 py-2 bg-green-600"
            onClick={() => navigate('/admin/employees/add-employee')}
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
                <h1 className="text-slate-400 text-[14px]">
                  No employee found
                </h1>
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
  )
}

export default Employees
