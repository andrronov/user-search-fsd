<script setup lang="ts">
import { useUserStore } from "@/shared/stores/users";
import { Input } from "@/shared/ui";
import { watch } from "vue";

const input = defineModel<string | number | undefined>({
  default: "",
});

const handleInput = (e: InputEvent | Event) => {
  const targetValue = (e.target as HTMLInputElement).value;

  input.value = targetValue;
};

const userStore = useUserStore();

watch(input, () => {
  userStore.clearUser();
});
</script>

<template>
  <div class="search__container">
    <span class="text__primary">
      <slot name="title"> Поиск сотрудников </slot>
    </span>
    <Input v-model="input" @input="handleInput" placeholder="Antonette, Bret" />
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
