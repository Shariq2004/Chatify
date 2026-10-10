import { MoreVertical, Phone, Video, X, Check } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import UserAvatar from "../common/UserAvatar";
import { useAuthStore } from "../../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, toggleProfile } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = selectedUser?._id ? onlineUsers.includes(selectedUser._id) : false;

  return (
    <header className="flex h-19 shrink-0 items-center justify-between border-b border-[#E6E8F2] bg-[#FFFFFF] px-6">
      <div
        onClick={toggleProfile}
        className="flex min-w-0 cursor-pointer items-center gap-3"
      >
        <div className="relative shrink-0">
          <UserAvatar
            src={selectedUser.profilePic}
            name={selectedUser.fullName}
            size="h-11 w-11"
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
            {selectedUser.fullName}
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

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          aria-label="Start voice call"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-[#7F84F7] transition-all duration-200 hover:bg-[#EDEEFC] active:scale-95"
        >
          <Phone size={18} strokeWidth={2} />
        </button>

        <button
          type="button"
          aria-label="Start video call"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-[#7F84F7] transition-all duration-200 hover:bg-[#EDEEFC] active:scale-95"
        >
          <Video size={21} strokeWidth={2} />
        </button>

        <div className="mx-1 h-5 w-px bg-[#E6E8F2]" />

        <button
          type="button"
          aria-label="More options"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-slate-50 hover:text-slate-600 active:scale-95"
        >
          <MoreVertical size={19} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
