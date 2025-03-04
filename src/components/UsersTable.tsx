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

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    phone: "+1 (555) 987-6543",
    email: "jane.smith@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 25,
    phone: "+1 (555) 456-7890",
    email: "michael.j@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Watson",
    age: 29,
    phone: "+1 (555) 654-3210",
    email: "emily.w@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "David Lee",
    age: 35,
    phone: "+1 (555) 321-7890",
    email: "david.lee@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Connor",
    age: 27,
    phone: "+1 (555) 876-5432",
    email: "sarah.c@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "James Brown",
    age: 40,
    phone: "+1 (555) 234-5678",
    email: "james.b@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    age: 30,
    phone: "+1 (555) 789-0123",
    email: "sophia.m@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Daniel White",
    age: 33,
    phone: "+1 (555) 567-8901",
    email: "daniel.w@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    age: 26,
    phone: "+1 (555) 098-7654",
    email: "olivia.t@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const UsersTable = () => {
  return (
    <div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
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
                        className="rounded-full"
                      >
                        Actions{" "}
                        <Icon
                          icon="mdi:chevron-down"
                          className="ml-1 cursor-pointer"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
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
      <div className="flex justify-end items-center mt-4 space-x-2">
        <Button size="sm" className="bg-teal-600 text-white">
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm">
          4
        </Button>
      </div>
    </div>
  );
};

export default UsersTable;
