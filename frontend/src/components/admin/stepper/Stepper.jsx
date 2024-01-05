import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = ({steps, complete, currentStep}) => {
  

  return (
    <>
      <div className="flex justify-between w-fit">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Stepper;