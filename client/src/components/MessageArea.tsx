import Message from "./Message";
import MessageInput from "./MessageInput";

export default function MessageArea() {
  return (
    <div className="md:flex hidden px-12 xl:px-16 2xl:px-32 flex-col h-full flex-1 w-full">
      <div
        className="flex-col h-full pt-4 flex items-end overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 140px)" }}
      >
        <div className="w-full gap-4 flex-col flex">
          <Message myMessage={true}>
            https://habr.com/ru/companies/ruvds/articles/587724/
          </Message>
          <Message myMessage={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
            atque totam, necessitatibus quos corporis, quam accusantium iusto
            fuga magnam veritatis assumenda enim, velit suscipit culpa
            perspiciatis! Eligendi, totam quis. Labore eos ipsum blanditiis
            natus error perspiciatis adipisci maiores laudantium odio aut, in
            deserunt necessitatibus dicta aliquid maxime expedita ea! Iure
            tempore mollitia sapiente cumque dolorum reiciendis minus rem error!
            Maiores cum similique quis nesciunt corporis enim consequatur
            magnam, minima voluptatum tempore officia officiis dolorem suscipit
            vero soluta nobis a et dolorum excepturi esse perspiciatis, hic
            voluptate. Quasi, a sit? Ad dicta culpa atque ex veritatis tempore
            impedit explicabo. Commodi explicabo esse sequi placeat delectus
            perspiciatis necessitatibus? Deserunt placeat illum adipisci
            nesciunt ea voluptatibus accusantium officiis expedita iste.
            Repellat, ratione? Explicabo porro sequi rem, laboriosam voluptatem
            odio totam recusandae ullam, voluptates blanditiis laborum adipisci
            quasi maiores molestiae tempore, dolorum corporis quibusdam
            dignissimos eligendi? Tempora fuga illo magni qui consectetur
            laboriosam! Hic, dolores cum perferendis aliquam molestias quos
            error atque quisquam, ad reiciendis ullam, officiis a ut? Ratione a
            minima quidem omnis laboriosam fuga. Perferendis nesciunt quo odit
            consectetur perspiciatis reprehenderit. Iusto debitis itaque eos
            quas iure ex sequi veritatis nostrum magnam expedita. Architecto
            dolor totam tenetur delectus, quia animi error, doloribus, cum nihil
            odit et labore. Repellat placeat debitis molestiae! Eveniet
            laudantium repudiandae facere sapiente rerum commodi iste,
            consequuntur natus consectetur deleniti unde recusandae at
            perspiciatis nostrum voluptatem. Laborum hic dicta ipsa similique
            facere harum beatae. Labore vero earum praesentium. Ipsum excepturi
            perspiciatis quibusdam maxime dignissimos rerum velit dicta
            assumenda ad explicabo, at, error libero facilis corporis iusto,
            pariatur in animi itaque amet aliquid repellat? Ipsa modi commodi
            quidem ea. Obcaecati vitae optio illum atque in vel rem, placeat
            eligendi suscipit quo repudiandae, sint culpa similique.
            Reprehenderit iste dolorum fugiat cumque, sunt ullam voluptatum
            veritatis, dolore cupiditate error accusantium exercitationem?
          </Message>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}
