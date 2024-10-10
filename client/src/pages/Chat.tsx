import ChatHeader from "@/components/ChatHeader";
import MessageArea from "@/components/MessageArea";
import UsersList from "@/components/UsersList";

export default function Chat() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <ChatHeader />
      <div className="flex flex-grow h-full">
        <UsersList />
        <MessageArea />
      </div>
    </div>
  );
}
