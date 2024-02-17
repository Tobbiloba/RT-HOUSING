import React from 'react'
import { LuWarehouse } from 'react-icons/lu'
import { CiGrid41 } from 'react-icons/ci'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { PaymentTable } from '@/components/admin/table/PaymentTable'

const data = [
  {
    id: 'bhqecj4p',
    price: '721',
    status: 'active',
    property_name: 'Lekki Villa',
    property_type: 'Villa',
    checkout: '25/01/2024',
    location: 'Nigeria, Lagos state, Ikorodu',
  },
  {
    id: 'xzyab34g',
    price: '550',
    status: 'pending',
    property_name: 'Oceanfront Paradise',
    property_type: 'Condo',
    checkout: '10/01/2024',
    location: 'USA, Miami, Florida',
  },
  {
    id: 'pqr567sh',
    price: '890',
    status: 'inactive',
    property_name: 'Mountain Retreat',
    property_type: 'Cabin',
    checkout: '14/01/2024',
    location: 'Canada, Whistler, British Columbia',
  },
  {
    id: 'lmn789jk',
    price: '450',
    status: 'declined',
    property_name: 'City Center Loft',
    property_type: 'Apartment',
    checkout: '08/01/2024',
    location: 'France, Paris',
  },
  {
    id: 'abc123de',
    price: '600',
    status: 'inactive',
    property_name: 'Tropical Oasis',
    property_type: 'Resort',
    checkout: '14/02/2024',
    location: 'Thailand, Phuket',
  },
  {
    id: 'xyz456ab',
    price: '800',
    status: 'active',
    property_name: 'Ski Chalet',
    property_type: 'Chalet',
    checkout: '20/01/2024',
    location: 'Switzerland, Zermatt',
  },
  {
    id: 'uvw789cd',
    price: '700',
    status: 'inactive',
    property_name: 'Historic Mansion',
    property_type: 'Mansion',
    checkout: '12/01/2024',
    location: 'Italy, Tuscany',
  },
  {
    id: 'rst012ef',
    price: '650',
    status: 'pending',
    property_name: 'Beachfront Bungalow',
    property_type: 'Bungalow',
    checkout: '18/01/2024',
    location: 'Maldives, Maafushi',
  },
  {
    id: 'ghi345kl',
    price: '520',
    status: 'inactive',
    property_name: 'Modern Penthouse',
    property_type: 'Penthouse',
    checkout: '22/01/2024',
    location: 'Japan, Tokyo',
  },
  {
    id: 'mno678pq',
    price: '480',
    status: 'pending',
    property_name: 'Countryside Cottage',
    property_type: 'Cottage',
    checkout: '15/01/2024',
    location: 'United Kingdom, Cotswolds',
  },
  // Add more objects as needed
]

const Payments = () => {
  return (
    <div className="exo w-[100%] flex flex-col justify-end px-[1rem] md:px-[2%]">
      <div className=" items-center flex-wrap gap-y-6 pb-4 px-4  mt-0  md:px-[5%] flex flex-row justify-">
        {/* <LuWarehouse className='text-white mr-3'/> */}
        {/* <h1 className="text-white text-[17px]">All Payments</h1> */}
      </div>
      {/* <div className='container border'>
        <div className='border'>
          <LuWarehouse className='text-white mr-3'/>
          <p>Property Lists</p>
          <input />
        </div>

        <div>

        </div>
      </div> */}

      <div className="flex flex-row justify-end gap-x-8 gap-y-2 px-[1rem] items-center text-[14px] my-3 text-white flex-wrap">
        <h1 className="border-b-2 py-2 cursor-pointer border-b-slate-300">
          Rent Due(15)
        </h1>
        <h1 className="cursor-not-allowed">Multi-Unit Properties(2)</h1>
        <h1 className="cursor-not-allowed">Vacant Properties (3)</h1>
        <h1 className="cursor-not-allowed">Archived Properties (1)</h1>
      </div>

      <div className="py-6 px-1">
        <PaymentTable data={data} />
      </div>
    </div>
  )
}

export default Payments
