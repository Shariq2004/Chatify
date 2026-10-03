import { Paperclip, Send } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="shrink-0 border-t border-[#E6E8F2] bg-white px-5 py-4">
      <div className="group flex min-h-12 items-center gap-2 rounded-full border border-slate-300 bg-[#FAFBFF] px-2.5 transition-all duration-200 focus-within:border-[#7F84F7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7F84F7]/10">
        <button
          type="button"
          aria-label="Attach file"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-[#EDEEFC] hover:text-[#7F84F7] active:scale-95"
        >
          <Paperclip size={19} strokeWidth={2} />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          className="min-w-0 flex-1 bg-transparent px-1 text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          aria-label="Send message"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#7F84F7] text-white shadow-sm shadow-[#7F84F7]/20 transition-all duration-200 hover:bg-[#7076E8] hover:shadow-md hover:shadow-[#7F84F7]/25 active:scale-95"
        >
          <Send size={17} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;