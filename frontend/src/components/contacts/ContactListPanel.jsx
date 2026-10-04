import { useState } from "react";
import { Search } from "lucide-react";
import ContactItem from "./ContactItem";

const ContactListPanel = () => {
  const [search, setSearch] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Sarah Wilson",
      avatar: "",
      online: true,
    },
    {
      id: 2,
      name: "Alex Johnson",
      avatar: "",
      online: true,
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
    {
      id: 5,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
    {
      id: 6,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
    {
      id: 7,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
    {
      id: 8,
      name: "Emily Davis",
      avatar: "",
      online: false,
    },
  ];

  return (
    <section className="flex h-full shrink-0 flex-col border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="flex h-19 shrink-0 items-center justify-between px-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-800">
            Contacts
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">24 contacts</p>
        </div>

        <span className="rounded-full bg-[#7F84F7]/10 px-2.5 py-1 text-xs font-medium text-[#7F84F7]">
          8 online
        </span>
      </div>

      <div className="shrink-0 px-4">
        <div className="flex h-10 items-center gap-3 rounded-full border border-slate-200/80 bg-[#7F84F7]/5 px-3">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="chatuser-scrollbar min-h-0 flex-1 overflow-y-auto px-2 py-3">
        <div className="flex flex-col gap-1">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              avatar={contact.avatar}
              online={contact.online}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactListPanel;
