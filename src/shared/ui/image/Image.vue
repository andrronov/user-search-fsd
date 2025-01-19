<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
  }>(),
  {
    src: "/empty-photo.png",
  },
);
</script>

<template>
  <img :src="src" />
</template>

<style></style>
