<template>
  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <!-- Matahari / Bulan yang turun seiring scroll -->
  <div
    class="celestial-body"
    :class="celestialPhase"
    :style="celestialStyle"
    aria-hidden="true"
  >
    <div class="sun-rays" v-if="scrollPct < 55">
      <span v-for="n in 8" :key="n" class="ray" :style="{ '--i': n }"></span>
    </div>
    <div class="moon-shadow" v-if="scrollPct >= 55"></div>
  </div>

  <NavBar />
  <main>
    <Hero />
    <Kemampuan />
    <Proyek />
    <Pendidikan />
    <Sertifikat />
    <Kontak />
  </main>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NavBar     from './components/NavBar.vue'
import Hero       from './components/Hero.vue'
import Kemampuan  from './components/Kemampuan.vue'
import Proyek     from './components/Proyek.vue'
import Pendidikan from './components/Pendidikan.vue'
import Sertifikat from './components/Sertifikat.vue'
import Kontak     from './components/Kontak.vue'
import Footer     from './components/Footer.vue'

const scrollPct = ref(0)

function onScroll() {
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Posisi vertikal: mulai dari 6vh (dekat atas) turun ke 85vh
const celestialY = computed(() => {
  const p = scrollPct.value / 100
  return 6 + p * 79 // 6vh → 85vh
})

// Ukuran: 120px di atas, mengecil ke 88px di bawah
const celestialSize = computed(() => {
  const p = scrollPct.value / 100
  return 120 - p * 32 // 120px → 88px
})

// 0–28%: matahari penuh | 28–58%: dusk | 58–100%: bulan
const celestialPhase = computed(() => {
  if (scrollPct.value < 28) return 'phase-sun'
  if (scrollPct.value < 58) return 'phase-dusk'
  return 'phase-moon'
})

const celestialStyle = computed(() => ({
  top:    `${celestialY.value}vh`,
  width:  `${celestialSize.value}px`,
  height: `${celestialSize.value}px`,
  transition: 'background 1.2s ease, box-shadow 1.2s ease, opacity 0.8s ease, width 0.4s ease, height 0.4s ease',
}))
</script>

<style>
/* ====================================================
   CELESTIAL BODY — matahari turun jadi bulan saat scroll
   Posisi fixed di tengah horizontal, bergerak vertikal
   Opacity rendah supaya tidak menghalangi teks
   ==================================================== */
/* Pastikan konten section ada di atas celestial body */
main > section .container {
  position: relative;
  z-index: 3;
}

/* ====================================================
   CELESTIAL BODY — matahari turun jadi bulan saat scroll
   ==================================================== */
.celestial-body {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.55;
  mix-blend-mode: screen;   /* blend dengan background section = tidak nutup teks */
  transition:
    background 1.2s ease,
    box-shadow 1.2s ease,
    opacity 0.8s ease;
  will-change: top;
}

/* Fase 1 — Matahari penuh (zona senja) */
.phase-sun {
  background: radial-gradient(circle at 40% 38%, #FBBF24, #F97316 50%, #EA580C);
  box-shadow:
    0 0 0  14px rgba(251,191,36,0.2),
    0 0 0  30px rgba(249,115,22,0.12),
    0 0 90px rgba(249,115,22,0.5);
}

/* Fase 2 — Matahari tenggelam (zona dusk) */
.phase-dusk {
  background: radial-gradient(circle at 40% 38%, #FCA5A5, #F87171 40%, #DC2626 80%, #9F1239);
  box-shadow:
    0 0 0  14px rgba(252,165,165,0.15),
    0 0 0  30px rgba(248,113,113,0.08),
    0 0 100px rgba(220,38,38,0.4);
}

/* Fase 3 — Bulan (zona malam) */
.phase-moon {
  background: radial-gradient(circle at 38% 36%, #FDE68A, #FCD34D 50%, #F59E0B);
  box-shadow:
    0 0 0  10px rgba(253,230,138,0.12),
    0 0 70px rgba(252,211,77,0.45);
  opacity: 0.7;
}

/* Bayangan bulan sabit */
.moon-shadow {
  position: absolute;
  top: -8%;
  right: -16%;
  width: 88%;
  height: 88%;
  border-radius: 50%;
  background: #0F1530;
  transition: background 1s ease;
}

/* Sinar-sinar matahari */
.sun-rays {
  position: absolute;
  inset: -40%;
  border-radius: 50%;
}
.ray {
  position: absolute;
  top: 50%; left: 50%;
  width: 3px;
  background: rgba(251,191,36,0.45);
  border-radius: 2px;
  transform-origin: 0 0;
  transform: rotate(calc(var(--i) * 45deg)) translateX(120%) scaleY(0.6);
  height: 28%;
  animation: rayPulse 2.5s ease-in-out infinite alternate;
  animation-delay: calc(var(--i) * 0.18s);
}
@keyframes rayPulse {
  from { opacity: 0.2; transform: rotate(calc(var(--i) * 45deg)) translateX(115%) scaleY(0.55); }
  to   { opacity: 0.55; transform: rotate(calc(var(--i) * 45deg)) translateX(128%) scaleY(0.85); }
}

/* Sembunyikan di layar kecil */
@media (max-width: 768px) {
  .celestial-body { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ray { animation: none; }
  .celestial-body { transition: none; }
}
</style>
