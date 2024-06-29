<template>
  <div class="disappearing-image">
    <img
      :src="require('/src/assets/images/cards.jpg')"
    />
  </div>
</template>
<script setup></script>

<style scoped>
  .disappearing-image {
    position: relative;
    z-index: 10000;
    transition: filter 1.5s, opacity 1.5s;
    animation: moveAndDisappear 1.5s ease-in 1.5s forwards;
  }

  @keyframes moveAndDisappear {
    0% {
      transform: translateY(0);
      opacity: 1;
      height: 100%;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
      height: 0;
      width: 0;
    }
  }

  .disappearing-image:hover {
    filter: blur(5px);
  }
</style>
