import DragDropFiles from '@/components/dropzone/Dropzone';
import React, { useState } from 'react';

const Input = ({label, state, setState}) => {

  return (
    <div className='flex flex-col gap-3'>
        <label className='text-slate-600 text-[16px]'>{label}</label>
        <input value={state} onChange={(e) => setState(e.target.value)} className='border text-slate-500 px-3 py-3 rounded-md'/>
    </div>
  )
}
const UpdateProfile = () => {
  const [fullname, setFullname] = useState('Salau Oluwatobiloba')
  const [phoneNo, setPhoneNo] = useState('+234 70 8455 7988')
  return (
    <div className="bg-white exo p-6 rounded-md">
    <h1 className='text-xl font-[600]'>Update Profile</h1>
    <p className='mt-10 text-[16px] text-slate-600'>Photo</p>

    <div className='mt-2'>
      <DragDropFiles />
    </div>

    <div className='border-2 border-dashed w-fit p-2 mt-7'>
      <img src='https://res.cloudinary.com/ahossain/image/upload/v1705308803/kf8vs4zpgbfsbehmtsmo.jpg'
      className='w-24 h-24'
      />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>
      <Input state={fullname} setState={setFullname} label="Full name"/>
      <Input state={phoneNo} setState={setPhoneNo} label="Phone no"/>
    </div>

    <div className='flex justify-end mt-12'>
      <button className='px-6 py-3 text-[14px] rounded-md shadow-md bg-yellow-100 hover:border border-yellow-500 hover:bg-white text-yellow-600'>UPDATE PROFILE</button>
    </div>
    
  </div>
  );
}

export default UpdateProfile;