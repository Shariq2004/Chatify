import { useEffect, useRef, useState } from "react";
import { Check, MoreHorizontal, Image as ImageIcon } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import ScrollToBottomButton from "./ScrollToBottomButton";
import formatMessageDateSeparator from "../../lib/formatMessageDateSeparator";
import Avatar from "../common/UserAvatar";

const MessageList = () => {
  const { messages, selectedUser } = useChatStore();
  const { authUser } = useAuthStore();

  const bottomRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const formatTime = (timestamp) =>
    new Date(timestamp).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const getSenderId = (message) =>
    String(message?.senderId?._id ?? message?.senderId ?? "");

  // Check whether two consecutive messages belong together
  const areWithinOneMinute = (first, second) => {
    if (!first || !second) return false;

    if (getSenderId(first) !== getSenderId(second)) {
      return false;
    }

    const firstTime = new Date(first.createdAt).getTime();
    const secondTime = new Date(second.createdAt).getTime();

    if (!Number.isFinite(firstTime) || !Number.isFinite(secondTime)) {
      return false;
    }

    return (
      Math.abs(secondTime - firstTime) < 60 * 1000 &&
      new Date(firstTime).toDateString() === new Date(secondTime).toDateString()
    );
  };

  useEffect(() => {
    if (!selectedUser || messages.length === 0) return;

    bottomRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  }, [selectedUser]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
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
        className="chatify-scrollbar h-full overflow-y-auto bg-[#F3F4FA] px-6 py-4"
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

            const isSent = getSenderId(message) === String(authUser?._id);

            // Show avatar once for consecutive messages
            // from the same sender within one minute.
            const isWithinPrevious = areWithinOneMinute(
              previousMessage,
              message,
            );

            const isWithinNext = areWithinOneMinute(message, nextMessage);

            const showAvatar = !isSent && !isWithinPrevious;
            const showTime = !isWithinNext;

            const imageUrl =
              typeof message.image === "string"
                ? message.image
                : message.image?.secure_url || message.image?.url || "";

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
                  } ${isWithinPrevious ? "mt-1" : "mt-4"}`}
                >
                  {!isSent && (
                    <div className="w-7 shrink-0">
                      {showAvatar && (
                        <Avatar
                          src={message.senderId?.profilePic || ""}
                          name={
                            message.senderId?.fullName ||
                            selectedUser?.fullName ||
                            "User"
                          }
                          size="h-8 w-8"
                          alt=""
                        />
                      )}
                    </div>
                  )}

                  <div
                    className={`flex max-w-[70%] min-w-0 flex-col ${
                      isSent ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-1.5">
                      {isSent && (
                        <button
                          type="button"
                          aria-label="Message options"
                          className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                      )}

                      <div
                        className={`min-w-0 rounded-[17px] px-4 ${
                          imageUrl ? "py-3" : "py-2.5"
                        } text-[14px] leading-6 shadow-sm ${
                          isSent
                            ? "bg-[#7F84F7] text-white"
                            : "border border-[#E7E9F2] bg-white text-[#3F4354]"
                        }`}
                      >
                        {imageUrl && (
                          <div className="relative overflow-hidden rounded-lg">
                            {message.isUploading && (
                              <div className="relative flex h-48 w-64 max-w-full items-center justify-center overflow-hidden rounded-xl border border-[#E5E7F2] bg-linear-to-br from-[#F0F1FA] via-[#E8EBF6] to-[#F3F0FF]">
                                <div className="absolute inset-0 animate-pulse bg-linear-to-br from-white/40 via-transparent to-[#DCDFFF]/30" />

                                <div className="relative flex flex-col items-center gap-2">
                                  <div className="flex h-12 w-12 animate-[pulse_1.8s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-[#8589D8] shadow-sm backdrop-blur-sm">
                                    <ImageIcon size={23} strokeWidth={1.7} />
                                  </div>

                                  <span className="text-xs font-medium tracking-wide text-[#8589D8]">
                                    Loading image...
                                  </span>
                                </div>
                              </div>
                            )}

                            {!message.isUploading && (
                              <img
                                src={imageUrl}
                                alt="Message attachment"
                                className="block max-h-70 max-w-full rounded-lg object-contain"
                                onError={() => {
                                  console.error(
                                    "Message image failed to load:",
                                    imageUrl,
                                  );
                                }}
                              />
                            )}
                          </div>
                        )}

                        {message.text && (
                          <div className={imageUrl ? "mt-2" : ""}>
                            {message.text}
                          </div>
                        )}
                      </div>

                      {!isSent && (
                        <button
                          type="button"
                          aria-label="Message options"
                          className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#9AA0B5] opacity-0 shadow-sm transition-all duration-200 hover:text-[#7F84F7] group-hover:opacity-100"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                      )}
                    </div>

                    {showTime && (
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
