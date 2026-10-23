import { Bell, Check, CheckCheck, Settings } from "lucide-react";

const NotificationList = () => {
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message",
      message: "Sarah Wilson sent you a message.",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "message",
      title: "New message",
      message: "Alex Johnson sent you a message.",
      time: "18 min ago",
      unread: true,
    },
    {
      id: 3,
      type: "system",
      title: "Profile updated",
      message: "Your profile information was updated successfully.",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 4,
      type: "message",
      title: "New message",
      message: "Emily Davis sent you a message.",
      time: "Yesterday",
      unread: false,
    },
  ];

  return (
    <section className="flex h-full w-full flex-col border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="flex h-19 shrink-0 items-center justify-between px-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-800">
            Notifications
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Stay updated with your activity
          </p>
        </div>

        <button
          type="button"
          title="Mark all as read"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-[#7F84F7]/10 hover:text-[#7F84F7]"
        >
          <CheckCheck size={19} strokeWidth={2.1} />
        </button>
      </div>

      <div className="flex shrink-0 gap-2 px-4 mb-4 mt-2">
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

      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
        <div className="flex flex-col gap-1">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              type="button"
              className={`group flex w-full cursor-pointer gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-200 ${
                notification.unread
                  ? "bg-[#7F84F7]/5 hover:bg-[#7F84F7]/10"
                  : "hover:bg-slate-100/70"
              }`}
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7F84F7]/10 text-[#7F84F7]">
                <Bell size={18} strokeWidth={2.1} />

                {notification.unread && (
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#FAFBFF] bg-[#7F84F7]" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p
                    className={`truncate text-sm ${
                      notification.unread
                        ? "font-semibold text-slate-700"
                        : "font-medium text-slate-600"
                    }`}
                  >
                    {notification.title}
                  </p>

                  <span className="shrink-0 text-[10px] font-medium text-slate-400">
                    {notification.time}
                  </span>
                </div>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">
                  {notification.message}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotificationList;
