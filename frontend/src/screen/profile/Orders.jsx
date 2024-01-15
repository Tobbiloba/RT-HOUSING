import React from 'react';
import { OrderTable } from '@/components/profile/table/OrderTable';
const UserOrders = () => {
  return (
    <div className="bg-white exo p-3 rounded-md">
    <div className="mt-8">
      <h1 className="text-xl mb-4 font-[600]">All Orders</h1>
      <OrderTable />
    </div>
  </div>
  );
}

export default UserOrders;
