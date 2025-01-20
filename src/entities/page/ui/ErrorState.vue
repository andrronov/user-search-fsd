<script setup lang="ts">

withDefaults(
  defineProps<{
    onRetry?: () => void;
  }>(),
  {
    onRetry: undefined,
  },
);
</script>

<template>
    <div class="error__container">
        <p class="error__text">
            <slot name="title">
                Произошла ошибка. Попробуйте еще раз
            </slot>
        </p>
    </div>
</template>

<style scoped lang="scss">
.error__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;

    .error__text {
        color: red
    }
}
</style>