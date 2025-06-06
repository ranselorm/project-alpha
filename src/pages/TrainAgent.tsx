import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Modal } from "antd";

type TabKey = "Train" | "second" | "longtext";

const hsitory = [
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
            {hsitory.map((item) => (
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
        <h2>Animal Examples</h2>
        <ul>
          {["🐶 Dog", "🐱 Cat", "🐰 Rabbit"].map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
        </ul>
      </section>
    ),
    longtext: (
      <div>
        <h2>Colors Section</h2>
        <p>
          This tab holds longer text describing colors. Use paragraphs,
          sections, or any structure you like:
        </p>
        {["Red", "Green", "Blue"].map((color) => (
          <section key={color} style={{ marginTop: "12px" }}>
            <p>
              <strong>{color}:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </section>
        ))}
      </div>
    ),
  };

  const tabNames: Record<TabKey, string> = {
    Train: "Train Agent",
    second: "Tab 2",
    longtext: "Tab 3",
  };

  return (
    <section>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <div className="container mx-auto">
        <div className="flex space-x-8 mb-2 border-b border-gray-300">
          {Object.keys(tabNames).map((key) => (
            <div
              key={key}
              className={`cursor-pointer py-2 ${
                activeKey === key
                  ? "border-b-2 border-main font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveKey(key as TabKey)}
            >
              {tabNames[key as TabKey]}
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
