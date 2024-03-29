import React, { useState, useEffect } from 'react'
import { AnimatedTabs } from './DesktopNav'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Properties', link: '/properties' },
    { name: 'About', link: '/about-us' },
    { name: 'How It works?', link: '/how-it-works' },
    { name: 'Contact', link: '/contact-us' },
  ]


  const [currentPath, setCurrentPath] = useState('')
  const location = useLocation()
  const pathname = location.pathname.split('/')


  useEffect(() => {
    if(!pathname[1]) {
      setCurrentPath("")
    } else {
      setCurrentPath(pathname[1])
    }
  }, [pathname])

  return (
    <div className="flex relative border exo border-white border-t-gray-100 pt-4 exo items-center justify-center pl-[1rem] md:px-[1rem] mt-4 ">
      <div className="md:container px-[1rem] w-[100%] flex flex-row justify-between items-center relative">
        <h1 className="text-xl flex text-[30px] text-slate-500 flex-row pt-1 capitalized">
          Fe
          <div className="rotate-12 w-[30px] h-[46px] flex flex-col items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-slate-900"></div>
            <span className="text-slate-900 relative bottom-2">bt</span>
          </div>
          oS
        </h1>

        <div className="hidden md:flex">
          <AnimatedTabs />
        </div>

        <div
          className=" md:hidden  bg-slate-500 h-[3.5rem]  px-3 flex items-center cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src="/menu.png" className="w-7" />
        </div>
      </div>

      {showMenu && (
        <div
          className="w-[100%] left-0  flex flex-col border-b border-slate-300 h-[16rem] bg-white absolute -bottom-[16rem] z-[100]"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          {links.map((item, index) => {
            // console.log(item.link.split("/")[1])
            // currentPath == item.link.split("/")[1]
            return (
              <Link key={index} to={item.link} className='border-t-gray-300 border-t'>
                <div className={`px-[5%] cursor-pointer py-3 hover:bg-gray-200 ${currentPath == item.link.split("/")[1] ? "bg-slate-200 rounded-md m-1" : ""}`}>
                  {item.name}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MenuBar
