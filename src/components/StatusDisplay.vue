<template>
  <div class="status-display">
    <h2>Status Report</h2>
    <ul>
      <li>🛡️ Hull Integrity: 83%</li>
      <li>🌌 Proximity to Singularity: 12,000 km</li>
      <li>⚡ Power Levels: Stable</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Placeholder for now — will eventually accept props or use data
</script>

<style scoped>
.status-display {
  background-color: #33114d;
  color: #ffe6ff;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #ff66cc;
  box-shadow: 0 0 10px rgba(255, 102, 204, 0.3);
}

.status-display h2 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.status-display ul {
  list-style-type: none;
  padding-left: 0;
  line-height: 1.5rem;
}
</style>
