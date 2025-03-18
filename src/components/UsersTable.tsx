import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import Tabs from "./Tabs";
import { useUsers } from "@/hooks/useUsers";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useGenealogy } from "@/hooks/useGenealogy";

// import { users } from "@/data";

const UsersTable = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: users, isLoading, error } = useUsers();
  const {
    data: genealogy,
    // isLoading: isPending,
    isError,
  } = useGenealogy(selectedUser?.userId);
  console.log(genealogy && genealogy);

  //user states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  //genealogy state states
  // if (isPending) return <p>Pending...</p>;
  if (isError) return <p>Error fetching genealogy</p>;

  // console.log(selectedUser?.userId, "SELECTED");

  return (
    <div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.profilePic} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </TableCell>
                <TableCell>{user.age || "25"}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border border-main text-xs"
                      >
                        Actions{" "}
                        <Icon
                          icon="mdi:chevron-down"
                          className="ml-1 cursor-pointer"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => {
                          setSelectedUser(user);
                          setIsModalOpen(true);
                        }}
                      >
                        <Icon icon="mdi:eye" className="mr-2" />
                        Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon icon="mdi:account-off" className="mr-2" />
                        Suspend
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon icon="mdi:message" className="mr-2" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon icon="mdi:phone" className="mr-2" />
                        Send Airtime
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTitle className="hidden"></DialogTitle>
        <DialogContent className="sm:max-w-4xl h-[500px]">
          {selectedUser && (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={selectedUser.profilePic} />
                  <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>
              <Tabs user={genealogy} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersTable;
