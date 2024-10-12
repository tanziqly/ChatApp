import Message from "./Message";
import MessageInput from "./MessageInput";

export default function MessageArea() {
  return (
    <div className="flex px-32 flex-col h-full flex-1 w-full">
      <div
        className="flex-col h-full pt-4 flex items-end overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <div className="w-full gap-4 flex-col flex">
          <Message myMessage />
          <Message />
        </div>
      </div>
      <MessageInput />
    </div>
  );
}
