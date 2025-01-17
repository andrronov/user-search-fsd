<script setup lang="ts">
import { Header } from "@/widgets/app-header";
import { PageWrapper } from "@/widgets/page";
import { UserSearch } from "@/widgets/user-search";
</script>

<template>
  <div class="container">
    <Header />

    <PageWrapper>
      <template #sidebar>
        <UserSearch />
      </template>
      <template #userInfo>
        <slot></slot>
      </template>
    </PageWrapper>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
}
</style>
