import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import "./index.css";
import { useMediaQuery } from "react-responsive";
import { BsMenuButton } from "react-icons/bs";
const AdminLayout = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  // useEffect((toggleOpen))

  useEffect(() => {
    console.log(toggleOpen)
  }, [toggleOpen])


  const handleToggleOpen=() => {

  }
  
  return (
    <div className="flex flex-row">
      <div
        className={`${
          !toggleOpen ? "sidebar-slide-out-in" : "sidebar-slide-in "
        } h-[100vh]`}
      >
        <Sidebar setShowSlide={setToggleOpen} showSlide={toggleOpen} />
      </div>

      <div className="md:hidden fixed bottom-6 left-6 shadow-md h-fit cursor-pointer bg-slate-800 p-3 rounded-md" onClick={() => setToggleOpen(!toggleOpen)}>
        <BsMenuButton className="text-white text-[24px]"/>
      </div>

      <div className={`w-[100%] h-fit bg-slate-900 p-2 min-h-[100vh]`}>{children}</div>
    </div>
  );
};

export default AdminLayout;
