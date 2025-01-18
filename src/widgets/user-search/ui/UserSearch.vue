<script setup lang="ts">
import { Search } from "@/feature/search";
import { Results } from "@/feature/results";
</script>

<template>
  <div class="sidebar__container">
    <Search />
    <Results />
  </div>
</template>

<style scoped lang="scss">
.sidebar__container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 29px;
  padding: 27px 31px 27px 20px;
}
</style>
