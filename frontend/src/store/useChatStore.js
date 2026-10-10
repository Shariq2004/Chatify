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

  getMessagesByUserId: async (userId) => {
    set({ isMessagesLoading: true });

    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
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

  listenForMessages: () => {
    const socket = useAuthStore.getState().socket;

    if (!socket) return;
    socket.off("newMessage");

    const handleNewMessage = (newMessage) => {
      const { selectedUser, isSoundEnabled, messages } = get();

      if (!selectedUser) return;

      const senderId = String(newMessage.senderId?._id ?? newMessage.senderId);

      const selectedUserId = String(selectedUser._id);

      if (senderId !== selectedUserId) return;

      set({ messages: [...messages, newMessage], });

      if (isSoundEnabled) {
        const notificationSound = new Audio("/sounds/notification.mp3");

        notificationSound.currentTime = 0;

        notificationSound.play().catch((error) => {
          console.log("Audio play failed:", error);
        });
      }
    };

    socket.on("newMessage", handleNewMessage);
  },

  stopListeningToMessages: () => {
    const socket = useAuthStore.getState().socket;

    if (!socket) return;

    socket.off("newMessage");
  },

  // listenForMessages: () => {
  //   const { selectedUser, isSoundEnabled } = get();
  //   if (!selectedUser) return;

  //   const socket = useAuthStore.getState().socket;

  //   socket.on("newMessage", (newMessage) => {
  //     const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
  //     if (!isMessageSentFromSelectedUser) return;

  //     const currentMessages = get().messages;
  //     set({ messages: [...currentMessages, newMessage] });

  //     if (isSoundEnabled) {
  //       const notificationSound = new Audio("/sounds/notification.mp3");

  //       notificationSound.currentTime = 0; // reset to start
  //       notificationSound.play().catch((e) => console.log("Audio play failed:", e));
  //     }
  //   });
  // },

  // stopListeningToMessages: () => {
  //   const socket = useAuthStore.getState().socket;
  //   socket.off("newMessage");
  // },
}));
