// @ts-nocheck
import React from 'react'
import LoadingGif from '@/assets/lottie/loading.gif'
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="border bg-gray-500 p-1 rounded-full">
        <div className="border bg-gray-200 p-4 rounded-full">
          <img src={LoadingGif} alt="loading" className="w-12 h-12" />
        </div>
      </div>
    </div>
  )
}

export default Loading
