import { useState } from "react";
import UserAvatar from "../common/UserAvatar";
import { Check, X, Image } from "lucide-react";
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
  const [showProfilePreview, setShowProfilePreview] = useState(false);

  const isOnline = onlineUsers.includes(id);
  console.log("Chat:", name, "Unread:", unread);

  return (
    <>
      <button
        type="button"
        onClick={click}
        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 cursor-pointer ${
          selectedUser?._id === id ? "bg-[#F0F1FF]/60" : "hover:bg-[#F0F1FF]/40"
        }`}
      >
        <div className="relative shrink-0">
          <UserAvatar
            onClick={(e) => {
              e.stopPropagation();
              setShowProfilePreview(true);
            }}
            src={avatar}
            name={name}
            size="h-12 w-12 sm:h-13 sm:w-13"
          />

          <span
            className={`absolute bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ${
              isOnline ? "bg-emerald-500" : "bg-slate-400"
            }`}
          >
            {isOnline ? (
              <Check size={8} strokeWidth={3} className="text-white" />
            ) : (
              <X size={8} strokeWidth={3} className="text-white" />
            )}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[15px] font-semibold text-slate-700">
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
              className={`max-w-65 truncate text-[13px] ${
                unread > 0 ? "font-medium text-slate-600" : "text-slate-500"
              }`}
            >
              {message === "Photo" ? (
                <span className="flex items-center gap-1">
                  <Image size={14} />
                  Photo
                </span>
              ) : (
                message
              )}
            </p>

            {unread > 0 && (
              <span className="inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#8184E8] via-[#7E84F1] to-[#6056E8] px-1 text-center text-[10px] font-semibold leading-none tabular-nums text-white">
                {unread}
              </span>
            )}
          </div>
        </div>
      </button>

      {showProfilePreview && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShowProfilePreview(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 px-5 md:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xs overflow-hidden rounded-2xl bg-white p-5 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setShowProfilePreview(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-slate-700 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center gap-4">
              <UserAvatar
                src={avatar}
                name={name}
                size="h-57 w-57"
                textSize="text-[80px]"
              />
              <p className="max-w-full truncate text-center text-xl font-bold tracking-tight text-slate-800">
                {name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatItem;
