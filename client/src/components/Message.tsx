import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  myMessage: boolean;
  children: string;
}

export default function Message({ myMessage, children }: Props) {
  return (
    <div
      className={`${
        myMessage ? "justify-end" : "justify-start"
      } px-4 w-full flex`}
    >
      <div
        className={`${
          myMessage ? "flex-row-reverse" : "flex-row"
        } flex items-start gap-2 w-full max-w-[450px]`}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div
            className={`text-sm flex items-center px-4 py-2 rounded-2xl ${
              myMessage
                ? "bg-blue-600 text-white"
                : "dark:bg-neutral-800 dark:text-white text-neutral-800 bg-neutral-200"
            } break-words`} // Используем tailwind классы
            // Добавлено свойство маркера для разбивки длинных слов
          >
            {children}
          </div>
          <span
            className={`${
              myMessage ? "text-start" : "text-end"
            } -right-11 text-xs px-4 text-neutral-400`}
          >
            Today, 17:24
          </span>
        </div>
      </div>
    </div>
  );
}
