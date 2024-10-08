import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm() {
  return (
    <div className="flex flex-col gap-2 max-w-[350px] w-full">
      <h2 className="mb-2">Sign Up</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="flex items-center my-2 space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Remember me</Label>
      </div>
      <Button>Sign up</Button>
      <span className="flex items-center gap-2 justify-center mt-2">
        Don't have an account yet?
        <Link to="/sign-up" className="underline text-green-500">
          Sign up
        </Link>
      </span>
    </div>
  );
}
