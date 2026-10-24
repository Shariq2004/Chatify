import Sidebar from "../components/layout/Sidebar";
import ChatListPanel from "../components/chats/ChatListPanel";
import ContactListPanel from "../components/contacts/ContactListPanel";
import NotificationList from "../components/notifications/NotificationList";
import ProfilePanel from "../components/profile/ProfilePanel";
import ChatWindow from "../components/chat/ChatWindow";
import NoConversationPlaceholder from "../components/chat/NoConversationPlaceholder";
import { useChatStore } from "../store/useChatStore";
import Settings from "../components/settings/Settings";

const ChatPage = () => {
  const { isActiveTab, selectedUser, isSidebarOpen } = useChatStore();

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#F5F6FC]">
      <Sidebar />

      <div
        className={`
          h-full shrink-0 overflow-hidden transition-all duration-300
          ${selectedUser ? "hidden md:block" : "flex w-full  pb-16 sm:pb-0"}
          ${isSidebarOpen ? "md:w-70 lg:w-90 xl:w-90" : "md:w-70 lg:w-100 xl:w-110"}
        `}
      >
        {isActiveTab === "Chats" && <ChatListPanel />}
        {isActiveTab === "Contacts" && <ContactListPanel />}
        {isActiveTab === "Notifications" && <NotificationList />}
        {isActiveTab === "Settings" && <Settings />}
        {isActiveTab === "Profile" && <ProfilePanel />}
      </div>

      <div
        className={`h-full min-w-0 flex-1 ${selectedUser ? "flex" : "hidden md:flex"}`}
      >
        {selectedUser ? <ChatWindow /> : <NoConversationPlaceholder />}
      </div>
    </div>
  );
};

export default ChatPage;
