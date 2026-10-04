import { useState } from "react";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import UserAvatar from "../common/UserAvatar";

const ProfilePanel = () => {
  const { isProfileOpen, toggleProfile } = useChatStore();

  return (
    <aside
      className={`flex h-full shrink-0 flex-col overflow-hidden border-l border-[#E7E9F2] bg-white transition-[width] duration-300 ease-in-out ${
        isProfileOpen ? "w-85" : "w-0"
      }`}
    >
      <div className="flex h-19 shrink-0 items-center border-b border-[#E7E9F2] px-5">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleProfile}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8D91A3] transition-all duration-200 hover:bg-[#F3F4FA] hover:text-[#7F84F7] cursor-pointer"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          <h2 className="text-[15px] font-semibold text-[#3F4354]">
            Profile Info
          </h2>
        </div>
      </div>

      <div className="chatify-scrollbar min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col items-center px-6 pb-6 pt-7">
           <UserAvatar
            src="/avatar.png"
            name="Sarah Wilson"
            size="h-25"
          />

          <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-[#3F4354]">
            Alex Johnson
          </h3>

          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55C58A]" />
            <span className="text-[12px] font-medium text-[#8D91A3]">
              Online
            </span>
          </div>

          <p className="mt-4 max-w-65 text-center text-[13px] leading-5 text-[#8D91A3]">
            Building something cool. Always open to a good conversation.
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
                  alex@example.com
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
                  +91 98765 43210
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

            <button className="text-[12px] font-medium text-[#7F84F7] transition hover:text-[#686DE8]">
              See all
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square overflow-hidden rounded-[10px] bg-[#F3F4FA]">
              <img
                src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3N8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-[10px] bg-[#F3F4FA]">
              <img
                src="https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI="
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-[10px] bg-[#F3F4FA]">
              <img
                src="https://www.health.com/thmb/G_mz7T-jCGFGYm8PyKlwjWT3pJs=/2119x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1498826563-db5d95e08d294ae6bc3860f901ee0c40.jpg"
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default ProfilePanel;
