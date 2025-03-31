import { ref } from 'vue'

// Game status (win/lose/progress text)
export const gameStatus = ref("Approaching event horizon...")

// List of maneuvers
export const maneuvers = [
  { name: "Fire Thrusters" },
  { name: "Reroute Power" },
  { name: "Eject Warp Core" },
  { name: "Deploy Deflector" },
]

// Handle move click
export function handleMove(move: { name: string }) {
  gameStatus.value = `You selected: ${move.name}... Calculating trajectory...`
  // Placeholder logic: just cycle messages
  setTimeout(() => {
    gameStatus.value = "Still trapped... Try again!"
  }, 1000)
}
