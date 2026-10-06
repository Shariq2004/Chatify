import { MoreVertical, Phone, Video } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import UserAvatar from "../common/UserAvatar";

const ChatHeader = () => {
  const { selectedUser, toggleProfile } = useChatStore();

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

          {selectedUser.isOnline && (
            <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
          )}
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-slate-800">
            {selectedUser.fullName}
          </h2>

          <p
            className={`mt-0.5 text-xs font-medium ${
              selectedUser.isOnline
                ? "text-emerald-500"
                : "text-slate-400"
            }`}
          >
            {selectedUser.isOnline ? "Online" : "Offline"}
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
