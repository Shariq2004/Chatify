const ChatFilters = ({ activeFilter, onFilterChange, unreadCount = 0 }) => {
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={() => onFilterChange("All")}
        className={`shrink-0 cursor-pointer rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs transition-colors duration-200 ${
          activeFilter === "All"
            ? "bg-[#7F84F7] font-semibold text-white shadow-sm shadow-[#7F84F7]/20"
            : "bg-slate-50 font-medium text-slate-500 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8] border border-slate-200"
        }`}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("Unread")}
        className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 ${
          activeFilter === "Unread"
            ? "bg-[#7F84F7] font-semibold text-white shadow-sm shadow-[#7F84F7]/20"
            : "border border-slate-200 bg-slate-50 font-medium text-slate-500 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8]"
        }`}
      >
        <span>Unread</span>

        {unreadCount > 0 && (
          <span
            className={`flex h-5 min-w-2 items-center justify-center text-[10px] font-semibold tabular-nums ${
              activeFilter === "Unread" ? "text-white" : "text-[#7F84F7]"
            }`}
          >
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatFilters;
