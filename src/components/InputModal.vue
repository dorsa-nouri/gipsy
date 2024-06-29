<template>
  <div
    id="modal"
    class="modal"
  >
    <div class="modal-content">
      <input
        v-model="name"
        type="text"
        placeholder="Enter your Name here"
        class="glowing-input"
        @input="fet"
      />

      <input
        type="number"
        v-model="age"
        placeholder="Enter your Age here"
        class="glowing-input"
        @input="fet"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import fetchingData from "@/store";

  let name = ref(null);
  let age = ref(null);

  const p = () => {
    let dt = {
      name: name.value,
      age: age.value,
    };
    fetchingData(dt);
  };

  const fet = () => {
    console.log("anjam mishe ?");
    p();
    // emit("valueUpdate", p());
  };
</script>

<style scoped>
  .glowing-input {
    padding: 12px 20px;
    margin: 2rem;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .glowing-input:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
  }
</style>
