// @ts-nocheck
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
const services = [
  {
    service: "Modern Apartments",
    description:
      "Discover our exquisite collection of modern apartments designed for contemporary living. Our residential buildings boast state-of-the-art facilities, sustainable features, and prime locations. Experience a harmonious blend of comfort, style, and convenience in every unit.",
    img: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    index: 1,
  },
  {
    service: "Luxury Homes",
    description:
      "Indulge in the epitome of luxury with our curated selection of residential buildings offering spacious and elegant homes. Each property is meticulously crafted to provide a sophisticated lifestyle, with premium amenities and unparalleled attention to detail.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    index: 2,
  },
  {
    service: "Sustainable Living",
    description:
      "At Febtos, we prioritize sustainability. Our residential buildings are designed with eco-friendly features, energy-efficient systems, and a commitment to minimizing environmental impact. Embrace a greener lifestyle without compromising on comfort.",
    img: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    index: 3,
  },
  {
    service: "Community-Focused Living",
    description:
      "Experience more than just a place to live – become part of a vibrant community. Our residential buildings foster a sense of belonging, with communal spaces, social events, and a welcoming atmosphere. Febtos is not just a home; it's a community.",
    img: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    index: 4,
  },
];
const propertyServices = [
  "Property Consultation", // Expert advice and guidance tailored to your unique real estate goals.
  "Home Inspection", // Thorough assessments to ensure the integrity and condition of your property.
  "Property Design", // Innovative and personalized design solutions for your residential or commercial spaces.
  "Investment Analysis", // Strategic insights to optimize your property investment portfolio.
  "Market Research", // In-depth analysis of market trends and conditions to inform your decision-making.
  "Property Management", // Comprehensive management services for hassle-free property ownership.
  "Real Estate Marketing", // Effective marketing strategies to showcase and sell your property.
  "Legal Advisory", // Professional legal guidance to navigate the legal aspects of property transactions.
  "Renovation Services", // Renovation and remodeling solutions to enhance the value of your property.
  "Tenant Placement", // Efficient tenant screening and placement services for rental properties.
  "Financial Planning", // Financial consultation to align your property investments with your overall financial goals.
  "Commercial Property Services", // Specialized services for buying, selling, and managing commercial properties.
];
const ServiceCard = ({ service, showHover, setShowHover }) => {
  return (
    <div
      className={`flex exo flex-col justify-between items-center relative  ${
        service.index % 2 != 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-4/12">
        <div className="bg-slate-300 text-white w-9 h-9 flex items-center justify-center text-[20px]">
          <IoMdCheckmark />
        </div>
        <h1 className="mt-4 text-2xl font-[600] text-slate-600">
          {service.service}
        </h1>
        <p className="text-[15px] mt-2 text-slate-600 leading-7">
          {service.description}
        </p>
      </div>
      <div
        className={`lg:w-7/12 mt-6 lg:mt-0 lg:py-[2rem] py-[1rem] relative  ${
          service.index % 2 != 0 ? "lg:pr-[2rem] pr-[1rem]" : "pl-[1rem] lg:pl-[2rem]"
        }`}
      >
        <div
          // style={{
          //   background: "linear-gradient(to bottom, white 50%, black 50%)",
          // }}
          className={`absolute h-[100%] ${
            service.index % 2 != 0 ? "right-0" : "left-0"
          } w-[70%] ${service} top-0 bg-slate-300`}
        ></div>
        {/* */}

        <div className="relative">
        <div className={`${showHover ? 'overlay' : ''}`} onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}></div>
          {/* <div className="absolute w-[100%] h-[100%] bg-black/50 slide-in top-0 z-20 left-0"></div> */}
          <img src={service.img} className="relative z-10" onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}/>
        </div>
      </div>
    </div>
  );
};
const Contactus = () => {
  const [showHover, setShowHover] = useState(false)
  return (
    <div className="exo flex flex-col justify-center items-center  mb-[4rem]">
      <div className=" container px-[1rem] lg:mx-[1rem] py-[2rem]">
        <h1 className="text-center text-3xl font-[600] text-slate-600">
          Our Services
        </h1>
        <p className="lg:text-center lg:w-[80%] lg:ml-[10%] text-slate-600 text-[15px] leading-7 mt-2">
          Explore a world of exceptional living with Febtos, where we redefine
          property rentals. At Febtos, we offer a curated range of rental
          services designed to elevate your living experience. From stylish
          apartments to spacious homes, our diverse portfolio caters to every
          lifestyle. Enjoy the convenience of hassle-free leasing, transparent
          processes, and personalized customer service. Febtos is not just a
          property rental company; we're your partner in creating a home that
          reflects your unique preferences and aspirations. Discover a new
          standard of comfort and convenience with Febtos - Where Home Feels
          Extraordinary.
        </p>

        <div className="flex flex-col gap-[8rem] mt-16">
          {services.map((service) => (
            <ServiceCard key={service.index} service={service} showHover={showHover} setShowHover={setShowHover}/>
          ))}
        </div>
      </div>

      <div className="bg-slate-200 md:px-[5%] px-[1rem] lg:px-[7%] py-10 mt-[5rem] flex flex-col lg:flex-row gap-[3rem] items-center justify-between">
        <div className="lg:w-5/12 relative">
          <img
            src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=""
          />

          <img
            src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute w-[10rem] md:w-[15rem] lg:w-[17.5rem] h-[10rem] md:h-[15rem] lg:h-[17.5rem] top-0 lg:top-1/2 transform -translate-y-1/2 right-0 lg:-right-[8.75rem] border-8"
          />
        </div>
        <div className="lg:w-4/12">
          <h1 className="text-3xl font-[600] text-slate-600">
            Real Estate Services
          </h1>
          <p className="text-[14px] mt-3 text-slate-600 leading-6">
            Welcome to our Services page, where we take pride in offering a
            range of comprehensive property solutions to meet all your real
            estate needs. As a leading property company, we specialize in
            providing tailored services that cater to the diverse requirements
            of our clients. Whether you're looking for expert property
            consultations, precise home inspections, or innovative property
            designs, we've got you covered. Our dedicated team of professionals
            is committed to delivering top-notch services, ensuring a seamless
            and rewarding experience in your real estate journey.
          </p>

          <div className="grid mt-6 grid-cols-3 gap-y-3 gap-x-2">
            {propertyServices.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="bg-black p-1 text-white">
                  <IoMdCheckmark className="" />
                </div>
                <p className="text-[13px]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] mt-6 text-slate-600 leading-6">
            At [Your Company Name], we go beyond traditional real estate
            services to elevate your property experience. As your trusted
            partner, we offer a diverse array of services designed to add
            significant value to your property ventures. From insightful
            property consultations that guide you through the complexities of
            the market to meticulous home inspections ensuring your investment's
            integrity, we leave no stone unturned. Explore our extensive list of
            services, including property design, investment analysis, and market
            research, as we work collaboratively to transform your real estate
            goals into reality.
          </p>
        </div>
      </div>

      {/* <div className="w-[100%]"> */}
      <div className="mt-[2rem]">
        <h1 className="text-center text-2xl font-[500] text-slate-500">
          Our Partners
        </h1>
        <marquee direction="right">
          <div className="flex flex-row  gap-[10rem] lg:gap-[15rem] ">
            <img src="/partner1.png" className="" />
            <img src="/partner2.png" className="" />
            <img src="/partner3.png" className="" />
            <img src="/partner4.png" className="" />
            <img src="/partner5.png" className="" />
          </div>
        </marquee>
      </div>

      {/* <div className="container">
          <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg"/>
        
      </div> */}

      <div
        className="container py-[2rem] lg:h-[17.5rem] flex items-center px-[2rem] relative"
        style={{
          backgroundImage:
            "url(https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Your content goes here */}
        <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black/40"></div>
        {/* <div className="relative z-10 bg-white/50">
      <h1>FEBTOS your best  Rental Estate</h1>
      <p>Write like a short logo or quote</p>
      <button>Rent Now</button>
  </div> */}

        <div className="relative z-10 text-white bg-white/40 p-8">
          <h1 className="text-4xl font-bold mb-2">
            FEBTOS your best <br className="hidden lg:flex"/> Rental Estate
          </h1>
          <p className="text-lg mb-4">
            "Unlock Your Dream Home with FEBTOS - Where Every Rental Tells a
            Story."
          </p>
          <button className="bg-slate-500 text-white px-8 py-2 hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
