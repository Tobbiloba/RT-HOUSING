import React from 'react';
import PieChart from '../../../components/admin/chart/PieChart';
import TotalRevenue from '../../../components/admin/chart/TotalRevenue';
import PropertyReferrals from '../../../components/admin/chart/PropertyReferrals';
const Home = () => {
  return (
    <div className='p-4 md:px-[5%] min-h-[100vh] exo overflow-hidden  w-[100%] h-fit'>
      <h1 className='text-white text-xl mt-6'>Dashboard</h1>

      <div className='mt-12 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className=' w-[100%]'>
          <PieChart
                    title="Properties for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
        </div>
        <div className=' w-[100%]'>
                <PieChart
                    title="Properties for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                </div>
                <div className=' w-[100%]'>
                <PieChart
                    title="Total customers"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                </div>
                <div className=' w-[100%]'>
                <PieChart
                    title="Properties for Cities"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 mt-20 w-[100%]'>
      <TotalRevenue />
                <PropertyReferrals />
      </div>
    </div>
  );
}

export default Home;
