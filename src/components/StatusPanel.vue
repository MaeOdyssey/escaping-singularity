<template>
    <div class="status-panel">
      <h2 class="panel-title">Status Report</h2>
  
      <div class="status-item">
        <div class="label">🛑 Hull Integrity</div>
        <div class="bar-container">
          <div class="bar-fill hull" :style="{ width: hull + '%' }"></div>
        </div>
        <div class="value">{{ hull }}%</div>
      </div>
  
      <div class="status-item">
        <div class="label">🕮 Proximity to Singularity</div>
        <div class="bar-container">
          <div class="bar-fill distance" :style="{ width: proximityBar + '%' }"></div>
        </div>
        <div class="value">{{ formatDistance(distance) }}</div>
      </div>
  
      <div class="status-item">
        <div class="label">⚡ Power Levels</div>
        <div class="status-indicator" :class="powerClass">{{ powerStatus }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    hull: Number,
    distance: Number,
    powerStatus: String
  })
  
  const formatDistance = (val: number) => {
    return val.toLocaleString() + ' km';
  };
  
  const proximityBar = computed(() => {
    const max = 20000;
    const normalized = Math.min(distance, max);
    return 100 - Math.floor((normalized / max) * 100);
  });
  
  const powerClass = computed(() => {
    switch (powerStatus.toLowerCase()) {
      case 'stable': return 'power-stable';
      case 'low': return 'power-low';
      case 'critical': return 'power-critical';
      default: return '';
    }
  });
  </script>
  
  <style scoped>
  .status-panel {
    background-color: #1a0c2c;
    border: 2px solid #ff75ff;
    border-radius: 10px;
    padding: 1rem;
    width: 260px;
    color: #fff;
    font-family: 'Share Tech Mono', monospace;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .panel-title {
    font-size: 1.4rem;
    color: #ff75ff;
    border-bottom: 1px dashed #ff75ff;
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .status-item {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .label {
    font-size: 0.95rem;
    color: #aaa;
  }
  
  .bar-container {
    background: #222;
    border: 1px solid #555;
    height: 14px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .bar-fill {
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
  
  .bar-fill.hull {
    background-color: #ff5252;
  }
  
  .bar-fill.distance {
    background-color: #33baff;
  }
  
  .value {
    font-size: 0.85rem;
    color: #ccc;
  }
  
  .status-indicator {
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    text-align: center;
    width: fit-content;
    font-size: 0.9rem;
  }
  
  .power-stable {
    background-color: #2ecc71;
    color: #000;
  }
  
  .power-low {
    background-color: #f39c12;
    color: #000;
  }
  
  .power-critical {
    background-color: #e74c3c;
    color: #fff;
  }
  </style>
  