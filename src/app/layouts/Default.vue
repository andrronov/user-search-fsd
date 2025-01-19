<script setup lang="ts">
import { Header } from "@/widgets/app-header";
</script>

<template>
  <div class="container">
    <Header />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
}
</style>
