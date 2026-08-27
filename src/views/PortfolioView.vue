<template>
  <OceanPreloader v-if="!ready" @done="onPreloaderDone" />

  <CustomCursor />

  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <div class="depth-gauge" aria-hidden="true">
    <span class="dg-depth">{{ depthLabel }}</span>
    <div class="dg-track">
      <div class="dg-fill" :style="{ height: scrollPct + '%' }"></div>
      <div class="dg-marker" :style="{ bottom: scrollPct + '%' }"></div>
    </div>
  </div>

  <NavBar />

  <main>
    <!-- ZONA PERMUKAAN -->
    <HeroSection />

    <!-- ZONA LAUT TENGAH -->
    <div class="zone-mid plankton-layer">
      <div class="wave-seam ws-mid" aria-hidden="true">
        <svg class="ws-a" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
        <svg class="ws-b" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
      </div>
      <span class="fish-lane" style="top: 12%; animation-duration: 52s" aria-hidden="true">
        <svg class="fish-body" width="44" viewBox="0 0 64 28" fill="rgba(11,58,92,0.3)">
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>
      <svg class="weed-edge left" viewBox="0 0 120 260" fill="none" aria-hidden="true">
        <path
          d="M20 260C10 220 30 200 18 160C10 130 26 110 16 70C12 50 20 30 14 10"
          stroke="rgba(9,52,86,0.5)"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M52 260C44 210 62 190 50 150C42 118 58 96 48 60"
          stroke="rgba(9,52,86,0.42)"
          stroke-width="6"
          stroke-linecap="round"
        />
        <path
          d="M84 260C76 224 92 204 82 168C74 138 88 116 80 84"
          stroke="rgba(9,52,86,0.34)"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
      <svg class="weed-edge right" viewBox="0 0 120 260" fill="none" aria-hidden="true">
        <path
          d="M20 260C10 220 30 200 18 160C10 130 26 110 16 70C12 50 20 30 14 10"
          stroke="rgba(9,52,86,0.5)"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M52 260C44 210 62 190 50 150C42 118 58 96 48 60"
          stroke="rgba(9,52,86,0.42)"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
      <AmbientBubbles :count="9" />

      <SkillsSection />
      <ProyekSection />
    </div>

    <!-- ZONA LAUT DALAM -->
    <div class="zone-deep plankton-layer">
      <div class="wave-seam ws-deep" aria-hidden="true">
        <svg class="ws-a" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
        <svg class="ws-b" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
      </div>
      <svg class="coral-edge left" viewBox="0 0 140 120" fill="none" aria-hidden="true">
        <path
          d="M30 120V78M30 92C18 84 14 66 16 54M30 100C44 90 50 72 48 58M78 120V64M78 84C66 74 64 58 68 46M78 92C92 82 98 64 94 52"
          stroke="rgba(6,34,56,0.65)"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M112 120V86M112 98C124 90 128 76 126 66"
          stroke="rgba(6,34,56,0.5)"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
      <svg class="coral-edge right" viewBox="0 0 140 120" fill="none" aria-hidden="true">
        <path
          d="M30 120V78M30 92C18 84 14 66 16 54M30 100C44 90 50 72 48 58M78 120V64M78 84C66 74 64 58 68 46M78 92C92 82 98 64 94 52"
          stroke="rgba(6,34,56,0.65)"
          stroke-width="7"
          stroke-linecap="round"
        />
      </svg>

      <span class="fish-lane" style="top: 18%; animation-duration: 46s" aria-hidden="true">
        <svg class="fish-body" width="52" viewBox="0 0 64 28" fill="rgba(190,232,252,0.32)">
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>
      <span
        class="fish-lane"
        style="top: 58%; animation-duration: 64s; animation-delay: -30s"
        aria-hidden="true"
      >
        <svg
          class="fish-body"
          style="animation-delay: -1.2s"
          width="38"
          viewBox="0 0 64 28"
          fill="rgba(190,232,252,0.24)"
        >
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>

      <AmbientBubbles :count="7" />

      <section id="education" class="section-pad">
        <div class="container">
          <PendidikanSection />
        </div>
      </section>
    </div>

    <!-- ZONA PALUNG (laut dalam bawah) -->
    <div class="zone-trench plankton-layer">
      <div class="wave-seam ws-trench" aria-hidden="true">
        <svg class="ws-a" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
        <svg class="ws-b" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
      </div>

      <span
        class="fish-lane"
        style="top: 24%; animation-duration: 68s; animation-delay: -20s"
        aria-hidden="true"
      >
        <svg class="fish-body" style="animation-delay: -0.8s" width="34" viewBox="0 0 64 28" fill="rgba(160,215,245,0.2)">
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>

      <AmbientBubbles :count="6" />

      <section id="certificates" class="section-pad">
        <div class="container">
          <SertifikatSection />
        </div>
      </section>
    </div>

    <!-- ZONA DASAR LAUT -->
    <div class="zone-abyss plankton-layer">
      <div class="wave-seam ws-abyss" aria-hidden="true">
        <svg class="ws-a" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
        <svg class="ws-b" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path
            d="M0 60C100 32 260 88 400 62C540 36 700 92 840 64C980 40 1120 86 1200 60C1320 32 1460 88 1600 62C1740 36 1900 92 2040 64C2180 40 2320 86 2400 60V120H0Z"
          />
        </svg>
      </div>
      <svg class="coral-edge left" viewBox="0 0 140 120" fill="none" aria-hidden="true">
        <path
          d="M30 120V78M30 92C18 84 14 66 16 54M30 100C44 90 50 72 48 58M78 120V64M78 84C66 74 64 58 68 46M78 92C92 82 98 64 94 52"
          stroke="rgba(3,16,28,0.85)"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M112 120V86M112 98C124 90 128 76 126 66"
          stroke="rgba(3,16,28,0.7)"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
      <svg class="coral-edge right" viewBox="0 0 140 120" fill="none" aria-hidden="true">
        <path
          d="M30 120V78M30 92C18 84 14 66 16 54M30 100C44 90 50 72 48 58M78 120V64M78 84C66 74 64 58 68 46M78 92C92 82 98 64 94 52"
          stroke="rgba(3,16,28,0.85)"
          stroke-width="7"
          stroke-linecap="round"
        />
        <path
          d="M112 120V86M112 98C124 90 128 76 126 66"
          stroke="rgba(3,16,28,0.7)"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>

      <span
        class="fish-lane"
        style="top: 30%; animation-duration: 52s; animation-delay: -12s"
        aria-hidden="true"
      >
        <svg class="fish-body" width="46" viewBox="0 0 64 28" fill="rgba(160,215,245,0.28)">
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>
      <span
        class="fish-lane"
        style="top: 66%; animation-duration: 71s; animation-delay: -45s"
        aria-hidden="true"
      >
        <svg
          class="fish-body"
          style="animation-delay: -2.1s"
          width="32"
          viewBox="0 0 64 28"
          fill="rgba(160,215,245,0.2)"
        >
          <path d="M4 14C14 4 34 4 44 14C34 24 14 24 4 14Z" />
          <path d="M44 14L61 5L57 14L61 23Z" />
        </svg>
      </span>

      <AmbientBubbles :count="12" />

      <KontakSection />
      <FooterSection />

      <div class="sand-bed" aria-hidden="true">
        <svg class="sand-back" viewBox="0 0 1440 170" preserveAspectRatio="none">
          <path d="M0 70C240 30 480 95 720 60C960 25 1200 25 1440 70V170H0Z" />
        </svg>
        <svg class="sand-front" viewBox="0 0 1440 170" preserveAspectRatio="none">
          <path d="M0 110C260 75 520 135 780 105C1040 75 1260 70 1440 115V170H0Z" />
        </svg>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'
import OceanPreloader from '../components/effects/OceanPreloader.vue'
import CustomCursor from '../components/layout/CustomCursor.vue'
import NavBar from '../components/layout/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProyekSection from '../components/ProyekSection.vue'
import PendidikanSection from '../components/PendidikanSection.vue'
import SertifikatSection from '../components/SertifikatSection.vue'
import KontakSection from '../components/KontakSection.vue'
import FooterSection from '../components/layout/FooterSection.vue'
import AmbientBubbles from '../components/effects/AmbientBubbles.vue'

const ready = ref(false)
const scrollPct = ref(0)
let inited = false
let observer = null
let safetyTimer = 0

const depthLabel = computed(() => {
  const m = Math.round((scrollPct.value / 100) * 40)
  return `−${m} m`
})

function initReveal() {
  if (window.lucide) window.lucide.createIcons()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.entrance:not(.visible), .reveal-draw-y:not(.visible)').forEach((el) => observer.observe(el))
}

function onScroll() {
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

function onPreloaderDone() {
  ready.value = true
  nextTick(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    if (!inited) {
      inited = true
      initReveal()
    }
  })
}

// Jaring pengaman kalau event preloader tidak terpicu
safetyTimer = setTimeout(() => {
  if (!ready.value) {
    ready.value = true
    nextTick(() => {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      if (!inited) {
        inited = true
        initReveal()
      }
    })
  }
}, 6000)

onUnmounted(() => {
  clearTimeout(safetyTimer)
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
})
</script>
