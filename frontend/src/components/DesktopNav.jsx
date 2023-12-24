import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "HOME", label: "HOME" },
  { id: "ABOUT", label: "ABOUT" },
  { id: "PROPERTIES", label: "PROPERTIES" },
  { id: "PAGES", label: "PAGES" },
  { id: "CONTACT", label: "CONTACT" },
];

export const AnimatedTabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex-row gap-5 font-[500]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-white" : "hover:text-black/60 text-black"
          } relative rounded-full px-3 py-1.5 font-medium  outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-yellow-900 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}