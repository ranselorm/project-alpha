import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const RBACForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleAssignRole = () => {
    if (!email || !password || !role) {
      toast.error("All fields are required!");
      return;
    }

    toast.success(`Role "${role}" assigned to ${email} successfully!`);
  };

  return (
    <div className="p-6 bg-white rounded-lg max-w-md mx-auto border border-gray-300">
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
  );
};

export default RBACForm;
