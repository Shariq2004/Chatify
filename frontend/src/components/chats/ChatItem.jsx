import UserAvatar from "../common/UserAvatar";

const ChatItem = ({
  name,
  message,
  time,
  avatar,
  online,
  unread,
  isActive,
}) => {
  return (
    <button
      type="button"
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-[#F0F1FF]/60"
          : "hover:bg-[#F0F1FF]/40"
      }`}
    >
      <div className="relative shrink-0">
        <UserAvatar
          src={avatar}
          name={name}
          size="h-11 w-11"
        />

        {online && (
          <span className="absolute top-0.5 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-slate-700">
            {name}
          </p>

          <span
            className={`shrink-0 text-[10px] ${
              unread > 0
                ? "font-semibold text-[#7F84F7]"
                : "text-slate-400"
            }`}
          >
            {time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p
            className={`truncate text-xs ${
              unread > 0
                ? "font-medium text-slate-500"
                : "text-slate-400"
            }`}
          >
            {message}
          </p>

          {unread > 0 && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#8184e8] via-[#7E84F1] to-[#6056e8] px-1 text-[10px] font-semibold leading-none text-white">
              {unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChatItem;