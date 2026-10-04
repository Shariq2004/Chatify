import { MessageCircleMore, UsersRound } from "lucide-react";

const ChatEmptyState = ({ onViewContacts }) => {
  return (
    <div className="flex flex-1 items-center justify-center px-6 min-h-screen border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7F84F7]/10">
          <MessageCircleMore
            size={30}
            strokeWidth={1.8}
            className="text-[#7F84F7]"
          />
        </div>

        <h2 className="text-lg font-semibold text-[#3F4354]">
          No conversations yet
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#8D91A3]">
          Start a conversation with someone from your contacts.
        </p>

        <button
          type="button"
          onClick={onViewContacts}
          className="mt-5 flex items-center gap-2 rounded-xl bg-[#7F84F7] px-4 py-2.5 text-sm font-medium text-white cursor-pointer transition-all duration-200 hover:bg-[#7076E8]"
        >
          <UsersRound size={17} />
          View Contacts
        </button>
      </div>
    </div>
  );
};

export default ChatEmptyState;