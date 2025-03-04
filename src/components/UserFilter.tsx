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
          className="h-full focus:ring-0 focus:outline-none border border-gray-300 w-full px-4 rounded-full bg-grey text-xs py-3"
          placeholder="Search by name, email, phone"
        />
      </div>

      {/* <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter by Age" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="18-25">18-25</SelectItem>
          <SelectItem value="26-35">26-35</SelectItem>
          <SelectItem value="36-45">36-45</SelectItem>
          <SelectItem value="46+">46+</SelectItem>
        </SelectContent>
      </Select> */}

      <Select>
        <SelectTrigger className="w-56 rounded-full bg-grey text-xs h-auto">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="age">Age</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="font-normal h-auto rounded-full">
        <Icon
          icon="material-symbols-light:search-rounded"
          className="cursor-pointer mr-2"
        />
        Search
      </Button>
    </div>
  );
};

export default UserFilter;
