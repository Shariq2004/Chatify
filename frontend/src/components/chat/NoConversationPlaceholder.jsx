import { MessageCircleMore } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-[#F2F3FA]">
      <div className="flex max-w-sm flex-col items-center px-6 text-center">
        <div className="mb-5 flex h-17 w-17 items-center justify-center rounded-[20px] bg-[#7F84F7]/10 text-[#7F84F7]">
          <MessageCircleMore size={35} strokeWidth={2} />
        </div>

        <h2 className="text-xl font-semibold text-slate-700">
          No conversation selected
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Select a conversation from your chats or choose a contact to start
          chatting.
        </p>
      </div>
    </div>
  );
};

export default NoConversationPlaceholder;