import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { AnimatedTabs } from "./DesktopNav";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sty, setSty] = useState("");
  const [showDesktopMenu, setShowDesktopMenu] = useState(true);

  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (showMenu) {
      setSty("slide-in");
    } else {
      setSty("slide-out");
    }
  }, [showMenu]);

  const links = [
    { name: "Home", link: "/" },
    { name: "Properties", link: "/properties" },
    { name: "About", link: "/about" },
    { name: "How It works?", link: "/how-it-works" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="flex relative border border-white border-t-gray-100 pt-4 exo items-center justify-center pl-[1rem] md:px-[1rem] mt-4 ">
      <div className="container flex flex-row justify-between items-center relative">
        {/* <Logo /> */}

        <h1 className="tilli text-xl flex text-[30px] flex-row pt-3 capitalized">
          Fe
          <div className="rotate-12 w-[30px] h-[46px] flex flex-col items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-yellow-900"></div>
            <span className="text-yellow-900 relative bottom-2">bt</span>
          </div>
          oS
        </h1>

        <div className="hidden md:flex">
          <AnimatedTabs />
          {/* <div className="relative">
                  

                 {
                  showDesktopMenu && <div className="absolute">

                  </div>
                 }
                </div> */}
        </div>

        {/* <div className="flex md:hidden flex-row gap-6 text-white bg-yellow-900 h-[3.5rem] md:h-[4rem] items-center py-2 px-2  md:rounded-none md:px-5">
          <div className="lg:w-12 lg:h-12 w-11 h-11 flex items-center justify-center border-4 border-slate-200 rounded-full bg-white">
            <img src="/right.png" alt="arrow icon" className="lg:w-8 w-7" />
          </div>
        </div> */}

<div
          className=" md:hidden  bg-yellow-500 h-[3.5rem]  px-3 flex items-center cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <img src="/menu.png" className="w-7" />
        </div>

        {/* <div className=" w-11 flex md:hidden cursor-pointer items-center justify-center bg-yellow-900 h-11 rounded-md" onMouseEnter={() => setShowMenu(true)}>
                  <img src="/menu.png" className="w-6 "/>
                </div> */}
      </div>

      {showMenu && (
        <div
          className="w-[100%] left-0  flex flex-col h-[12.5rem] bg-white absolute -bottom-[12.4rem] z-[100]"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          {links.map((item, index) => (
            <Link key={index} to={item.link} >
              <div className="px-[5%] cursor-pointer py-3 border border-white border-t-gray-500">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
