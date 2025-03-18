import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserFilter from "@/components/UserFilter";
import UsersTable from "@/components/UsersTable";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useInvite } from "@/hooks/useInvite";
import { useInvitedUsers } from "@/hooks/useInvitedUsers";
import InvitedUsersTable from "@/components/InvitedUsersTable";
// import { useInvitedUsers } from "@/hooks/useInvitedUsers"; // ✅ Fetch invited users

const Users = () => {
  const [phone, setPhone] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("current"); // ✅ Manage active tab

  const inviteMutation = useInvite();
  const { data: invitedUsers, isLoading: loadingInvitedUsers } =
    useInvitedUsers();

  const handleInvite = () => {
    if (!phone) return;

    inviteMutation.mutate(
      { phone },
      {
        onSuccess: () => {
          toast.success("Invitation sent successfully!", {
            duration: 3000,
          });
          setTimeout(() => setIsDialogOpen(false), 500); // ✅ Close only after success
        },
        onError: (error) => {
          console.error("Error sending invite:", error);
          toast.error("Failed to send invite. Try again.");
        },
      }
    );
  };

  return (
    <div className="p-4">
      <div className="container mx-auto">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "current"
                ? "border-b-2 border-main font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("current")}
          >
            Current Users
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "invited"
                ? "border-b-2 border-main font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("invited")}
          >
            Invited Users
          </button>
        </div>

        {/* Invite User Button */}
        <div className="flex justify-between items-center my-5">
          <p className="text-lg font-semibold">All users</p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="cursor-pointer bg-main text-white flex items-center gap-x-2 rounded-md hover:bg-teal-700 transition">
                <Icon icon="material-symbols:add-rounded" />
                Invite user
              </Button>
            </DialogTrigger>
            <DialogContent className="p-6 max-w-sm">
              <DialogTitle>Invite a User</DialogTitle>
              <p className="text-sm text-gray-500">
                Enter the user's phone number below:
              </p>

              <Input
                type="tel"
                placeholder="+233 55 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-3 focus-visible:ring-0"
              />

              <DialogFooter>
                <Button
                  onClick={handleInvite}
                  disabled={!phone || inviteMutation.isPending}
                  className="bg-main cursor-pointer hover:bg-teal-700 text-white mt-4"
                >
                  {inviteMutation.isPending
                    ? "Please wait..."
                    : "Send Invitation"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tab Content */}
        {activeTab === "current" ? (
          <>
            <UserFilter />
            <UsersTable />
          </>
        ) : (
          <div className="mt-5">
            <h2 className="text-lg font-semibold">Invited Users</h2>
            <div className="mt-5">
              <h2 className="text-lg font-semibold">Invited Users</h2>
              {loadingInvitedUsers ? (
                <p>Loading invited users...</p>
              ) : (
                <InvitedUsersTable invitedUsers={invitedUsers ?? []} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
