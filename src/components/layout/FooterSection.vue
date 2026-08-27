<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-copy">&copy; {{ year }} Aura Amalia.</span>
    </div>

    <button
      v-show="showTop"
      class="back-top-fab"
      aria-label="Kembali ke atas"
      @click="toTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const year = new Date().getFullYear()
const showTop = ref(false)

function onScroll() {
  showTop.value = window.scrollY > 600
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.footer-inner {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.footer-copy {
  color: var(--z-txt-soft, #bcd9ec);
  font-size: 0.82rem;
}

.back-top-fab {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 50;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(34, 211, 238, 0.35);
  background: rgba(4, 25, 42, 0.7);
  backdrop-filter: blur(8px);
  color: #7ef0ff;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(2, 12, 24, 0.5);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.back-top-fab:hover {
  transform: translateY(-3px);
  background: rgba(34, 211, 238, 0.15);
  border-color: rgba(126, 240, 255, 0.65);
}
</style>
