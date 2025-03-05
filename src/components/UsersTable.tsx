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

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    phone: "+233 24 123 4567",
    email: "john.doe@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    phone: "+233 50 987 6543",
    email: "jane.smith@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 25,
    phone: "+233 20 456 7890",
    email: "michael.j@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Watson",
    age: 29,
    phone: "+233 55 654 3210",
    email: "emily.w@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "David Lee",
    age: 35,
    phone: "+233 27 321 7890",
    email: "david.lee@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Connor",
    age: 27,
    phone: "+233 26 876 5432",
    email: "sarah.c@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "James Brown",
    age: 40,
    phone: "+233 23 234 5678",
    email: "james.b@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    age: 30,
    phone: "+233 56 789 0123",
    email: "sophia.m@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Daniel White",
    age: 33,
    phone: "+233 54 567 8901",
    email: "daniel.w@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    age: 26,
    phone: "+233 25 098 7654",
    email: "olivia.t@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const UsersTable = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.profilePic} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </TableCell>
                <TableCell>{user.age}</TableCell>
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
        <DialogContent className="sm:max-w-3xl">
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
              <Tabs />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersTable;
