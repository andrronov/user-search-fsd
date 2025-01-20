<script setup lang="ts">
import { watchThrottled } from "@vueuse/core";
import { computed, ref } from "vue";
import { Search } from "@/feature/search";
import { Results } from "@/feature/results";
import { ErrorState } from "@/entities/page";
import { createAsyncProcess } from "@/shared/lib/utils/async";
import { isNumber, fstLetterUppercase } from "@/shared/lib/utils/common";
import { api } from "@/shared/api";
import type { UserInfo } from "@shared/types";

const search = ref("");
const foundUsers = ref<UserInfo>([]);

const searchParams = computed(() => {
  const params = search.value.split(",").map((item) => item.trim());
  return new URLSearchParams(
    params.reduce((acc, prm) => {
      if (prm.length < 1) {
        return acc;
      }
      if (isNumber(prm)) {
        acc.append("id", prm);
      } else {
        acc.append("username", fstLetterUppercase(prm));
      }
      return acc;
    }, new URLSearchParams()),
  );
});

const {
  run: searchUsers,
  loading,
  error,
} = createAsyncProcess(async () => {
  const [data, error] = await api.getUsers(searchParams.value.toString());

  if (error) {
    throw new Error(error);
  }

  foundUsers.value = data;
});

watchThrottled(
  search,
  (v) => {
    if (v.length > 0) {
      searchUsers();
    } else {
      foundUsers.value = [];
    }
  },
  { throttle: 500 },
);
</script>

<template>
  <div class="sidebar__container">
    <Search v-model="search" />
    <Results :users="foundUsers" :loading />
    <ErrorState v-if="error" />
  </div>
</template>

<style scoped lang="scss">
.sidebar__container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 29px;
  padding: 27px 31px 27px 20px;
}
</style>
