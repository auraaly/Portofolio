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

/* Icon dari Lucide CDN */
.hero-icon,
.cta-icon,
.close-icon,
.download-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2.5;
}

.close-icon {
  width: 20px;
  height: 20px;
}

/* Modal CV Overlay (background gelap transparan) */
.cv-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 22, 40, 0.92);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

/* Container modal CV */
.cv-modal-container {
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: var(--card);
  border: 1px solid var(--border-b);
  border-radius: var(--r-lg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  animation: modal-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-slide-up {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Header modal */
.cv-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
}

.cv-modal-title {
  font-family: var(--display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--t1);
  margin: 0;
}

/* Tombol close */
.cv-modal-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--t2);
  cursor: pointer;
  transition: all var(--tf);
}

.cv-modal-close:hover {
  background: rgba(248, 113, 113, 0.1);
  border-color: #f87171;
  color: #f87171;
  transform: rotate(90deg);
}

/* Body modal dengan iframe */
.cv-modal-body {
  flex: 1;
  overflow: hidden;
  padding: 0;
  min-height: 500px;
}

.cv-preview-frame {
  width: 100%;
  height: 100%;
  min-height: 500px;
  border: none;
  background: #fff;
}

/* Footer modal dengan tombol download */
.cv-modal-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: center;
  gap: 12px;
}

.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, var(--blue-d), var(--blue));
  color: #050d1a;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--r-sm);
  transition: all var(--tf);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.cv-download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(56, 189, 248, 0.4);
  opacity: 0.93;
}

/* Animasi fade modal */
.modal-fade-enter-active {
  transition: opacity 0.3s ease;
}

.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .cv-modal-container {
    max-width: 100%;
    max-height: 95vh;
    margin: 0;
    border-radius: var(--r-md);
  }

  .cv-modal-header {
    padding: 16px 20px;
  }

  .cv-modal-title {
    font-size: 1.1rem;
  }

  .cv-modal-body {
    min-height: 400px;
  }

  .cv-preview-frame {
    min-height: 400px;
  }

  .cv-modal-footer {
    padding: 14px 20px;
  }

  .cv-download-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
