import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full mt-8">
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

      <div className="px-2 py-6">
        {activeTab === "Overview" && <p>Content for Tab 1</p>}
        {activeTab === "Members" && <p>Content for Tab 2</p>}
      </div>
    </div>
  );
};

export default Tabs;
