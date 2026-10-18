import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  allContacts: [],
  chats: [],
  messages: [],

  isActiveTab: "Chats",
  selectedUser: null,

  isSidebarOpen: false,
  isProfileOpen: false,

  isUsersLoading: false,
  isMessagesLoading: false,

  isSoundEnabled: localStorage.getItem("isSoundEnabled") === "true",

  resetChatStoreState: () => {
    set({
      allContacts: [],
      chats: [],
      messages: [],
      isActiveTab: "Chats",
      selectedUser: null,
      isSidebarOpen: false,
      isProfileOpen: false,
      isUsersLoading: false,
      isMessagesLoading: false,
    });
  },

  toggleSound: () => {
    const newValue = !get().isSoundEnabled;
    localStorage.setItem("isSoundEnabled", newValue);
    set({ isSoundEnabled: newValue });
  },

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  toggleProfile: () =>
    set((state) => ({
      isProfileOpen: !state.isProfileOpen,
    })),

  setIsActiveTab: (tab) => set({ isActiveTab: tab }),

  setSelectedUser: (selectedUser) => set({ selectedUser }),

  getAllContacts: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/contacts");
      set({ allContacts: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      set({ isUsersLoading: false });
    }
  },
  getMyChats: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/chats");
      set({ chats: res.data });
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      set({ isUsersLoading: false });
    }
  },

  // getMessagesByUserId: async (userId) => {
  //   set({ isMessagesLoading: true });

  //   try {
  //     const res = await axiosInstance.get(`/messages/${userId}`);
  //     set({ messages: res.data });
  //   } catch (error) {
  //     console.error(
  //       "Error fetching messages:",
  //       error.response?.data?.message || error.message,
  //     );
  //     toast.error(error.response?.data?.message || "Something went wrong");
  //   } finally {
  //     set({ isMessagesLoading: false });
  //   }
  // },

  getMessagesByUserId: async (userId) => {
    set({ isMessagesLoading: true });

    try {
      const res = await axiosInstance.get(`/messages/${userId}`);

      set((state) => ({
        messages: res.data,
        chats: state.chats.map((chat) =>
          String(chat._id) === String(userId)
            ? { ...chat, unreadCount: 0 }
            : chat,
        ),
      }));
    } catch (error) {
      console.error(
        "Error fetching messages:",
        error.response?.data?.message || error.message,
      );
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  // sendMessage: async (messageData) => {
  //   const { selectedUser, messages } = get();

  //   const { authUser } = useAuthStore.getState();

  //   const tempId = `temp-${Date.now()}`;

  //   const optimisticMessage = {
  //     _id: tempId,
  //     senderId: authUser._id,
  //     receiverId: selectedUser._id,
  //     text: messageData.text,
  //     image: messageData.image,
  //     createdAt: new Date().toISOString(),
  //     isOptimistic: true, // flag to identify optimistic messages (optional)
  //   };
  //   // immidetaly update the ui by adding the message
  //   set({ messages: [...messages, optimisticMessage] });

  //   try {
  //     const formData = new FormData();

  //     formData.append("text", messageData.text);

  //     if (messageData.image) {
  //       formData.append("image", messageData.image.file);
  //     }
  //     const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, formData,);
  //     set({ messages: messages.concat(res.data) });
  //   } catch (error) {
  //      // remove optimistic message on failure
  //     set({ messages: messages });
  //     toast.error(error.response?.data?.message || "Something went wrong");
  //   }
  // },

  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    const { authUser } = useAuthStore.getState();

    const tempId = `temp-${Date.now()}`;

    const optimisticMessage = {
      _id: tempId,
      senderId: authUser._id,
      receiverId: selectedUser._id,
      text: messageData.text,
      image: messageData.image?.preview || "",
      createdAt: new Date().toISOString(),
      isOptimistic: true,
    };

    set((state) => ({
      messages: [...state.messages, optimisticMessage],
    }));

    try {
      const formData = new FormData();

      formData.append("text", messageData.text);

      if (messageData.image) {
        formData.append("image", messageData.image.file);
      }

      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        formData,
      );

      set((state) => ({
        messages: state.messages.map((message) =>
          message._id === tempId ? res.data : message,
        ),
      }));
    } catch (error) {
      set((state) => ({
        messages: state.messages.filter((message) => message._id !== tempId),
      }));

      toast.error(error.response?.data?.message || "Something went wrong");
    }
  },

//   listenForMessages: () => {
//   const socket = useAuthStore.getState().socket;

//   if (!socket) return; 

//   socket.off("newMessage");
//   socket.off("messagesRead");

//   const handleNewMessage = (newMessage) => {
//     const { selectedUser, isSoundEnabled, isActiveTab } = get();

//     const currentUserId = String(
//       useAuthStore.getState().authUser?._id
//     );

//     const senderId = String(
//       newMessage.senderId?._id ?? newMessage.senderId
//     );

//     const receiverId = String(
//       newMessage.receiverId?._id ?? newMessage.receiverId
//     );

//     const otherUserId =
//       senderId === currentUserId ? receiverId : senderId;

//       console.log("New message received:", newMessage);
// console.log("Other user ID:", otherUserId);
// console.log("Current chats:", get().chats.map((chat) => ({
//   id: String(chat._id),
//   unreadCount: chat.unreadCount,
// })));

//     const isIncoming = senderId !== currentUserId;

//     const isChatOpen =
//       String(selectedUser?._id) === otherUserId &&
//       isActiveTab === "Chats";

//     set((state) => ({
//       chats: state.chats
//         .map((chat) => {
//           if (String(chat._id) !== otherUserId) {
//             return chat;
//           }

//           return {
//             ...chat,
//             lastMessage:
//               newMessage.text || (newMessage.image ? "Photo" : ""),
//             lastMessageTime: newMessage.createdAt,
//             unreadCount: isIncoming
//               ? isChatOpen
//                 ? 0
//                 : (Number(chat.unreadCount) || 0) + 1
//               : Number(chat.unreadCount) || 0,
//           };
//         })
//         .sort(
//           (a, b) =>
//             new Date(b.lastMessageTime || 0) -
//             new Date(a.lastMessageTime || 0)
//         ),
//     }));

//     if (isChatOpen) {
//       set((state) => ({
//         messages: state.messages.some(
//           (message) =>
//             String(message._id) === String(newMessage._id)
//         )
//           ? state.messages
//           : [...state.messages, newMessage],
//       }));

//       if (isIncoming) {
//         socket.emit("markMessagesRead", { senderId });
//       }
//     }

//     if (isIncoming && isSoundEnabled) {
//       const notificationSound = new Audio(
//         "/sounds/notification.mp3"
//       );

//       notificationSound.currentTime = 0;

//       notificationSound
//         .play()
//         .catch((error) =>
//           console.log("Audio play failed:", error)
//         );
//     }
//   };

//   const handleMessagesRead = ({
//     messageIds = [],
//     readerId,
//   } = {}) => {
//     const currentUserId = String(
//       useAuthStore.getState().authUser?._id
//     );

//     const selectedUserId = String(get().selectedUser?._id);

//     if (String(readerId) !== selectedUserId) return;

//     const readIds = new Set(messageIds.map(String));

//     set((state) => ({
//       messages: state.messages.map((message) => {
//         const messageSenderId = String(
//           message.senderId?._id ?? message.senderId
//         );

//         if (
//           readIds.has(String(message._id)) &&
//           messageSenderId === currentUserId
//         ) {
//           return {
//             ...message,
//             isRead: true,
//           };
//         }

//         return message;
//       }),
//     }));
//   };

//   socket.on("newMessage", handleNewMessage);
//   socket.on("messagesRead", handleMessagesRead);
// },



listenForMessages: () => {
  const socket = useAuthStore.getState().socket;

  if (!socket) return; 

  socket.off("newMessage");
  socket.off("messagesRead");
 
  
const handleNewMessage = (newMessage) => {
  const { selectedUser, isSoundEnabled, isActiveTab } = get();

  const currentUserId = String(
    useAuthStore.getState().authUser?._id
  );

  const senderId = String(
    newMessage.senderId?._id ?? newMessage.senderId
  );

  const receiverId = String(
    newMessage.receiverId?._id ?? newMessage.receiverId
  );

  const otherUserId =
    senderId === currentUserId ? receiverId : senderId;

  const isIncoming = receiverId === currentUserId;

  const isChatOpen =
    String(selectedUser?._id) === otherUserId &&
    isActiveTab === "Chats";

  const partner =
    isIncoming && typeof newMessage.senderId === "object"
      ? newMessage.senderId
      : selectedUser?._id &&
          String(selectedUser._id) === otherUserId
        ? selectedUser
        : null;

  set((state) => {
    const chatExists = state.chats.some(
      (chat) => String(chat._id) === otherUserId
    );

    const updatedChats = state.chats.map((chat) => {
      if (String(chat._id) !== otherUserId) {
        return chat;
      }

      return {
        ...chat,
        lastMessage:
          newMessage.text || (newMessage.image ? "Photo" : ""),
        lastMessageTime: newMessage.createdAt,
        unreadCount: isIncoming
          ? isChatOpen
            ? 0
            : (Number(chat.unreadCount) || 0) + 1
          : Number(chat.unreadCount) || 0,
      };
    });

    // Agar chat list mein partner nahi hai, to nayi chat add karo.
    if (!chatExists && partner?._id) {
      updatedChats.push({
        ...partner,
        lastMessage:
          newMessage.text || (newMessage.image ? "Photo" : ""),
        lastMessageTime: newMessage.createdAt,
        unreadCount: isIncoming && !isChatOpen ? 1 : 0,
      });
    }

    updatedChats.sort(
      (a, b) =>
        new Date(b.lastMessageTime || 0) -
        new Date(a.lastMessageTime || 0)
    );

    const updatedMessages = isChatOpen
      ? state.messages.some(
          (message) =>
            String(message._id) === String(newMessage._id)
        )
        ? state.messages
        : [...state.messages, newMessage]
      : state.messages;

    return {
      chats: updatedChats,
      messages: updatedMessages,
    };
  });

  // Open chat mein incoming message ko read mark karo.
  if (isIncoming && isChatOpen) {
    socket.emit("markMessagesRead", { senderId });
  }

  if (isIncoming && isSoundEnabled) {
    const notificationSound = new Audio(
      "/sounds/notification.mp3"
    );

    notificationSound.play().catch((error) => {
      console.log("Audio play failed:", error);
    });
  }
};


  const handleMessagesRead = ({
    messageIds = [],
    readerId,
  } = {}) => {
    const currentUserId = String(
      useAuthStore.getState().authUser?._id
    );

    const selectedUserId = String(get().selectedUser?._id);

    if (String(readerId) !== selectedUserId) return;

    const readIds = new Set(messageIds.map(String));

    set((state) => ({
      messages: state.messages.map((message) => {
        const messageSenderId = String(
          message.senderId?._id ?? message.senderId
        );

        if (
          readIds.has(String(message._id)) &&
          messageSenderId === currentUserId
        ) {
          return {
            ...message,
            isRead: true,
          };
        }

        return message;
      }),
    }));
  };

  socket.on("newMessage", handleNewMessage);
  socket.on("messagesRead", handleMessagesRead);
},

stopListeningToMessages: () => {
  const socket = useAuthStore.getState().socket;

  if (!socket) return;

  socket.off("newMessage");
  socket.off("messagesRead");
},
}));
