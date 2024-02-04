import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

let tabs = [
  { id: "HOME", label: "HOME", link: "/" },
  { id: "PROPERTIES", label: "PROPERTIES", link: "/properties" },
  { id: "ABOUT", label: "ABOUT", link: "/about-us" },
  { id: "HOW IT WORKS?", label: "HOW IT WORKS", link: "/how-it-works" },
  { id: "CONTACT", label: "CONTACT", link: "/contact-us" },
];

export const AnimatedTabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const navigate = useNavigate()

  return (
    <div className="flex-row gap-5 font-[500]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => (setActiveTab(tab.id), navigate(tab.link))}
          className={`text-[13px] ${
            activeTab === tab.id ? "text-white" : "hover:text-black/60 text-slate-500"
          } relative  px-3 py-1 font-medium  outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-slate-500  -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}