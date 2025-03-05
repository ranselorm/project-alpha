const UserNode = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col items-center">
      {/* User Card */}
      <div className="flex flex-col items-center bg-white shadow-md p-1 rounded-lg w-24 text-center border">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-8 h-8 rounded-full border"
        />
        <p className="text-xs font-medium mt-1">{user.name.split(" ")[0]}</p>
      </div>

      {/* Invitees (Rendered Below) */}
      {user.invitees && user.invitees.length > 0 && (
        <div className="flex justify-center space-x-4 mt-2 relative">
          {/* Connector Line */}
          <div className="absolute top-0 left-1/2 w-0.5 bg-gray-400 h-3"></div>

          {user.invitees.map((invitee: any) => (
            <div key={invitee.id} className="flex flex-col items-center">
              <div className="w-0.5 bg-gray-400 h-3"></div>{" "}
              {/* Vertical Connector */}
              <UserNode user={invitee} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserNode;
