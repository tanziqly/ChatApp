import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export default function Banner() {
  return (
    <section className="flex flex-col gap-4 w-full max-w-[1620px] px-5">
      <h1>Don’t Miss the Chance to Talk!</h1>
      <span className="flex text-neutral-500 sm:text-lg text-base w-full max-w-[1000px]">
        Create your chat, connect with friends or make new acquaintances, share
        experiences, and find people who share your interests. Every message is
        a step towards new friendship. Find like-minded individuals in our chat,
        discuss your passions and interests.
      </span>
      <div className="flex mt-4 gap-2 items-center">
        <Link
          to="/sign-up"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
          })}
        >
          Go to chat
        </Link>
        <Link
          to="/sign-up"
          className={buttonVariants({
            size: "lg",
          })}
        >
          Get started
        </Link>
      </div>
      <div className="sm:pb-0 pb-10"></div>
    </section>
  );
}
