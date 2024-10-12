import { ImagePlus } from "lucide-react";
import { SendHorizontal } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function MessageInput() {
  return (
    <div className="flex gap-2 mt-8 mb-8 items-center">
      <Button className="h-12" variant="outline">
        <ImagePlus />
      </Button>
      <Input className="h-12" placeholder="Type something..." />
      <Button className="h-12">
        <SendHorizontal />
      </Button>
    </div>
  );
}
