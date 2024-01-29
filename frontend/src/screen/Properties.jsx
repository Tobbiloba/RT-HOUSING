// @ts-nocheck
import React, { useState, useEffect } from "react";
import Banner from "../components/properties/Banner";
import FilterOption from "../components/properties/FilterOptions";
import MobileFilterOption from "../components/properties/MobileFilterOption";
import TopRated from "../components/properties/TopRated";
import PropertiesList from "../components/properties/PropertiesList";
import SortByOptions from "../components/properties/SortByOptions";
import Footer from "../components/home/Footer";
import { useMediaQuery } from "react-responsive";
import BreadCrumb from "@/components/admin/breadcrumb/BreadCrumb";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "@/action/property";
import Map from "@/components/map/MapScreen";
import PropertyLocationCard from "@/components/propertyCard/PropertyLocationCard";
const LoadingCard = ({ viewMode }) => {
  console.log(viewMode);
  return (
    <div
      className={`w-[100%] flex flex-col md:flex-row   ${
        viewMode === "flex" ? "" : "sm:flex-row md:flex-col"
      }`}
    >
      <div
        className={`${
          viewMode === "flex"
            ? "w-[100%] md:w-5/12"
            : "w-[100%] sm:w-5/12 md:w-[100%]"
        } h-[17.5rem] bg-slate-300 animate-pulse `}
      ></div>
      <div
        className={`${
          viewMode === "flex"
            ? "w-[100%] md:w-7/12"
            : "w-[100%] sm:w-7/12 md:w-[100%]"
        } h-[17.5rem]  flex flex-col justify-between `}
      >
        <div className="px-4 py-4">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div className="w-24 rounded-full h-4 bg-slate-300  animate-pulse"></div>
            <div className="w-48 rounded-full h-5 bg-slate-300  animate-pulse"></div>
            <div className="w-36 rounded-full h-4 bg-slate-300 animate-pulse"></div>
            <div className="w-44 rounded-full h-4 bg-slate-300  animate-pulse"></div>
            {/* <div className="w-44 rounded-full h-4 bg-slate-300 animate-pulse"></div> */}
          </div>
          <div className="w-20 h-20 bg-slate-300 rounded-md animate-pulse"></div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3">
          <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
          <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
          <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
          <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
        </div>
        </div>
        <div className="bg-slate-300 h-10"></div>
      </div>
    </div>
  );
};
const Properties = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllProperties())
  }, []);

  const { properties, loading } = useSelector((state) => state.allProperties);

  // console.log(properties)
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // window.scrollTo(0, 0);
  }, []);
  const [viewMode, setViewMode] = useState("flex");
  const [showProperty, setShowProperty] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowProperty({ ...showProperty, [anchor]: open });
  };

  const anchor = "right";

  const isMobile = useMediaQuery({ maxWidth: 1270 });
  const isDesktop = useMediaQuery({ minWidth: 1271 });

  // const loading = true;

  console.log(properties)
  return (
    <div className=" flex flex-col items-center justify-center">
      <Banner />
      <div className="flex flex-row mt-16 container justify-center px-[1rem]">
        <div className="w-[100%] max-w-[55rem] flex-1">
          <SortByOptions
            viewMode={viewMode}
            setViewMode={setViewMode}
            toggleFilterOptions={toggleDrawer}
            filterState={showProperty}
          />
          {loading ? (
            //           <div className="flex items-center justify-center mt-8 border border-sky-500">
            //             {/* <CircularProgress /> */}
            //               {Array.from({ length: 6 }).map((_, index) => (
            //   <LoadingCard key={index} />
            // )}

            //           </div>
            <div
              className={`grid ${
                viewMode == "flex"
                  ? "grid-cols-1 gap-y-12"
                  : "grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 2xl:grid-cols-3"
              } mt-8`}
            >
              {/* <CircularProgress /> */}
              {Array.from({ length: 18 }).map((_, index) => (
                <div className="w-[100%] border">
                  <LoadingCard key={index} viewMode={viewMode} />
                </div>
              ))}
            </div>
          ) : !loading && properties ? (
            <div className="w-[100%] flex items-end justify-center">
              <PropertiesList viewMode={viewMode} properties={properties} />
            </div>
          ) : (
            !loading &&
            !properties && (
              <div className="h-40 w-[100%] mx-0 flex items-center justify-center">
                <h1 className="text-slate-500">No property to show</h1>
              </div>
            )
          )}
        </div>
{isDesktop &&
        <div className="hidden lg:flex flex-col pl-4">
           <FilterOption />
          <TopRated />
        </div>
}
      </div>
      {isMobile && (
        <div className="">
          <MobileFilterOption state={showProperty} setState={setShowProperty} />
        </div>
      )}
      {/* <Map /> */}
      <div className="w-[100%] items-center mt-8 justify-center px-[1rem] md:px-[5%] flex flex-col gap-20">
        <PropertyLocationCard title="Ikeja" />
        <PropertyLocationCard title="Victoria Island" />
        <PropertyLocationCard title="Lekki" />
      </div>

      <div className="mt-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default Properties;
