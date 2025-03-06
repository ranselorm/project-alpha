import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      {/* Tabs Navigation */}
      <Tabs defaultValue="edit-profile" className="w-full">
        <TabsList className="flex border-b mb-4">
          <TabsTrigger
            value="edit-profile"
            onClick={() => setActiveTab("edit-profile")}
            className={`mr-4 p-2 ${
              activeTab === "edit-profile"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            onClick={() => setActiveTab("preferences")}
            className={`mr-4 p-2 ${
              activeTab === "preferences"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            value="security"
            onClick={() => setActiveTab("security")}
            className={`p-2 ${
              activeTab === "security"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            Security
          </TabsTrigger>
        </TabsList>

        {/* Edit Profile Tab */}
        <TabsContent value="edit-profile">
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

          {/* Form */}
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
              <label className="block text-sm font-medium">Date of Birth</label>
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

          <div className="mt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Save
            </Button>
          </div>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <p className="text-gray-500">Preferences settings will go here.</p>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <p className="text-gray-500">Security settings will go here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
