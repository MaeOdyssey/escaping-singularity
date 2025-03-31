<template>
  <div class="feedback-display" v-if="feedback">
    {{ feedback }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// TEMPORARY demo feedback — later we’ll bind it to game results
const feedback = ref("Engines are stable. Awaiting next command.");
</script>

<style scoped>
.feedback-display {
  background-color: #222;
  border: 2px solid #00ccff;
  color: #00ccff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 204, 255, 0.3);
}
</style>
