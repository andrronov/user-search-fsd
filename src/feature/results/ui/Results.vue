<script setup lang="ts">
import { UserCard } from "@/entities/user";
</script>

<template>
  <div class="results__container">
    <span class="text__primary"> Результаты </span>
    <UserCard />
  </div>
</template>

<style scoped lang="scss">
.results__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
