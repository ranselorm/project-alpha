import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Modal, Input, Form, Space } from "antd";

type TabKey = "Train" | "second" | "longtext";
type ModalTabKey = "website" | "pdf" | "word" | "text";

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
  const [modalActiveKey, setModalActiveKey] = useState<ModalTabKey>("website");

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

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
    website: "WEBSITE",
    pdf: "PDF",
    word: "WORD",
    text: "TEXT",
  };

  const modalDataForTabs: Record<ModalTabKey, React.ReactNode> = {
    website: (
      <div>
        <h2 className="font-medium text-base mb-4">Paste or type in the URL</h2>
        <Form name="urlsForm" initialValues={{ urls: [""] }}>
          <Form.List
            name="urls"
            initialValue={[""]}
            rules={[
              {
                validator: async (_, urls) => {
                  if (!urls || urls.length < 1) {
                    return Promise.reject(
                      new Error("At least one URL is required")
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "url"]}
                      rules={[
                        { required: true, message: "Please input a URL" },
                      ]}
                    >
                      <Input
                        placeholder="Enter URL"
                        addonBefore="https://"
                        style={{ width: "620px" }}
                      />
                    </Form.Item>
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-base font-bold mr-3">
                      {/* <Icon
                        icon="material-symbols:remove-circle-outline"
                        className="text-black z-20"
                        onClick={() => remove(name)}
                      /> */}
                      -
                    </div>

                    {/* <Button
                      danger
                      icon={
                        <Icon
                          icon="material-symbols:remove-circle-outline"
                          className="text-black"
                          style={{ color: "black" }}
                        />
                      }
                      onClick={() => remove(name)} // Remove button to delete an input field
                    /> */}
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()} // Add button to add new input fields
                    icon={<Icon icon="material-symbols:add-rounded" />}
                  >
                    Add URL
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    ),
    pdf: (
      <section>
        <h2>Modal Tab 2 Section</h2>
        <p>Content for Modal Tab 2</p>
      </section>
    ),
    word: (
      <div>
        <h2>Modal Tab 3 Section</h2>
        <p>Content for Modal Tab 3</p>
      </div>
    ),
    text: (
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
        width={700}
      >
        {/* Tabs inside the Modal */}
        <div className="flex space-x-8 border-b border-gray-300 mt-5 mb-8">
          {Object.keys(modalTabs).map((key) => (
            <div
              key={key}
              className={`cursor-pointer py-2 px-4 ${
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

        {/* Display content of the active tab in the modal */}
        <div>{modalDataForTabs[modalActiveKey]}</div>
      </Modal>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex space-x-8 mb-2 border-b border-gray-300">
          {Object.keys(dataForTabs).map((key) => (
            <div
              key={key}
              className={`cursor-pointer py-2 px-4 ${
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
