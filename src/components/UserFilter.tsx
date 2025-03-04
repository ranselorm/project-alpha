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
    <div className="flex flex-wrap justify-between gap-4 px-4 py-6 bg-white rounded-md mb-4">
      <div className="flex-1">
        <input
          className="h-full focus:ring-0 focus:outline-none border border-gray-300 w-full px-4 rounded-full bg-grey text-sm py-3"
          placeholder="Search by name, email, phone"
        />
      </div>

      <Select>
        <SelectTrigger className="w-40 h-auto text-black cursor-pointer">
          <SelectValue placeholder="Sort By" className="text-black" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="age">Age</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        className="font-normal h-auto rounded cursor-pointer text-gray-500"
      >
        <Icon icon="carbon:reset" className="cursor-pointer mr-2" />
        Reset
      </Button>
    </div>
  );
};

export default UserFilter;
