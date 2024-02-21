// @ts-nocheck

import { timeAgo } from '@/components/utils'
import { handleAgentsCheckboxChange } from '@/utils'
// Agent card for create property screen to show agents
const AgentCard = ({ item, values, setFieldValue }) => {
  const isAgentActive = values && values.username === item.username
  return (
    <div
      onClick={() =>
        handleAgentsCheckboxChange({ item, values, setFieldValue })
      }
      className={`flex flex-col hover:bg-slate-600 ${isAgentActive && 'shadow-xl bg-slate-700'} flex-row  cursor-pointer xl:flex-row gap-5 justify-between items-center lg:items-end xl:items-center`}
    >
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row w-[100%] justify-between md:items-center lg:items-start xl:items-center">
        <div className="w-5/12 h-28 flex items-center overflow-hidden">
          <img src={item?.img} alt={item?.name} />
        </div>
        <div className="text-white w-6/12 flex overflow-hidden flex-col gap-1">
          <h1 className="text-[15px] font-[600]">{item?.username}</h1>
          <p className="text-[13px]">{item?.role}</p>
          <p className="text-[12px]">{item?.email}</p>
        </div>
      </div>

      <div className="border w-6 h-6 mr-8 lg:mr-4 lg:mb-4 xl:mr-8 rounded-full p-1">
        {isAgentActive && (
          <div className="bg-white w-[100%] h-[100%] rounded-full"></div>
        )}
      </div>
    </div>
  )
}

const NotificationCard = ({ item }) => {
  console.log(item)
  return (
    <div className="  p-4 flex gap-3 items-">
      <div className="w-14 h-14 overflow-hidden ">
        {item.imageUrl ? (
          <img src={item?.img} className="w-14 h-14" />
        ) : (
          <div className="w-12 h-12"></div>
        )}
      </div>

      <div className=" md:w-[23rem]">
        <h1 className="text-[14px] font-[600]">
          {item?.title}:{' '}
          <span className="font-[500] ml-2">{item?.message}</span>
        </h1>
        <p className="text-[12px] mt-2">{timeAgo(item?.timeStamp)}</p>
      </div>
    </div>
  )
}

export { AgentCard, NotificationCard }
