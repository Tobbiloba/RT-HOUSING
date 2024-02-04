// @ts-nocheck
import React, { useState } from "react";
import { FaHouseDamage } from "react-icons/fa";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
// https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww
// https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdXNlfGVufDB8fDB8fHww
const benefits = [
  {
    id: 1,
    icon: <FaHouseDamage />,
    title: "Modern Villa",
    description:
      "Discover the epitome of contemporary living with our modern villa offerings. Immerse yourself in sleek design, cutting-edge technology, and luxurious comfort.",
    img: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: <FaMoneyBillWheat />,
    title: "Secure Payment",
    description:
      "Experience peace of mind with our secure payment solutions. We prioritize the safety and confidentiality of your transactions, ensuring a trustworthy and reliable financial experience.",
    img: "https://images.unsplash.com/photo-1593182440959-9d5165b29b59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
const items = [
  'Furniture',
  'Home',
  'Rent',
  'Brand',
  'Trusted',
  'Refund'
]

// const achievements = [
//   {
//     title: Apar
//   }
// ]
const BenefitCard = ({
  benefit,
  setCurrentImage,
  currentIndex,
  setCurrentIndex,
}) => {
  console.log(currentIndex);
  return (
    <div
      className={`flex gap-6 cursor-pointer ${
        currentIndex == benefit.id &&
        "bg-white border-b-2 rounded-md shadow-md border-slate-500"
      }  py-6 items-center justify-between px-[1rem]`}
      onMouseEnter={() => (
        setCurrentImage(benefit.img), setCurrentIndex(benefit.id)
      )}
    >
      <div className="w-[8rem] h-[4rem] flex items-center justify-center bg-slate-500 text-xl">
        {benefit.icon}
      </div>
      <div>
        <h1 className="text-xl font-[600]">{benefit.title}</h1>
        <p className="mt-3 text-[13px] text-slate-400">{benefit.description}</p>
      </div>
    </div>
  );
};
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const GroupAvatars = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
      <Avatar alt="Cindy Baker" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
      <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8fDA%3D" />
      <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGV8ZW58MHx8MHx8fDA%3D" />
    </AvatarGroup>
  );
}
const Aboutus = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <div className="exo bg-slate-100 py-[3rem]">
      <div className="container px-[1rem]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-6/12 flex flex-col gap-10 justify-between">
            <div className="">
              <h1 className="text-4xl lg:text-6xl">
                We're on a Mission to Change View of Real Estate Field.
              </h1>
              <p className="mt-2 text-slate-500">
                At our core, we are driven by a passionate commitment to
                revolutionize the real estate industry. With a mission to
                redefine standards and transform perspectives, we aim to provide
                innovative solutions and unparalleled experiences. Join us on
                this journey as we strive to change the way people perceive and
                engage with the world of real estate.
              </p>
            </div>

            <div className="flex gap-10 flex-col md:flex-row lg:flex-col">
              {benefits.map((benefit) => (
                <BenefitCard
                  key={benefit.id}
                  benefit={benefit}
                  setCurrentImage={setCurrentImage}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              ))}
            </div>
          </div>
          <div
            className="lg:w-5/12 mt-[3rem] lg:mt-0 border lg:h-[40rem] overflow-hidden relative"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={currentImage}
              className=" overflow-hidden absolute h-full w-full z-10"
              alt="Modern Villa"
            />
          </div>
        </div>

        
      </div>
      <div
      className="w-[100vw] mt-32 flex justify-center h-[42.5rem] overflow-hidden relative"
      style={{
        //   backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/810e76102504259.5f381e1f02eae.jpg)`,
        backgroundImage: `url(https://www.mymodernhome.com/media/images/My_Modern_Home_Plan.b5be94ba.fill-1920x1080.format-webp.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        //   width: '',
        //   height: '40rem', // Set your desired height
      }}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/40 z-0"></div>


        <div className="container px-[1rem] flex flex-col justify-between my-[2rem] items-center">
            <div className="hidden lg:flex"></div>
            {/* <div className="absolute ">
                <IoPlay className="text-white text-6xl"/>
            </div> */}
             <div className="absolute top-1/2 bg-white/30 p-3 cursor-pointer left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <IoPlay className="text-white text-6xl" />
    </div>

            <div className="w-[100%]  h-[100%] lg:h-fit flex flex-col z-10 lg:flex-row justify-between">
                <div className="w-fit">
                    <h1 className="bg-white text-4xl pl-4 pr-12 py-2 rounded-r-xl rounded-tl-xl font-[600]">We Are Here</h1>
                    <h1 className="bg-white text-4xl pl-4 pr-12 py-1 rounded-br-xl w-fit font-[600]">For You.</h1>
                    <div className="bg-white w-fit p-2 py-1 pl-4 rounded-b-xl">
                      <GroupAvatars />
                    </div>
                    
                </div>


                <div className="">
                  <div className="flex gap-5 mb-2 justify-between text-white">
                    <h1 className="text-center text-3xl">100+ <br /> <p className="text-[14px]">Available Properties</p></h1>
                    <h1 className="text-center text-3xl">5k+ <br /> <p className="text-[14px]">Satisfied Customer</p></h1>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {
                      items.map((item, index) => <p key={index} className="bg-black/60 text-white text-center px-4 p-2 text-[13px]">{item}</p>)
                    }
                  </div>
                </div>
            </div>
        </div>
            {/* <img src="https://i0.wp.com/jewkesdesign.com/wp-content/uploads/2023/04/Jewkes-Design_Black-Modern-House_04.jpg?resize=1024%2C683&ssl=1"
            className="w-full h-auto"/> */}
        </div>

        <div className="container px-[1rem] mt-[5rem]">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div
            className="lg:w-5/12 mt-[3rem] lg:mt-0 lg:h-[40rem] overflow-hidden relative"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* https://cdn-icons-png.flaticon.com/128/5977/5977583.png */}
            {/* https://cdn-icons-png.flaticon.com/128/11516/11516196.png */}
            {/* https://cdn-icons-png.flaticon.com/128/14063/14063019.png */}
            <img
              src='https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className="lg:absolute h-auto bottom-[0rem] z-10"
              alt="Modern Villa"
            />
          </div>
          <div className="lg:w-6/12 mt-8 lg:mt-0 flex flex-col gap-10 justify-between">
            <div className="">
              <p className="text-slate-500 text-[16px] font-[600]">Our Management</p>
              <h1 className="text-4xl text-slate-700 mt-4 lg:text-6xl">
                Peter Hendrick
              </h1>
              <p className="mt-5 font-[600] text-slate-500">
        "Success is not just about making profits; it's about creating lasting relationships and leaving a positive impact on the world."
    </p>
              <p className="mt-5 text-[14px] text-slate-500">
    Peter Hendrick, our visionary leader, brings a wealth of experience and passion to our team. With over two decades in the real estate industry, Peter has not only witnessed but actively shaped the evolution of property management. His profound understanding of market dynamics, coupled with an unwavering commitment to excellence, positions him as a guiding force in our journey. Peter's leadership philosophy is not just about achieving short-term goals; it's about laying the foundation for a sustainable and thriving future.

    As a seasoned professional, Peter is dedicated to fostering a collaborative and innovative work environment. He believes in the power of teamwork and continually invests in the professional growth of our staff. Peter's vision extends beyond the conventional boundaries of property management – he envisions a future where our rental spaces aren't just shelters; they are vibrant communities that enhance the quality of life for our tenants.

    {/* Leading by example, Peter inspires everyone around him to push boundaries and embrace change. His passion for creating not just structures, but homes, is evident in every project we undertake. Under his guidance, our property rental company is not just a business; it's a testament to the transformative impact that thoughtful leadership can have on an industry. Join us on this exciting journey, where Peter Hendrick's vision shapes the way we redefine property rental experiences. */}
</p>
            </div>

            {/* <div className="flex gap-10 flex-col md:flex-row lg:flex-col">
              {benefits.map((benefit) => (
                <BenefitCard
                  key={benefit.id}
                  benefit={benefit}
                  setCurrentImage={setCurrentImage}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              ))}
            </div> */}
          </div>
          
        </div>

        
      </div>


     <div className="mt-[5rem] bg-slate-200 ">
      {/* <h1 className="text-center text-2xl text-slate-500">Our Partners</h1> */}
     <marquee direction="right" >
        <div className="flex flex-row gap-[15rem] ">
          <img src="/partner1.png" className=""/>
          <img src="/partner2.png" className=""/>
          <img src="/partner3.png" className=""/>
          <img src="/partner4.png" className=""/>
          <img src="/partner5.png" className=""/>
        </div>
        
      </marquee>
     </div>
    </div>
  );
};

export default Aboutus;
