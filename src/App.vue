<template>
  <div class="content">
    <CardsList></CardsList>
  </div>
  <!-- <LoadingImage /> -->
</template>

<script>
  // import LoadingImage from "@/components/LoadingImage.vue";
  import CardsList from "@/components/CardsList.vue";
  export default {
    name: "App",
    components: {
      // LoadingImage,
      CardsList,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .content {
    animation-name: appear;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
