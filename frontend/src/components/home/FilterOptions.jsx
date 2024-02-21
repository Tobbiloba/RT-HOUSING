// @ts-nocheck
import React
// , { useState, useEffect } 
from 'react'

const FilterOptions = ({ type, value, setValue }) => {

  const handleClick = num => {
    setValue(num)
  }
  return (
    <div
      className={`md:flex md:flex-row text-[13px]  ${type !== '' ? 'justify-between flex-col' : 'flex justify-start  items-start flex-row'} `}
    >
      {type !== '' && (
        <h1
          className={`${type === '' ? '' : 'w-[100%] py-2 md:w-4/12'} flex items-center flex-row text-gray-500 px-3`}
        >
          {type === 'adult'
            ? 'Adults'
            : type === 'children'
              ? 'Childrens'
              : type === 'children'
                ? 'Infants'
                : ''}{' '}
          {type === 'children' ? (
            <p className="text-[10px] ml-2 text-gray-500">(Ages 2 - 12)</p>
          ) : type === 'infant' ? (
            <p className="text-[10px] ml-2 text-gray-500">(Under 2)</p>
          ) : (
            ''
          )}
        </h1>
      )}

      <div
        className={`${type !== '' ? 'md:w-4/12' : 'w-[100%]'} w-[100%]  border justify-between flex flex-row`}
      >
        <p
          className={`w-4/12 border border-y-0 border-l-0  h-10  cursor-pointer  flex items-center justify-center ${value === 1 ? 'bg-slate-500  text-white' : 'hover:text-slate-500 text-gray-400'}`}
          onClick={() => handleClick(1)}
        >
          01
        </p>
        <p
          className={`w-4/12 border border-y-0 border-l-0  h-10 cursor-pointer   flex items-center justify-center ${value === 2 ? 'bg-slate-500  text-white' : 'hover:text-slate-500 text-gray-400'}`}
          onClick={() => handleClick(2)}
        >
          02
        </p>
        <p
          className={`w-4/12 border border-y-0 border-l-0  h-10  cursor-pointer  flex items-center justify-center ${value === 3 ? 'bg-slate-500  text-white' : 'hover:text-slate-500 text-gray-400'}`}
          onClick={() => handleClick(3)}
        >
          03
        </p>
        <p
          className={`w-4/12 border border-y-0 border-l-0  h-10 cursor-pointer   flex items-center justify-center ${value === 4 ? 'bg-slate-500  text-white' : 'hover:text-slate-500 text-gray-400'}`}
          onClick={() => handleClick(4)}
        >
          04
        </p>
        <p
          className={`w-4/12 h-10  cursor-pointer   flex items-center justify-center ${value === 5 ? 'bg-slate-500  text-white' : 'hover:text-slate-500 text-gray-400'}`}
          onClick={() => handleClick(5)}
        >
          05
        </p>
      </div>

    </div>
  )
}

export default FilterOptions
