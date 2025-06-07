import React, { useState, useCallback, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Modal, Input, Form, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useDropzone } from "react-dropzone";

const { TextArea } = Input;

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

const BOX_HEIGHT = "h-[260px]"; // fixed height for each upload box

const TrainAgent: React.FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>("Train");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveKey, setModalActiveKey] = useState<ModalTabKey>("website");
  const [file1, setFile1] = useState<File | null>(null);
  const [file1PreviewUrl, setFile1PreviewUrl] = useState<string>("");
  const [file2, setFile2] = useState<File | null>(null);
  const [file2PreviewUrl, setFile2PreviewUrl] = useState<string>("");

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const onDrop1 = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile1(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getRootProps1,
    getInputProps: getInputProps1,
    isDragActive: isDragActive1,
    fileRejections: fileRejections1,
  } = useDropzone({
    onDrop: onDrop1,
    accept: {
      "application/pdf": [".pdf"], // Accept PDFs
      "application/msword": [".doc", ".docx"], // Accept Word files
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ], // Accept Excel files
      "text/plain": [".txt"], // Accept text files
    },
    multiple: false,
    maxFiles: 1,
  });

  useEffect(() => {
    // build / revoke object URL for preview
    if (!file1) {
      URL.revokeObjectURL(file1PreviewUrl);
      setFile1PreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file1);
    setFile1PreviewUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file1]);

  // Dropzone #2 (Upload word document)
  const onDrop2 = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile2(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2,
    fileRejections: fileRejections2,
  } = useDropzone({
    onDrop: onDrop2,
    accept: {
      "application/pdf": [".pdf"], // Accept PDFs
      "application/msword": [".doc", ".docx"], // Accept Word files
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ], // Accept Excel files
      "text/plain": [".txt"], // Accept text files
    },
    multiple: false,
    maxFiles: 1,
  });

  useEffect(() => {
    // Build / revoke object URL for preview
    if (!file2) {
      URL.revokeObjectURL(file2PreviewUrl);
      setFile2PreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file2);
    setFile2PreviewUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file2]);

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
        <Form name="urlsForm">
          <Form.List
            name="urls"
            initialValue={[""]} // Initialize with one input field
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
                {/* Base URL */}
                <Form.Item
                  name="baseUrl"
                  rules={[
                    { required: true, message: "Please input a base URL" },
                  ]}
                >
                  <Input
                    addonBefore="https://"
                    placeholder="example.com"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                {/* Pages */}
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "path"]}
                      rules={[
                        { required: true, message: "Please input a page path" },
                      ]}
                    >
                      <Input
                        addonBefore="/"
                        placeholder="about"
                        style={{ width: "300px" }}
                      />
                    </Form.Item>
                    {/* Remove button only for page URLs */}
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(name)}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add Page
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
        {file1 ? (
          <div
            className={`bg-gray-100 border border-gray-400 rounded-md ${BOX_HEIGHT} flex flex-col`}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
              <p className="text-sm text-gray-700 truncate">{file1.name}</p>
              <Icon
                icon="mdi:close-circle"
                className="text-xl text-red-600 cursor-pointer"
                onClick={() => setFile1(null)}
              />
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src={file1PreviewUrl}
                title="Preview PDF"
                className="w-full h-full"
              />
            </div>
          </div>
        ) : (
          <div
            {...getRootProps1()}
            className={`border border-gray-400 rounded-md ${BOX_HEIGHT} border-dashed bg-gray-100 flex items-center justify-center flex-col gap-2 cursor-pointer ${
              isDragActive1 ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            <input {...getInputProps1()} />
            <Icon
              icon="solar:upload-broken"
              className="text-gray-600 text-[40px]"
            />
            <p className="font-semibold mt-4 text-gray-700 text-center">
              {isDragActive1 ? "Drop PDF here …" : "Drag & drop files here or "}
              <span className="text-main underline">browse</span>
            </p>
          </div>
        )}

        {/* Show rejection errors only if no file is chosen */}
        {!file1 && fileRejections1.length > 0 && (
          <ul className="mt-2">
            {fileRejections1.map(({ file, errors }) => (
              <li key={file.path} className="text-sm text-red-600">
                {file.path} - {(file.size / 1024).toFixed(1)} KB
                <ul className="list-disc list-inside">
                  {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    ),
    word: (
      <section>
        {file2 ? (
          <div
            className={`bg-gray-100 border border-gray-400 rounded-md ${BOX_HEIGHT} flex flex-col`}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
              <p className="text-sm text-gray-700 truncate">{file2.name}</p>
              <Icon
                icon="mdi:close-circle"
                className="text-xl text-red-600 cursor-pointer"
                onClick={() => setFile2(null)}
              />
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src={file2PreviewUrl}
                title="Preview PDF"
                className="w-full h-full"
              />
            </div>
          </div>
        ) : (
          /* Dropzone area when no file is chosen */
          <div
            {...getRootProps2()}
            className={`border border-gray-400 rounded-md ${BOX_HEIGHT} border-dashed bg-gray-100 flex items-center justify-center flex-col gap-2 cursor-pointer ${
              isDragActive2 ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            <input {...getInputProps2()} />
            <Icon
              icon="solar:upload-broken"
              className="text-gray-600 text-[40px]"
            />
            <p className="font-semibold mt-4 text-gray-700 text-center">
              {isDragActive2
                ? "Drop Word (Docx) here …"
                : "Drag & drop files here or "}
              <span className="text-main underline">browse</span>
            </p>
          </div>
        )}

        {!file2 && fileRejections2.length > 0 && (
          <ul className="mt-2">
            {fileRejections2.map(({ file, errors }) => (
              <li key={file.path} className="text-sm text-red-600">
                {file.path} - {(file.size / 1024).toFixed(1)} KB
                <ul className="list-disc list-inside">
                  {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    ),
    text: (
      <section>
        <TextArea
          rows={4}
          placeholder="maxLength is 6"
          maxLength={6}
          className="!focus:outline-none !focus:border-red-400 !shadow-none !bg-gray-100 !rounded-md !h-[200px] !resize-none !mb-4 !p-4"
        />
      </section>
    ),
  };

  return (
    <section>
      {/* Modal */}
      <Modal
        title="What would you like to train?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="train"
            type="primary"
            onClick={handleOk}
            className="!bg-main !px-8"
          >
            Train
          </Button>,
        ]}
      >
        {/* Modal Tabs */}
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

        {/* Modal content */}
        {modalDataForTabs[modalActiveKey]}
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
