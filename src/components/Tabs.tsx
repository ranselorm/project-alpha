import { useState } from "react";
import UserNode from "./UserNode";

interface TabsProps {
  user: any;
}

const Tabs: React.FC<TabsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const { data: userData } = user;
  // console.log(data, "IN TABS");

  return (
    <div className="w-full mt-8">
      <div className="flex space-x-4 border-b border-gray-300">
        {["Overview", "Members"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 cursor-pointer hover:text-black transition ${
              activeTab === tab ? "border-b-2 border-main" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-2 py-6">
        {activeTab === "Overview" && <p>Content for Overview</p>}

        {activeTab === "Members" && (
          <div className="flex flex-col items-center">
            <UserNode user={userData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
