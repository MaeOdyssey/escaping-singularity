<template>
    <div class="viewscreen">
      <img src="@/assets/deep-space.png" class="background" alt="space" />
      <img src="@/assets/blackhole.png" class="blackhole" alt="black hole" />
      <img v-if="showCrack" src="@/assets/cracked-screen.png" class="cracked" alt="cracked screen" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Control whether the cracked screen is visible (eventually tied to game logic)
  const showCrack = ref(false);
  
  // Export so parent can toggle this in the future
  defineExpose({ showCrack });
  </script>
  
  <style scoped>
  .viewscreen {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: black;
    border-bottom: 4px solid #333;
  }
  
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .blackhole {
    position: absolute;
    width: 150px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  
  .cracked {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
    pointer-events: none;
  }
  </style>
  