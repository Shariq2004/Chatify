import { Check, MoreHorizontal } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const isWithinOneMinute = (previousMessage, currentMessage, authUserId) => {
  if (!previousMessage || !currentMessage) {
    return false;
  }

  const previousTime = new Date(previousMessage.createdAt).getTime();
  const currentTime = new Date(currentMessage.createdAt).getTime();

  const previousType =
    previousMessage.senderId === authUserId ? "sent" : "received";

  const currentType =
    currentMessage.senderId === authUserId ? "sent" : "received";

  return (
    previousType === currentType &&
    currentTime - previousTime <= 60 * 1000
  );
};

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

const MessageList = () => {
  const { messages,selectedUser } = useChatStore();
  const { authUser } = useAuthStore();


  return (
    <div className="chatify-scrollbar min-h-0 flex-1 overflow-y-auto bg-[#F3F4FA] px-5 py-4">
      <div className="flex w-full flex-col">
        <div className="mb-5 flex items-center justify-center">
          <span className="rounded-lg border border-[#E5E7F0] bg-white px-3.5 py-1 text-[12px] font-medium text-[#8D91A3] shadow-sm">
            Today
          </span>
        </div>

        {messages.map((message, index) => {
          const previousMessage = messages[index - 1];
          const nextMessage = messages[index + 1];

          const isSent = message.senderId === authUser?._id;

          const isSameGroupAsPrevious = isWithinOneMinute(
            previousMessage,
            message,
            authUser?._id
          );

          const isSameGroupAsNext = isWithinOneMinute(
            message,
            nextMessage,
            authUser?._id
          );

          const isFirstInGroup = !isSameGroupAsPrevious;
          const isLastInGroup = !isSameGroupAsNext;

          return (
            <div
              key={message._id}
              className={`group flex items-end gap-2 ${
                isSent ? "justify-end" : "justify-start"
              } ${isFirstInGroup ? "mt-4 first:mt-0" : "mt-1"}`}
            >
              {!isSent && (
                <div className="w-8 shrink-0">
                  {isFirstInGroup && (
                    <img
                      src={message.senderId?.profilePic || "/avatar.png"}
                      alt=""
                      className="mb-1 h-8 w-8 rounded-full object-cover"
                    />
                  )}
                </div>
              )}

              <div
                className={`flex max-w-[70%] flex-col ${
                  isSent ? "items-end" : "items-start"
                }`}
              >
                <div className="flex min-w-0 items-center gap-1.5">
                  {isSent && (
                    <button
                      type="button"
                      className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  )}

                  <div
                    className={`rounded-[17px] px-4 py-2.5 text-[14px] leading-6 shadow-sm ${
                      isSent
                        ? `bg-[#7F84F7] text-white ${
                            isFirstInGroup
                              ? "rounded-tr-[17px]"
                              : "rounded-tr-md"
                          } ${
                            isLastInGroup
                              ? "rounded-br-[17px]"
                              : "rounded-br-md"
                          }`
                        : `border border-[#E7E9F2] bg-white text-[#3F4354] ${
                            isFirstInGroup
                              ? "rounded-tl-[17px]"
                              : "rounded-tl-md"
                          } ${
                            isLastInGroup
                              ? "rounded-bl-[17px]"
                              : "rounded-bl-md"
                          }`
                    }`}
                  >
                    {message.text}
                  </div>

                  {!isSent && (
                    <button
                      type="button"
                      className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                </div>

                {isLastInGroup && (
                  <div
                    className={`mt-1 flex items-center gap-1 px-1 text-[10px] text-[#9AA0B5] ${
                      isSent ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span>{formatTime(message.createdAt)}</span>

                    {isSent && (
                      <span className="relative flex h-4 w-5 items-center">
                        <Check
                          size={13}
                          strokeWidth={2.2}
                          className={`absolute left-0 ${
                            message.isRead
                              ? "text-[#5559B8]"
                              : "text-[#B7BAE8]"
                          }`}
                        />

                        <Check
                          size={13}
                          strokeWidth={2.2}
                          className={`absolute left-1.25 ${
                            message.isRead
                              ? "text-[#5559B8]"
                              : "text-[#B7BAE8]"
                          }`}
                        />
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;