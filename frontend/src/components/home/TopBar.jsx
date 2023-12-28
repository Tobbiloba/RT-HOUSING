import React from "react";

const TopBar = ({setShowLogin, setShowRegister}) => {
  return (
    <div className="sm:flex hidden items-center justify-center">
      <div className="flex flex-wrap exo flex-row  justify-between md:items-center lg:flex-nowrap px-[1rem]pb-2 md:py-4 container">
    <div className="flex w-[35rem] flex-row items-center gap-x-5 md:gap-6 flex-wrap md:flex-nowrap">
        <p className="text-[15px] text-blue-70">
          Call Us:{" "}
          <span className="text-yellow-900 text-[16px] font-[600]">
            (+1) 2345 67 89 00
          </span>
        </p>
        <div className="flex flex-row gap-4 border-2 border-white md:border-l-gray-500  py-2 pl-4 my-3 md:my-0">
          <img src="/facebook.png" alt="facebook icon" className="w-5" />
          <img src="/twitter.png" alt="twitter icon" className="w-5" />
          <img src="/youtube.png" alt="youtube icon" className="w-5" />
          <img src="/instagram.png" alt="instagram icon" className="w-5" />
        </div>
      </div>
      <div className="flex w-[100%] flex-row flex-wrap md:flex-nowrap md:items-center  gap-x-8 gap-y-4 justify-end  md:gap-6">
        <div className="flex flex-row gap-7 md:my-0">
          <h1 className="text-yellow-500 font-[600] cursor-pointer" onClick={() => setShowLogin(true)}>Login</h1>
          <h1 className="text-yellow-900 font-[600] cursor-pointer" onClick={() => setShowRegister(true)}>Register</h1>
        </div>

        <div className="relative flex flex-row overflow-hidden w-[22rem] h-[3rem] border">
          <p className="flex-1 bg-yellow-500 items-center flex justify-center">
            Become A Host
          </p>
          <p className="flex-1 text-white bg-yellow-900 text-center items-center flex justify-center ">
            Find A Property
          </p>
          <div className="absolute left-[10.75rem] rotate-6 w-[.5rem] h-[3.5rem] bg-white">
            {" "}
          </div>
          <p className="absolute left-[10rem] border-4 border-slate-200 w-[2rem] h-[2rem] top-[.5rem] z-[10] rounded-full items-center flex justify-center  bg-white">
            OR
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopBar;
