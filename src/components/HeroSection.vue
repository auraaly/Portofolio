<template>
  <section id="hero" class="hero" ref="heroRef">
    <div class="container hero-container">
      <!-- LEFT: Teks -->
      <div class="hero-left">
        <div class="hero-heading" ref="heroHeading">
          <p class="hello-text entrance" style="--entrance-delay: 0.05s">Halo, saya</p>
          <h1 class="hero-name entrance" style="--entrance-delay: 0.15s">{{ name }}</h1>
          <p class="hero-tagline entrance" style="--entrance-delay: 0.55s">
            <span class="typing-text">{{ typedTagline }}</span><span class="typing-cursor" v-if="showCursor">|</span>
          </p>
        </div>

        <p class="hero-desc entrance" style="--entrance-delay: 0.85s">
          Siswa <strong>SMK Negeri 7 Samarinda</strong> jurusan PPLG. Belajar membangun web yang
          fungsional dan rapi, mulai dari antarmuka yang nyaman sampai backend yang berjalan lancar.
        </p>

        <div class="hero-ctas entrance" style="--entrance-delay: 1.05s">
          <a href="#projects" class="cta-primary magnetic" ref="cta1">Lihat Proyek →</a>
          <a href="#contact" class="cta-outline magnetic" ref="cta2">Hubungi Saya</a>
        </div>

        <div class="hero-stats entrance" style="--entrance-delay: 1.25s">
          <div class="stat-item" v-for="s in animatedStats" :key="s.label">
            <span class="stat-num">{{ s.display }}+</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Foto -->
      <div class="hero-right entrance" style="--entrance-delay: 0.45s">
        <div
          class="glass-frame tilt-frame"
          ref="tiltFrame"
          @mousemove="handleTilt"
          @mouseleave="resetTilt"
          :style="tiltStyle"
        >
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
        </div>

        <div class="tech-pills stagger-children" ref="pillsRef">
          <span v-for="t in techPills" :key="t" class="tech-pill">{{ t }}</span>
        </div>
      </div>
    </div>

    <div class="scroll-hint" ref="scrollHint">
      <div class="scroll-chevrons">
        <span></span><span></span><span></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import profileImg from '../../aurabd.jpeg'

const heroRef = ref(null)
const tiltFrame = ref(null)
const pillsRef = ref(null)
const cta1 = ref(null)
const cta2 = ref(null)
const scrollHint = ref(null)

const name = 'Aura Amalia'
const nameChars = computed(() => name.split(''))

const tagline = 'Junior Full Stack Developer'
const typedTagline = ref('')
const showCursor = ref(true)

const stats = [
  { value: 2, label: 'Tahun Belajar' },
  { value: 10, label: 'Proyek' },
  { value: 3, label: 'Teknologi' },
]
const animatedStats = ref(stats.map(s => ({ ...s, display: 0 })))

// Tilt effect
const tilt = ref({ x: 0, y: 0 })
const tiltStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg) scale3d(1.02, 1.02, 1.02)`,
  transition: 'transform 0.15s ease-out',
}))

function handleTilt(e) {
  const el = tiltFrame.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rotateX = ((y - cy) / cy) * -8
  const rotateY = ((x - cx) / cx) * 8
  tilt.value = { x: rotateX, y: rotateY }
}

function resetTilt() {
  tilt.value = { x: 0, y: 0 }
}

// Magnetic buttons
function makeMagnetic(el) {
  if (!el) return
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  })
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)'
  })
}

// Typing effect
function runTyping() {
  let i = 0
  const typeInterval = setInterval(() => {
    typedTagline.value = tagline.slice(0, i + 1)
    i++
    if (i >= tagline.length) {
      clearInterval(typeInterval)
      setTimeout(() => {
        const blink = setInterval(() => { showCursor.value = !showCursor.value }, 500)
        setTimeout(() => clearInterval(blink), 3000)
      }, 500)
    }
  }, 60)
}

// Counter animation
function runCounters() {
  stats.forEach((s, idx) => {
    const target = s.value
    let current = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      animatedStats.value[idx].display = current
    }, 40 + idx * 10)
  })
}

onMounted(() => {
  // Trigger stagger entrance classes
  requestAnimationFrame(() => {
    document.querySelectorAll('.entrance').forEach((el) => el.classList.add('visible'))
    if (pillsRef.value) pillsRef.value.classList.add('visible')
  })

  // Typing
  setTimeout(runTyping, 750)

  // Counters
  setTimeout(runCounters, 1200)

  // Scroll hint hide on scroll
  const onScroll = () => {
    if (scrollHint.value) {
      scrollHint.value.style.opacity = Math.max(0, 0.4 - window.scrollY / 300).toString()
      scrollHint.value.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.2}px)`
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<style scoped>
/* Entrance animations */
.entrance {
  opacity: 0;
  transform: translateY(32px) scale(0.96);
  filter: blur(10px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--entrance-delay, 0s);
}
.entrance.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* Floating particles background */
.hero {
  position: relative;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(circle 2px at 10% 20%, rgba(56,189,248,0.35), transparent),
    radial-gradient(circle 2px at 20% 80%, rgba(167,139,250,0.35), transparent),
    radial-gradient(circle 3px at 80% 40%, rgba(56,189,248,0.25), transparent),
    radial-gradient(circle 2px at 90% 70%, rgba(167,139,250,0.25), transparent),
    radial-gradient(circle 1.5px at 50% 60%, rgba(56,189,248,0.3), transparent),
    radial-gradient(circle 2px at 70% 10%, rgba(167,139,250,0.3), transparent);
  animation: float-particles 18s ease-in-out infinite alternate;
}
@keyframes float-particles {
  0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
  100% { transform: translateY(-20px) rotate(2deg); opacity: 1; }
}

/* Code matrix overlay inside hero */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px),
    linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 70% 40%, black 0%, transparent 65%);
  -webkit-mask-image: radial-gradient(ellipse at 70% 40%, black 0%, transparent 65%);
  animation: grid-pan 24s linear infinite;
}
@keyframes grid-pan {
  0% { background-position: 0 0; }
  100% { background-position: 64px 64px; }
}

[data-theme="light"] .hero::after {
  background-image:
    linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px),
    linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px);

  overflow: hidden;
}
.cta-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
  pointer-events: none;
}
.cta-primary:hover::after {
  left: 140%;
}


/* Typing cursor */
.typing-cursor {
  color: var(--blue);
  margin-left: 3px;
  animation: blink 1s step-end infinite;
}

/* Tilt frame */
.tilt-frame {
  transform-style: preserve-3d;
  will-change: transform;
}

/* Magnetic buttons reset */
.magnetic {
  will-change: transform;
}
</style>
