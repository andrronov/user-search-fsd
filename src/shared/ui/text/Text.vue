<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    element: "h1" | "p" | "span";
    size: "sm" | "md" | "xl";
    color: "primary" | "secondary" | "main" | "dark";
    weight: "light" | "normal" | "bold";
  }>(),
  {
    element: "p",
    size: "md",
    color: "primary",
    weight: "normal",
  },
);

const styles = computed(() => {
  const color = {
    primary: "--base-200",
    secondary: "--base-100",
    main: "--base-main",
    dark: "--base-300",
  }[props.color];

  const size = {
    sm: "14px",
    md: "16px",
    xl: "32px",
  }[props.size];

  const weight = {
    light: "400",
    normal: "600",
    bold: "700",
  }[props.weight];

  return `
        font-size: ${size};
        color: var(${color});
        font-weight: ${weight};
        `;
});
</script>

<template>
  <component :is="props.element" :style="styles">
    <slot></slot>
  </component>
</template>

<style></style>
