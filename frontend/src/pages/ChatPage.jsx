import Sidebar from "../components/layout/Sidebar";
import ChatListPanel from "../components/chats/ChatListPanel";
import ContactListPanel from "../components/contacts/ContactListPanel";
import NotificationList from "../components/notifications/NotificationList";
import ChatWindow from "../components/chat/ChatWindow";
import NoConversationPlaceholder from "../components/chat/NoConversationPlaceholder";
import { useChatStore } from "../store/useChatStore";


const ChatPage = () => {
  const { isActiveTab, selectedUser } = useChatStore();

  return (
    <div className="h-screen flex overflow-hidden bg-[#F5F6FC]">

      <Sidebar />

      {isActiveTab === "Chats" && <ChatListPanel />}
      {isActiveTab === "Contacts" && <ContactListPanel />}
      {isActiveTab === "Notifications" && <NotificationList />} 

      {selectedUser ? <ChatWindow /> : <NoConversationPlaceholder />}

    </div>
  );
};

export default ChatPage;
