import UserFilter from "@/components/UserFilter";
import UsersTable from "@/components/UsersTable";

const Users = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <p className="mb-4">All users</p>
        <UserFilter />
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
