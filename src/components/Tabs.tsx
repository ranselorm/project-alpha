import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b border-gray-300">
        {["tab1", "tab2", "tab3"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 text-gray-600 hover:text-black transition ${
              activeTab === tab ? "border-b-2 border-black font-medium" : ""
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
