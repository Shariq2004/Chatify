import { useState } from "react";
import {
  Bell,
  MessageCircleMore,
  UsersRound,
  ChevronLeft,
  ChevronRight,
  LogOut,
  X,
  Check,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useChatStore } from "../../store/useChatStore";
import ProfileAvatar from "../common/ProfileAvatar";

const Sidebar = () => {
  const [isRead, setIsRead] = useState(true);
  const { authUser, logout, onlineUsers } = useAuthStore();

  const isOnline = authUser?._id ? onlineUsers.includes(authUser._id) : false;

  const {
    isSidebarOpen,
    toggleSidebar,
    isActiveTab,
    setIsActiveTab,
    resetChatStoreState,
  } = useChatStore();

  const navItems = [
    {
      label: "Notifications",
      icon: Bell,
    },
    {
      label: "Chats",
      icon: MessageCircleMore,
    },
    {
      label: "Contacts",
      icon: UsersRound,
    },
  ];

  const handleLogout = async () => {
    const success = await logout();

    if (success) {
      resetChatStoreState();
    }
  };

  return (
    <aside
      className={`relative flex h-full shrink-0 flex-col border-r border-[#E6E8F2] bg-[#FFFFFF] transition-[width] duration-300 ease-in-out ${
        isSidebarOpen ? "w-60" : "w-19"
      }`}
    >
      <div
        className={`flex h-19 items-center border-b border-[#E6E8F2] ${
          isSidebarOpen ? "justify-between px-5" : "justify-center"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-linear-to-br from-[#8184e8] via-[#7E84F1] to-[#6056e8] shadow-lg shadow-[#7F84F7]/15">
            <MessageCircleMore
              size={22}
              strokeWidth={2.5}
              className="text-white"
            />
          </div>

          {isSidebarOpen && (
            <span className="whitespace-nowrap text-[22px] font-bold text-slate-800">
              Chatify
            </span>
          )}
        </div>

        {isSidebarOpen && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-[#7F84F7]/10 hover:text-[#7F84F7] cursor-pointer transition-all duration-200 "
          >
            <ChevronLeft size={19} strokeWidth={2.2} />
          </button>
        )}
      </div>

      <nav className="flex flex-1 flex-col px-3 pt-6">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = isActiveTab === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setIsActiveTab(item.label)}
                className={`group flex h-11 items-center rounded-xl cursor-pointer transition-all duration-200 ${
                  isSidebarOpen ? "gap-3 px-3" : "justify-center relative"
                } ${
                  isActive
                    ? "bg-[#EDEEFC] text-[#6F75E8]"
                    : "text-slate-500 hover:bg-[#7F84F7]/5 hover:text-[#6F75E8]"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={isActive ? 2.3 : 2}
                  className="shrink-0"
                />

                {isSidebarOpen && (
                  <span className="whitespace-nowrap text-[14px] font-medium">
                    {item.label}
                  </span>
                )}

                {item.label === "Notifications" && (
                  <span
                    className={`h-2 w-2 rounded-full bg-[#7F84F7] ${
                      isSidebarOpen
                        ? "ml-auto mr-2"
                        : "absolute top-2 right-3.5"
                    }`}
                  />
                )}

                {!isRead && !(item.label === "Notifications") && (
                  <span
                    className={`flex items-center justify-center rounded-full bg-linear-to-br from-[#8184e8] via-[#7E84F1] to-[#6056e8]  text-[10px] font-semibold text-white ${
                      isSidebarOpen
                        ? "h-5 w-5 ml-auto mr-0.5"
                        : "absolute top-1 right-2.5 h-4 w-4"
                    }`}
                  >
                    3
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {!isSidebarOpen && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="mt-4 flex h-11 w-full items-center justify-center rounded-xl text-slate-400 hover:bg-[#7F84F7]/15 hover:text-[#7F84F7] cursor-pointer transition-all duration-200"
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        )}
      </nav>

      <div className="border-t border-slate-100 px-3 py-4">
        <button
          type="button"
          onClick={handleLogout}
          className={`mb-3 flex h-11 w-full items-center rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 cursor-pointer transition-all duration-200 ${
            isSidebarOpen ? "gap-3 px-3" : "justify-center"
          }`}
        >
          <LogOut size={21} strokeWidth={2} className="shrink-0" />

          {isSidebarOpen && (
            <span className="whitespace-nowrap text-[14px] font-medium">
              Logout
            </span>
          )}
        </button>

        {/* User Profile button */}
        <button
          type="button"
          onClick={() => setIsActiveTab("Profile")}
          className={`flex h-14.5 w-full items-center rounded-xl hover:bg-slate-50 cursor-pointer ${
            isSidebarOpen ? "gap-3 px-2" : "justify-center"
          }`}
        >
          <div className="relative shrink-0">
            <ProfileAvatar src={authUser?.profilePic} />

            <span
              className={`absolute bottom-0.5 right-0 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white ${
                isOnline ? "bg-emerald-500" : "bg-slate-400"
              }`}
            >
              {isOnline ? (
                <Check size={7} strokeWidth={3} className="text-white" />
              ) : (
                <X size={7} strokeWidth={3} className="text-white" />
              )}
            </span>
          </div>

          {isSidebarOpen && (
            <>
              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-[13px] font-semibold text-slate-600">
                  {authUser?.fullName}
                </p>

                <span
                  className={`text-[12px] font-medium ${
                    isOnline ? "text-[#55C58A]" : "text-[#8D91A3]"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
