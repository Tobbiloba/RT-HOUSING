// LazyLoadedImage.js
import React from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" className='max-h-[15rem]' />;
};

export default LazyLoadedImage;