// @ts-nocheck
import {  useEffect, useRef, lazy, Suspense } from 'react'
import { ImCancelCircle } from 'react-icons/im'
const LazyLoadedImage = lazy(() => import('../../LazyLoadedImage'))

const Dropzone = ({ field, form, error, multiple }) => {
  const cloudinaryRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
  }, [])

  const uploadImages = res => {
    const newImages = res.info.files.map(item => item.uploadInfo.secure_url)

    // Ensure that field value is either a string (for single image) or an array (for multiple images)
    const updatedImages = multiple
      ? [...field.value, ...newImages]
      : newImages[0]

    form.setFieldValue(field.name, updatedImages)
  }

  const myCropWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dlbcrsq2l',
      uploadPreset: 'fx0eoype',
    },
    (error, result) => {
      if (!error && result && result.event === 'queues-end') {
        uploadImages(result)
      }
    },
  )

  const removeItemAtIndex = index => {
    const currentImages = field.value || []
    if (index >= 0 && index < currentImages.length) {
      const updatedItems = [
        ...currentImages.slice(0, index),
        ...currentImages.slice(index + 1),
      ]

      form.setFieldValue(field.name, updatedItems)
    } else {
      console.error('Invalid index provided for removal.')
    }
  }

  return (
    <section className="mt-1 exo">
      {/* {multiple ||
        (!multiple && !field.value && ( */}
          <div className="flex">
            <div
              className="border-dashed border-2 h-[15rem] cursor-pointer border-slate- w-[100%] flex items-center justify-center flex-col"
              onClick={() => myCropWidget.open()}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/892/892311.png"
                alt="Default Image"
                className="w-16 h-16"
              />
              <h1 className="mt-3">Drag your image here</h1>
              <p className="text-[14px] text-slate-400">
                (Only *.jpeg and *.png images will be accepted)
              </p>
              <input
                type="file"
                multiple={multiple}
                hidden
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
        {/* ))} */}

      {/* {
      !multiple && !field.value &&  <div className="flex">
      <div
        className="border-dashed border-2 h-[15rem] cursor-pointer border-slate- w-[100%] flex items-center justify-center flex-col"
        onClick={() => myCropWidget.open()}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/892/892311.png"
          alt="Default Image"
          className="w-16 h-16"
        />
        <h1 className="mt-3">Drag your image here</h1>
        <p className="text-[14px] text-slate-400">
          (Only *.jpeg and *.png images will be accepted)
        </p>
        <input
          type="file"
          multiple={multiple}
          hidden
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
     } */}

      {error && <div className="text-white text-[13px] mt-1">{error}</div>}

      {field.value && (
        <div className=" grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {(multiple ? field.value : [field.value]).map((item, index) => (
            <div key={index} className="relative w-fit">
              <div
                className="absolute w-6 cursor-pointer  flex items-center justify-center h-6 bg-white -top-3 -right-3"
                onClick={() => removeItemAtIndex(index)}
              >
                <ImCancelCircle className="text-xl text-red-500 cursor-pointer hover:animate-spin" />
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedImage
                  src={item}
                  className="w-[100%] max-h-[12.5rem] h-auto rounded-md"
                />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Dropzone
