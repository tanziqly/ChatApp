import SignInForm from "@/components/SignInForm";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function SignIn() {
  return (
    <div className="flex flex-col h-screen">
      <Link
        to="/"
        className={`${buttonVariants({ variant: "ghost" })} w-fit m-2`}
      >
        <ChevronLeft />
        Back to home
      </Link>
      <div className="flex flex-1 justify-center items-center">
        <SignInForm />
      </div>
    </div>
  );
}
