import { useEffect, useRef, useState } from "react";
import { Check, MoreHorizontal } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import ScrollToBottomButton from "./ScrollToBottomButton";
import formatMessageDateSeparator from "../../lib/formatMessageDateSeparator";
import isWithinOneMinute from "../../lib/isWithinOneMinute";
import Avatar from "../common/UserAvatar";

const MessageList = () => {
  const { messages, selectedUser } = useChatStore();
  const { authUser } = useAuthStore();

  const bottomRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!selectedUser || messages.length === 0) return;

    bottomRef.current?.scrollIntoView({
      behavior: "auto",
    });
  }, [selectedUser]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;

      setShowScrollButton(distanceFromBottom > 100);
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-0 flex-1">
      <div
        ref={scrollContainerRef}
        className="chatify-scrollbar h-full overflow-y-auto bg-[#F3F4FA] px-5 py-4"
      >
        <div className="flex w-full flex-col">
          {messages.map((message, index) => {
            const previousMessage = messages[index - 1];
            const nextMessage = messages[index + 1];

            const currentDate = new Date(message.createdAt).toDateString();

            const previousDate = previousMessage
              ? new Date(previousMessage.createdAt).toDateString()
              : null;

            const showDateSeparator = currentDate !== previousDate;

            // const isSent = message.senderId === authUser?._id;
            const senderId = message.senderId?._id ?? message.senderId;
            const isSent = String(senderId) === String(authUser?._id); 

            const isSameGroupAsPrevious = isWithinOneMinute(
              previousMessage,
              message,
              authUser?._id,
            );

            const isSameGroupAsNext = isWithinOneMinute(
              message,
              nextMessage,
              authUser?._id,
            );

            const isFirstInGroup = !isSameGroupAsPrevious;
            const isLastInGroup = !isSameGroupAsNext;

            return (
              <div key={message._id}>
                {showDateSeparator && (
                  <div className="mb-5 mt-4 flex items-center justify-center">
                    <span className="rounded-lg border border-[#E5E7F0] bg-white px-3 py-1 text-[12px] font-medium text-slate-600 shadow-sm">
                      {formatMessageDateSeparator(message.createdAt)}
                    </span>
                  </div>
                )}

                <div
                  className={`group flex items-end gap-2 ${
                    isSent ? "justify-end" : "justify-start"
                  } ${isFirstInGroup ? "mt-4 first:mt-0" : "mt-0.75"}`}
                >
                  {!isSent && (
                    <div className="w-7 shrink-0">
                      {isFirstInGroup && (
                        <Avatar
                          src={message.senderId?.profilePic}
                          name={message.senderId?.fullName || selectedUser?.fullName }
                          size="h-8 w-8"
                          alt=""
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
                        className={`rounded-[17px] px-4 ${
                          message.image ? "py-4" : "py-2.5"
                        } text-[14px] leading-6 shadow-sm ${
                          isSent
                            ? `bg-[#7F84F7] text-white ${
                                isFirstInGroup
                                  ? "rounded-tr-[17px]"
                                  : "rounded-tr-sm"
                              } ${
                                isLastInGroup
                                  ? "rounded-br-[17px]"
                                  : "rounded-br-sm"
                              }`
                            : `border border-[#E7E9F2] bg-white text-[#3F4354] ${
                                isFirstInGroup
                                  ? "rounded-tl-[17px]"
                                  : "rounded-tl-sm"
                              } ${
                                isLastInGroup
                                  ? "rounded-bl-[17px]"
                                  : "rounded-bl-sm"
                              }`
                        }`}
                      >
                        {message.image && (
                          <img
                            src={message.image}
                            alt="Message attachment"
                            className={`max-h-70 max-w-65 object-cover rounded-lg`}
                          />
                        )}

                        {message.text && (
                          <div className={message.image ? "mt-2" : ""}>
                            {message.text}
                          </div>
                        )}
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
                                  ? "text-[#53C7E8]"
                                  : "text-[#B7BAE8]"
                              }`}
                            />

                            <Check
                              size={13}
                              strokeWidth={2.2}
                              className={`absolute left-1.25 ${
                                message.isRead
                                  ? "text-[#53C7E8]"
                                  : "text-[#B7BAE8]"
                              }`}
                            />
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={bottomRef} />
        </div>
      </div>

      <ScrollToBottomButton show={showScrollButton} onClick={scrollToBottom} />
    </div>
  );
};

export default MessageList;
