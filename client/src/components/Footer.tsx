import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full border-t">
      <div className="flex justify-between items-center max-w-[1620px] w-full px-5 py-2">
        <span className="font-medium text-lg text-black dark:text-white">
          tellnur.
        </span>
        <span className="text-sm text-neutral-500">
          Made by{" "}
          <Link
            to="https://github.com/tanziqly"
            className="underline text-green-500"
          >
            @tanziqly
          </Link>
        </span>
      </div>
    </footer>
  );
}
