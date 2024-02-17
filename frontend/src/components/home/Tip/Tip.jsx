import React from 'react'
import { tips } from '../../data'
const Tip = () => {
  return (
    <div className="flex exo items-center justify-center mt-24 pb-20 lg:mt-32 rubik">
      <div className="container flex flex-col justify-center items-center py-2 px-[1rem]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-[2px] bg-slate-500"></div>
          <p className="mt-3 text-slate-500 text-[16px]">
            See Tips And Trick From Our Partnership
          </p>
          <h1 className="mt-2 text-center3 text-3xl md:text-5xl">
            Find Out More About <br />
            Selling And Buying Homes
          </h1>
          <button className="mt-6 bg-slate-500 text-white px-7 font-[600] py-3">
            More Artikel
          </button>
        </div>

        <div className="md:grid flex flex-col grid-rows-3 grid-flow-col gap-10 w-[100%] mt-12">
          {tips.map((item, index) => (
            <div
            key={index}
              className={` flex gap-8 ${index != 3 ? 'flex-row' : 'flex-col'} ${index == 0 ? 'col-span-2' : index == 1 ? 'col-span-2' : index == 2 ? 'col-span-2' : 'col-span-2 row-span-3'}`}
            >
              <img
                src={item.img}
                className={`${index != 3 ? 'w-5/12' : 'w-[100%]'}`}
              />

              <div className="flex flex-col justify-evenly gap-4">
                <div className="flex flex-row items-center gap-6">
                  <img src={item.userImg} className="lg:w-9 lg:h-9 w-8 h-8" />
                  <p className="text-slate-500 text-[14px] lg:text-[16px]">
                    {item.userName}
                  </p>
                </div>

                <h1 className="lg:text-xl text-[15px] text-slate-700 font-[]">
                  {item.title}
                </h1>

                {index == 3 && (
                  <p className="text-[14px] rubik text-gray-400">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-row gap-3 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/11411/11411855.png"
                    className="w-6 h-6"
                  />
                  <p className="text-[13px] text-gray-400">
                    {item.time} | {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tip
