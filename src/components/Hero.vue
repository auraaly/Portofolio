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
            <i data-lucide="map-pin" class="hero-icon"></i>
            <span>Samarinda, Indonesia</span>
          </div>
        </div>

        <!-- Tombol aksi utama -->
        <div class="hero-ctas entrance" style="--entrance-delay: 1.0s">
          <button @click="openCVModal" class="cta-primary">
            <i data-lucide="file-text" class="cta-icon"></i>
            Lihat CV Saya
          </button>
          <a href="#projects" class="cta-outline">Lihat Proyek →</a>
          <a href="#contact" class="cta-outline">Hubungi Saya</a>
        </div>
      </div>

      <!-- Bagian kanan: Foto -->
      <div class="hero-right entrance" style="--entrance-delay: 0.3s">
        <!-- Frame foto -->
        <div class="glass-frame">
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
        </div>
      </div>

    </div>

    <!-- Petunjuk scroll di bawah (chevron beranimasi) -->
    <div class="scroll-hint" ref="scrollHint">
      <div class="scroll-chevrons">
        <span></span><span></span><span></span>
      </div>
    </div>

    <!-- Modal Preview CV -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showCVModal" class="cv-modal-overlay" @click="closeCVModal">
          <div class="cv-modal-container" @click.stop>
            <!-- Header modal dengan tombol close -->
            <div class="cv-modal-header">
              <h3 class="cv-modal-title">Preview CV Aura Amalia</h3>
              <button @click="closeCVModal" class="cv-modal-close" aria-label="Tutup modal">
                <i data-lucide="x" class="close-icon"></i>
              </button>
            </div>

            <!-- Preview PDF dalam iframe -->
            <div class="cv-modal-body">
              <iframe 
                src="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf#toolbar=0" 
                class="cv-preview-frame"
                title="Preview CV Aura Amalia"
              ></iframe>
            </div>

            <!-- Footer dengan tombol download -->
            <div class="cv-modal-footer">
              <a 
                href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf" 
                download="AuraAmalia_CV.pdf" 
                class="cv-download-btn"
              >
                <i data-lucide="download" class="download-icon"></i>
                Unduh CV (PDF)
              </a>
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

// Referensi elemen untuk animasi
const pillsRef = ref(null)
const scrollHint = ref(null)

// State untuk modal CV
const showCVModal = ref(false)


// Fungsi buka modal CV
function openCVModal() {
  showCVModal.value = true
  document.body.style.overflow = 'hidden' // Disable scroll pas modal buka
}

// Fungsi tutup modal CV
function closeCVModal() {
  showCVModal.value = false
  document.body.style.overflow = '' // Enable scroll lagi
}

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
  
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons()
  }
  
  // Bersihin listener pas unmount
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>



