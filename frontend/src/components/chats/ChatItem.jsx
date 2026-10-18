import UserAvatar from "../common/UserAvatar";
import { Check, X } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const ChatItem = ({
  id,
  name,
  message,
  time,
  avatar,
  unread,
  click,
  selectedUser,
}) => {
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(id);
  console.log("Chat:", name, "Unread:", unread);

  return (
    <button
      type="button"
      onClick={click}
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 cursor-pointer ${
        selectedUser?._id === id ? "bg-[#F0F1FF]/60" : "hover:bg-[#F0F1FF]/40"
      }`}
    >
      <div className="relative shrink-0">
        <UserAvatar src={avatar} name={name} size="h-13 w-13" />

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

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-slate-700">
            {name}
          </p>

          <span
            className={`shrink-0 text-[10px] ${
              unread > 0 ? "font-semibold text-[#7F84F7]" : "text-slate-400"
            }`}
          >
            {time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p
            className={`max-w-65 truncate text-xs ${
              unread > 0 ? "font-medium text-slate-500" : "text-slate-400"
            }`}
          >
            {message}
          </p>

          {unread > 0 && (
            <span className="inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#8184E8] via-[#7E84F1] to-[#6056E8] px-1 text-center text-[10px] font-semibold leading-none tabular-nums text-white">
              {unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChatItem;
