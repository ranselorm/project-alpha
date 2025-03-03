import UsersTable from "@/components/UsersTable";

const Users = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <p>All users</p>
        <div className="bg-white">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;
