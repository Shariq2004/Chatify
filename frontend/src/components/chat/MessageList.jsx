import React from "react";
import { Check, MoreHorizontal } from "lucide-react";

const messages = [
  {
    id: 1,
    type: "received",
    text: "Hey! How are you?",
    timestamp: "2026-10-01T21:41:00",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    type: "received",
    text: "Are you working on Chatify?",
    timestamp: "2026-10-01T21:41:25",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    type: "received",
    text: "The UI is looking really clean!",
    timestamp: "2026-10-01T21:41:48",
    avatar: "/avatar.png",
  },
  {
    id: 4,
    type: "sent",
    text: "Yes! Almost done with the chat UI 🚀",
    timestamp: "2026-10-01T21:42:10",
    seen: true,
  },
  {
    id: 5,
    type: "sent",
    text: "I'm trying to keep it modern and simple.",
    timestamp: "2026-10-01T21:42:35",
    seen: true,
  },
  {
    id: 6,
    type: "sent",
    text: "Just working on the message section now.",
    timestamp: "2026-10-01T21:42:55",
    seen: false,
  },
  {
    id: 7,
    type: "received",
    text: "That's awesome! Keep going 🚀",
    timestamp: "2026-10-01T21:44:20",
    avatar: "/avatar.png",
  },
  {
    id: 8,
    type: "received",
    text: "I really like the purple theme.",
    timestamp: "2026-10-01T21:44:45",
    avatar: "/avatar.png",
  },
  {
    id: 9,
    type: "sent",
    text: "Thanks! I wanted something clean and modern yes is chdf sdjhf shsjf fdjfjdfhd fdjjf fdnfjdfj fndjsjds dnsjndj.",
    timestamp: "2026-10-01T21:46:10",
    seen: true,
  },
  {
    id: 10,
    type: "received",
    text: "It definitely looks modern.",
    timestamp: "2026-10-01T21:48:00",
    avatar: "/avatar.png",
  },
   {
    id: 11,
    type: "received",
    text: "Hey! How are you?",
    timestamp: "2026-10-01T21:50:10",
    avatar: "/avatar.png",
  },
  {
    id: 12,
    type: "received",
    text: "Are you working on Chatify?",
    timestamp: "2026-10-01T21:50:35",
    avatar: "/avatar.png",
  },
];

const isWithinOneMinute = (previousMessage, currentMessage) => {
  if (!previousMessage || !currentMessage) {
    return false;
  }

  const previousTime = new Date(previousMessage.timestamp).getTime();
  const currentTime = new Date(currentMessage.timestamp).getTime();

  return (
    previousMessage.type === currentMessage.type &&
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

          const isSent = message.type === "sent";

          const isSameGroupAsPrevious = isWithinOneMinute(
            previousMessage,
            message
          );

          const isSameGroupAsNext = isWithinOneMinute(
            message,
            nextMessage
          );

          const isFirstInGroup = !isSameGroupAsPrevious;
          const isLastInGroup = !isSameGroupAsNext;

          return (
            <div
              key={message.id}
              className={`group flex items-end gap-2 ${
                isSent ? "justify-end" : "justify-start"
              } ${isFirstInGroup ? "mt-4 first:mt-0" : "mt-1"}`}
            >
              {!isSent && (
                <div className="w-8 shrink-0">
                  {isFirstInGroup && (
                    <img
                      src={message.avatar}
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
                    <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100 cursor-pointer">
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
                    <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100 cursor-pointer">
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
                    <span>{formatTime(message.timestamp)}</span>

                    {isSent && (
                      <span className="relative flex h-4 w-5 items-center">
                        <Check
                          size={13}
                          strokeWidth={2.2}
                          className={`absolute left-0 ${
                            message.seen
                              ? "text-[#5559B8]"
                              : "text-[#B7BAE8]"
                          }`}
                        />

                        <Check
                          size={13}
                          strokeWidth={2.2}
                          className={`absolute left-1.25 ${
                            message.seen
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

