import { useState, useEffect, useMemo } from 'react'
const Carousel = ({ images }) => {
  console.log(images)
  const groupedImages = useMemo(() => {
    // Divide the images into groups of three
    const result = []
    for (let i = 0; i < images.length; i += 3) {
      result.push(images.slice(i, i + 3))
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
              gap-4 grid grid-cols-2 grid-flow-cols md:grid-rows-2 md:grid-flow-col
             w-[100%]   h-[40rem]"
            >
              {image.map((img, index) => {
                // console.log(index)
                return (
                  <div
                    className={`w-[100%] min-w-[10rem]  overflow-hidden h-[100%] object-cover ${
                      index === 0
                        ? 'col-span-2 md:row-span-3 '
                        : index === 1
                          ? 'md:col-span-1'
                          : 'md:row-span-1 '
                    }`}
                  >
                    <img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-[100%] h-auto min-h-[100%] object-contain"
                    />
                  </div>
                  // <p>{img}</p>
                )
              })}

              {/* <p className="w-[100%]">{image}</p> */}
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

// https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format
// https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format
// https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format
// https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format
// https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format
// https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format

// const groupedImages = useMemo(() => {
//   // Divide the images into groups of three
//   const result = [];
//   for (let i = 0; i < images.length; i += 3) {
//     result.push(images.slice(i, i + 3));
//   }
//   return result;
// }, [images]);

// const Carousel = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
// console.log(images.length)
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="slider  w-[100%] h-[100%] top-0 left-0">
//       {/* <div className='overlay fixed top-0 left-0 w-[100%] h-[100%] '></div> */}
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >

// {images.map((image, index) => (
//   <div key={index} class="grid grid-rows-3 grid-flow-col gap-4">
//     {images.map((item, innerIndex) => (
//       <img
//         key={innerIndex}
//         className={
//           innerIndex === 0
//             ? 'row-span-3 ...'
//             : innerIndex === 1
//             ? 'col-span-2 ...'
//             : 'row-span-2 col-span-2 ...'
//         }
//         src={item}
//         alt={`Image ${innerIndex}`}
//       />
//     ))}
//   </div>
// ))}

// {/* <div key={index} className="slide relative">
//             <div className="overlay absolute top-0 left-0 w-[100%] h-[100%]"></div>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-[100%] h-[100%]"
//             />
//           </div> */}

//       </div>
//       <button className="btn prev-btn text-white" onClick={prevSlide}>
//         <img src="/left2.png" className="w-4" />
//       </button>
//       <button className="btn next-btn text-white" onClick={nextSlide}>
//         <img src="/right2.png" className="w-4" />
//       </button>
//     </div>
//   );
// };

// export default Carousel

// const Carousel = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="slider w-[100%] h-fit">
//       {/* <div className='overlay fixed top-0 left-0 w-[100%] h-[100%] '></div> */}
//       <div
//         className="h-[20rem] border border-red-500 transition-transform duration-300"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="slide relative">
//             <div className="overlay  top-0 left-0 w-full h-full"></div>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-[10rem] h-[10rem] object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       <button className="btn prev-btn text-white absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
//         <img src="/left2.png" className="w-4" alt="Previous" />
//       </button>
//       <button className="btn next-btn text-white absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
//         <img src="/right2.png" className="w-4" alt="Next" />
//       </button>
//     </div>
//   );
// };

// const Carousel = ({ images }) => {
//   const groupedImages = useMemo(() => {
//     // Divide the images into groups of three
//     const result = [];
//     for (let i = 0; i < images.length; i += 3) {
//       result.push(images.slice(i, i + 3));
//     }
//     return result;
//   }, [images]);

//   console.log(groupedImages)

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === groupedImages.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? groupedImages.length - 1 : prev - 1));
//   };

//   return (
//     <div className="slider w-[100%] h-fit top-0 left-0 relative overflow-hidden">
//       {/* <div className="grid grid-cols-3 gap-4 transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {groupedImages[currentSlide].map((imageGroup, groupIndex) => (
//           <div key={groupIndex} className="slide relative">
//             {imageGroup.map((image, index) => (
//               <React.Fragment key={index}>
//                 <div className="overlay absolute top-0 left-0 w-full h-full"></div>
//                 <img src={image} alt={`Slide ${groupIndex * 3 + index + 1}`} className="w-full h-full object-cover" />
//               </React.Fragment>
//             ))}
//           </div>
//         ))}
//       </div> */}

//       {/* {groupedImages.length > 1 && (
//         <>
//           <button className="btn prev-btn text-white absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
//             &lt;
//           </button>
//           <button className="btn next-btn text-white absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
//             &gt;
//           </button>
//         </>
//       )} */}
//     </div>
//   );
// };

// export default Carousel;
