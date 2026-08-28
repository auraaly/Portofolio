<template>
  <section id="hero" class="section-pad">
    <div class="rays" aria-hidden="true">
      <span class="ray"></span>
      <span class="ray"></span>
      <span class="ray"></span>
      <span class="ray"></span>
    </div>
    <AmbientBubbles :count="7" />

    <div class="container hero-grid">
      <article class="hero-text entrance" style="--entrance-delay: 0.05s">


        <div>
          <p class="hello-text">Halo, saya</p>
          <h3 class="hero-name">Aura Amalia</h3>
          <p class="hero-role">Junior Web Developer</p>
        </div>

        <p class="hero-desc">
        Murid kelas 12 jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)
        di SMK Negeri 7 Samarinda. Saya memiliki ketertarikan mendalam di bidang web development, 
        khususnya dalam membangun tampilan web yang responsif serta mengelola logika sistem pendukungnya.
        </p>

        <div class="hero-meta">
          <span class="hero-location">
            <i data-lucide="map"></i>
            Samarinda, Indonesia
          </span>
        </div>

        <div class="hero-ctas">
          <button type="button" v-magnet @click.prevent="openCV" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Lihat CV Saya
          </button>
          <button v-magnet @click="goTo('projects')" class="btn btn-outline">
            <i data-lucide="arrow-right" class="btn-icon"></i>
            Lihat Proyek
          </button>
          <button v-magnet @click="goTo('contact')" class="btn btn-ghost">
            <i data-lucide="arrow-down" class="btn-icon"></i>
            Hubungi Saya
          </button>
        </div>
      </article>

      <div class="hero-side entrance" style="--entrance-delay: 0.25s">
        <div class="capsule-wrap">
          <div class="capsule-ring"></div>
          <div class="capsule">
            <img :src="profileImg" alt="Foto Aura Amalia" />
          </div>
          <span class="orbit-bubble ob-1"></span>
          <span class="orbit-bubble ob-2"></span>
          <span class="orbit-bubble ob-3"></span>
          <span class="orbit-bubble ob-4"></span>
          <span class="orbit-bubble ob-5"></span>
          <span class="orbit-bubble ob-6"></span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showCV" class="pm-overlay" @click="closeCV">
          <div class="cv-modal-container" role="dialog" aria-modal="true" @click.stop>
            <div class="cv-modal-header">
              <h3 class="pm-title" style="margin:0; font-size: 1.5rem;">Preview CV</h3>
              <div class="cv-actions">
                <a
                  href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf"
                  download="AuraAmalia_CV.pdf"
                  class="btn btn-primary btn-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Unduh CV
                </a>
                <button class="pm-close" aria-label="Tutup preview CV" @click="closeCV" style="position:static; margin-left: 12px; transform: none; width: 40px; height: 40px;">
                  &times;
                </button>
              </div>
            </div>
            <div class="cv-modal-body">
              <iframe
                src="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf#toolbar=0"
                type="application/pdf"
                width="100%"
                height="100%"
                class="cv-pdf-viewer"
                title="CV Aura Amalia"
              >
                <p>Browser kamu belum mendukung preview PDF langsung.</p>
              </iframe>
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
import AmbientBubbles from './effects/AmbientBubbles.vue'
import { vMagnet } from '../directives/pointer'

const showCV = ref(false)

function openCV() {
  showCV.value = true
  document.body.style.overflow = 'hidden'
}

function closeCV() {
  showCV.value = false
  document.body.style.overflow = ''
}

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.pm-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(2, 11, 20, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cv-modal-container {
  width: min(900px, 92vw);
  height: 85vh;
  background: var(--z-bg, #041524);
  border-radius: var(--r-xl);
  border: 1px solid rgba(125, 211, 252, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(2, 12, 24, 0.8);
}

.cv-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: rgba(4, 21, 36, 0.9);
  border-bottom: 1px solid rgba(125, 211, 252, 0.15);
}

.cv-actions {
  display: flex;
  align-items: center;
}

.pm-close {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.pm-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.cv-modal-body {
  flex: 1;
  background: #f8f9fa;
  position: relative;
}

.cv-modal-body iframe,
.cv-pdf-viewer {
  border: none;
  background: transparent;
  display: block;
}

.cv-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px;
  text-align: center;
  color: #334155;
  font-family: var(--font-body);
}

.cv-fallback p {
  margin-bottom: 8px;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.9rem;
}
</style>
