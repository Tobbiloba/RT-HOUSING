// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Carousel from '../../../components/details/Carousel'
import PropertyOptions from '../../../components/details/PropertyOptions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  AboutProperty,
  Terms,
  Amenities,
  Nearby,
  Availability,
  ContactAgent,
  TourRequest
} from './card'

import {
  Link,
  Element,
  // animateScroll as scroll,
} from 'react-scroll'
// import AvailabilityCalendar from '../../../components/AvailabilityCalendar'
import { getPropertyDetailById } from '@/action/property'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
const PropertyDetails = () => {
  const [isUser, setIsUser] = useState(null)




  const [showProperty, setShowProperty] = useState({
    right: true,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setShowProperty({ ...showProperty, [anchor]: open })
  }

  const anchor = 'right'

  const { id } = useParams()
  const dispatch = useDispatch()
  const { details, loading, error } = useSelector(state => state.propertyDetail)
  const location = useLocation()


  useEffect(() => {
    if(location.pathname.split("/")[1] == "admin") {
      setIsUser(false)
    } else {
      setIsUser(true)
    }
    // window.scrollTo(0, 0)
    // dispatch(getPropertyDetailById(id))
  }, [])

  console.log(isUser)
  return (
    <div className="bg-transparent pt-16 font-mono">
      {loading ? (
        <div className="h-[100vh] flex justify-center">
          <CircularProgress />
        </div>
      ) : !loading && details ? (
        <div className=''>
          <Carousel images={details?.property_information.property_images} />
          {/* <div className="fixed top-0 right-0 z-50"> */}
          <PropertyOptions
            state={showProperty}
            setState={setShowProperty}
            item={details.property_information}
          />
          <div className="md:container w-[100%] px-[1rem]">
            <div className="w-[100%] mt-12 flex items-end justify-end tablet:hidden">
              <div
                onClick={toggleDrawer(anchor, true)}
                className="border text-slate-500 cursor-pointer px-3 bg-slate-600 border-slate-500 flex items-center justify-center h-10 text-[21px]"
              >
                <p className="text-[13px] text-white">Complete Order</p>
              </div>
            </div>

            <div className="flex mt-4 lg:mt-20 flex-col lg:flex-row gap-16 justify-between relative">
              <div className="">
                <div className={`flex flex-row w-[100%] gap-x-8  py-4 text-[14px] flex-wrap  gap-y-2 ${isUser ? "text-slate-500 border border-white border-b-gray-200 " : "text-white"}`}>
                  <Link
                    to="about-property"
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    <span>About</span>
                  </Link>
                  <Link
                    to="amenities"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span>
                      Amenities Others
                    </span>
                  </Link>
                  <Link to="nearby" smooth={true} offset={-70} duration={500}>
                    <span>Nearby</span>
                  </Link>
                  <Link
                    to="availability"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span>
                      Availability
                    </span>
                  </Link>
                  <Link to="terms" smooth={true} offset={-70} duration={500}>
                    <span>
                      Terms & Rules
                    </span>
                  </Link>
                  <Link to="reviews" smooth={true} offset={-70} duration={500}>
                    <span>Reviews</span>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col w-[100%] text-[14px]">
                    <Element name="about-property" className="element">
                      <AboutProperty
                        id="about-property"
                        detail={details.property_information}
                      />
                    </Element>

                    <Element name="amenities" className="element ">
                      <Amenities
                        id="amenities"
                        detail={details.property_information}
                      />
                    </Element>
                    <Element name="availability" className="element">
                  <Availability id="availability" detail={details.property_information}/>
                </Element>
                    <Element name="nearby" className="element">
                      <Nearby id="nearby" />
                    </Element>
                    <Element name="terms" className="element">
                      <Terms id="terms" />
                    </Element>
                  </div>
                </div>
              </div>
              <div className=" lg:w-4/12 min-w-[22.5rem] h-fit">
                <ContactAgent />
                <TourRequest />
              
              </div>
            </div>
          </div>
        </div>
      ) : (
        !loading &&
        error && (
          <div className="h-[20rem] border">
            <p>There is a error</p>
          </div>
        )
      )}
    </div>
  )
}

export default PropertyDetails
