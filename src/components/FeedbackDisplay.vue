<template>
  <div class="feedback-panel">
    <h2 class="feedback-header">System Feedback</h2>
    <div class="feedback-message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped>
.feedback-panel {
  background-color: #001f33;
  border: 2px solid #00ccff;
  padding: 1.2rem;
  border-radius: 10px;
  width: 250px;
  color: #00ccff;
  font-family: 'Share Tech Mono', monospace;
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feedback-header {
  font-size: 1.3rem;
  color: #66e0ff;
  border-bottom: 1px solid #00ccff;
  padding-bottom: 0.4rem;
  margin-bottom: 0.5rem;
}

.feedback-message {
  font-size: 1.1rem;
  line-height: 1.5;
  white-space: pre-wrap;
}
</style>
