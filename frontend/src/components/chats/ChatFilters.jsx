const ChatFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={() => onFilterChange("All")}
        className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs transition-colors duration-200 ${
          activeFilter === "All"
            ? "bg-[#7F84F7] font-semibold text-white shadow-sm shadow-[#7F84F7]/20"
            : "bg-slate-50 font-medium text-slate-500 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8]"
        }`}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("Unread")}
        className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs transition-colors duration-200 ${
          activeFilter === "Unread"
            ? "bg-[#7F84F7] font-semibold text-white shadow-sm shadow-[#7F84F7]/20"
            : "bg-slate-50 font-medium text-slate-500 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8]"
        }`}
      >
        Unread
      </button>
    </div>
  );
};

export default ChatFilters;