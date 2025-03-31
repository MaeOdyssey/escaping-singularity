<template>
  <div class="control-panel">
    <h2 class="panel-header">Command Console</h2>
    <div class="button-grid">
      <div class="console-tile" @click="emit('action', 'thrusters')">
        <span class="tile-label">FIRE<br>THRUSTERS</span>
      </div>
      <div class="console-tile" @click="emit('action', 'eject')">
        <span class="tile-label">EJECT<br>WARP CORE</span>
      </div>
      <div class="console-tile" @click="emit('action', 'reroute')">
        <span class="tile-label">REROUTE<br>POWER</span>
      </div>
      <div class="console-tile" @click="emit('action', 'jump')">
        <span class="tile-label">GRAVITY<br>JUMP</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'action', value: string): void;
}>();
</script>

<style scoped>
.control-panel {
  background-color: #0b0b0b;
  border: 2px solid #ffaa00;
  padding: 1.2rem;
  border-radius: 12px;
  color: #ffaa00;
  font-family: 'Share Tech Mono', monospace;
  width: 440px;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.4);
}

.panel-header {
  font-size: 1.3rem;
  color: #ffc166;
  text-align: center;
  border-bottom: 1px solid #ffaa00;
  padding-bottom: 0.4rem;
  margin-bottom: 0.5rem;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 1rem;
}

.console-tile {
  background: linear-gradient(to bottom right, #ff9900, #cc6600);
  border: 2px solid #ffcc66;
  border-radius: 8px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 140, 0, 0.5);
  transition: all 0.2s ease-in-out;
  text-align: center;
}

.console-tile:hover {
  transform: scale(1.05);
  box-shadow: 0 0 16px rgba(255, 200, 100, 0.9);
}

.tile-label {
  font-weight: bold;
  font-size: 0.95rem;
  color: #1a0e00;
  letter-spacing: 1px;
  text-shadow: 0 0 1px #fff5cc;
}
</style>
