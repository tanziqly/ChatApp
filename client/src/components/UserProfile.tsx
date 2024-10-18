import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function UserProfile() {
  const [edit, setEdit] = useState(false);

  const handleClickEdit = () => {
    setEdit(!edit);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 text-sm w-full text-start">Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <Label htmlFor="username" className="text-left">
              Email
            </Label>
            <Input
              disabled={!edit}
              id="email"
              value="bogdan4iks@example.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Label htmlFor="username" className="text-left">
              Username
            </Label>
            <Input
              disabled={!edit}
              id="username"
              value="bogdan4iks"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Password
            </Label>
            <Input
              disabled={!edit}
              id="password"
              value="qwerty123"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="mt-2 sm:mt-0"
            onClick={handleClickEdit}
            variant="outline"
          >
            Edit
          </Button>
          <Button disabled={!edit} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
