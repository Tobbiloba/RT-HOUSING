
import { CouponTable } from '@/components/admin/table/CouponTable';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

console.log(couponArray);


const Coupon = () => {
  const navigate = useNavigate()
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className='rounded hif-t w-[100%] bg-slate-700'>
        <div className='flex p-4 text-slate-100 flex-row gap-x-7 gap-y-4 text-[15px] justify-end'>
          <button className='px-5 py-2 border' onClick={() => navigate('/admin/coupon/create-coupon')}>ADD COUPON</button>
          <button className='px-5 py-2 border cursor-not-allowed'>DELETE</button>
        </div>

        <div>
          <CouponTable data={couponArray}/>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
