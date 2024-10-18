import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function User({ openChat }) {
  return (
    <Button
      onClick={openChat}
      variant="ghost"
      className="h-auto p-3 border-b rounded-none w-full overflow-hidden"
    >
      <div className="flex items-center w-full space-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="lg:max-w-[330px] pr-10 min-[450px]:pr-0 md:max-w-[280px] w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-start text-base">dimonikan</h3>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm pr-2 text-neutral-500">17:29</span>
          </div>
          <p className="truncate text-start text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </Button>
  );
}
