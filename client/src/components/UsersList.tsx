import { UserSearch } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import User from "./User";

export default function UsersList() {
  return (
    <div className="max-w-[350px] overflow-visible h-full border-r w-full">
      <div className="p-2 border-b flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search users" />
        <Button size="icon" className="px-2" type="submit">
          <UserSearch />
        </Button>
      </div>
      {[...Array(13)].map((_, index) => (
        <User key={index} />
      ))}
    </div>
  );
}
