import MessageInput from "./MessageInput";

export default function MessageArea() {
  return (
    <div className="flex px-32 flex-col h-full flex-1 w-full">
      <div className="w-full h-full flex items-end">
        <div className="w-full h-12 bg-pink-500"></div>
      </div>
      <MessageInput />
    </div>
  );
}
