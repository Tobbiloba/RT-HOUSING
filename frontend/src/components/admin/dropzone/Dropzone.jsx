import { useDispatch } from "react-redux";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
// import { createProductVarint, updateProductVarint } from "../actions/vendor/product";
import { ImCancelCircle } from "react-icons/im";
const LazyLoadedImage = lazy(() => import("../../LazyLoadedImage"));
const Dropzone = ({ images, setImages }) => {
  const cloudinaryRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);
  // const [images, setImages] = useState([]);
  const [initialImages, setInitialImages] = useState([]);

  const uploadImages = (res) => {
    const newImages = res.info.files.map((item) => {
      return item.uploadInfo.secure_url;
    });

    // Concatenate the new images with the existing ones
    setImages((prevImages) => [...prevImages, ...newImages]);

    console.log(images); // Updated array of images
  };

  useEffect(() => {
    // Set initial images when the component mounts
    setImages(images, initialImages);
  }, [initialImages]);

  const myCropWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dlbcrsq2l",
      uploadPreset: "fx0eoype",
      // cropping: true,
    },
    (error, result) => {
      if (!error && result && result.event === "queues-end") {
        uploadImages(result);
      }
    }
  );

  const removeItemAtIndex = (index) => {
    console.log(index);
    // Ensure that the index is within the valid range
    if (index >= 0 && index < images.length) {
      // Create a new array without the item at the specified index
      const updatedItems = [
        ...images.slice(0, index),
        ...images.slice(index + 1),
      ];

      // Update the state with the new array
      setImages(updatedItems);
    } else {
      console.error("Invalid index provided for removal.");
    }
  };

  console.log(images);
  return (
    <section className="mt-1 exo">
      <div className="flex">
        {/* <button
                    onClick={() => myCropWidget.open()}
                    className="mt-1 text-[17px] uppercase tracking-wider font-bold text-neutral-500  h-[100%] border-slate-600 border-primary rounded-sm py-2 px-4 hover:bg-primary hover:text-white transition-colors"
                >
                    Upload Image
                </button> */}

        <div
          className="border-dashed border-2 h-[15rem] cursor-pointer  border-slate- w-[100%] flex items-center justify-center flex-col "
          // onDragOver={handleDragOver}
          // onDrop={handleDrop}
          // onClick={() => inputRef.current.click()}
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
            multiple
            // onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            // ref={inputRef}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((item, index) => {
          return (
            <div key={index} className="relative w-fit">
              <div
                className="absolute w-6 rounded-full cursor-pointer hover:animate-spin flex items-center justify-center h-6 bg-white -top-2 border -right-2"
                onClick={() => removeItemAtIndex(index)}
              >
                <ImCancelCircle className="text-xl text-red-500 cursor-pointer" />
              </div>
              {/* <img src={item} className=" w-[100%] h-auto rounded-md"/> */}
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedImage
                  src={item}
                  className=" w-[100%] max-h-[10rem] h-auto rounded-md"
                />
              </Suspense>
            </div>
          );
        })}
      </div>

      {/* <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
                {updateVariant
                    ? initialImages?.map((file, index) => (
                        <li key={index} className="relative h-32 rounded-md shadow-lg">
                            <img
                                src={file}
                                alt={file}
                                width={100}
                                height={100}
                                className="h-full w-full object-contain rounded-md"
                            />
                            <button
                                type="button"
                                className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
                                onClick={() =>
                                    removeFile(!file.preview ? file : file.preview)
                                }
                            >
                              </button>
                            <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                                {index}
                            </p>
                        </li>
                    ))
                    : ""}
            </ul> */}
    </section>
  );
};

export default Dropzone;
