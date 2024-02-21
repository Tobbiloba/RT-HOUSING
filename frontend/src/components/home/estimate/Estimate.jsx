// @ts-nocheck
import React, { useState } from 'react'

const Estimate = () => {
  const [price, setPrice] = useState(6382)
  const [downPaymentPercent, setDownPaymentPercent] = useState(30)
  const [loanTerm, setLoanTerm] = useState(35)
  const [interestRate, setInterestRate] = useState(0.1)

  const calculateEstimates = () => {
    const downPayment = (price * downPaymentPercent) / 100
    const loanAmount = price - downPayment
    const monthlyInterestRate = interestRate / 12
    const numberOfPayments = loanTerm * 12

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      // eslint-disable-next-line no-restricted-properties
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))

    const roundTo2DecimalPlaces = value => {
      return Number(value.toFixed(2))
    }

    const totalLoanAmount = roundTo2DecimalPlaces(
      monthlyPayment * numberOfPayments,
    )
    const totalDownPayment = roundTo2DecimalPlaces(downPayment)
    const totalMonthlyPayment = roundTo2DecimalPlaces(monthlyPayment)

    setTotalLoanAmount(totalLoanAmount)
    setTotalDownPayment(totalDownPayment)
    setTotalMonthlyPayment(totalMonthlyPayment)
  }

  const [totalLoanAmount, setTotalLoanAmount] = useState(5386.41)
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(1386.41)
  const [totalDownPayment, setTotalDownPayment] = useState(1245.79)

  return (
    <div className="pt-28 flex flex-col justify-center items-center exo md:px-[1rem]">
      <button className="bg-slate-50 px-6 py-2">ESTIMATE</button>
      <h1 className="mt-6 text-4xl text-center">
        YOUR PAYMENT <br />
        ESTIMATE
      </h1>
      <div className="mt-28 w-[100%] md:min-w-[50rem] md:w-[70%] flex flex-col items-center justify-center gap-16 py-16 bg-slate-50 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[100%] gap-x-12 gap-y-12">
          <div className="flex-1">
            <p className="text-[14px]">PURCHASE PRICE:</p>
            <input
              placeholder="Price"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="mt-3 w-[100%] bg-transparent border px-3 py-4 border-black text-[16px]"
            />
          </div>
          <div className="flex-1">
            <p className="text-[14px]">DOWN PAYMENT%:</p>
            <input
              placeholder="Price"
              type="number"
              value={downPaymentPercent}
              onChange={e => setDownPaymentPercent(e.target.value)}
              className="mt-3 w-[100%] bg-transparent border px-3 py-4 border-black text-[16px]"
            />
          </div>
          <div className="flex-1">
            <p className="text-[14px]">LOAN TERM YEAR:</p>
            <input
              placeholder="Price"
              type="number"
              value={loanTerm}
              onChange={e => setLoanTerm(e.target.value)}
              className="mt-3 w-[100%] bg-transparent border px-3 py-4 border-black text-[16px]"
            />
          </div>
          <div className="flex-1">
            <p className="text-[14px]">INTEREST RATE %:</p>
            <input
              placeholder="Price"
              type="number"
              value={interestRate}
              onChange={e => setInterestRate(e.target.value)}
              className="mt-3 w-[100%] text-[16px] bg-transparent border px-3 py-3 border-black "
            />
          </div>
        </div>

        <button
          className="px-12 bg-slate-600 text-white hover:text-slate-600 hover:bg-white hover:border py-5 border-slate-600 cursor-pointer"
          onClick={calculateEstimates}
        >
          Estimate Payment
        </button>

        <div className="border w-[100%] flex flex-col md:flex-row justify-evenly bg-white px-6 py-12">
          <div>
            <p className="text-slate-500 text-center md:text-start text-[14px]">
              DOWN PAYMENT%
            </p>
            <h1 className="text-xl font-[600] mt-2 text-center">
              ${totalDownPayment}
            </h1>
          </div>
          <div>
            <p className="text-slate-500 text-center md:text-start mt-10 md:mt-0 text-[14px]">
              MONTHLY PAYMENT%
            </p>
            <h1 className="text-xl font-[600] text-center mt-2">
              ${totalMonthlyPayment}
            </h1>
          </div>
          <div>
            <p className="text-slate-500 text-center md:text-start mt-10 md:mt-0 text-[14px]">
              TOTAL LOAN AMOUNT
            </p>
            <h1 className="text-xl font-[600] text-center mt-2">
              ${totalLoanAmount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimate
