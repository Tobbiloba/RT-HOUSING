// @ts-nocheck
import React from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" className='max-h-[15rem] w-[100%]' />;
};

export default LazyLoadedImage;