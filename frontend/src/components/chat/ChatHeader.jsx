import { MoreVertical, Phone, Video, X, Check, ArrowLeft } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import UserAvatar from "../common/UserAvatar";
import { useAuthStore } from "../../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, toggleProfile } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = selectedUser?._id
    ? onlineUsers.includes(selectedUser._id)
    : false;

  return (
    <header className="flex h-16 md:h-19 shrink-0 items-center justify-between gap-2 border-b border-[#E6E8F2] bg-white px-3 md:px-6">
      <div className="flex min-w-0 items-center gap-2 md:gap-3">
        {/* Mobile Back Button */}
        <button
          type="button"
          onClick={() => setSelectedUser(null)}
          aria-label="Back to chats"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-[#EDEEFC] hover:text-[#7F84F7] md:hidden"
        >
          <ArrowLeft size={21} />
        </button>

        <div
          onClick={toggleProfile}
          className="flex min-w-0 cursor-pointer items-center gap-2 md:gap-3"
        >
          <div className="relative shrink-0">
            <UserAvatar
              src={selectedUser?.profilePic}
              name={selectedUser?.fullName}
              size="h-10 w-10 md:h-11 md:w-11"
            />

            <span
              className={`absolute bottom-0.5 right-0 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white ${
                isOnline ? "bg-emerald-500" : "bg-slate-400"
              }`}
            >
              {isOnline ? (
                <Check size={7} strokeWidth={3} className="text-white" />
              ) : (
                <X size={7} strokeWidth={3} className="text-white" />
              )}
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-slate-800">
              {selectedUser?.fullName}
            </h2>

            <p
              className={`mt-0.5 text-xs font-medium ${
                isOnline ? "text-[#55C58A]" : "text-[#8D91A3]"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex shrink-0 items-center gap-0.5 md:gap-1.5">
        <button
          type="button"
          aria-label="Start voice call"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-[#7F84F7] transition-colors hover:bg-[#EDEEFC] active:scale-95"
        >
          <Phone size={18} />
        </button>

        <button
          type="button"
          aria-label="Start video call"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-[#7F84F7] transition-colors hover:bg-[#EDEEFC] active:scale-95"
        >
          <Video size={20} />
        </button>

        <div className="hidden md:flex mx-1 h-5 w-px bg-[#E6E8F2]" />

        <button
          type="button"
          aria-label="More options"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600 active:scale-95"
        >
          <MoreVertical size={19} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
