<script setup lang="ts">
import { useAttrs } from "vue";

withDefaults(
  defineProps<{
    placeholder: string;
    disabled?: boolean;
  }>(),
  {
    placeholder: "",
    disabled: false,
  },
);

const modelValue = defineModel<string | number | undefined>({
  default: "",
});

const attrs = useAttrs();

const handleInput = (e: InputEvent | Event) => {
  const targetValue = (e.target as HTMLInputElement).value;

  modelValue.value =
    attrs.type === "number" ? Number(targetValue) : targetValue;
};
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    :placeholder="placeholder"
    :disabled="disabled"
    type="text"
    class="input"
  />
</template>

<style scoped lang="scss">
.input {
  height: 49px;
  width: 100%;
  border-radius: 8px;
  border: 1.5px solid #e9ecef;
  color: var(--base-200);
  padding: 12px 20px;
  margin: 8px 0;

  ::placeholder {
    color: var(--base-100);
    font-size: 14px;
  }
}
</style>
