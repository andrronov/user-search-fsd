<script setup lang="ts">
import { Image } from "@/shared/ui";
import { UserInfo } from "@/shared/types";

defineProps<{
  user: UserInfo;
  selected: boolean;
}>();
</script>

<template>
  <div class="card__container" :class="{ _selected: selected }">
    <Image />
    <div class="card__info">
      <span class="text__primary">
        {{ user.username }}
      </span>
      <span class="text__secondary">
        {{ user.email }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card__container {
  width: 95%;
  height: 70px;
  margin-left: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #0000001a;
  cursor: pointer;

  &:hover {
    background-color: rgba(240, 255, 255, 0.767);
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

._selected {
  background-color: rgb(206, 206, 206);
  &:hover {
    background-color: rgba(197, 212, 212, 0.767);
  }
}
</style>
