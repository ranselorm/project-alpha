import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Table, Input, Modal, Button } from "antd";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAssignRole = () => {
    if (!email || !password || !role) {
      toast.error("All fields are required!");
      return;
    }
    toast.success(`Role "${role}" assigned to ${email} successfully!`);
  };

  return (
    <section className="">
      <div>
        <h3 className="font-semibold mb-4 text-gray-900">Billing history</h3>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>

      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="p-6 bg-white rounded-lg container mx-auto border border-gray-300">
          <h2 className="text-lg mb-4">Assign Role</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-visible:ring-0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-visible:ring-0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Select Role</label>
            <Select onValueChange={(value) => setRole(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="Viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-main transition-all duration-150 text-white cursor-pointer"
            onClick={handleAssignRole}
          >
            Assign Role
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default RBACForm;
