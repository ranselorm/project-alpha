import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b border-gray-300">
        {["Overview", "Members"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 cursor-pointer hover:text-black transition ${
              activeTab === tab ? "border-b border-teal-600" : "text-gray-600"
            }`}
          >
            {tab.replace("tab", "Tab ")}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4">
        {activeTab === "tab1" && <p>Content for Tab 1</p>}
        {activeTab === "tab2" && <p>Content for Tab 2</p>}
        {activeTab === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
