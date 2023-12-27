import React, { useState } from "react";


const ImageCard = ({item}) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="cursor-pointer relative w-16 h-16" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={item} className="w-16 h-16"/>
            {
                isHovered &&
            
            <div className="transition ease-in-out delay-2000 overlay absolute w-[100%] h-[100%] flex items-center justify-center top-0 left-0">
                          <img src="/instagram.png" alt="instagram icon" className="w-6" />
            </div>
}
        </div>
    )
}
const Footer = () => {
    const images = [
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-1.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-2.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-3.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-4.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-5.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-6.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-7.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-8.jpg',
        'https://wpolive.com/suqat/wp-content/uploads/2023/09/gallery-10.jpg'
    ]
  return (
    <div className="exo flex items-center justify-center mt-8">
      <div className="container px-[1rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-2xl">SUBSCRIBE NOW</h1>
            <input placeholder="Enter your email" className=" mt-6 border px-3 py-3 text-[16px]" />
            <button className="bg-yellow-900 text-white mt-6 py-3 w-[60%]">SUBSCRIBE NOW</button>
          </div>
          <div>
            <h1 className="text-2xl">UNITED STATE</h1>
            <ul className="mt-6">
              <li className="flex flex-row items-center gap-2">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>738 Mill Run RdMill Run, Pennsylvania(PA), 15464</p>
              </li>
              <li className="flex flex-row items-center gap-2 mt-4">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>(623) 271-7323</p>
              </li>
              <li className="flex flex-row items-center gap-2 mt-4">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>Support247@Gmail.Com</p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">PORTUGAL</h1>
            <ul className="mt-6">
              <li className="flex flex-row items-center gap-2">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>738 Mill Run RdMill Run, Pennsylvania(PA), 15464</p>
              </li>
              <li className="flex flex-row items-center gap-2 mt-4">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>(623) 271-7323</p>
              </li>
              <li className="flex flex-row items-center gap-2 mt-4">
                <img src="/placeholder.png" className="w-6 h-6" />
                <p>Support247@Gmail.Com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border border-white border-y-gray-500 py-16 flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3 items-center">
                <div className="max-w-12 min-w-4 h-1 bg-yellow-900"></div>
                <p className="text-2xl">FOLLOW INSTAGRAM</p>
                <div className="max-w-12 min-w-4  h-1 bg-yellow-900"></div>
            </div>

            <div className="md:flex grid grid-cols-4 flex-row gap-4 mt-6">
               {
                images.map((item, index) => (
                    <ImageCard key={index} item={item}/>
                ))
            } 
            </div>

            
        </div>
        <div className="mt-12 flex flex-col items-center justify-center">
        <div className="flex flex-row gap-8">
          <img src="/facebook.png" alt="facebook icon" className="w-6" />
          <img src="/twitter.png" alt="twitter icon" className="w-6" />
          <img src="/youtube.png" alt="youtube icon" className="w-6" />
          <img src="/instagram.png" alt="instagram icon" className="w-6" />
        </div>

        <h1 className="mt-8 mb-4 text-center text-xl">COPYRIGHT &copy; <span>RT HOUSING</span> || ALL RIGHTS RESERVED</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
