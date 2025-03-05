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

const Users = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInvite = () => {
    if (!phoneNumber) return;

    // Show success toast
    toast.success("Invitation sent successfully!", {
      duration: 3000,
    });

    // Close dialog
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-5">
          <p className="text-lg font-semibold">All users</p>

          {/* Invite User Button - Opens Dialog */}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-3 focus-visible:ring-0"
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    onClick={handleInvite}
                    disabled={!phoneNumber}
                    className="bg-main cursor-pointer hover:bg-teal-700 text-white mt-4"
                  >
                    Send Invitation
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* User Filter and Table */}
        <UserFilter />
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
