import { UserSearch } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import User from "./User";

export default function UsersList() {
  return (
    <div className="md:max-w-[350px] lg:max-w-[400px] border-r w-full">
      <div className="p-2 border-b flex w-full md:max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search users" />
        <Button size="icon" className="px-2" type="submit">
          <UserSearch />
        </Button>
      </div>
      <div className="overflow-y-auto w-full max-h-[calc(100vh-110px)]">
        {[...Array(14)].map((_, index) => (
          <User key={index} />
        ))}
      </div>
    </div>
  );
}
