import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

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
}));
