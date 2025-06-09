import { useState } from "react";

import { toast } from "sonner";
import { Table, Input, Modal, Button, Select, Space } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const data = [
  {
    key: "1",
    name: "Ran Selorm",
    email: "ranselorm@gmail.com",
    role: "Admininstrator",
    date: "May 22, 2025",
  },
  {
    key: "1",
    name: "Gideon Bedzrah",
    email: "gbedzrah1@gmail.com",
    role: "Admininstrator",
    date: "June 09, 2025",
  },
  {
    key: "1",
    name: "Rose Sikatse",
    email: "rosesikatse@gmail.com",
    role: "Project Manager",
    date: "June 03, 2025",
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    render: (text: string) => (
      <>
        <p>{text}</p>
      </>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "ROLE",
    dataIndex: "role",
    key: "role",
    render: (role: string) => <div>{role}</div>,
  },
  {
    title: "DATE CREATED",
    dataIndex: "date",
    key: "date",
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
  };

  return (
    <section className="">
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
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>

      <Modal
        open={open}
        title="Assign Role"
        onOk={handleOk}
        onCancel={handleCancel}
        width={450}
        className=""
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="!border  !border-gray-400 !px-8 !text-gray-600 hover:border-main hover:text-white"
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            // loading={loading}
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
              // className="focus:outline-none focus:shadow-none focus:ring-0 !important"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-visible:ring-0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-visible:ring-0"
            />
          </div>

          <div className="mb-12">
            <label className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <Space wrap className="">
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
