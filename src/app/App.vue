<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { layouts } from "./layouts";
import { useRoute } from "vue-router";

const route = useRoute();

useSeoMeta({
  ogTitle: "Жилфонд",
  ogType: "website",
});
</script>

<template>
  <component :is="layouts[route.meta.layout]">
    <router-view />
  </component>
</template>

<style></style>
