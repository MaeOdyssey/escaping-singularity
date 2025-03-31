<template>
  <div class="control-panel">
    <button class="lcars-btn">🔥 Fire Thrusters</button>
    <button class="lcars-btn">💥 Eject Warp Core</button>
    <button class="lcars-btn">🔁 Reroute Power</button>
    <button class="lcars-btn">🌀 Initiate Gravimetric Jump</button>
  </div>
</template>

<script setup lang="ts">
// Next phase: emit user choices to parent!
</script>

<style scoped>
.control-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.lcars-btn {
  background-color: #ff9900;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
}

.lcars-btn:hover {
  background-color: #ffaa33;
}
</style>
