<template>
  <!-- Scroll progress bar -->
  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <!-- Page curtain -->
  <div class="curtain" :class="{ out: curtainOut }"></div>

  <!-- Ambient orbs -->
  <div class="ambient ambient-one" ref="orb1"></div>
  <div class="ambient ambient-two" ref="orb2"></div>

  <!-- Cursor glow (desktop only) -->
  <div class="cursor-glow" :style="cursorGlowStyle"></div>

  

  <NavBar />
  <main @mousemove="onPointerMove" @mouseleave="hideCursorGlow">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <CertificatesSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar              from './components/NavBar.vue'
import HeroSection         from './components/HeroSection.vue'
import AboutSection        from './components/AboutSection.vue'
import SkillsSection       from './components/SkillsSection.vue'
import ExperienceSection   from './components/ExperienceSection.vue'
import ProjectsSection     from './components/ProjectsSection.vue'
import EducationSection    from './components/EducationSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection      from './components/ContactSection.vue'
import FooterSection       from './components/FooterSection.vue'

const curtainOut = ref(false)
const scrollPct  = ref(0)
const cursorX = ref(-200)
const cursorY = ref(-200)
const orb1 = ref(null)
const orb2 = ref(null)

const cursorGlowStyle = ref({
  transform: 'translate(-50%, -50%) translate3d(-200px, -200px, 0)',
  opacity: '0',
})

function onScroll() {
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0

  // Subtle parallax for ambient orbs
  const y = window.scrollY || 0
  if (orb1.value) orb1.value.style.transform = `translate3d(0, ${y * 0.08}px, 0)`
  if (orb2.value) orb2.value.style.transform = `translate3d(0, ${-y * 0.06}px, 0)`
}

function onPointerMove(event) {
  const x = `${(event.clientX / window.innerWidth) * 100}%`
  const y = `${(event.clientY / window.innerHeight) * 100}%`
  document.documentElement.style.setProperty('--pointer-x', x)
  document.documentElement.style.setProperty('--pointer-y', y)

  cursorX.value = event.clientX
  cursorY.value = event.clientY
  cursorGlowStyle.value = {
    transform: `translate(-50%, -50%) translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
    opacity: window.innerWidth > 768 ? '0.18' : '0',
  }
}

function hideCursorGlow() {
  cursorGlowStyle.value.opacity = '0'
}

onMounted(() => {
  setTimeout(() => { curtainOut.value = true }, 400)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style>
/* Curtain */
.curtain {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 99999;
  opacity: 1;
  transition: opacity 0.7s ease;
  pointer-events: none;
}
.curtain.out { opacity: 0; }

.ambient {
  position: fixed;
  width: 34rem;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
  animation: drift 16s ease-in-out infinite alternate;
  will-change: transform;
}
.ambient-one { top: 8%; right: -15rem; background: #38bdf8; }
.ambient-two { bottom: 6%; left: -14rem; background: #a78bfa; animation-delay: -7s; }

@keyframes drift {
  from { transform: translate3d(0, 0, 0) scale(0.9); }
  to { transform: translate3d(-4rem, 3rem, 0) scale(1.12); }
}

/* Cursor glow */
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167,139,250,0.22), transparent 60%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.25s ease;
  mix-blend-mode: screen;
}

@media (pointer: coarse) {
  .cursor-glow { display: none; }
}
</style>
