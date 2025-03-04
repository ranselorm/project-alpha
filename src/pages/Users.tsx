import UsersTable from "@/components/UsersTable";

const Users = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <p className="mb-4">All users</p>
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
