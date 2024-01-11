import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import "./index.css";
import { useMediaQuery } from "react-responsive";
import { BsMenuButton } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [toggleOpen, setToggleOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const data = sessionStorage.getItem("adminInfo");

  // console.log(data);

  // encodeURI('woienweubwiuebwpiueb')
  useEffect(() => {
    setLoading(true);
    // if (!data) {
    //   navigate("/admin/login");
    // } else {
    //   navigate("/admin");
    // }

    if (!data) {
      navigate("/admin/login", { replace: true });
    }
    
    setLoading(false);
  }, [data]);

  // useEffect((toggleOpen))

  useEffect(() => {
  }, [toggleOpen]);

  const handleToggleOpen = () => {};

  return (
    <div >
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : data ? (
        <div className="flex flex-row">
          <div
            className={`${
              !toggleOpen ? "sidebar-slide-out-in" : "sidebar-slide-in "
            } h-[100vh]`}
          >
            <Sidebar setShowSlide={setToggleOpen} showSlide={toggleOpen} />
          </div>

          <div
            className="md:hidden fixed bottom-6 z-100 left-6 shadow-md h-fit cursor-pointer bg-slate-800 p-3 rounded-md"
            onClick={() => setToggleOpen(!toggleOpen)}
          >
            <BsMenuButton className="text-white text-[24px]" />
          </div>

          <div className={`w-[100%] h-fit bg-slate-900  min-h-[100vh]`}>
            {children}
          </div>
        </div>
      ) : ''}
    </div>
  );
};

export default AdminLayout;
