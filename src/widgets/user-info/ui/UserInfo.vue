<script setup lang="ts">
import { EmptyState } from "@/entities/page";
import Info from "./Info.vue";
</script>

<template>
  <EmptyState v-if="false" />
  <Info v-else />
</template>

<style></style>
