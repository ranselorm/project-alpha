import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RBACForm from "@/components/Rbac";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Modal, Table } from "antd";
import { useDropzone } from "react-dropzone";

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
        <p style={{ color: "black", fontWeight: 600 }}>{text}</p>
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
      <div
        style={{
          backgroundColor: "#d9f7be",
          color: "#389e0d",
          padding: "4px 8px",
          borderRadius: 50,
          fontSize: 12,
          display: "inline-block",
          minWidth: 40,
          textAlign: "center",
        }}
      >
        {status}
      </div>
    ),
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "ACTION",
    key: "action",
    render: () => <a style={{ color: "#000" }}>View invoice →</a>,
  },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account Information");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<
    "profile" | "personal" | "billing" | "none"
  >("none");

  // State for each uploaded PDF + preview URL
  const [file1, setFile1] = useState<File | null>(null);
  const [file1PreviewUrl, setFile1PreviewUrl] = useState<string>("");

  const [file2, setFile2] = useState<File | null>(null);
  const [file2PreviewUrl, setFile2PreviewUrl] = useState<string>("");

  const [file3, setFile3] = useState<File | null>(null);
  const [file3PreviewUrl, setFile3PreviewUrl] = useState<string>("");

  // Dropzone #1 (Upload Document 1)
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
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    maxFiles: 1,
  });

  useEffect(() => {
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

  // Dropzone #2 (Upload Document 2)
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
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    maxFiles: 1,
  });

  useEffect(() => {
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

  // Dropzone #3 (Upload Document 3)
  const onDrop3 = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile3(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getRootProps3,
    getInputProps: getInputProps3,
    isDragActive: isDragActive3,
    fileRejections: fileRejections3,
  } = useDropzone({
    onDrop: onDrop3,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    maxFiles: 1,
  });

  useEffect(() => {
    if (!file3) {
      URL.revokeObjectURL(file3PreviewUrl);
      setFile3PreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file3);
    setFile3PreviewUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file3]);

  // Modal
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
          {/* ――― ACCOUNT INFORMATION ――― */}
          {activeTab === "Account Information" && (
            <>
              {/* Profile Header */}
              <div className="flex items-center justify-between space-x-4 p-4 bg-white rounded-md">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5e55243ba20fd3781edfa8ef/1730910582143-I3Y15WVRFS2QIQXU62OM/Atikur+Rahman+UK+Passport+Photo.jpg?format=500w"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Selorm</h2>
                    <p className="text-sm text-gray-500">
                      randyselorm@gmail.com
                    </p>
                  </div>
                </div>
                <Icon
                  icon="cuida:edit-outline"
                  className="text-2xl text-main cursor-pointer"
                  onClick={() => openModal("profile")}
                />
              </div>

              {/* Business Information */}
              <div className="mt-6 border bg-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Business Information</h3>
                  <Icon
                    icon="cuida:edit-outline"
                    className="text-2xl text-main cursor-pointer"
                    onClick={() => openModal("personal")}
                  />
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
                  <div>
                    <p className="mb-1 font-medium text-gray-400 text-sm">
                      Business Name
                    </p>
                    <p>Berth Global</p>
                  </div>

                  <div>
                    <p className="mb-1 font-medium text-gray-400 text-sm">
                      Email Address
                    </p>
                    <p>contact@berthglobal.com</p>
                  </div>

                  <div>
                    <p className="mb-1 font-medium text-sm text-gray-400">
                      Phone
                    </p>
                    <p>+233 30 1234</p>
                  </div>

                  <div className="col-span-2">
                    <p className="mb-1 font-medium text-gray-400">Bio</p>
                    <p>This is the information about the business</p>
                  </div>
                </div>

                {/* ――― Upload Document 1 ――― */}
                <div className="mt-8">
                  <p className="mb-1 font-medium text-gray-400 text-sm">
                    Upload Document 1
                  </p>

                  {file1 ? (
                    <>
                      {/* Filename + remove icon */}
                      <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-400 rounded-md">
                        <p className="text-sm text-gray-700">{file1.name}</p>
                        <Icon
                          icon="mdi:close-circle"
                          className="text-xl text-red-600 cursor-pointer"
                          onClick={() => setFile1(null)}
                        />
                      </div>

                      {/* Inline PDF preview */}
                      <div className="mt-4 border border-gray-300 rounded-md overflow-hidden">
                        <iframe
                          src={file1PreviewUrl}
                          title="Preview PDF"
                          className="w-full"
                          style={{ height: "400px" }}
                        />
                      </div>
                    </>
                  ) : (
                    // Dropzone area when no file is chosen
                    <div
                      {...getRootProps1()}
                      className={`border border-gray-400 rounded-md w-full py-12 border-dashed text-center bg-gray-100 flex items-center justify-center flex-col gap-2 cursor-pointer ${
                        isDragActive1 ? "bg-gray-200" : "bg-gray-100"
                      }`}
                    >
                      <input {...getInputProps1()} />
                      <Icon
                        icon="mdi:files"
                        className="text-gray-600 text-[40px]"
                      />
                      <p className="font-semibold mt-4 text-gray-700">
                        {isDragActive1
                          ? "Drop PDF here …"
                          : "Drag & drop files here or click to browse"}
                      </p>
                    </div>
                  )}

                  {/* Show rejection errors for Document 1 */}
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
                </div>

                {/* ――― Upload Document 2 ――― */}
                <div className="mt-8">
                  <p className="mb-1 font-medium text-gray-400 text-sm">
                    Upload Document 2
                  </p>

                  {file2 ? (
                    <>
                      {/* Filename + remove icon */}
                      <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-400 rounded-md">
                        <p className="text-sm text-gray-700">{file2.name}</p>
                        <Icon
                          icon="mdi:close-circle"
                          className="text-xl text-red-600 cursor-pointer"
                          onClick={() => setFile2(null)}
                        />
                      </div>

                      {/* Inline PDF preview */}
                      <div className="mt-4 border border-gray-300 rounded-md overflow-hidden">
                        <iframe
                          src={file2PreviewUrl}
                          title="Preview PDF"
                          className="w-full"
                          style={{ height: "400px" }}
                        />
                      </div>
                    </>
                  ) : (
                    // Dropzone area when no file is chosen
                    <div
                      {...getRootProps2()}
                      className={`border border-gray-400 rounded-md w-full py-12 border-dashed text-center bg-gray-100 flex items-center justify-center flex-col gap-2 cursor-pointer ${
                        isDragActive2 ? "bg-gray-200" : "bg-gray-100"
                      }`}
                    >
                      <input {...getInputProps2()} />
                      <Icon
                        icon="mdi:files"
                        className="text-gray-600 text-[40px]"
                      />
                      <p className="font-semibold mt-4 text-gray-700">
                        {isDragActive2
                          ? "Drop PDF here …"
                          : "Drag & drop files here or click to browse"}
                      </p>
                    </div>
                  )}

                  {/* Show rejection errors for Document 2 */}
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
                </div>

                {/* ――― Upload Document 3 ――― */}
                <div className="mt-8">
                  <p className="mb-1 font-medium text-gray-400 text-sm">
                    Upload Document 3
                  </p>

                  {file3 ? (
                    <>
                      {/* Filename + remove icon */}
                      <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-400 rounded-md ">
                        <p className="text-sm text-gray-700">{file3.name}</p>
                        <Icon
                          icon="mdi:close-circle"
                          className="text-xl text-red-600 cursor-pointer"
                          onClick={() => setFile3(null)}
                        />
                      </div>

                      {/* Inline PDF preview */}
                      <div className="mt-4 border border-gray-300 rounded-md overflow-hidden ">
                        <iframe
                          src={file3PreviewUrl}
                          title="Preview PDF"
                          className="w-full"
                          style={{ height: "400px" }}
                        />
                      </div>
                    </>
                  ) : (
                    // Dropzone area when no file is chosen
                    <div
                      {...getRootProps3()}
                      className={`border border-gray-400 rounded-md w-full py-12 border-dashed text-center bg-gray-100 flex items-center justify-center flex-col gap-2 cursor-pointer ${
                        isDragActive3 ? "bg-gray-200" : "bg-gray-100"
                      }`}
                    >
                      <input {...getInputProps3()} />
                      <Icon
                        icon="mdi:files"
                        className="text-gray-600 text-[40px]"
                      />
                      <p className="font-semibold mt-4 text-gray-700">
                        {isDragActive3
                          ? "Drop PDF here …"
                          : "Drag & drop files here or click to browse"}
                      </p>
                    </div>
                  )}

                  {/* Show rejection errors for Document 3 */}
                  {!file3 && fileRejections3.length > 0 && (
                    <ul className="mt-2">
                      {fileRejections3.map(({ file, errors }) => (
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
                </div>
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
                    <p className="mb-1 font-medium text-gray-400">Role</p>
                    <p>Admin</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ――― BILLING INFORMATION ――― */}
          {activeTab === "Billing Information" && (
            <div className="container mx-auto">
              <h2 className="font-semibold mb-4 text-gray-900">
                Billing details
              </h2>

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

          {/* ――― ROLES ――― */}
          {activeTab === "Roles" && <RBACForm />}

          {/* ――― TRAIN AGENT ――― */}
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
