import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm() {
  return (
    <div className="flex flex-col gap-2 max-w-[350px] w-full">
      <h2 className="mb-2">Sign Up</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="Username" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Repeat password</Label>
        <Input type="password" id="password " placeholder="Password" />
      </div>
      <div className="flex items-center my-2 space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button>Sign up</Button>
      <span className="flex items-center gap-2 justify-center mt-2">
        Already have an account?
        <Link to="/sign-in" className="underline text-green-500">
          Sign in
        </Link>
      </span>
    </div>
  );
}
