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

  <!-- Deep blue animated mesh -->
  <div class="bg-mesh" aria-hidden="true"></div>

  <!-- Floating blue particles -->
  <div class="bg-particles" aria-hidden="true"></div>

  <!-- Lightweight code snippets background -->
  <div class="code-bg" aria-hidden="true">
    <div class="code-rain">
      <span v-for="n in 8" :key="n" class="code-line" :style="{ '--i': n }">
        {{ codeSnippets[(n - 1) % codeSnippets.length] }}
      </span>
    </div>
  </div>

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

const codeSnippets = [
  'const aura = new Developer()',
  'import { passion } from "life"',
  'export default { future: "bright" }',
  '<template><!-- dream big --></template>',
  'function build() { return magic }',
  'await skills.levelUp()',
  'while (learning) { grow() }',
  'const colors = ["#38bdf8", "#a78bfa"]',
]

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

/* Lightweight animated mesh (GPU-friendly) */
.bg-mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(circle 50vw at 15% 15%, rgba(56,189,248,0.13), transparent 60%),
    radial-gradient(circle 42vw at 85% 25%, rgba(14,165,233,0.10), transparent 55%),
    radial-gradient(circle 38vw at 70% 85%, rgba(56,189,248,0.11), transparent 55%);
  filter: blur(40px);
  animation: mesh-drift 26s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes mesh-drift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-5vw, 3vh, 0); }
}

/* Floating blue particles (static + subtle pulse) */
.bg-particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(circle 2px at 12% 22%, rgba(56,189,248,0.45), transparent),
    radial-gradient(circle 2px at 88% 18%, rgba(125,211,252,0.38), transparent),
    radial-gradient(circle 2.5px at 75% 65%, rgba(56,189,248,0.34), transparent),
    radial-gradient(circle 1.5px at 25% 78%, rgba(167,139,250,0.34), transparent),
    radial-gradient(circle 2px at 55% 35%, rgba(14,165,233,0.38), transparent);
  background-size: cover;
  opacity: 0.7;
  animation: particle-pulse 10s ease-in-out infinite alternate;
  will-change: opacity;
}

@keyframes particle-pulse {
  0% { opacity: 0.55; }
  100% { opacity: 0.85; }
}

/* Lightweight code snippets background */
.code-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0.35;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 85%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 85%);
}

.code-rain {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8vh 0;
  transform: rotate(-3deg) scale(1.1);
  transform-origin: center;
}

.code-line {
  display: block;
  font-family: var(--mono);
  font-size: clamp(0.72rem, 1.2vw, 0.92rem);
  color: var(--blue);
  white-space: nowrap;
  opacity: 0.18;
  text-shadow: 0 0 10px rgba(56,189,248,0.25);
  animation: code-flow 26s linear infinite;
  animation-delay: calc(var(--i) * -3.2s);
  transform: translateX(-120%);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.code-line:nth-child(odd) {
  color: var(--purple);
  text-shadow: 0 0 10px rgba(167,139,250,0.25);
}

.code-line:nth-child(3n) {
  color: var(--green);
  text-shadow: 0 0 10px rgba(74,222,128,0.18);
}

@keyframes code-flow {
  0% { transform: translateX(-120%); opacity: 0; }
  5% { opacity: 0.14; }
  45% { opacity: 0.22; }
  90% { opacity: 0.08; }
  100% { transform: translateX(110vw); opacity: 0; }
}

@media (max-width: 768px) {
  .code-bg { opacity: 0.22; }
  .code-line { font-size: 0.68rem; animation-duration: 22s; }
  .bg-mesh { filter: blur(28px); opacity: 0.75; }
  .bg-particles { opacity: 0.5; }
}

@media (prefers-reduced-motion: reduce) {
  .bg-mesh, .bg-particles, .code-line { animation: none; }
}

/* Light theme tweaks so the blue background stays visible */
[data-theme="light"] .code-bg { opacity: 0.45; }
[data-theme="light"] .code-line { opacity: 0.28; }
[data-theme="light"] .bg-particles { opacity: 0.85; }
</style>
