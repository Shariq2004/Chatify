import {
  Bell,
  MessageCircleMore,
  UsersRound,
  ChevronLeft,
  ChevronRight,
  LogOut,
  X,
  Check,
  UserRound,
  Settings,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useChatStore } from "../../store/useChatStore";
import ProfileAvatar from "../common/ProfileAvatar";

const Sidebar = () => {
  const { authUser, logout, onlineUsers } = useAuthStore();

  const isOnline = authUser?._id ? onlineUsers.includes(authUser._id) : false;

  const {
    isSidebarOpen,
    toggleSidebar,
    isActiveTab,
    setIsActiveTab,
    resetChatStoreState,
    chats,
    selectedUser,
  } = useChatStore();

  const navItems = [
    { label: "Chats", icon: MessageCircleMore },
    { label: "Contacts", icon: UsersRound },
    { label: "Notifications", icon: Bell },
    { label: "Settings", icon: Settings },
    { label: "Profile", icon: UserRound },
  ];

  const hasUnreadMessages = chats.some((chat) => chat.unreadCount > 0);

  const handleLogout = async () => {
    const success = await logout();

    if (success) {
      resetChatStoreState();
    }
  };

  return (
    <>
      <aside
        className={`relative hidden h-full shrink-0 flex-col border-r border-[#E6E8F2] bg-white transition-[width] duration-300 ease-in-out md:flex ${
          isSidebarOpen ? "w-50 lg:w-60" : "w-19"
        }`}
      >
        <div
          className={`flex h-19 shrink-0 items-center border-b border-[#E6E8F2] ${
            isSidebarOpen ? "justify-between px-5" : "justify-center"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-linear-to-br from-[#8184e8] via-[#7E84F1] to-[#6056e8] shadow-lg shadow-[#7F84F7]/15">
              <MessageCircleMore
                size={22}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>

            {isSidebarOpen && (
              <span className="whitespace-nowrap text-[18px] lg:text-[22px] font-bold text-slate-800">
                Chatify
              </span>
            )}
          </div>

          {isSidebarOpen && (
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Collapse sidebar"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-[#7F84F7]/10 hover:text-[#7F84F7]"
            >
              <ChevronLeft size={19} strokeWidth={2.2} />
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="flex flex-1 flex-col px-3 pt-6">
          <div className="flex flex-col gap-2">
            {navItems
              .filter((item) => item.label !== "Profile")
              .map((item) => {
                const Icon = item.icon;
                const isActive = isActiveTab === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setIsActiveTab(item.label)}
                    className={`group relative flex h-11 cursor-pointer items-center rounded-xl transition-all duration-200 ${
                      isSidebarOpen ? "gap-3 px-3" : "justify-center"
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

                    {hasUnreadMessages && item.label === "Chats" && (
                      <span
                        className={`h-2 w-2 rounded-full bg-[#7F84F7] ${
                          isSidebarOpen
                            ? "ml-auto mr-2"
                            : "absolute right-3.5 top-2.5"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
          </div>

          {!isSidebarOpen && (
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Expand sidebar"
              className="mt-4 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-[#7F84F7]/15 hover:text-[#7F84F7]"
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          )}
        </nav>

        <div className="shrink-0 border-t border-slate-100 px-3 py-4">
          <button
            type="button"
            onClick={handleLogout}
            className={`mb-3 flex h-11 w-full cursor-pointer items-center rounded-xl text-slate-500 transition-all duration-200 hover:bg-red-50 hover:text-red-500 ${
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

          <button
            type="button"
            onClick={() => setIsActiveTab("Profile")}
            className={`flex h-14.5 w-full cursor-pointer items-center rounded-xl hover:bg-slate-50 ${
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
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      {!selectedUser && (
        <nav className="fixed inset-x-0 bottom-0 z-50 flex h-17 items-center justify-around border-t border-[#E6E8F2] bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-md backdrop-blur-md md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveTab === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setIsActiveTab(item.label)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl transition-colors ${
                  isActive
                    ? "text-[#6F75E8]"
                    : "text-slate-400 hover:text-[#6F75E8]"
                }`}
              >
                <span
                  className={`relative flex h-8 w-13 items-center justify-center rounded-2xl transition-colors duration-200 cursor-pointer ${
                    isActive ? "bg-[#F0F1FA]" : " "
                  }`}
                >
                  {item.label === "Profile" ? (
                    <span className="relative flex shrink-0">
                      <ProfileAvatar
                        src={authUser?.profilePic}
                        size="h-8 w-8"
                        IconSize={18}
                      />

                      <span
                        className={`absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ${
                          isOnline ? "bg-[#55C58A]" : "bg-[#8D91A3]"
                        }`}
                      >
                        {isOnline ? (
                          <Check
                            size={8}
                            strokeWidth={3.5}
                            className="text-white"
                          />
                        ) : (
                          <X
                            size={8}
                            strokeWidth={3.5}
                            className="text-white"
                          />
                        )}
                      </span>
                    </span>
                  ) : (
                    <Icon size={21} strokeWidth={isActive ? 2.4 : 1.9} />
                  )}

                  {hasUnreadMessages && item.label === "Chats" && (
                    <span className="absolute right-3 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#7F84F7]" />
                  )}
                </span>

                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-[#6F75E8]" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Sidebar;
