import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const MenuOptions = () => {
  return (
    <div className="absolute -left-32 -bottom-14 border rounded-md bg-white px-4 py-2 flex shadow-md flex-col gap-3">
      <div className="flex flex-col gap-2">
        <p>share:</p>
        <div className="flex flex-row gap-3">
          <img src="/facebook.png" alt="facebook icon" className="w-4" />
          <img src="/twitter.png" alt="twitter icon" className="w-4" />
          <img src="/youtube.png" alt="youtube icon" className="w-4" />
          <img src="/instagram.png" alt="instagram icon" className="w-4" />
        </div>
      </div>
      <p className="mt-4 border border-white border-t-gray-400 py-2">Report</p>
    </div>
  );
};

const Slider = ({ item, viewMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`slider  ${viewMode == 'flex' ? 'md:h-[20rem] xl:h-[20rem]' : 'max-h-[20rem]'} lg:h-[100%]  w-[100%] h-[100%] top-0 left-0 relative overflow-hidden`}>
      <div
        className="slider-inner flex  h-[100%]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {item?.property_information.property_images.map((image, index) => (
          <div key={index} className="slide relative">
            <div className="overlay absolute top-0 left-0 w-full h-[100%] "></div>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-[100%] ${viewMode == 'flex' ? 'md:h-[20rem] xl:h-[20rem]' : ''} lg:h-[100%]  object-cover`}
            />
            
          </div>
        ))}
      </div>

      <button className="btn prev-btn text-white" onClick={prevSlide}>
        <img src="/left2.png" className="w-4" alt="Previous" />
      </button>
      <button className="btn next-btn text-white" onClick={nextSlide}>
        <img src="/right2.png" className="w-4" alt="Next" />
      </button>
    </div>
  );
};




const FeaturedPropCard = ({ item, viewMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`hover:shadow-2xl mb-4  max-w-[50.5rem] mx-3 overflow-hidden  md:items-center lg:items-start xl:text-center  lg:h-[100%] flex flex-col  ${viewMode === 'flex' ? 'md:flex-row xl:h-[20rem] md:h-[20rem] xl:flex-row' : 'md:flex-col xl:flex-col md:w-[100%]'} lg:w-fit lg:flex-col `}>

      <div className={`relative ${viewMode === 'flex' ? 'xl:w-2/5 md:w-2/5' : ''}  p-0 lg:w-[100%] w-[100%] overflow-hidden flex h-[100%]`}>
        <Slider item={item} viewMode={viewMode}/>
        
      </div>

      <div className={`  ${viewMode === 'flex' ? 'xl:w-3/5 md:w-3/5' : ''} lg:w-[100%] w-[100%]   border h-fit mt-8 md:mt-0 xl:mt-0`}>
        <div className="flex flex-row items-center p-3 justify-between">
          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-yellow-500 text-[14px]">{item.property_information.property_type}</p>
            <Link to={`/property-detail/${encodeURIComponent(item._id)}`}>
               <h1 className="text-[17px] text-yellow-700">{item.property_information.property_name}</h1>
            </Link>
           
            <p className="text-slate-700">
              #{item.property_information.pricing} <span className="text-[14px]">/ night</span>
            </p>
            <div className="flex flex-row items-center gap-4">
              <Rating
                name="read-only"
                size="small"
                value={6}
                readOnly
              />
              <p className="text-[13px]">10 review</p>
            </div>
          </div>

          <div className="relative">
            <img src={item.avatar} className="w-14 h-14" />

            <div className="p-1 rounded-full bg-white absolute  bottom-0 -left-2">
              <img src="/encrypted.png" className="w-5 h-5 " />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 p-4 gap-x-3 gap-y-4 mt-5 text-slate-600 text-[15px]">
          <div className="flex items-center flex-row gap-3">
            <img src="/user.png" className="w-4 h-4" />
            <p>04 Guests</p>
          </div>
          <div className="flex items-center flex-row gap-3">
            <img src="/double-bed.png" className="w-4 h-4" />
            <p>{item.property_information.property_no_bedrooms} Bedrooms</p>
          </div>
          <div className="flex items-center flex-row gap-3">
            <img src="/shower.png" className="w-4 h-4" />
            <p>{item.property_information.property_no_bathrooms} Showers</p>
          </div>
          <div className="flex items-center flex-row gap-3">
            <img src="/two-way.png" className="w-4 h-4" />
            <p>02 Bedrooms</p>
          </div>
        </div>
        <div className="text-start p-3 mt-4 flex flex-row justify-between items-center bg-gray-100">
          <p className="text-gray-500">{item.location}</p>
          <div
            className="cursor-pointer p-2 relative"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <img src="/dots.png" className="w-4 cursor-pointer" />
            {showMenu && <MenuOptions />}
          </div>
        </div>
      </div>
    </div>
  );
};

const images = [
  "https://placekitten.com/800/400",
  "https://placekitten.com/801/400",
  "https://placekitten.com/802/400",
  // Add more image URLs as needed
];

const PropertiesList = ({viewMode, properties}) => {
  console.log(properties)
  return (
    <div className="flex items-center exo justify-center">
      {/* <div className="text-center"> */}

      <div className={` flex-1 flex-col md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 w-[100%] ${viewMode === 'flex' ? 'flex' : 'grid'}`}>
        {properties.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <FeaturedPropCard item={item} viewMode={viewMode}/>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};


export default PropertiesList;
