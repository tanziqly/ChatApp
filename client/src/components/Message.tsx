import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Message({ myMessage }: { myMessage: boolean }) {
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
            }`}
            style={{ wordBreak: "break-all", overflowWrap: "break-word" }} // Добавлено новое свойство стиля
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            qui magni, mollitia quos dolore, nesciunt amet earum at perferendis
            voluptatibus aperiam impedit non laudantium tenetur eum dignissimos
            animi similique voluptate? Tempora molestias praesentium assumenda
            a, commodi nemo harum omnis rem pariatur quasi aspernatur ducimus!
            Illo rem, fugit sed culpa est aut laboriosam voluptas saepe ratione
            possimus quis, ea enim molestias. Repudiandae nostrum sint minima
            provident autem voluptatem deserunt error nesciunt animi nemo, quod
            alias magni, distinctio excepturi inventore, ipsum beatae explicabo!
            Corporis omnis consequuntur exercitationem ad tempore in quae earum.
            Iste alias nesciunt perferendis corrupti amet laboriosam aspernatur
            soluta tenetur in cum, expedita rerum minima quas tempore repellat
            sint neque architecto iure deserunt odio recusandae vitae, laborum
            ea dignissimos? Itaque! Ad inventore harum minima officiis
            asperiores sunt eos, explicabo eius saepe vero minus veritatis animi
            fugit. Iusto ipsam voluptatem natus dolorem, odio suscipit
            consequuntur aliquid incidunt enim perspiciatis provident libero!
          </div>
          <span
            className={`${
              myMessage ? "text-start" : "text-end"
            } -right-11 text-sm text-neutral-400`}
          >
            Today, 17:24
          </span>
        </div>
      </div>
    </div>
  );
}
