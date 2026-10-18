import { useEffect, useState } from "react";
import { Search, Plus, Volume2, VolumeX, X } from "lucide-react";
import ChatFilters from "./ChatFilters";
import ChatItem from "./ChatItem";
import NoChatsFound from "./NoChatsFound";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import formatChatListTime from "../../lib/formatChatListTime";
import ChatItemSkeleton from "./ChatItemSkeleton";
import SearchInput from "../common/SearchInput";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

const ChatListPanel = () => {
  const {
    chats,
    isSoundEnabled,
    toggleSound,
    setIsActiveTab,
    isUsersLoading,
    selectedUser,
    setSelectedUser,
    getMyChats,
    listenForMessages,
    stopListeningToMessages,
  } = useChatStore();
  const { socket } = useAuthStore();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredChats = chats.filter((chat) => {
  const matchesSearch = chat.fullName
    ?.toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    activeFilter === "All" || chat.unreadCount > 0;

  return matchesSearch && matchesFilter;
});

  useEffect(() => {
    getMyChats();
  }, [getMyChats]);

  useEffect(() => {
  if (!socket) return;

  listenForMessages();

  return () => {
    stopListeningToMessages();
  };
}, [socket, listenForMessages, stopListeningToMessages]);

  return (
    <section className="flex h-full flex-col border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="flex h-19 shrink-0 items-center justify-between px-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-800">
          Chats
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound
                .play()
                .catch((error) => console.log("Audio play failed:", error));
              toggleSound();
            }}
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl transition-all duration-200 ${
              isSoundEnabled
                ? "text-[#7F84F7] hover:bg-[#7F84F7]/10 hover:text-[#7076E8]"
                : "text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            }`}
          >
            {isSoundEnabled ? (
              <Volume2 size={21} strokeWidth={2.2} />
            ) : (
              <VolumeX size={21} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      <SearchInput
        search={search}
        setSearch={setSearch}
        placeholder="Search conversations..."
      />

      <div className="flex shrink-0 items-center justify-between px-4 py-3">
        <ChatFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <button
          type="button"
          onClick={() => setIsActiveTab("Contacts")}
          className="ml-3 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#7F84F7] text-white shadow-sm transition-all duration-200 hover:bg-[#7076E8] hover:shadow-md active:scale-95"
        >
          <Plus size={19} strokeWidth={2.3} />
        </button>
      </div>

      <div className="chatuser-scrollbar h-full overflow-y-auto  pb-3">
        {isUsersLoading ? (
          <div className="flex flex-col gap-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <ChatItemSkeleton key={index} />
            ))}
          </div>
        ) : chats.length === 0 ? (
          <NoChatsFound onViewContacts={() => setIsActiveTab("Contacts")} />
        ) : filteredChats.length === 0 ? (
          <div className="flex h-full items-center justify-center px-4 text-center text-base text-slate-400">
            No conversations found
          </div>
        ) : (
          <div className="flex flex-col gap-1 px-2">
            {filteredChats.map((chat) => (
              <ChatItem
                key={chat._id}
                id={chat._id}
                name={chat.fullName}
                message={chat.lastMessage} 
                time={formatChatListTime(chat.lastMessageTime)}
                avatar={chat.profilePic}
                unread={chat.unreadCount}
                click={() => setSelectedUser(chat)}
                selectedUser={selectedUser}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatListPanel;
