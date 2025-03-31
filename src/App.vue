<template>
  <div class="app-wrapper">
    <ViewScreen />

    <div class="main-console">
      <StatusDisplay 
        :hull="hull" 
        :distance="distance" 
        :powerStatus="powerStatus" 
      />

      <ControlPanel 
        @command="handleCommand" 
      />

      <FeedbackDisplay 
        :message="feedbackMessage" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewScreen from './components/Viewscreen.vue';
import StatusDisplay from './components/StatusDisplay.vue';
import ControlPanel from './components/ControlPanel.vue';
import FeedbackDisplay from './components/FeedbackDisplay.vue';
import { ref } from 'vue';

// Game state
const hull = ref(83);
const distance = ref(12000);
const powerStatus = ref("Stable");
const feedbackMessage = ref("Engines are stable. Awaiting next command.");

// Command handler
function handleCommand(action: string) {
  feedbackMessage.value = `Command received: ${action}`;
  // Add gameplay logic here...
}
</script>

<style scoped>
.app-wrapper {
  background-color: #0b0c10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
}

.main-console {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
  align-items: start;
}
</style>
