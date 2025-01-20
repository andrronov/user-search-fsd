<script setup lang="ts">
import { useUserStore } from "@/shared/stores/users";
import { EmptyState } from "@/entities/page";
import Info from "./Info.vue";

const userStore = useUserStore();
</script>

<template>
  <EmptyState v-if="!userStore.selectedUser" />
  <Info v-else :user="userStore.selectedUser" />
</template>

<style></style>
