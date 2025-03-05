const UserNode = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Parent User */}
      <div className="flex flex-col items-center bg-white shadow-md p-2 rounded-lg w-28 text-center border">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-12 h-12 rounded-full border"
        />
        <p className="text-xs font-medium mt-1">{user.name}</p>
      </div>

      {/* Invitees - Displayed in a Row Below */}
      {user.invitees && user.invitees.length > 0 && (
        <div className="relative flex justify-center mt-3">
          {/* Connecting Line from Parent */}
          <div className="absolute top-0 left-1/2 w-0.5 bg-gray-400 h-4"></div>

          <div className="flex space-x-6">
            {user.invitees.map((invitee: any) => (
              <div key={invitee.id} className="flex flex-col items-center">
                {/* Connecting Line */}
                <div className="w-0.5 bg-gray-400 h-4"></div>
                <UserNode user={invitee} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNode;
