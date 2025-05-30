import { useState } from "react";
import { Button } from "@/components/ui/button";
import RBACForm from "@/components/Rbac";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Modal } from "antd";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account Information");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<
    "profile" | "personal" | "none"
  >("none");

  const openModal = (content: "profile" | "personal") => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("none");
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="rounded-lg overflow-hidden container mx-auto bg-white p-6 max-w-5xl">
        {/* Tabs */}
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
                  ? "border-b-2 border-main text-main font-semibold"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="py-6">
          {activeTab === "Account Information" && (
            <>
              {/* Profile Header */}
              <div className="flex items-center justify-between space-x-4 p-4 border border-gray-300 rounded-md">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
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
                  onClick={() => openModal("profile")}
                />
              </div>

              {/* Personal Information */}
              <div className="mt-6 border border-gray-300 p-4 rounded-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Personal Information</h3>
                  <Icon
                    icon="cuida:edit-outline"
                    className="text-2xl text-main cursor-pointer"
                    onClick={() => openModal("personal")}
                  />
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
                  <div>
                    <p className="mb-1 font-medium text-gray-400 text-sm">
                      First Name
                    </p>
                    <p className="">Randy</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-gray-400">Last Name</p>
                    <p className="">Selorm</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-gray-400 text-sm">
                      Email Address
                    </p>
                    <p>randy@gmail.com</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Phone</p>
                    <p>+233 555 1234</p>
                  </div>
                  <div className="col-span-2">
                    <p className="mb-1 font-medium text-gray-400">Bio</p>
                    <p>Product Designer</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Billing Information" && (
            <div className="text-gray-700">hello billing information</div>
          )}

          {activeTab === "Roles" && <RBACForm />}

          {activeTab === "Train Agent" && (
            <div className="text-gray-700">hello agent information</div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={
          modalContent === "profile"
            ? "Edit Profile"
            : modalContent === "personal"
            ? "Edit Personal Information"
            : ""
        }
        visible={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button
            key="close"
            onClick={closeModal}
            className="bg-main text-white"
          >
            Close
          </Button>,
        ]}
      >
        {modalContent === "profile" && (
          <div>
            <p>This is where you would edit profile info.</p>
          </div>
        )}

        {modalContent === "personal" && (
          <div>
            <p>This is where you would edit personal information.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SettingsPage;
