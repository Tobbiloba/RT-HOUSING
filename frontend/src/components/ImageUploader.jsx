// // @ts-nocheck
// import React, { useState, useEffect, useRef } from 'react'
// import { useDispatch } from 'react-redux'
// // import { createProductVarint, updateProductVarint } from '../actions/vendor/product';
// const SingleImageUpload = ({ onSuccess }) => {
//   if (!window.cloudinary || !window.cloudinary.createUploadWidget) {
//     console.error('Cloudinary is not available.')
//     return null // or render an alternative component or message
//   }

//   const myCropWidget = window.cloudinary.createUploadWidget(
//     {
//       cloudName: 'bitshub',
//       uploadPreset: 'ml_default',
//     },
//     (error, result) => {
//       if (!error && result && result.event === 'queues-end') {
//         onSuccess(result.info.files[0].uploadInfo.secure_url)
//       }
//     },
//   )

//   const openUploader = () => {
//     myCropWidget.open()
//   }

//   return (
//     <div
//       className="flex p-4 items-center gap-4 w-[100%] h-12"
//       onClick={openUploader}
//     >
//       <img
//         src="https://cdn-icons-png.flaticon.com/128/1829/1829586.png"
//         className="w-6 h-6"
//         alt="Upload Icon"
//       />
//       <p className="text-gray-400 text-[14px]">Upload your image</p>
//     </div>
//   )
// }

// const Dropzone = ({ product, updateVariant, state, setState, showImage }) => {
//   const dispatch = useDispatch()
//   const [selectedImage, setSelectedImage] = useState('')
//   const imageUploader = useRef()

//   useEffect(() => {
//     imageUploader.current = window.cloudinary
//   }, [])

//   const uploadImage = image => {
//     if (product?.data?.id) {
//       const createVariantParam = {
//         img_urls: [image],
//         product_id: product.data.id,
//       }

//       const updateVariantParam = {
//         img_urls: [image],
//         product_variant_id:
//           updateVariant && product?.data?.product_variants[0]?.id,
//       }
//     }
//   }

//   const handleImageUpload = image => {
//     setSelectedImage(image)
//     setState(image)
//     uploadImage(image)
//   }

//   return (
//     <section className="mt-1 bg-slate-100 mx-3 w-[100%]">
//       <SingleImageUpload onSuccess={handleImageUpload} />

//       {/* Display Uploaded Image */}
//       {state && showImage && (
//         <div className="mt-6 w-[100%] px-4 pb-4">
//           {/* <h3 className="title text-[8px] text-neutral-600 mb-3">{selectedImage}</h3> */}
//           <img
//             src={state}
//             alt="Uploaded Product"
//             className="w-[100%] max-h-60 object-contain rounded-md"
//           />
//         </div>
//       )}

//       {state && !showImage && (
//         <div className="bg-white px-3 w-[100%] overflow-hidden">
//           <p className="text-slate-500 text-[14px]">{state}</p>
//         </div>
//       )}
//     </section>
//   )
// }

// export default Dropzone
