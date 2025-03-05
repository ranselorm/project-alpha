const UserNode = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col items-center">
      {/* User Card */}
      <div className="flex flex-col items-center bg-white shadow-md p-3 rounded-lg w-32">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-12 h-12 rounded-full border"
        />
        <p className="text-sm font-medium mt-2">{user.name}</p>
      </div>

      {/* Render Children (If Any) */}
      {user.children && user.children.length > 0 && (
        <div className="flex space-x-6 mt-4">
          {user.children.map((child: any) => (
            <div key={child.id} className="flex flex-col items-center">
              <div className="w-0.5 bg-gray-400 h-6"></div>{" "}
              {/* Vertical Connector Line */}
              <UserNode user={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserNode;
