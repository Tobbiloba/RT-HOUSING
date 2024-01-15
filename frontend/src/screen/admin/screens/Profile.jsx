import React, { useState } from "react";

const Profile = () => {
  const [showImageOption, setShowImageOption] = useState(true);
  return (
    <div className="exo  pb-8 w-[100%] p-[1rem] md:p-[2rem] flex">
      <div className="rounded h-fit w-[100%] px-[5%] py-[5%] bg-slate-700 flex flex-row gap-[5%]">
        <div>
          <div className="relative w-fit rounded-md overflow-hidden">
            <img src="https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/man.png" />

            {showImageOption && (
              <div className="absolute bottom-0 bg-black/70 w-[100%] py-2">
                <p className="text-white text-center">Change Photo</p>
              </div>
            )}
          </div>

          <div></div>
        </div>

        <div className="flex-1 px-[2rem]">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-4xl text-white">John Doe</h1>
              <p className="text-white mt-3">House Keeper</p>
            </div>
            <button className=" text-[14px] px-5 py-2 h-fit text-white rounded-full bg-slate-500 shadow-md">Edit Profile</button>
          </div>
          <div className="mt-8">
            <div className="flex gap-8 flex-row text-white text-xl">
              <p className="cursor-pointer border-b pb-1">About</p>
              <p className="cursor-not-allowed">Experience</p>
            </div>

            <div className="mt-8 text-white w-fit grid grid-cols-1 gap-x-24 lg:grid-cols-2 gap-y-12">
              
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Firstname:</h1>
                <p className="">John</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Lastname:</h1>
                <p>Doe</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">User Id</h1>
                <p>4bd9ednde9b</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Email</h1>
                <p>johndoe@mail.com</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Phone</h1>
                <p>+23498508944</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Profession</h1>
                <p>House Caretaker</p>
              </div>
              <div className="flex flex-row gap-16 items-center justify-between">
                <h1 className="text-xl">Company</h1>
                <p>Johndoe ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
