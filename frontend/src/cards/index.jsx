// @ts-nocheck

import { handleAgentsCheckboxChange } from "@/utils";
import { useEffect, useState } from "react";

// Agent card for create property screen to show agents
const AgentCard = ({ item, values, setFieldValue }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if the agent is already in the state based on the 'name' property
    const isAgentActive = values.some((value) => value.name === item.name);
    setIsActive(isAgentActive);
  }, [values, item]);
  return (
    <div
      onClick={() => handleAgentsCheckboxChange({ item, values, setFieldValue })}
      className={`flex hover:bg-slate-600 ${isActive && "shadow-xl bg-slate-700"} flex-row lg:flex-col cursor-pointer xl:flex-row gap-5 justify-between items-center lg:items-end xl:items-center`}
    >
      <div className="flex w-[100%] justify-between items-center">
        <div className="w-5/12 h-28 flex items-center overflow-hidden">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="text-white w-6/12 flex overflow-hidden flex-col gap-1">
          <h1 className="text-[16px] font-[600]">{item.name}</h1>
          <p className="text-[14px]">{item.role}</p>
          <p className="text-[13px]">{item.email}</p>
        </div>
      </div>

      <div className="border w-6 h-6 mr-8 lg:mr-4 lg:mb-4 xl:mr-8 rounded-full p-1">
        {
          isActive && <div className="bg-white w-[100%] h-[100%] rounded-full"></div>
        }
      </div>
    </div>
  );
};

export { AgentCard };
