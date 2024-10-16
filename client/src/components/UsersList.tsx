import { UserSearch } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import User from "./User";
import { useState } from "react";

export default function UsersList() {
  const [closeList, setCloseList] = useState(false);

  const handleClickChat = () => {
    setCloseList(!closeList);
  };

  return (
    <div
      className={`${
        closeList ? "hidden lg:block" : "block lg:hiddens"
      } md:max-w-[350px] lg:max-w-[400px] border-r w-full`}
    >
      <div className="p-2 border-b flex w-full md:max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search users" />
        <Button size="icon" className="px-2" type="submit">
          <UserSearch />
        </Button>
      </div>
      <div className="overflow-y-auto w-full max-h-[calc(100vh-110px)]">
        {[...Array(14)].map((_, index) => (
          <User openChat={handleClickChat} key={index} />
        ))}
      </div>
    </div>
  );
}
