import { useState } from "react";
import { toast } from "sonner";
import { Table, Input, Modal, Button, Select, Space, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

const data = [
  {
    key: "1",
    name: "Ran Selorm",
    email: "ranselorm@gmail.com",
    role: "Administrator",
    date: "May 22, 2025",
  },
  {
    key: "2",
    name: "Gideon Bedzrah",
    email: "gbedzrah1@gmail.com",
    role: "Administrator",
    date: "June 09, 2025",
  },
  {
    key: "3",
    name: "Rose Sikatse",
    email: "rosesikatse@gmail.com",
    role: "Project Manager",
    date: "June 03, 2025",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Created At",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_: any) => {
      const items = [
        { key: "remove", label: "Remove" },
        { key: "suspend", label: "Suspend" },
        { key: "delete", label: "Delete" },
      ];
      return (
        <Dropdown
          menu={{ items }}
          className="!w-24 !rounded-full !px-1 !py-4 !border !border-main"
          trigger={["click"]}
        >
          <Button
            size="small"
            className="!flex !items-center group !hover:text-main !focus:text-main !active:text-main"
            style={{ color: "inherit" }}
          >
            <span className="group-hover:text-main group-focus:text-main group-active:text-main">
              Actions
            </span>
            <Icon
              icon="ri:arrow-down-s-line"
              className="group-hover:text-main group-focus:text-main group-active:text-main"
            />
          </Button>
        </Dropdown>
      );
    },
  },
];

const RBACForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    if (!name || !email || !password || !role) {
      toast.error("All fields are required!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);

    toast.success(`Role "${role}" assigned to ${email} successfully!`);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setRole(value);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Users</h3>
        <Button
          className="!bg-main !text-white !border-none !px-8"
          onClick={() => setOpen(true)}
        >
          <Icon icon="material-symbols:add-rounded" className="text-white" />
          Add user
        </Button>
      </div>

      <Table columns={columns} dataSource={data} pagination={false} />

      <Modal
        open={open}
        title="Assign Role"
        onOk={handleOk}
        onCancel={handleCancel}
        width={450}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="!border !border-gray-400 !px-8 !text-gray-600 hover:border-main hover:text-white"
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            onClick={handleOk}
            className="!bg-main !text-white !border-none !px-8"
            style={{ boxShadow: "none" }}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="bg-white rounded-lg container mx-auto pb-5">
          <div className="my-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              type="text"
              placeholder="Ran Selorm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-12">
            <label className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <Space wrap>
              <Select
                defaultValue="lucy"
                style={{ width: "150px" }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Space>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default RBACForm;
