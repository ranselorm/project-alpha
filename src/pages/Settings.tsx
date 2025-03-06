import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      {/* Tabs Navigation */}
      <div className="flex space-x-6 border-b border-gray-300 pb-3">
        {["Edit Profile", "Preferences", "Security"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 cursor-pointer hover:text-black transition ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="px-4 py-6">
        {/* Edit Profile Tab */}
        {activeTab === "Edit Profile" && (
          <div>
            {/* Profile Image Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border"
                />
                <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full text-xs">
                  ✎
                </button>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Charlene Reed</h2>
                <p className="text-sm text-gray-500">charlenereed@gmail.com</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <Input placeholder="Charlene Reed" />
              </div>
              <div>
                <label className="block text-sm font-medium">User Name</label>
                <Input placeholder="Charlene Reed" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input placeholder="charlenereed@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input type="password" placeholder="********" />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Date of Birth
                </label>
                <Input placeholder="25 January 1990" />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Present Address
                </label>
                <Input placeholder="San Jose, California, USA" />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Permanent Address
                </label>
                <Input placeholder="San Jose, California, USA" />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <Input placeholder="San Jose" />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <Input placeholder="45962" />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <Input placeholder="USA" />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Save
              </Button>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === "Preferences" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Preferences Settings</h2>
            <p className="text-gray-600">Update your preferences here.</p>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === "Security" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Security Settings</h2>
            <p className="text-gray-600">Update your security settings here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
