// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Carousel from '../../../components/common/details/Carousel'
import PropertyOptions from '../../../components/common/details/PropertyOptions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  AboutProperty,
  Terms,
  Amenities,
  Nearby,
  Availability,
  ContactAgent,
  TourRequest,
} from '../../../components/common/card'

import {
  Link,
  Element,
} from 'react-scroll'
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
    if (location.pathname.split('/')[1] == 'admin') {
      setIsUser(false)
    } else {
      setIsUser(true)
    }
    window.scrollTo(0, 0)
    dispatch(getPropertyDetailById(id))
  }, [])

  // console.log(isUser)
  return (
    <div className="bg-slate-800 exo pt-16 font-mono">
      {loading ? (
        <div className="h-[100vh] flex justify-center">
          <CircularProgress />
        </div>
      ) : !loading && details ? (
        <div className="">
          <Carousel images={details?.property_information.property_images} />
         {
          isUser &&  <PropertyOptions
          state={showProperty}
          setState={setShowProperty}
          item={details.property_information}
        />
         }
          <div className="md:container w-[100%] px-[1rem]">
           {
            isUser &&  <div className="w-[100%] mt-12 flex items-end justify-end tablet:hidden">
            <div
              onClick={toggleDrawer(anchor, true)}
              className="border text-slate-500 cursor-pointer px-3 bg-slate-600 border-slate-500 flex items-center justify-center h-10 text-[21px]"
            >
              <p className="text-[13px] text-white">Complete Order</p>
            </div>
          </div>
           }

            <div className="flex mt-4 lg:mt-20 flex-col lg:flex-row gap-16 justify-between relative">
              <div className="">
                <div
                  className={`flex flex-row w-[100%] gap-x-8  py-4 text-[14px] flex-wrap  gap-y-2 text-slate-500  ${isUser ? 'border-white border' : 'text-white'}  border-b-gray-200 `}
                >
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
                    <span>Amenities Others</span>
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
                    <span>Availability</span>
                  </Link>
                  <Link to="terms" smooth={true} offset={-70} duration={500}>
                    <span>Terms & Rules</span>
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
                        isUser={isUser}
                      />
                    </Element>

                    <Element name="amenities" className="element ">
                      <Amenities
                        id="amenities"
                        detail={details.property_information}
                        isUser={isUser}
                      />
                    </Element>
                    <Element name="availability" className="element">
                      <Availability
                        id="availability"
                        detail={details.property_information}
                        isUser={isUser}
                      />
                    </Element>
                    <Element name="nearby" className="element">
                      <Nearby id="nearby" isUser={isUser}/>
                    </Element>
                    <Element name="terms" className="element">
                      <Terms id="terms" isUser={isUser}/>
                    </Element>
                  </div>
                </div>
              </div>
              {
                isUser &&
                <div className=" lg:w-4/12 min-w-[22.5rem] h-fit">
                <ContactAgent propertyId={details._id}/>
                <TourRequest propertyId={details._id}/>
              </div>
              }
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
