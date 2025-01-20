import { defineStore } from "pinia";
import type { UserInfo } from "@shared/types";

export const useUserStore = defineStore("users", {
  state: () => ({
    selectedUser: null as UserInfo | null,
  }),

  actions: {
    setUser(user: UserInfo) {
      this.selectedUser = user;
    },
    clearUser() {
      this.selectedUser = null;
    },
  },
});
