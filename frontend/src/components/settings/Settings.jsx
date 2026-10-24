import { useState } from "react";
import { BellRing, Keyboard, Sun, Moon } from "lucide-react";
import { playMouseClickSound } from "../../lib/playMouseClickSound";
import { useChatStore } from "../../store/useChatStore";

const Settings = () => {
  const { isNotificationEnabled, isKeypressSoundEnabled, toggleNotificationSound, toggleKeypressSound, } = useChatStore();
  const [theme, setTheme] = useState("light");

  return (
    <section className="flex h-full w-full flex-col bg-[#F8F9FE]">

      <div className="flex h-19 shrink-0 flex-col items-start justify-center px-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-800">
          Settings
        </h2>

        <p className="mt-0.5 text-xs text-[#9298AD]">
          Customize your Chatify experience
        </p>
      </div>
      
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-5 sm:px-5 chatuser-scrollbar">
        <div className="mx-auto w-full max-w-3xl space-y-2.5 sm:space-y-4">
          {/* Notifications */}
          <section className="overflow-hidden rounded-2xl border border-[#E6E8F2] bg-white">
            <div className="border-b border-[#E6E8F2] px-4 py-4">
              <h3 className="text-sm font-semibold text-[#3F4354]">
                Notifications
              </h3>
              <p className="mt-1 text-xs text-[#9298AD]">
                Manage your message notifications
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-4">
              <BellRing size={20} className="shrink-0 text-[#7F84F7]" />

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-[#3F4354]">
                  Notification sound
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#9298AD]">
                  Play sound for new messages
                </p>
              </div>

              <span
                className={`w-7 text-right text-xs font-medium ${
                  isNotificationEnabled ? "text-[#7F84F7]" : "text-[#9298AD]"
                }`}
              >
                {isNotificationEnabled ? "On" : "Off"}
              </span>

              <button
                type="button"
                role="switch"
                onClick={() => {
                  playMouseClickSound();
                  toggleNotificationSound();
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out active:scale-95 ${
                  isNotificationEnabled ? "bg-[#7F84F7]" : "bg-[#D9DCE8]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
                    isNotificationEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </section>

          {/* Sounds */}
          <section className="overflow-hidden rounded-2xl border border-[#E6E8F2] bg-white">
            <div className="border-b border-[#E6E8F2] px-4 py-4">
              <h3 className="text-sm font-semibold text-[#3F4354]">Sounds</h3>
              <p className="mt-1 text-xs text-[#9298AD]">
                Personalize the sounds while chatting
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-4">
              <Keyboard size={20} className="shrink-0 text-[#7F84F7]" />

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-[#3F4354]">
                  Keypress sound
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#9298AD]">
                  Play sound while typing a message
                </p>
              </div>

              <span
                className={`w-7 text-right text-xs font-medium ${
                  isKeypressSoundEnabled ? "text-[#7F84F7]" : "text-[#9298AD]"
                }`}
              >
                {isKeypressSoundEnabled ? "On" : "Off"}
              </span>

              <button
                type="button"
                role="switch"
                onClick={() => {
                  playMouseClickSound();
                  toggleKeypressSound();
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out active:scale-95 ${
                  isKeypressSoundEnabled ? "bg-[#7F84F7]" : "bg-[#D9DCE8]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${
                    isKeypressSoundEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </section>

          {/* Appearance */}
          <section className="overflow-hidden rounded-2xl border border-[#E6E8F2] bg-white">
            <div className="border-b border-[#E6E8F2] px-4 py-4">
              <h3 className="text-sm font-semibold text-[#3F4354]">
                Appearance
              </h3>
              <p className="mt-1 text-xs text-[#9298AD]">
                Choose how Chatify looks on your device
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    playMouseClickSound();
                    setTheme("light");
                  }}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                    theme === "light"
                      ? "border-[#7F84F7] bg-[#F5F5FF]"
                      : "border-[#E6E8F2] bg-white hover:bg-[#F8F9FE]"
                  }`}
                >
                  <Sun
                    size={21}
                    className={
                      theme === "light" ? "text-[#7F84F7]" : "text-[#9298AD]"
                    }
                  />

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-[#3F4354]">
                      Light
                    </span>

                    <span className="mt-0.5 block text-xs text-[#9298AD]">
                      Clean and bright
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playMouseClickSound();
                    setTheme("dark");
                  }}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                    theme === "dark"
                      ? "border-[#7F84F7] bg-[#F5F5FF]"
                      : "border-[#E6E8F2] bg-white hover:bg-[#F8F9FE]"
                  }`}
                >
                  <Moon
                    size={21}
                    className={
                      theme === "dark" ? "text-[#7F84F7]" : "text-[#9298AD]"
                    }
                  />

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-[#3F4354]">
                      Dark
                    </span>

                    <span className="mt-0.5 block text-xs text-[#9298AD]">
                      Easy on the eyes
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </section>
          <p className="mt-5 text-center text-xs sm:text-sm text-[#A0A5B7]">
            Your preferences are saved automatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Settings;
