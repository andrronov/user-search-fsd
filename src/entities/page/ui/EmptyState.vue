<script setup lang="ts"></script>

<template>
  <div class="state__container">
    <slot name="title">
      <p class="text__secondary">
        Выберите сотрудника, чтобы посмотреть его профиль
      </p>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.state__container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
