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
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useInvite } from "@/hooks/useInvite";

const Users = () => {
  const [phone, setPhone] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inviteMutation = useInvite();

  const handleInvite = () => {
    if (!phone) return;

    inviteMutation.mutate(
      { phone },
      {
        onSuccess: () => {
          toast.success("Invitation sent successfully!", {
            duration: 3000,
          });
          setIsDialogOpen(false); // ✅ Close only after success
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
                {/* <DialogClose asChild> */}
                <Button
                  onClick={handleInvite}
                  disabled={!phone}
                  className="bg-main cursor-pointer hover:bg-teal-700 text-white mt-4"
                >
                  {inviteMutation.isPending ? "Please wait" : "Send Invitation"}
                </Button>
                {/* </DialogClose> */}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <UserFilter />
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
