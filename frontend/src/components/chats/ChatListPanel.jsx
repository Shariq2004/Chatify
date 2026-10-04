import { useEffect, useState } from "react";
import { Search, Plus, Volume2, VolumeX, X } from "lucide-react";
import ChatFilters from "./ChatFilters";
import ChatItem from "./ChatItem";
import NoChatsFound from "./NoChatsFound";
import { useChatStore } from "../../store/useChatStore";


const mouseClickSound = new Audio("/sounds/mouse-click.mp3");


const ChatListPanel = () => {
  const { isSoundEnabled, toggleSound, setIsActiveTab, isUsersLoading,selectedUser, setSelectedUser, getMyChats } = useChatStore();
  const [search, setSearch] = useState("");


  // useEffect(() => {
  //  getMyChats();
  // },[getMyChats])

  // if(isUsersLoading) return <div>Loading..</div>
    //  if(chats.length === 0) return <NoChatsFound onViewContacts={() => setIsActiveTab("Contacts")} /> 

  const chats = [
  {
    id: 1,
    fullName: "Aarav Sharma",
    text: "Hey, are you free for a quick chat?",
    createdAt: "10:21 PM",
    profilePic: "",
    unread: 2,
  },
  {
    id: 2,
    fullName: "Priya Verma",
    text: "The project files are ready.",
    createdAt: "9:45 PM",
    profilePic: "",
    unread: 0,
  },
  {
    id: 3,
    fullName: "Rahul Singh",
    text: "Let's discuss this tomorrow.",
    createdAt: "Yesterday",
    profilePic: "",
    unread: 5,
  },
  {
    id: 4,
    fullName: "Ananya Gupta",
    text: "Thanks for your help!",
    createdAt: "Yesterday",
    profilePic: "",
    unread: 1,
  },
  {
    id: 5,
    fullName: "Vikash Kumar",
    text: "Can you send me the latest update?",
    createdAt: "Yesterday",
    profilePic: "",
    unread: 0,
  },
];

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
              // play click sound before toggling
              mouseClickSound.currentTime = 0; // reset to start
              mouseClickSound.play().catch((error) => console.log("Audio play failed:", error));
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

      {/* Search */}
      <div className="shrink-0 px-4">
        <div className="group flex h-10 items-center gap-3 rounded-full border border-slate-200/80 bg-[#7F84F7]/5 px-3 transition-all duration-200 focus-within:border-[#7F84F7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7F84F7]/10">
          <Search
            size={18}
            strokeWidth={2}
            className="shrink-0 text-slate-400 transition-colors duration-200 group-focus-within:text-[#7F84F7]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-600"
            >
              <X size={15} strokeWidth={2.3} />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      {chats.length > 0 && (
        <div className="flex shrink-0 items-center justify-between px-4 py-3">
          <ChatFilters />

          <button
            type="button"
            onClick={() => setIsActiveTab("Contacts")}
            className="ml-3 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#7F84F7]/10 text-[#7F84F7] transition-all duration-200 hover:bg-[#7F84F7]/15 hover:text-[#7076E8]"
          >
            <Plus size={20} strokeWidth={2.3} />
          </button>
        </div>
      )}

      {/* Chat List */}
        <div className="chatuser-scrollbar h-full overflow-y-auto px-2 pb-3">
          <div className="flex flex-col gap-1">
            {chats.map((chat, index) => (
              <ChatItem
                key={chat.id}
                name={chat.fullName}
                message={chat.text}
                time={chat.createdAt}
                avatar={chat.profilePic}
                unread={chat.unread}
                click={() => setSelectedUser(chat)}
                selectedUser={selectedUser}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default ChatListPanel;
