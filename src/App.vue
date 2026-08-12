<template>
  <!-- Scroll progress bar -->
  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <!-- Page curtain -->
  <div class="curtain" :class="{ out: curtainOut }"></div>
  <div class="ambient ambient-one"></div>
  <div class="ambient ambient-two"></div>

  <NavBar />
  <main @mousemove="onPointerMove">
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

function onScroll() {
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

function onPointerMove(event) {
  const x = `${(event.clientX / window.innerWidth) * 100}%`
  const y = `${(event.clientY / window.innerHeight) * 100}%`
  document.documentElement.style.setProperty('--pointer-x', x)
  document.documentElement.style.setProperty('--pointer-y', y)
}

onMounted(() => {
  setTimeout(() => { curtainOut.value = true }, 400)
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
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
}
.ambient-one { top: 8%; right: -15rem; background: #38bdf8; }
.ambient-two { bottom: 6%; left: -14rem; background: #a78bfa; animation-delay: -7s; }

@keyframes drift {
  from { transform: translate3d(0, 0, 0) scale(0.9); }
  to { transform: translate3d(-4rem, 3rem, 0) scale(1.12); }
}
</style>
