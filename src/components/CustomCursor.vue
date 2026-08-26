<template>
  <div v-if="enabled" class="cur-root" :class="{ 'is-hidden': !visible, 'is-down': pressed }">
    <div ref="ringEl" class="cur-ring"><span></span></div>
    <div ref="dotEl" class="cur-dot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const enabled =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const ringEl = ref(null)
const dotEl = ref(null)
const visible = ref(false)
const pressed = ref(false)

let raf = 0
let tx = -100
let ty = -100
let rx = -100
let ry = -100

const HOVER_SEL = 'a, button, [role="button"], input, textarea, select, label, .chip-icon'

function onMove(e) {
  tx = e.clientX
  ty = e.clientY
  if (!visible.value) visible.value = true

  const t = e.target instanceof Element ? e.target.closest(HOVER_SEL) : null
  ringEl.value?.classList.toggle('is-active', Boolean(t))

  // Variabel --mx/--my untuk sorotan cahaya pada kartu kaca
  const g = e.target instanceof Element ? e.target.closest('.glass') : null
  if (g) {
    const r = g.getBoundingClientRect()
    g.style.setProperty('--mx', `${e.clientX - r.left}px`)
    g.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
}

function onDown() {
  pressed.value = true
}

function onUp() {
  pressed.value = false
}

function onLeave() {
  visible.value = false
}

function loop() {
  rx += (tx - rx) * 0.16
  ry += (ty - ry) * 0.16
  if (dotEl.value) dotEl.value.style.transform = `translate(${tx}px, ${ty}px)`
  if (ringEl.value) ringEl.value.style.transform = `translate(${rx}px, ${ry}px)`
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  if (!enabled) return
  document.documentElement.classList.add('cursor-fx')
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mousedown', onDown)
  window.addEventListener('mouseup', onUp)
  document.documentElement.addEventListener('mouseleave', onLeave)
  raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (!enabled) return
  document.documentElement.classList.remove('cursor-fx')
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mousedown', onDown)
  window.removeEventListener('mouseup', onUp)
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
  top: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7ef0ff;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.95);
  will-change: transform;
}

.cur-ring {
  position: absolute;
  top: -28px;
  left: -28px;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  will-change: transform;
}

.cur-ring span {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1.5px solid rgba(34, 211, 238, 0.65);
  background: rgba(34, 211, 238, 0.05);
  box-shadow: 0 0 6px rgba(2, 32, 48, 0.25);
  transition:
    transform 0.22s cubic-bezier(0.3, 0.7, 0.3, 1),
    background 0.22s ease,
    border-color 0.22s ease;
}

.cur-ring.is-active span {
  transform: scale(1.55);
  background: rgba(34, 211, 238, 0.13);
  border-color: rgba(125, 231, 255, 0.95);
}

.cur-root.is-down .cur-ring span {
  transform: scale(0.72);
}
</style>
