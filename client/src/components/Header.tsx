import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  const isAuth: boolean = true;

  return (
    <header className="flex justify-center w-full border-b">
      <div className="flex items-center justify-between max-w-[1620px] w-full px-5 py-2">
        <span className=" text-xl font-bold">tellnur</span>
        <nav>
          <ul className="flex gap-3 items-center text-sm">
            {isAuth ? (
              <>
                <li className="text-neutral-500 hover:text-black dark:hover:text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-neutral-500 hover:text-black dark:hover:text-white">
                  <Link to="/">Chat</Link>
                </li>
                <li className="text-neutral-500 hover:text-black dark:hover:text-white">
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </li>
              </>
            ) : (
              <li className="flex gap-2 items-center">
                <Button variant="outline">Sign in</Button>
                <Button>Sign up</Button>
              </li>
            )}
            <li className="pl-3 border-l">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
