import { MessageCircle } from "lucide-react";
import UserAvatar from "../common/UserAvatar";

const ContactItem = ({id, name, avatar, online,selectedUser,click }) => {

  return (
    <button
      type="button"
      onClick={click}
      className={`group flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-200
         ${
          selectedUser?._id === id
          ? "bg-[#7F84F7]/6"
          : "hover:bg-[#F0F1FF]/60"
         }
         `}
    >
      <div className="relative shrink-0">
        <UserAvatar
          src={avatar}
          name={name}
          size="h-13 w-13"
        />

        {online && (
          <span className="absolute top-0.5 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#FAFBFF] bg-emerald-400" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover:text-[#6F73E8]">
          {name}
        </p>

        <p
          className={`mt-0.5 text-xs ${
            online ? "text-emerald-500" : "text-slate-400"
          }`}
        >
          {online ? "Online" : "Offline"}
        </p>
      </div>

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-300 opacity-0 transition-all duration-200 group-hover:bg-[#7F84F7]/10 group-hover:text-[#7F84F7] group-hover:opacity-100">
        <MessageCircle size={17} strokeWidth={2} />
      </div>
    </button>
  );
};

export default ContactItem;