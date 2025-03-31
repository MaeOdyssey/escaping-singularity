<template>
  <div class="lcars-interface">
    <div class="viewscreen">
      <h1>🚨 Black Hole Detected</h1>
    </div>
    
    <div class="console-panel">
      <StatusDisplay />
      <FeedbackDisplay />
      <ControlPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusDisplay from './components/StatusDisplay.vue'
import ControlPanel from './components/ControlPanel.vue'
import FeedbackDisplay from './components/FeedbackDisplay.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

.lcars-interface {
  font-family: 'Share Tech Mono', monospace;
  background-color: #000;
  color: #ffcc99;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

.viewscreen {
  background: radial-gradient(circle at center, #0a0a23 0%, #000 100%);
  border: 3px solid #ff9900;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 153, 0, 0.4);
}

.console-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #1a1a2e;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #663399;
  width: 100%;
  max-width: 600px;
}
</style>
