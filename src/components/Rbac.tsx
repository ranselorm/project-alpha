import { useState } from "react";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Table, Input, Modal, Button, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

const RBACForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
    if (!name || !email || !password || !role) {
      toast.error("All fields are required!");
      return;
    }
    toast.success(`Role "${role}" assigned to ${email} successfully!`);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // const handleAssignRole = () => {
  //   if (!email || !password || !role) {
  //     toast.error("All fields are required!");
  //     return;
  //   }
  //   toast.success(`Role "${role}" assigned to ${email} successfully!`);
  // };

  return (
    <section className="">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Users</h3>
        <Button
          className="!bg-main !text-white"
          onClick={() => setOpen(true)}
          icon={<PlusOutlined size={4} className="!text-sm" />}
        >
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
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            // loading={loading}
            onClick={handleOk}
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
