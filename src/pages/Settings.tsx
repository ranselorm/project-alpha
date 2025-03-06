import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RBACForm from "@/components/Rbac";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="p-4">
      <div className="rounded-lg overflow-hidden container mx-auto bg-white p-4">
        <div className="flex space-x-6 border-b border-gray-300 pb-3 bg-white">
          {["Edit Profile", "Preferences", "Security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 cursor-pointer hover:text-black transition ${
                activeTab === tab
                  ? "border-b-2 border-main text-main"
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
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full text-xs">
                    ✎
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Charlene Randy</h2>
                  <p className="text-sm text-gray-500">
                    charlenerandy@gmail.com
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm">Your Name</label>
                  <Input placeholder="Charlene Reed" />
                </div>
                <div>
                  <label className="block text-sm">User Name</label>
                  <Input placeholder="Charlene Randy" />
                </div>
                <div>
                  <label className="block text-sm">Email</label>
                  <Input placeholder="charlenerandy@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm">Password</label>
                  <Input type="password" placeholder="********" />
                </div>
                <div>
                  <label className="block text-sm">Date of Birth</label>
                  <Input placeholder="25 January 1990" />
                </div>
                <div>
                  <label className="block text-sm">Present Address</label>
                  <Input placeholder="American St. USA" />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="w-max bg-main hover:bg-main text-white cursor-pointer px-12">
                  Save
                </Button>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "Preferences" && <RBACForm />}

          {/* Security Tab */}
          {activeTab === "Security" && (
            <div>
              <h2 className="text-lg font-semibold mb-3">Security Settings</h2>
              <p className="text-gray-600">
                Update your security settings here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
