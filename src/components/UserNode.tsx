const UserNode = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col items-center relative">
      {/* Parent User */}
      <div className="flex flex-col items-center bg-white shadow-md p-2 rounded-lg w-16 h-16 text-center border relative z-10">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-6 h-6 rounded-full border"
        />
        <p className="text-[7px] font-medium mt-1">{user.name}</p>
      </div>

      {/* Invitees - Displayed in a Row Below */}
      {user.invitees && user.invitees.length > 0 && (
        <div className="relative flex flex-col items-center mt-3">
          {/* Vertical Line - Stops Before the Box */}
          <div className="absolute top-[-8px] left-1/2 w-0.5 bg-gray-400 h-4"></div>

          {/* Horizontal Connector Line (Above the Nodes) */}
          <div className="relative flex justify-center items-center">
            {user.invitees.length > 1 && (
              <div className="absolute top-[-4px] left-0 right-0 h-0.5 bg-gray-400"></div>
            )}

            <div className="flex space-x-6">
              {user.invitees.map((invitee: any, index: number) => (
                <div
                  key={invitee.id}
                  className="flex flex-col items-center relative"
                >
                  {/* Vertical Connector Stopping Short of the Box */}
                  <div className="w-0.5 bg-gray-400 h-4 mb-1"></div>

                  {/* Recursive Render of Invitees */}
                  <UserNode user={invitee} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNode;
