import { useState } from "react";
import {
  ChevronRight,
  Mail,
  Phone,
  Image as ImageIcon,
  Check,
  X,
} from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import UserAvatar from "../common/UserAvatar";
import AllMedia from "./AllMedia";
import MediaThumbnail from "./MediaThumbnail";

const ProfilePanel = () => {
  const { isProfileOpen, toggleProfile, selectedUser, messages } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = selectedUser?._id
    ? onlineUsers.includes(selectedUser._id)
    : false;

  const [showAllMedia, setShowAllMedia] = useState(false);

  const media = messages.filter((message) => message.image);

  return (
    <aside
      className={`absolute inset-0 z-20 flex h-full w-full shrink-0 flex-col overflow-hidden border-l border-[#E7E9F2] bg-white transition-transform duration-300 ease-in-out ${isProfileOpen ? "translate-x-0" : "translate-x-full"} 2xl:relative 2xl:inset-auto 2xl:z-auto 2xl:translate-x-0 2xl:transition-[width] ${isProfileOpen ? "2xl:w-85" : "2xl:w-0"}`}
    >
      {showAllMedia ? (
        <AllMedia onBack={() => setShowAllMedia(false)} />
      ) : (
        <>
          <div className="flex h-19 shrink-0 items-center border-b border-[#E7E9F2] px-5">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleProfile}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8D91A3] transition-all duration-200 hover:bg-[#F3F4FA] hover:text-[#7F84F7] cursor-pointer"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>

              <h2 className="text-[15px] font-semibold text-[#3F4354]">
                Contact Info
              </h2>
            </div>
          </div>

          <div className="chatify-scrollbar min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-col items-center px-6 pb-6 pt-7">
              <UserAvatar
                src={selectedUser?.profilePic}
                name={selectedUser?.fullName || "User-Profile-Image"}
                size="h-25 w-25"
                textSize="text-4xl"
              />

              <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-[#3F4354]">
                {selectedUser?.fullName || "User"}
              </h3>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span
                  className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${
                    isOnline ? "bg-[#55C58A]" : "bg-[#9AA0B5]"
                  }`}
                >
                  {isOnline ? (
                    <Check
                      size={9}
                      strokeWidth={3}
                      className="block text-white"
                    />
                  ) : (
                    <X size={9} strokeWidth={3} className="block text-white" />
                  )}
                </span>

                <span
                  className={`text-[12px] font-medium ${
                    isOnline ? "text-[#55C58A]" : "text-[#8D91A3]"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>

              <p className="mt-4 max-w-65 text-center text-[13px] leading-5 text-[#8D91A3]">
                {selectedUser?.bio ||
                  selectedUser?.status ||
                  "No bio available"}
              </p>
            </div>

            <div className="px-5">
              <div className="h-px bg-[#EEF0F5]" />
            </div>

            <section className="px-5 py-5">
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9AA0B5]">
                Contact Info
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#F2F3FF] text-[#7F84F7]">
                    <Mail size={17} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] text-[#9AA0B5]">Email</p>
                    <p className="truncate text-[13px] font-medium text-[#4A4E5E]">
                      {selectedUser?.email || "No email available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#F2F3FF] text-[#7F84F7]">
                    <Phone size={17} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] text-[#9AA0B5]">Phone</p>
                    <p className="text-[13px] font-medium text-[#4A4E5E]">
                      {selectedUser?.phoneNumber || "No phone number available"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="px-5">
              <div className="h-px bg-[#EEF0F5]" />
            </div>

            <section className="px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9AA0B5]">
                  Shared Media
                </h4>

                {media.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAllMedia(true)}
                    className="cursor-pointer text-[12px] font-medium text-[#7F84F7] transition-colors hover:text-[#686DE8]"
                  >
                    See all
                  </button>
                )}
              </div>

              {media.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {media
                    .slice(-3)
                    .reverse()
                    .map((item) => (
                      <MediaThumbnail key={item._id} imageUrl={item.image} />
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center rounded-xl bg-[#F8F9FE] px-4 py-6 text-center">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#7F84F7]">
                    <ImageIcon size={20} strokeWidth={1.8} />
                  </div>

                  <p className="text-[12px] font-medium text-[#4A4E5E]">
                    No shared media yet
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[#9AA0B5]">
                    Photos shared in this chat will appear here.
                  </p>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </aside>
  );
};

export default ProfilePanel;
