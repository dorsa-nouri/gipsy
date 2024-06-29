<template>
  <div>
    <h1>Your Fortune Is Ready to Meet UP !</h1>

    <div>
      <img
        v-for="i in 3"
        :key="i"
        style="margin: 1rem; border-radius: 20px"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Waite%E2%80%93Smith_Tarot_Roses_and_Lilies_cropped.jpg"
        width="150"
        height="250"
        alt="taroot"
      />
    </div>
    <button @click="openModal()">Pick Cards</button>

    <InputModal
      v-if="showModal"
      @valueUpdate="fetching"
    />
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import InputModal from "@/components/InputModal.vue";

  let showModal = ref(false);


  const fetching = (t) => {
    console.log(t)
  };

  function openModal() {
    showModal.value = !showModal.value;
  }
</script>

<style scoped>
  .card {
    text-align: center;
    justify-content: center;
    margin: 2rem;
    width: 70vw;
    height: 50vh;
    background-color: #333;
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    padding: 2rem;
  }
  .card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .card p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
</style>
