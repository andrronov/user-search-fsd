<script setup lang="ts">
import { Image } from "@/shared/ui";
import type { UserInfo } from "@/shared/types";

defineProps<{
  user: UserInfo;
}>();
</script>

<template>
  <div class="info__container">
    <Image class="info__image" />
    <div class="text__container">
      <div class="info__main">
        <p class="text__primary">{{ user.name }}</p>
        <p class="text__secondary">
          <span class="text__primary"> email: </span>
          {{ user.email }}
        </p>
        <p class="text__secondary">
          <span class="text__primary"> phone: </span>
          {{ user.phone }}
        </p>
      </div>
      <div class="info__about">
        <p class="text__primary">О себе:</p>
        <p class="text__secondary">
          Работает в компании {{ user.company.name }}, живёт по адресу
          {{ user.address.street }}. Личный сайт: {{ user.website }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info__container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 60px;
  justify-content: space-between;
  padding: 30px 30px 0px 21px;

  .info__image {
    width: 100%;
    max-width: 420px;
    height: 286px;
    object-fit: fill;
  }

  .text__container {
    display: flex;
    width: 100%;
    height: min-content;
    flex-direction: column;
    gap: 20px;

    .info__main {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .info__about {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
}
</style>
