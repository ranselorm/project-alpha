import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const UserFilter = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-md mb-4">
      <div className="flex-1">
        <input
          className="h-full focus:ring-0 focus:outline-none text-sm border border-gray-300 w-full px-4 rounded-md"
          placeholder="Search by name, email, phone"
        />
      </div>

      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter by Age" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="18-25">18-25</SelectItem>
          <SelectItem value="26-35">26-35</SelectItem>
          <SelectItem value="36-45">36-45</SelectItem>
          <SelectItem value="46+">46+</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="age">Age</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="font-normal">
        <Icon icon="mdi:refresh" className="mr-2" />
        Reset
      </Button>
    </div>
  );
};

export default UserFilter;
