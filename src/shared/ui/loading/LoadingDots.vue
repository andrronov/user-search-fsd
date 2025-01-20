<script setup lang="ts"></script>

<template>
  <div class="animated-loading-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<style scoped lang="scss">
.animated-loading-dots {
  position: relative;
  height: 100%;
  width: 75px;

  .dot {
    position: absolute;
    top: 0px;
    margin-left: 8px;
    height: 6px;
    width: 5px;
    border-radius: 100%;
    background: black;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 4px;
      animation: animated-loading-dots1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 4px;
      animation: animated-loading-dots2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 24px;
      animation: animated-loading-dots2 0.6s infinite;
    }
  }

  @keyframes animated-loading-dots1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes animated-loading-dots2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(20px, 0);
    }
  }
}
</style>
