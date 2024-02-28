// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import Slider from '@mui/material/Slider'
import FilterOptions from '../home/FilterOptions'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
const FilterBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(true)
  return (
    <div className="border exo rounded-md  text-[13px]">
      <div
        className="flex flex-row justify-between cursor-pointer  text-[15px] border-b p-[1rem] "
        onClick={() => setShowChildren(!showChildren)}
      >
        <h1 className='text-slate-500'>{title}:</h1>
        {showChildren ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>

      {showChildren && (
        <div
          style={{
            height: showChildren ? 'auto' : 0,
            overflow: '',
            transition: 'height 3.3s ease-in-out',
          }}
          className="mt-4 p-[1rem]"
        >
          {children}
        </div>
      )}
    </div>
  )
}

const FilterOption = ({ data, setData }) => {
  const [adults, setAdults] = useState('')
  const [children, setChildren] = useState('')
  const [infants, setInfants] = useState('')
  const [roomType, setRoomType] = useState('Private Room')
  const [accomodationType, setAccomodationType] = useState([])
  const [areaSize, setAreaSize] = useState([0, 100])
  const [bathrooms, setBathrooms] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [facilities, setFacilities] = useState([])

  // eslint-disable-next-line no-restricted-syntax
  function valuetext(value) {
    return `${value}°C`
  }

  const { types, loading } = useSelector(state => state.propertyTypes)

  const room = [
    {
      id: 1,
      type: 'Private Room',
      img: '/suitcase.png',
    },
    {
      id: 2,
      type: 'Shared Room',
      img: '/meeting.png',
    },
    {
      id: 3,
      type: 'Entire Place',
      img: '/bungalow.png',
    },
  ]

  const ammenitiesList = [
    'WI-FI',
    'Air Conditioning',
    'TV Cable',
    'Swimming Pool',
    'Barbecue Area',
    'Sauna',
    'Dish Washer',
    // 'Sauna',
    'Gym',
    'Laundry',
  ]

  const facility = [
    'Free Parking',
    'Beachside',
    'Markets',
    'Pharmacy',
    'Playground',
  ]
  const { properties } = useSelector(state => state.allProperties)

  const handleAccomodationCheckboxChange = item => {
    // Check if the item is already in the state
    if (accomodationType.includes(item)) {
      let match = data.filter(items => {
        // Replace 'yourPropertyValue' with the value you are looking for
        return items.property_information.property_type != item
      })

      if (accomodationType.length <= 1) {
        setData(properties)
      } else {
        setData(match)
      }

      setAccomodationType(accomodationType.filter(type => type !== item))
    } else {
      // If not, add it
      if (properties) {
        let match = properties.filter(items => {
          // Replace 'yourPropertyValue' with the value you are looking for
          return items.property_information.property_type === item
        })

        if (accomodationType.length) {
          setData(data, match)
        } else {
          setData(match)
        }
      }
      setAccomodationType([...accomodationType, item])
    }
  }

  // const handleFacilitiesCheckboxChange = item => {
  //   // Check if the item is already in the state
  //   if (facilities.includes(item)) {
  //     // If yes, remove it
  //     setFacilities(facilities.filter(type => type !== item))
  //   } else {
  //     setFacilities([...facilities, item])
  //   }
  // }
  const handleSizeChange = (event, newValue) => {
    setAreaSize(newValue)
  }

  const handleApplyFilters = () => {}

  useEffect(() => {
    if (adults) {
      let match = properties.filter(items => {
        // Replace 'yourPropertyValue' with the value you are looking for
        console.log(items.property_information?.guest?.maximum_adults, adults)
        return items.property_information?.guest?.maximum_adults == adults
      })
      setData(match)
    }
    if (children) {
      let match = properties.filter(items => {
        return items.property_information?.guest?.maximum_children == children
      })
      setData(match)
      // console.log(properties[0].property_information.guest.maximum_adults)
    }

    if (infants) {
      let match = properties.filter(items => {
        // Replace 'yourPropertyValue' with the value you are looking for
        console.log(items.property_information?.guest?.maximum_infants, infants)
        return items.property_information?.guest?.maximum_infants == infants
      })
      setData(match)
    }

    if (bathrooms) {
      let match = properties.filter(items => {
        // Replace 'yourPropertyValue' with the value you are looking for
        console.log(
          items.property_information?.property_no_bathrooms,
          bathrooms,
        )
        return items.property_information?.property_no_bathrooms == bathrooms
      })
      setData(match)
      // console.log(properties[0].property_information.guest.maximum_infants)
    }

    if (bedroom) {
      let match = properties.filter(items => {
        // Replace 'yourPropertyValue' with the value you are looking for
        return items.property_information?.property_no_bedrooms == bedroom
      })
      setData(match)
    }
  }, [adults, children, infants, bathrooms, bedroom])
  return (
    <div className="">
      <div className="w-[22.5rem] exo mb-6 h-fit rounded-md overflow-hidden">
        <div className="flex flex-col gap-6">
          <FilterBox title="Accomodation Type">
            {loading ? (
              <div className="flex justify-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {types &&
                  types.map((item, index) => (
                    <div
                      className="flex justify-between items-center"
                      key={index}
                    >
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          onChange={() =>
                            handleAccomodationCheckboxChange(item.name)
                          }
                          checked={accomodationType.includes(item.name)}
                        />
                        <p className="text-[15px]">{item.name}</p>
                      </div>

                      <p className="border px-2 py-1 rounded-sm bg-slate-500 text-white ">
                        {item.property_count}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </FilterBox>

          <FilterBox title="Number of Adult Guests">
            <FilterOptions type="" value={adults} setValue={setAdults} />
          </FilterBox>
          <FilterBox title="Number of Children">
            <FilterOptions type="" value={children} setValue={setChildren} />
          </FilterBox>
          <FilterBox title="Number of Infants">
            <FilterOptions type="" value={infants} setValue={setInfants} />
          </FilterBox>

          <FilterBox title="Room Type">
            <div className="flex flex-col">
              {room.map(item => (
                <div
                  key={item.type}
                  onClick={() => setRoomType(item.type)}
                  className="flex text-[13px] rounded-md hover:shadow-md px-3 border border-t-gray-100 border-  flex-row justify-between mt-4 cursor-pointer py-3 items-center"
                >
                  <div className="flex flex-row gap-3">
                    <img src={item.img} alt="suitcase" className="w-8 mr-8" />
                    <h1>Private Room</h1>
                    <p>(58,150)</p>
                  </div>
                  <div className="border w-6 h-6 rounded-full">
                    {roomType === item.type && (
                      <img
                        src="/checked.png"
                        alt="checked"
                        className="w-[100%]"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FilterBox>

          <FilterBox title="Area Size">
            <p className="text-slate-400 text-[14px] mb-2">
              {areaSize[0] * 10} sq ft - {areaSize[1] * 10} sq ft
            </p>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={areaSize}
              onChange={handleSizeChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="primary"
            />
          </FilterBox>
          <FilterBox title="Number of Bedrooms">
            <FilterOptions type="" value={bedroom} setValue={setBedroom} />
          </FilterBox>
          <FilterBox title="Number of Bathrooms">
            <FilterOptions type="" value={bathrooms} setValue={setBathrooms} />
          </FilterBox>

          <FilterBox title="Amenities">
            <div className="grid grid-cols-2 gap-3">
              {ammenitiesList.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    disabled
                    // onChange={() => handleAmmenitiesCheckboxChange(item)}
                    checked
                  />
                  <p className="text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </FilterBox>

          <FilterBox title="Facilities">
            <div className="grid grid-cols-2 gap-3">
              {facility.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input
                    type="checkbox"
                    disabled
                    className="custom-checkbox"
                    onChange={() => handleFacilitiesCheckboxChange(item)}
                    checked
                  />
                  <p className="text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </FilterBox>

          <div className="px-4 py-10 bg-gray-100 text-center items-center justify-center flex flex-col">
            <p className="text-[15px] text-gray-500">
              Click Apply Filter button to get <br /> desired search result
            </p>
            <button
              className="mt-4 border-[3px] text-slate-500 cursor-not-allowed border-slate-500 hover:text-white px-10 py-3 w-fit"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
            <button className="mt-4 text-sky-400">Reset All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterOption
