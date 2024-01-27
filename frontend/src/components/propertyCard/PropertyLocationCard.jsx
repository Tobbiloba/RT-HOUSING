import { Item } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { CiHeart } from "react-icons/ci";
const property = [
  {
    id: 1,
    photos: 18,
    time: "2HRS AGO",
    price: "120,000.00",
    bedroom: "4",
    location: "Ikeja GRA, Lagos.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    photos: 11,
    time: "6HRS AGO",
    price: "200,000.00",
    bedroom: "4",
    location: "Lekki Phase 2, Lagos.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    photos: 23,
    time: "2DAYS AGO",
    price: "320,000.00",
    bedroom: "4",
    location: "Victoria Island, Lagos.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    photos: 23,
    time: "2DAYS AGO",
    price: "320,000.00",
    bedroom: "4",
    location: "Victoria Island, Lagos.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
  },
];
const PropertyLocationCard = ({ title }) => {
  return (
    <div className="container rubik text-slate-600 border-b pb-16">
      <h1 className="text-xl">Homes in {title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-4">
        {property.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
            className="h-[17rem] text-white p-[1rem] pb-[2rem] flex flex-col justify-between  border rounded-md relative"
          >
            <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black/40 rounded-md"></div>
            <div className="z-10 relative flex flex-row items-center justify-between">
              <p className="text-[11px] h-6 flex items-center justify-center px-3 bg-slate-600">
                {item.time}
              </p>
              <p className="text-[13px]">{item.photos} Photos</p>
            </div>

            <div className="flex flex-row justify-between items-end relative z-10">
              <div className="text-white ">
                <p className="text-[14px]">{item.price}</p>
                <p className="text-[13px]">{item.bedroom} Bedroom apartment</p>
                <p className="text-[12px]">{item.location}</p>
              </div>

              <CiHeart className="text-[26px]" />
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-7 text-slate-600">See all {title} houses </h1>
    </div>
  );
};

export default PropertyLocationCard;
