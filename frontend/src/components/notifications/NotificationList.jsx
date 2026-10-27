import { Bell, CheckCheck } from "lucide-react";

const NotificationList = () => {
  const notifications = [];

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
        {notifications.length > 0 && (
          <button
            type="button"
            title="Mark all as read"
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[#7F84F7] transition-colors duration-200 hover:bg-[#7F84F7]/10 hover:text-[#7076E8]"
          >
            <CheckCheck size={16} strokeWidth={2} />
            All read
          </button>
        )}
      </div>

      {notifications.length > 0 && (
        <div className="mb-4 mt-2 flex shrink-0 gap-2 px-4">
          <button
            type="button"
            className="shrink-0 cursor-pointer rounded-full bg-[#7F84F7] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#7F84F7]/20"
          >
            All
          </button>

          <button
            type="button"
            className="shrink-0 cursor-pointer rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500 transition-colors duration-200 hover:bg-[#7F84F7]/10 hover:text-[#6F75E8]"
          >
            Unread
          </button>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
        {notifications.length === 0 ? (
          <div className="flex h-full min-h-64 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7F84F7]/10 text-[#7F84F7]">
              <Bell size={30} strokeWidth={1.8} />
            </div>

            <h3 className="text-base font-semibold text-slate-700">
              No notifications yet
            </h3>

            <p className="mt-2 max-w-60 text-sm leading-6 text-slate-400">
              You're all set! New notifications will appear here when you
              receive them.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default NotificationList;
