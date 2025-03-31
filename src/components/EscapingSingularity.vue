<template>
    <div class="game-container">
      <h1>🚀 Escaping Singularity</h1>
      <p>Status: {{ gameStatus }}</p>
      <button 
        v-for="maneuver in maneuvers" 
        :key="maneuver.name" 
        @click="handleMove(maneuver)"
      >
        {{ maneuver.name }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { gameStatus, maneuvers, handleMove } from './GameState'
  </script>
  
  <style scoped>
  .game-container {
    text-align: center;
    padding: 2rem;
  }
  button {
    margin: 0.5rem;
  }
  </style>
  