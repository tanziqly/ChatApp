import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function User() {
  return (
    <Button
      variant="ghost"
      className="h-auto p-3 border-b rounded-none max-width-[350px] w-full overflow-hidden"
    >
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="max-w-[280px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-start text-base">dimonikan</h3>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm pr-2 text-neutral-500">17:29</span>
          </div>
          <p className="truncate whitespace-nowrap text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </Button>
  );
}
