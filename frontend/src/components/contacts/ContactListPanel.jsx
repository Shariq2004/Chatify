import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import ChatItemSkeleton from "../chats/ChatItemSkeleton";
import { useChatStore } from "../../store/useChatStore";
import SearchInput from "../common/SearchInput";

const ContactListPanel = () => {
  const { isUsersLoading, allContacts, getAllContacts,selectedUser, setSelectedUser } = useChatStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  const filteredContacts = allContacts.filter((contact) =>
    contact.fullName?.toLowerCase().includes(search.toLowerCase()),
  );

  const onlineCount = allContacts.filter((contact) => contact.isOnline).length;

  return (
    <section className="flex h-full w-full shrink-0 flex-col border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="flex h-19 shrink-0 items-center justify-between px-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-800">
            Contacts
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            {allContacts.length} contacts
          </p>
        </div>

        <span className="rounded-full bg-[#7F84F7]/10 px-2.5 py-1 text-xs font-medium text-[#7F84F7]">
          {onlineCount} online
        </span>
      </div>

      <SearchInput
        search={search}
        setSearch={setSearch}
        placeholder="Search contacts..."
      />

      <div className="chatuser-scrollbar flex-1 overflow-y-auto px-2">
        {isUsersLoading ? (
          <div className="flex flex-col gap-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <ChatItemSkeleton key={index} />
            ))}
          </div>
        ) : filteredContacts.length > 0 ? (
          <div className="flex flex-col gap-1">
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact._id}
                id={contact._id}
                name={contact.fullName}
                avatar={contact.profilePic}
                online={contact.isOnline}
                click={() => setSelectedUser(contact)}
                selectedUser={selectedUser}
              />
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-base text-slate-400">
            No contacts found
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactListPanel;
