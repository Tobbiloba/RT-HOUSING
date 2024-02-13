// @ts-nocheck
import Footer from '@/components/home/Footer'
import SearchBox from '@/components/how/SearchBox'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { IoSettingsOutline } from 'react-icons/io5'
import { useState } from 'react'
const Card = ({ index, item }) => {
  return (
    <div
      className={`flex border-b ${(index + 1) % 2 == 1 ? 'flex-col md:flex-row  lg:flex-row xl:flex-nowrap xl:flex-row justify-end items-center' : 'flex-col-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse justify-evenly items-center'} `}
    >
      <div
        className={`flex ${(index + 1) % 2 == 1 ? 'flex-row' : 'flex-row-reverse'} md:w-7/12 lg:w-[100%] xl:w-7/12  gap-5 items-center`}
      >
        <p className="text-[22px] text-slate-600 rubik  ">0{index + 1}.</p>
        <div>
          <h1 className="text-[22px] text-slate-700 rubik">{item.title}</h1>
          <p className="mt-3 text-[14px] text-slate-500">{item.description}</p>
        </div>
      </div>

      <img src={item.img} className="max-w-[22rem] min-w-[17rem]" />
    </div>
  )
}

const featureList = [
  {
    title: 'Discover Ideal Accommodations',
    description:
      'Explore a curated selection of high-quality accommodations. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'http://amentotech.com/htmls/tenanto/images/work/img-01.jpg',
  },
  {
    title: 'Explore Accommodation Details',
    description:
      'Gain in-depth insights into accommodation options. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'http://amentotech.com/htmls/tenanto/images/work/img-02.jpg',
  },
  {
    title: 'Secure Your Reservation',
    description:
      'Effortlessly book your preferred accommodation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'http://amentotech.com/htmls/tenanto/images/work/img-03.jpg',
  },
  {
    title: 'Indulge in a Memorable Stay',
    description:
      'Experience comfort and luxury during your stay. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'http://amentotech.com/htmls/tenanto/images/work/img-04.jpg',
  },
]
const HowItWorks = () => {
  const [showOption, setShowOption] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setShowOption({ ...showOption, [anchor]: open })
  }

  const anchor = 'right'

  const isMobile = useMediaQuery({ maxWidth: 999 })
  const isDesktop = useMediaQuery({ minWidth: 999 })

  return (
    <div className="flex flex-col items-center exo">
      <div
        className="relative"
        style={{
          backgroundImage:
            'url("http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '340px',
          width: '100%',
        }}
      >
        <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-black/50"></div>
      </div>

      <div className="flex flex-row mt-16 gap-3 container justify-center px-[1rem] md:mx-[7.5%]">
        <div className="w-[50rem] px-2 flex flex-col gap-y-20">
          {featureList.map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </div>
        <div
          className="border flex lg:hidden h-fit p-2 text-slate-400 rounded-sm"
          onClick={() => toggleDrawer(anchor, false)}
        >
          <IoSettingsOutline />
        </div>
        {isDesktop && (
          <div className="hidden lg:flex flex-col  ">
            <SearchBox />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks
