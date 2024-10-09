import ChatHeader from "@/components/ChatHeader";
import UsersList from "@/components/UsersList";

export default function Chat() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <ChatHeader />
      <div className="flex-grow h-full">
        <UsersList />
      </div>
    </div>
  );
}
