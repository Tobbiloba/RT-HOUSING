import React, { useState, useEffect } from 'react'
import './Slider.css' // Import your CSS file for styling

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 3) // Assuming you have 3 slides
    }, 5500) // Change the duration as needed

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="slider-container absolute top-0 left-0">
      <div
        className={`slider-track ${currentIndex !== 0 ? 'sliding' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div
          style={{
            backgroundImage: 'url("/img-05.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slider-item h-[67.5rem] relative md:h-[65rem] lg:h-[54rem] w-[100vw]"
        >
          <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black/50'></div>
        </div>
        <div
          style={{
            backgroundImage: 'url("/img-08.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slider-item relative h-[67.5rem] md:h-[65rem] lg:h-[54rem] w-[100vw]"
        
        >
          <div className='absolute top-0  left-0 w-[100%] h-[100%] bg-black/50'></div>
        </div>
        <div
          style={{
            backgroundImage: 'url("/img-01.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slider-item relative h-[67.5rem] md:h-[65rem] lg:h-[54rem] w-[100vw]"
        >
          <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black/50'></div>
        </div>
      </div>
    </div>
  )
}

export default Slider
