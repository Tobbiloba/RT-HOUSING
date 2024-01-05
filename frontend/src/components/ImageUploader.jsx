import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { createProductVarint, updateProductVarint } from '../actions/vendor/product';

const SingleImageUpload = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const myCropWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'bitshub',
      uploadPreset: 'ml_default',
    },
    (error, result) => {
      if (!error && result && result.event === 'queues-end') {
        onSuccess(result.info.files[0].uploadInfo.secure_url);
      }
    }
  );

  const openUploader = () => {
    myCropWidget.open();
  };

  return (
    <div className="flex p-4 rounded-md border items-center gap-4" onClick={openUploader}>
      {/* <button
        onClick={openUploader}
        className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-primary rounded-md p-2 hover:bg-primary hover:text-white transition-colors"
      >
        Open Uploader
      </button> */}
      <img src='https://cdn-icons-png.flaticon.com/128/1829/1829586.png' className='w-6 h-6'/>
      <p className='text-gray-400'>Upload your image</p>
    </div>
  );
};

const Dropzone = ({ product, updateVariant, state, setState }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState('');

  const uploadImage = (image) => {
    if (product?.data?.id) {
      const createVariantParam = {
        img_urls: [image],
        product_id: product.data.id,
      };
  
      const updateVariantParam = {
        img_urls: [image],
        product_variant_id: updateVariant && product?.data?.product_variants[0]?.id,
      };
    }
}  

  const handleImageUpload = (image) => {
    setSelectedImage(image);
    setState(image)
    uploadImage(image);
  };

  return (
    <section className="mt-4 bg-gray-200 w-[100%]">
      {/* Single Image Upload */}
      <SingleImageUpload onSuccess={handleImageUpload} />

      {/* Display Uploaded Image */}
      {state && (
        <div className="mt-6 w-[100%] px-4 pb-4">
          {/* <h3 className="title text-[8px] text-neutral-600 mb-3">{selectedImage}</h3> */}
          <img
            src={state}
            alt="Uploaded Product"
            className="w-[100%] max-h-60 object-contain rounded-md"
          />
        </div>
      )}
    </section>
  );
};

export default Dropzone;
