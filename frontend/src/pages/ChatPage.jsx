import Sidebar from "../components/layout/Sidebar";
import ChatListPanel from "../components/chats/ChatListPanel";
import ContactListPanel from "../components/contacts/ContactListPanel";
import NotificationList from "../components/notifications/NotificationList";
import ProfilePanel from "../components/profile/ProfilePanel";
import ChatWindow from "../components/chat/ChatWindow";
import NoConversationPlaceholder from "../components/chat/NoConversationPlaceholder";
import { useChatStore } from "../store/useChatStore";

const ChatPage = () => {
  const { isActiveTab, selectedUser, isSidebarOpen } = useChatStore();

  return (
    <div className="h-screen flex overflow-hidden bg-[#F5F6FC]">
      <Sidebar />

      <div
        className={`h-full shrink-0 overflow-hidden transition-all duration-300 ${
          isSidebarOpen ? "w-100" : "w-110"
        }`}
      >
        {isActiveTab === "Chats" && <ChatListPanel />}
        {isActiveTab === "Contacts" && <ContactListPanel />}
        {isActiveTab === "Notifications" && <NotificationList />}
        {isActiveTab === "Profile" && <ProfilePanel />}
      </div>

      {selectedUser ? <ChatWindow /> : <NoConversationPlaceholder />}
    </div>
  );
};

export default ChatPage;
