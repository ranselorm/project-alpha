import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RBACForm from "@/components/Rbac";
import { Icon } from "@iconify/react/dist/iconify.js";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account Information");

  return (
    <div className="p-4">
      <div className="rounded-lg overflow-hidden container mx-auto bg-white p-4">
        <div className="flex space-x-6 border-b border-gray-300 pb-3 bg-white">
          {[
            "Account Information",
            "Billing Information",
            "Roles",
            "Train Agent",
          ].map((tab) => (
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

        <div className="py-6">
          {activeTab === "Account Information" && (
            <div className="">
              <div className="flex items-center justify-between space-x-4 p-2 border border-gray-300 rounded-md">
                <div className="flex items-center justify-between space-x-4">
                  <div className="relative">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 h-4 w-4 rounded-full text-[10px] flex items-center justify-center">
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
                <Icon
                  icon="cuida:edit-outline"
                  className="text-2xl text-main cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm">Your Name</label>
                  <Input
                    placeholder="Charlene Randy"
                    className="focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm">User Name</label>
                  <Input
                    placeholder="Charlene Randy"
                    className="focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm">Email</label>
                  <Input
                    placeholder="charlenerandy@gmail.com"
                    className="focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm">Password</label>
                  <Input
                    type="password"
                    placeholder="********"
                    className="focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm">Date of Birth</label>
                  <Input
                    placeholder="25 January 1990"
                    className="focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm">Present Address</label>
                  <Input
                    placeholder="American St. USA"
                    className="focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="w-max bg-main transition-all duration-150 text-white cursor-pointer px-12">
                  Save
                </Button>
              </div>
            </div>
          )}

          {activeTab === "Billing Information" && (
            <div>hello billing information</div>
          )}

          {activeTab === "Roles" && <RBACForm />}
          {activeTab === "Train Agent" && <div>hello agent information</div>}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
