import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { UserDropdown } from "./UserDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ChatHeader() {
  return (
    <div className="flex py-2 border-b">
      <div className="flex justify-between md:border-r items-center px-2 md:max-w-[400px] w-full">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold">bogdan4ik</span>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          <UserDropdown />
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>dimonikan</span>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>Delete chat</DropdownMenuItem>
              <DropdownMenuItem>Block user</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
