<template>
  <section id="hero" class="hero" ref="heroRef">
    <div class="container hero-container">

      <!-- LEFT: Teks -->
      <div class="hero-left">
        <div class="hero-heading">
          <p class="hello-text entrance" style="--entrance-delay: 0.05s">Halo, saya</p>
          <h1 class="hero-name entrance" style="--entrance-delay: 0.15s">Aura Amalia</h1>
          <p class="hero-tagline entrance" style="--entrance-delay: 0.4s">
            <span class="typing-text">{{ typedTagline }}</span><span class="typing-cursor" v-if="showCursor">|</span>
          </p>
        </div>

        <p class="hero-desc entrance" style="--entrance-delay: 0.6s">
          Siswa <strong>SMK Negeri 7 Samarinda</strong> jurusan PPLG. Saya tertarik mendalami
          dunia pengembangan perangkat lunak, mulai dari membangun website hingga memahami
          alur kerja sebuah sistem dari sisi frontend maupun backend.
        </p>

        <!-- Info cards (from About) -->
        <div class="hero-info entrance" style="--entrance-delay: 0.8s">
          <div class="hero-info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Samarinda, Indonesia</span>
          </div>
        </div>

        <div class="hero-ctas entrance" style="--entrance-delay: 1.0s">
          <a href="#projects" class="cta-primary">Lihat Proyek →</a>
          <a href="#contact" class="cta-outline">Hubungi Saya</a>
        </div>
      </div>

      <!-- RIGHT: Foto -->
      <div class="hero-right entrance" style="--entrance-delay: 0.3s">
        <div class="glass-frame">
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
        </div>

        <div class="tech-pills" ref="pillsRef">
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
import { ref, onMounted, onUnmounted } from 'vue'
import profileImg from '/aurabd.jpeg'

const pillsRef = ref(null)
const scrollHint = ref(null)

const tagline = 'Junior Web Developer'
const typedTagline = ref('')
const showCursor = ref(true)

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

onMounted(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll('.entrance').forEach((el) => el.classList.add('visible'))
    if (pillsRef.value) pillsRef.value.classList.add('visible')
  })

  setTimeout(runTyping, 600)

  const onScroll = () => {
    if (scrollHint.value) {
      scrollHint.value.style.opacity = Math.max(0, 0.4 - window.scrollY / 300).toString()
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.entrance {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--entrance-delay, 0s);
}
.entrance.visible {
  opacity: 1;
  transform: translateY(0);
}

.typing-cursor {
  color: var(--blue);
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
</style>
