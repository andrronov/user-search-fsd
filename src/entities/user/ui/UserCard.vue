<script setup lang="ts">
import { Image } from "@/shared/ui";
</script>

<template>
  <div class="card__container">
    <Image />
    <div class="card__info">
      <span class="text__primary">Antonette</span>
      <span class="text__secondary">@Bret.com</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card__container {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #0000001a;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px #000000c0;
  }

  .card__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    margin-left: 10px;
  }
}
</style>
