const ChatFilters = () => {
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        className="shrink-0 rounded-full bg-[#7F84F7] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#7F84F7]/20 cursor-pointer"
      >
        All
      </button>

      <button
        type="button"
        className="shrink-0 rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500 cursor-pointer transition-colors duration-200 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8]"
      >
        Unread
      </button>

      
    </div>
  );
};

export default ChatFilters;