import React from 'react';
import LoadingGif from '../assets/lottie/loading.gif'
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
        <div className='border bg-gray-500 p-2 rounded-full'>
           <div className='border bg-gray-200 p-6 rounded-full'>
            <img src={LoadingGif} alt="loading" className='w-16 h-16'/>
        </div> 
        </div>
        
      
    </div>
  );
}

export default Loading;
