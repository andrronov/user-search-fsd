<template>
  <header class="header">
    <h1 class="header__logo_name">Жилфонд</h1>
    <span class="header__user">Пользователь</span>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 26px;

  .header__logo_name {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    color: var(--base-main);
  }
  .header__user {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.35rem;
    color: var(--base-200);
  }
}
</style>
