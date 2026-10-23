import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import SelectedUserProfilePanel from "../profile/SelectedUserProfilePanel";
import { useChatStore } from "../../store/useChatStore";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";

const ChatWindow = () => {
  const {
    selectedUser,
    setSelectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    isProfileOpen,
  } = useChatStore();

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  useEffect(() => {
    if (!selectedUser?._id) return;

    getMessagesByUserId(selectedUser._id);
  }, [selectedUser?._id, getMessagesByUserId]);

  return (
    <div className="relative flex h-full min-w-0 flex-1 overflow-hidden">
      <div
        className={`min-w-0 flex-1 flex-col ${
          isProfileOpen ? "hidden 2xl:flex" : "flex"
        }`}
      >
        <ChatHeader />

        {messages.length > 0 && !isMessagesLoading ? (
          <MessageList />
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder />
        )}

        <MessageInput />
      </div>

      <SelectedUserProfilePanel />
    </div>
  );
};

export default ChatWindow;
