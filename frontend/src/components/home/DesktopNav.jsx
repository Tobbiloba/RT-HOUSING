import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
let tabs = [
  { id: "HOME", label: "HOME", link: "/" },
  { id: "PROPERTIES", label: "PROPERTIES", link: "/properties" },
  { id: "ABOUT", label: "ABOUT", link: "/about" },

  // { id: "PAGES", label: "PAGES" },
  { id: "CONTACT", label: "CONTACT", link: "/contact" },
];

export const AnimatedTabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex-row gap-5 font-[500]">
      {tabs.map((tab) => (
        <Link to={tab.link} key={tab.id}>
          <button
            onClick={() => setActiveTab(tab.id)}
            className={`text-[15px] ${
              activeTab === tab.id
                ? "text-black"
                : "hover:text-black/60 text-black"
            } relative rounded-full px-3 py-1.5 font-medium  outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-black mix-blend-soft-light"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />

            )}
            {tab.label}
          </button>
        </Link>
      ))}
    </div>
  );
};
