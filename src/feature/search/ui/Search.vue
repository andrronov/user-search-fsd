<script setup lang="ts">
import { Input } from "@/shared/ui";
</script>

<template>
  <div class="search__container">
    <span class="text__primary"> Поиск сотрудников </span>
    <Input placeholder="Antonette, Bret" />
  </div>
</template>

<style scoped lang="scss">
.search__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
