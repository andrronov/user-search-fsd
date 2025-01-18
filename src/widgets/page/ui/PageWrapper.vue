<script setup lang="ts"></script>

<template>
  <div class="grid-container">
    <aside class="grid__sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <main class="grid__content">
      <slot name="userInfo"></slot>
    </main>
  </div>
</template>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px #0000001a;

  .grid__sidebar {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--base-border);
  }
}
</style>
