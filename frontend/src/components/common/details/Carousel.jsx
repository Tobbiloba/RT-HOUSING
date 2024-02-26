// // @ts-nocheck
// import React, { useState, useMemo } from 'react'
// const Carousel = ({ images }) => {
//   const groupedImages = useMemo(() => {
//     // Divide the images into groups of three
//     const result = []
//     for (let i = 0; i < images.length; i += 4) {
//       result.push(images.slice(i, i + 4))
//     }
//     return result
//   }, [images])

//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev === groupedImages.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev === 0 ? groupedImages.length - 1 : prev - 1))
//   }

//   return (
//     <div className="slider w-[100%] h-[100%] top-0 left-0">
//      <div
//         className="slider-inner"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         <div></div>
//         {groupedImages.map((image, index) => {
//           return (
//             <div
//               key={index}
//               className="slide relative
//               gap-4 grid grid-cols-2 lg:grid-cols-3
//              w-[100%]   h-[40rem]"
//             >
//               {image.map((img, i) => {
//                 return (
//                   <div
//                     key={index}
//                     className={`w-[100%] min-w-[10rem]  overflow-hidden h-[100%] object-cover
//                     ${i == 0 || i == 3 || 1 == 5 || i == 6 || i == 9 || i == 10 ? 'col-span-1' : 'col-span-2'}
//                     `}
//                   >
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`Slide ${index + 1}`}
//                       className="w-[100%] h-auto min-h-[100%] object-contain"
//                     />
//                   </div>
//                 )
//               })}
//             </div>
//           )
//         })}
//       </div>
//       <button className="btn prev-btn text-white" onClick={prevSlide}>
//         <img src="/left2.png" className="w-4" />
//       </button>
//       <button className="btn next-btn text-white" onClick={nextSlide}>
//         <img src="/right2.png" className="w-4" />
//       </button>
//     </div>
//   )
// }
// export default Carousel

import React, { useEffect, useMemo, useState } from 'react'

// @ts-nocheck

const Carousel = ({ images, isUser }) => {
  const [selectedImg, setSelectedImg] = useState('')
  const groupedImages = useMemo(() => {
    // Filter images where the third-to-last character is "1"
    const result = images.filter(image => image[image.length - 4] === '1')
    return [result]
  }, [images])

  useEffect(() => {
    // setSelectedImg(groupedImages[0][0])
    setSelectedImg(images[0])
  }, [])

  // console.log(images[0][images[0].length - 3])
  return (
    <div className="slider top-0 left-0 ">
      <div className="flex flex-col md:grid grid-cols-10 h-fit md:grid-rows-3 lg:grid-rows-4 gap-4">
        <div className={`col-span-6 ${isUser ? "bg-slate-100" : "bg-slate-600"} flex items-center justify-center md:row-span-3 lg:row-span-4 md md:h-[40rem] lg:h-[45rem] mb-0`}>
          <img src={selectedImg} className="w-auto h-auto" />
        </div>

        <div 
        className="col-span-4 overflow-x-scroll px-2 md:h-[40rem] lg:h-[45rem] gap-4 md:row-span-3 lg:row-span-4 flex flex-row md:grid grid-cols-1 lg:grid-cols-2 md:overflow-y-scroll"
        // className="col-span-4 overflow-x-scroll px-2 md:h-[40rem] lg:h-[45rem] gap-4 md:row-span-3 lg:row-span-4 flex flex-row md:grid grid-cols-1 lg:grid-cols-2 md:overflow-y-scroll"
        >
            {images.map((img, i) => {
              // console.log(img[img.length - 4])

              return (
                <img
                  src={img}
                  key={i}
                  className={`md:w-[100%] md:h-auto w-[5rem] h-[5rem] cursor-pointer hover:scale-[.99] ${img[img.length - 4] == "1" ? "col-span-2" : "col-span-1"}`}
                  onClick={() => setSelectedImg(img)}
                />
              )
            })}
        </div>
       
      </div>

    </div>
  )
}

export default Carousel
