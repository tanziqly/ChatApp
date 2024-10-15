import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 text-sm w-full text-start">Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <Label htmlFor="username" className="text-left">
              Email
            </Label>
            <Input
              disabled
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
              disabled
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
              disabled
              id="password"
              value="qwerty123"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Edit</Button>
          <Button disabled type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
