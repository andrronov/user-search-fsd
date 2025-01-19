<script setup lang="ts">
import { PageWrapper } from "@/entities/page";
import { UserSearch } from "@/widgets/user-search";
import { UserInfo } from "@/widgets/user-info";
</script>
<template>
  <PageWrapper>
    <template #sidebar>
      <UserSearch />
    </template>
    <template #main>
      <UserInfo />
    </template>
  </PageWrapper>
</template>

<style scoped lang="scss"></style>
