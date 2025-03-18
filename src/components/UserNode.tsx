import { Icon } from "@iconify/react/dist/iconify.js";

const UserNode = ({ user }: { user: any }) => {
  console.log(user?.recruits, "NODE");
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col items-center bg-white shadow-md p-2 rounded-lg w-16 h-16 text-center border relative z-10">
        {/* <img
          src={user.profilePic}
          alt={user.name}
          className="w-6 h-6 rounded-full border"
        /> */}
        <Icon icon={"tabler:user"} />
        <p className="text-[7px] font-medium mt-1">{user.name}</p>
      </div>

      {user?.recruits && user?.recruits.length > 0 && (
        <div className="relative flex flex-col items-center mt-3">
          <div className="relative flex justify-center items-center">
            {user?.recruits.length > 1 && (
              <div className="absolute top-[-4px] left-0 right-0 h-0.5 bg-gray-300"></div>
            )}

            <div className="flex space-x-6">
              {user?.recruits.map((invitee: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative"
                >
                  {user?.recruits.length > 1 && (
                    <div className="w-0.5 bg-gray-400 h-4 mb-1"></div>
                  )}

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
