import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Modal } from "antd";

type TabKey = "Train" | "second" | "longtext";
type ModalTabKey = "modalTrain" | "modalSecond" | "modalLongtext";

const history = [
  {
    id: 1,
    title: "Company Profile",
    description: "This is a sample description",
    type: "PDF",
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    title: "Company Profile",
    description: "This is a sample description",
    type: "Website",
    timeAgo: "2 days ago",
  },
  {
    id: 3,
    title: "Company Profile",
    description: "This is a sample description",
    type: "Website",
    timeAgo: "2 days ago",
  },
  {
    id: 4,
    title: "Company Profile",
    description: "This is a sample description",
    type: "Website",
    timeAgo: "2 days ago",
  },
];

const TrainAgent: React.FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>("Train");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveKey, setModalActiveKey] =
    useState<ModalTabKey>("modalTrain");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataForTabs: Record<TabKey, React.ReactNode> = {
    Train: (
      <div className="flex items-center space-x-4">
        <div className="bg-white w-[300px] h-[70vh] rounded-md overflow-y-auto border border-gray-200">
          <div className="flex flex-col space-y-2 px-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-50"
              >
                <span className="text-[10px] font-semibold uppercase">
                  {item.type}
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <span className="text-xs text-gray-400 justify-end flex">
                  {item.timeAgo}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white flex-grow h-[70vh] rounded-md border border-gray-200">
          2
        </div>
      </div>
    ),
    second: (
      <section>
        <h2>Tab 2 Section</h2>
        <p>Content for tab 2</p>
      </section>
    ),
    longtext: (
      <div>
        <h2>Tab 3 Section</h2>
        <p>Content for tab 3</p>
      </div>
    ),
  };

  const modalTabs: Record<ModalTabKey, string> = {
    modalTrain: "Modal Train",
    modalSecond: "Modal Tab 2",
    modalLongtext: "Modal Tab 3",
  };

  const modalDataForTabs: Record<ModalTabKey, React.ReactNode> = {
    modalTrain: (
      <div>
        <h2>Modal Train Section</h2>
        <p>Content for Modal Train</p>
      </div>
    ),
    modalSecond: (
      <section>
        <h2>Modal Tab 2 Section</h2>
        <p>Content for Modal Tab 2</p>
      </section>
    ),
    modalLongtext: (
      <div>
        <h2>Modal Tab 3 Section</h2>
        <p>Content for Modal Tab 3</p>
      </div>
    ),
  };

  return (
    <section>
      {/* Modal */}
      <Modal
        title="What would you like to train?"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* Tabs inside the Modal */}
        <div className="flex space-x-8 mb-4 border-b border-gray-300">
          {Object.keys(modalTabs).map((key) => (
            <div
              key={key}
              className={`cursor-pointer py-2 ${
                modalActiveKey === key
                  ? "border-b-2 border-main font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setModalActiveKey(key as ModalTabKey)}
            >
              {modalTabs[key as ModalTabKey]}
            </div>
          ))}
        </div>

        <div>{modalDataForTabs[modalActiveKey]}</div>
      </Modal>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex space-x-8 mb-2 border-b border-gray-300">
          {Object.keys(dataForTabs).map((key) => (
            <div
              key={key}
              className={`cursor-pointer py-2 ${
                activeKey === key
                  ? "border-b-2 border-main font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveKey(key as TabKey)}
            >
              {key === "Train" && "Train Agent"}
              {key === "second" && "Tab 2"}
              {key === "longtext" && "Tab 3"}
            </div>
          ))}
        </div>
        <div className="flex justify-end mb-2">
          <Button
            className="!bg-main !text-white !border-none"
            onClick={showModal}
          >
            <Icon icon="material-symbols:add-rounded" className="text-white" />
            Add
          </Button>
        </div>
        <div>{dataForTabs[activeKey]}</div>
      </div>
    </section>
  );
};

export default TrainAgent;
