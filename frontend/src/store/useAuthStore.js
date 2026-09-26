import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "Shariq", _id:1234, age: 22 },


}))