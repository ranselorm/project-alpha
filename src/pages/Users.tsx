import { Button } from "@/components/ui/button";
import UserFilter from "@/components/UserFilter";
import UsersTable from "@/components/UsersTable";
import { Icon } from "@iconify/react/dist/iconify.js";

const Users = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-5">
          <p className="">All users</p>
          <Button className="cursor-pointer bg-main text-white flex items-center gap-x-2 rounded-md hover:bg-teal-700 transition">
            <Icon icon="material-symbols:add-rounded" />
            Invite user
          </Button>
        </div>
        <UserFilter />
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
