import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { MenuToggle } from "./MenuToggle";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { AnimatedTabs } from "./DesktopNav";
import MobileNav from "./MobileNav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuBar = () => {
  const [showMenu, setShowMenu] = useCycle(false, true);
  const [sty, setSty] = useState("");

  const [isOpen, toggleOpen] = useCycle(false, true);

  // const menuLinks = [
  //   {
  //     id: 1,
  //     link: "/",
  //     name: "Home",
  //   },
  //   {
  //     id: 2,
  //     link: "/",
  //     name: "Home",
  //   },
  // ];

  useEffect(() => {
    if (showMenu) {
      setSty("slide-in");
    } else {
      setSty("slide-out");
    }
  }, [showMenu]);
  return (
    <div
      className={`flex flex-row relative md:border mt-3 exo  md:px-[1rem] lg:px-[2rem] justify-between items-center `}
    >
      <div className=" lg:hidden  bg-yellow-500 h-[3.5rem]  px-3 flex items-center rounded-none md:rounded-xl cursor-pointer" onClick={() => setShowMenu(true)}>
        {/* <motion.nav initial={false} animate={showMenu ? "open" : "closed"}>
          <MenuToggle toggle={() => setShowMenu()} />
        </motion.nav> */}
        <img src="/menu.png" className="w-7"/>
      </div>
      <div>
        <Logo />
      </div>

      <div className="lg:flex hidden">
        <AnimatedTabs />
      </div>
      <div className="flex flex-row gap-6 text-white bg-yellow-900 h-[3.5rem] md:h-[4rem] items-center py-2 px-2  md:rounded-none md:px-5">
        <div className="hidden lg:flex flex-col">
          <p className="">Initial Price:</p>
          <h1 className="text-[25px]">$668,456</h1>
        </div>
        <div className="lg:w-12 lg:h-12 w-11 h-11 flex items-center justify-center border-4 border-slate-200 rounded-full bg-white">
          <img src="/right.png" alt="arrow icon" className="lg:w-8 w-7" />
        </div>
      </div>

      {showMenu && <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />}
    </div>
  );
};

export default MenuBar;
