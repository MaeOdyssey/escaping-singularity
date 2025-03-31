<template>
  <div class="status-panel">
    <h2 class="panel-title">Status Report</h2>

    <div class="status-block hull">
      <div class="label">
        <span>🛡️ Hull Integrity</span>
      </div>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: hull + '%' }"></div>
        <span class="progress-text">{{ hull }}%</span>
      </div>
    </div>

    <div class="status-block proximity">
      <div class="label">
        <span>🌀 Proximity to Singularity</span>
      </div>
      <div class="value">{{ distance.toLocaleString() }} km</div>
    </div>

    <div class="status-block power">
      <div class="label">
        ⚡ Power Levels
      </div>
      <div class="value">{{ powerStatus }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hull: number;
  distance: number;
  powerStatus: string;
}>();
</script>

<style scoped>
.status-panel {
  background-color: #330033;
  border: 2px solid #ff80ff;
  padding: 1rem;
  border-radius: 10px;
  width: 250px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.panel-title {
  font-size: 1.4rem;
  color: #ff80ff;
  border-bottom: 1px solid #ff80ff;
  padding-bottom: 0.5rem;
}

.status-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background-color: #1a001a;
  padding: 0.6rem;
  border-radius: 6px;
}

.label {
  font-size: 0.95rem;
  font-weight: bold;
  color: #ffccff;
}

.value {
  font-size: 1.1rem;
  color: #fff;
}

.progress-container {
  background-color: #440044;
  border: 1px solid #880088;
  height: 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.progress-bar {
  background-color: #ff3399;
  height: 100%;
  transition: width 0.4s ease;
}

.progress-text {
  position: absolute;
  right: 8px;
  top: 1px;
  font-size: 0.8rem;
  color: #fff;
}
</style>
