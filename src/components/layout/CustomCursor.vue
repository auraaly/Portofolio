<template>
  <div v-if="enabled" class="cur-root" :class="{ 'is-hidden': !visible }">
    <div ref="dotEl" class="cur-dot"></div>
    <div ref="bubbleContainer" class="bubble-trail"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const enabled =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const dotEl = ref(null)
const bubbleContainer = ref(null)
const visible = ref(false)

let raf = 0
let tx = -100
let ty = -100
let lastBubbleTime = 0

const BUBBLE_INTERVAL = 50

function spawnBubble(x, y) {
  if (!bubbleContainer.value) return
  const el = document.createElement('span')
  el.className = 'bubble'

  const size = 6 + Math.random() * 14
  const drift = (Math.random() - 0.5) * 30
  const dur = 0.8 + Math.random() * 0.6

  el.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    --drift: ${drift}px;
    animation: bubble-rise ${dur}s ease-out forwards;
  `

  bubbleContainer.value.appendChild(el)
  setTimeout(() => el.remove(), dur * 1000)
}

function onMove(e) {
  tx = e.clientX
  ty = e.clientY
  if (!visible.value) visible.value = true

  const now = performance.now()
  if (now - lastBubbleTime > BUBBLE_INTERVAL) {
    spawnBubble(e.clientX, e.clientY)
    lastBubbleTime = now
  }
}

function onLeave() {
  visible.value = false
}

function loop() {
  if (dotEl.value) dotEl.value.style.transform = `translate(${tx}px, ${ty}px)`
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  if (!enabled) return
  document.documentElement.classList.add('cursor-fx')
  window.addEventListener('mousemove', onMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', onLeave)
  raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (!enabled) return
  document.documentElement.classList.remove('cursor-fx')
  window.removeEventListener('mousemove', onMove)
  document.documentElement.removeEventListener('mouseleave', onLeave)
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.cur-root {
  position: fixed;
  inset: 0;
  z-index: 210;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.25s ease;
}

.cur-root.is-hidden {
  opacity: 0;
}

.cur-dot {
  position: absolute;
  top: -5px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(165, 243, 252, 0.9), rgba(34, 211, 238, 0.6));
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.7), inset 0 -1px 2px rgba(255, 255, 255, 0.4);
  will-change: transform;
}

.bubble-trail {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.bubble-trail :deep(.bubble) {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(165, 243, 252, 0.35), rgba(34, 211, 238, 0.08));
  border: 1px solid rgba(165, 243, 252, 0.3);
  pointer-events: none;
  will-change: transform, opacity;
}

</style>

<style>
@keyframes bubble-rise {
  0% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--drift)), -45px) scale(0.3);
  }
}
</style>
