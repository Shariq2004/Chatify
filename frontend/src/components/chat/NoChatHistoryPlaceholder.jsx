import { MessageCircleMore } from "lucide-react";

const NoChatHistoryPlaceholder = () => {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center bg-[#F3F4FA] px-6">
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="mb-5 flex h-17 w-17 items-center justify-center rounded-[20px] bg-[#7F84F7]/10 text-[#7F84F7]">
          <MessageCircleMore size={35} strokeWidth={2} />
        </div>

        <h3 className="text-base font-semibold text-[#3F4354]">
          No messages yet
        </h3>

        <p className="mt-1.5 max-w-xs text-sm leading-6 text-[#8D91A3]">
          Start a conversation and send your first message.
        </p>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
