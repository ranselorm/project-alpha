import { useState } from "react";
import { Button } from "@/components/ui/button";
import RBACForm from "@/components/Rbac";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Modal, Table } from "antd";

const data = [
  {
    key: "1",
    invoice: "Invoice #005",
    plan: "Basic Plan",
    amount: "11 USD",
    status: "Paid",
    date: "1 December 2020",
  },
  {
    key: "2",
    invoice: "Invoice #004",
    plan: "Basic Plan",
    amount: "11 USD",
    status: "Paid",
    date: "1 November 2020",
  },
  {
    key: "3",
    invoice: "Invoice #003",
    plan: "Basic Plan",
    amount: "11 USD",
    status: "Paid",
    date: "1 October 2020",
  },
  {
    key: "4",
    invoice: "Invoice #002",
    plan: "Basic Plan",
    amount: "11 USD",
    status: "Paid",
    date: "1 September 2020",
  },
  {
    key: "5",
    invoice: "Invoice #001",
    plan: "Basic Plan",
    amount: "11 USD",
    status: "Paid",
    date: "1 August 2020",
  },
];

const columns = [
  {
    title: "INVOICE",
    dataIndex: "invoice",
    key: "invoice",
    render: (text: string, record: any) => (
      <>
        <a>{text}</a>
        <div style={{ fontSize: 12, color: "#888" }}>{record.plan}</div>
      </>
    ),
  },
  {
    title: "AMOUNT",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span
        style={{
          backgroundColor: "#d9f7be",
          color: "#389e0d",
          padding: "0 8px",
          borderRadius: 8,
          fontSize: 12,
          display: "inline-block",
          minWidth: 40,
          textAlign: "center",
        }}
      >
        {status}
      </span>
    ),
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    render: () => <a style={{ color: "#722ed1" }}>View invoice →</a>,
  },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account Information");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<
    "profile" | "personal" | "billing" | "none"
  >("none");

  const openModal = (content: "profile" | "personal" | "billing") => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("none");
  };

  return (
    <div>
      <div className="rounded-lg overflow-hidden container mx-auto">
        {/* Tabs */}
        <div className="flex space-x-6 pb-3">
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
        <div className="py-4">
          {activeTab === "Account Information" && (
            <>
              {/* Profile Header */}
              <div className="flex items-center justify-between space-x-4 p-4 bg-white rounded-md">
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
              <div className="mt-6 border bg-white p-4 rounded-md">
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
                    <p>Randy</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-gray-400">Last Name</p>
                    <p>Selorm</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-gray-400 text-sm">
                      Email Address
                    </p>
                    <p>randy@gmail.com</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-sm text-gray-400">
                      Phone
                    </p>
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
            <div className="container mx-auto">
              <h2 className="text-xl font-semibold mb-6">Billing details</h2>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex-1 min-w-[280px] bg-white p-6 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold flex items-center gap-2">
                      Explorer plan
                      <span className="text-xs border border-main text-main px-2 py-0.5 rounded-full font-medium">
                        Monthly
                      </span>
                    </div>
                    <div className="text-3xl font-bold">$100</div>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">per month</div>
                  <div className="text-xs mb-1">3 out of 5 users</div>
                  <div className="w-full h-2 rounded-full bg-gray-200 mb-2">
                    <div
                      className="h-2 rounded-full bg-main"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div className="flex justify-end mt-5">
                    <button className="text-xs text-main hover:text-black font-semibold cursor-pointer transition-all duration-150">
                      Upgrade plan &rarr;
                    </button>
                  </div>
                </div>

                <div className="flex-1 min-w-[280px] p-6 bg-white rounded-md">
                  <div className="font-semibold mb-2">Payment method</div>
                  <div className="text-xs text-gray-400 mb-4">
                    You can edit your card details here.
                  </div>
                  <div className="flex items-center gap-4 border border-gray-200 rounded-md p-3">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-sm">
                      VISA
                    </div>
                    <div>
                      <div className="text-gray-800">
                        Visa ending in ****123
                      </div>
                      <div className="text-xs text-gray-400">
                        Expiry 06/2028
                      </div>
                    </div>
                    <Icon
                      icon="cuida:edit-outline"
                      className="text-2xl text-main cursor-pointer ml-auto"
                      onClick={() => openModal("billing")}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-900">
                  Billing history
                </h3>
                <Table columns={columns} dataSource={data} pagination={false} />
              </div>
            </div>
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
            : modalContent === "billing"
            ? "Edit Billing Information"
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

        {modalContent === "billing" && (
          <div>
            <p>This is where you would edit billing information.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SettingsPage;
