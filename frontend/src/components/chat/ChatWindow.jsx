import { react, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import SelectedUserProfilePanel from "../profile/SelectedUserProfilePanel";


const ChatWindow = () => {

  return (
    <div className="relative flex min-w-0 flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        <ChatHeader />

        <MessageList />

        <MessageInput />
      </div>

      <SelectedUserProfilePanel/>
    </div>
  );
};

export default ChatWindow;
