<template>
  <section id="hero" class="hero" ref="heroRef">
    <div class="container hero-container">

      <!-- Bagian kiri: Perkenalan dan CTA -->
      <div class="hero-left">
        <div class="hero-heading">
          <p class="hello-text entrance" style="--entrance-delay: 0.05s">Halo, saya</p>
          <h1 class="hero-name entrance" style="--entrance-delay: 0.15s">Aura Amalia</h1>
          <p class="hero-tagline entrance" style="--entrance-delay: 0.4s">
            <span class="typing-text">Junior Web Developer</span>
          </p>
        </div>

        <!-- Deskripsi singkat -->
        <p class="hero-desc entrance" style="--entrance-delay: 0.6s">
          Siswa <strong>SMK Negeri 7 Samarinda</strong> jurusan PPLG. Saya tertarik mendalami
          dunia pengembangan perangkat lunak, mulai dari membangun website hingga memahami
          alur kerja sebuah sistem dari sisi frontend maupun backend.
        </p>

        <!-- Info domisili -->
        <div class="hero-info entrance" style="--entrance-delay: 0.8s">
          <div class="hero-info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Samarinda, Indonesia</span>
          </div>
        </div>

        <!-- Tombol aksi utama -->
        <div class="hero-ctas entrance" style="--entrance-delay: 1.0s">
          <a href="/CV_Aura_Amalia.pdf" download="CV_Aura_Amalia.pdf" class="cta-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Unduh CV
          </a>
          <a href="#projects" class="cta-outline">Lihat Proyek →</a>
          <a href="#contact" class="cta-outline">Hubungi Saya</a>
        </div>
      </div>

      <!-- Bagian kanan: Foto dan tech pills -->
      <div class="hero-right entrance" style="--entrance-delay: 0.3s">
        <!-- Frame foto dengan efek glass morphism -->
        <div class="glass-frame">
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
        </div>

        <!-- Chip teknologi yang dikuasai -->
        <div class="tech-pills" ref="pillsRef">
          <span v-for="t in techPills" :key="t" class="tech-pill">{{ t }}</span>
        </div>
      </div>

    </div>

    <!-- Petunjuk scroll di bawah (chevron beranimasi) -->
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

// Referensi elemen untuk animasi
const pillsRef = ref(null)
const scrollHint = ref(null)

// Setup animasi entrance pas komponen dimuat
onMounted(() => {
  // Trigger animasi entrance buat semua elemen dengan class .entrance
  requestAnimationFrame(() => {
    document.querySelectorAll('.entrance').forEach((el) => el.classList.add('visible'))
    if (pillsRef.value) pillsRef.value.classList.add('visible')
  })

  // Fade out scroll hint pas user mulai scroll
  const onScroll = () => {
    if (scrollHint.value) {
      scrollHint.value.style.opacity = Math.max(0, 0.4 - window.scrollY / 300).toString()
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  
  // Bersihin listener pas unmount
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
/* Animasi entrance: elemen muncul dari bawah dengan fade */
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

/* Cursor kedip buat efek typing */
.typing-cursor {
  color: var(--blue);
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
</style>
