<template>
  <section id="hero" class="hero" ref="heroRef">
    <!-- Glow matahari senja -->
    <div class="sun-glow" ref="sunGlow" aria-hidden="true"></div>
    <!-- Awan-awan dekoratif -->
    <div class="hero-cloud cloud-1" aria-hidden="true"></div>
    <div class="hero-cloud cloud-2" aria-hidden="true"></div>

    <div class="container hero-container">
      <!-- Bagian kiri: teks -->
      <div class="hero-left">
        <div class="hero-tag entrance" style="--entrance-delay: 0.02s">
          <span class="hero-tag-dot"></span>
          Portofolio 2026
        </div>
        <div class="hero-heading">
          <p class="hello-text entrance" style="--entrance-delay: 0.08s">Halo, saya</p>
          <h1 class="hero-name entrance" style="--entrance-delay: 0.18s">Aura Amalia</h1>
          <p class="hero-tagline entrance" style="--entrance-delay: 0.42s">Junior Web Developer</p>
        </div>

        <p class="hero-desc entrance" style="--entrance-delay: 0.6s">
          Siswa <strong>SMK Negeri 7 Samarinda</strong> jurusan PPLG. Saya tertarik mendalami
          dunia pengembangan perangkat lunak, mulai dari membangun website hingga memahami
          alur kerja sebuah sistem dari sisi frontend maupun backend.
        </p>

        <div class="hero-meta entrance" style="--entrance-delay: 0.76s">
          <span class="hero-location">
            <i data-lucide="map-pin" class="hero-icon"></i>
            Samarinda, Indonesia
          </span>
          <span class="hero-status">
            <span class="status-dot"></span>
            Tersedia untuk PKL
          </span>
        </div>

        <div class="hero-ctas entrance" style="--entrance-delay: 0.95s">
          <button @click="openCVModal" class="cta-primary">
            <i data-lucide="file-text" style="width:15px;height:15px"></i>
            Lihat CV
          </button>
          <a href="#projects" class="cta-outline">Proyek Saya →</a>
          <a href="#contact" class="cta-ghost">Kontak</a>
        </div>
      </div>

      <!-- Bagian kanan: foto -->
      <div class="hero-right entrance" style="--entrance-delay: 0.28s">
        <div class="hero-photo-frame">
          <div class="photo-ring"></div>
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
          <!-- Floating badge skill -->
          <div class="float-badge badge-vue">Vue.js</div>
          <div class="float-badge badge-php">PHP</div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" ref="scrollHint">
      <div class="scroll-chevrons">
        <span></span><span></span><span></span>
      </div>
    </div>

    <!-- Modal CV -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showCVModal" class="cv-modal-overlay" @click="closeCVModal">
          <div class="cv-modal-container" @click.stop>
            <div class="cv-modal-header">
              <h3 class="cv-modal-title">CV — Aura Amalia</h3>
              <div class="cv-modal-actions">
                <a href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf" download="AuraAmalia_CV.pdf" class="cv-download-btn">
                  <i data-lucide="download" style="width:14px;height:14px"></i>
                  Unduh PDF
                </a>
                <button @click="closeCVModal" class="cv-modal-close" aria-label="Tutup">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="cv-modal-body">
              <iframe src="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf#toolbar=0" class="cv-preview-frame" title="CV Aura Amalia"></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profileImg from '/aurabd.jpeg'

const scrollHint = ref(null)
const sunGlow    = ref(null)
const showCVModal = ref(false)

function openCVModal() {
  showCVModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeCVModal() {
  showCVModal.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  // Trigger animasi entrance semua elemen .entrance
  requestAnimationFrame(() => {
    document.querySelectorAll('.entrance').forEach((el) => el.classList.add('visible'))
  })

  // Initialize Lucide icons
  if (window.lucide) window.lucide.createIcons()

  // Scroll handler — fade scroll hint + parallax sun glow
  const onScroll = () => {
    const y = window.scrollY

    // Fade out scroll hint
    if (scrollHint.value) {
      scrollHint.value.style.opacity = Math.max(0, 0.4 - y / 300).toString()
    }

    // Parallax ringan sun glow — bergerak turun & makin transparan
    if (sunGlow.value) {
      const ty = y * 0.25
      const op = Math.max(0, 1 - y / 600)
      sunGlow.value.style.transform = `translate3d(0, ${ty}px, 0)`
      sunGlow.value.style.opacity   = String(op)
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>


