// // @ts-nocheck
// import React, { useState, useMemo } from 'react'
// const Carousel = ({ images }) => {
//   const groupedImages = useMemo(() => {
//     // Divide the images into groups of three
//     const result = []
//     for (let i = 0; i < images.length; i += 3) {
//       result.push(images.slice(i, i + 3))
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
//       {/* <div className='overlay fixed top-0 left-0 w-[100%] h-[100%] '></div> */}
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         <div></div>
//         {groupedImages.map((image, index) => {
//           // console.log(image)
//           return (
//             <div
//               key={index}
//               className="slide relative
//               gap-4 grid grid-cols-2 grid-flow-cols md:grid-rows-2 md:grid-flow-col
//              w-[100%]   h-[40rem]"
//             >
//               {image.map((img) => {
//                 return (
//                   <div
//                   key={index}
//                     className={`w-[100%] min-w-[10rem]  overflow-hidden h-[100%] object-cover ${
//                       index === 0
//                         ? 'col-span-2 md:row-span-3 '
//                         : index === 1
//                           ? 'md:col-span-1'
//                           : 'md:row-span-1 '
//                     }`}
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








































// @ts-nocheck
import React, { useState, useMemo } from 'react'
const Carousel = ({ images }) => {
  const groupedImages = useMemo(() => {
    // Divide the images into groups of three
    const result = []
    for (let i = 0; i < images.length; i += 4) {
      result.push(images.slice(i, i + 4))
    }
    return result
  }, [images])

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === groupedImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? groupedImages.length - 1 : prev - 1))
  }

  return (
    <div className="slider w-[100%] h-[100%] top-0 left-0">
      {/* <div className='overlay fixed top-0 left-0 w-[100%] h-[100%] '></div> */}
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div></div>
        {groupedImages.map((image, index) => {
          // console.log(image)
          return (
            <div
              key={index}
              className="slide relative
              gap-4 grid grid-cols-2 lg:grid-cols-3
             w-[100%]   h-[40rem]"
            >
              {image.map((img, i) => {
                return (
                  <div
                  key={index}
                    className={`w-[100%] min-w-[10rem]  overflow-hidden h-[100%] object-cover 
                    ${(i == 0 || i == 3 || 1 == 5 || i == 6|| i== 9 || i == 10) ? "col-span-1" : "col-span-2"}
                    `}
                    
                  >
                    <img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-[100%] h-auto min-h-[100%] object-contain"
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <button className="btn prev-btn text-white" onClick={prevSlide}>
        <img src="/left2.png" className="w-4" />
      </button>
      <button className="btn next-btn text-white" onClick={nextSlide}>
        <img src="/right2.png" className="w-4" />
      </button>
    </div>
  )
}
export default Carousel