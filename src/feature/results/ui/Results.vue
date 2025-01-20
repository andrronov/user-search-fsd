<script setup lang="ts">
import { UserCard } from "@/entities/user";
import { useUserStore } from "@/shared/stores/users";
import { LoadingDots } from "@/shared/ui";
import type { UserInfo } from "@shared/types";

defineProps<{
  users: UserInfo[];
  loading: boolean;
}>();

const userStore = useUserStore();

const selectUser = (user: UserInfo) => {
  userStore.setUser(user);
};

const checkUser = (id): boolean => {
  if (!userStore.selectedUser) {
    return false;
  }

  return userStore.selectedUser.id === id;
};
</script>

<template>
  <div class="results__container">
    <div class="title__container">
      <span class="text__primary"> Результаты </span>
      <LoadingDots v-if="loading" />
    </div>
    <template v-if="users.length">
      <UserCard
        v-for="user in users"
        :key="user.id"
        @click="selectUser(user)"
        :user
        :selected="checkUser(user.id)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.results__container {
  width: 100%;
  height: 100%;
  max-height: 665px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .title__container {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
