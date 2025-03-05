import { useState } from "react";
import UserNode from "./UserNode";
import { users } from "../data";

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
              activeTab === tab ? "border-b border-main" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-2 py-6">
        {activeTab === "Overview" && <p>Content for Overview</p>}

        {/* Members Tab - Render Genealogy Tree */}
        {activeTab === "Members" && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Genealogy Tree</h2>
            <div className="grid grid-cols-4 gap-4">
              {users.map((user) => (
                <UserNode key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
