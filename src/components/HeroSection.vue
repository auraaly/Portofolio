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
      <article v-tilt="{ max: 4 }" class="glass glass-strong hero-card entrance" style="--entrance-delay: 0.05s">
        <span class="hero-tag">
          <span class="hero-tag-dot"></span>
          Portofolio 2026
        </span>

        <div>
          <p class="hello-text">Halo, saya</p>
          <h1 class="hero-name">Aura Amalia</h1>
          <p class="hero-role">Junior Web Developer</p>
        </div>

        <p class="hero-desc">
          Siswa SMK Negeri 7 Samarinda jurusan PPLG, tertarik mendalami pengembangan perangkat lunak
          dari sisi frontend maupun backend.
        </p>

        <div class="hero-meta">
          <span class="hero-location">
            <i data-lucide="map-pin"></i>
            Samarinda, Indonesia
          </span>
        </div>

        <div class="hero-ctas">
          <button v-magnet @click="openCVModal" class="btn btn-primary">
            <i data-lucide="file-text" class="btn-icon"></i>
            Lihat CV Saya
          </button>
          <button v-magnet @click="goTo('projects')" class="btn btn-outline">
            Lihat Proyek
            <i data-lucide="arrow-right" class="btn-icon"></i>
          </button>
          <button v-magnet @click="goTo('contact')" class="btn btn-ghost">
            Hubungi Saya
            <i data-lucide="arrow-down" class="btn-icon"></i>
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
        <div v-if="showCVModal" class="cv-modal-overlay" @click="closeCVModal">
          <div class="cv-modal-container" @click.stop>
            <div class="cv-modal-header">
              <h3 class="cv-modal-title">CV — Aura Amalia</h3>
              <div class="cv-modal-actions">
                <a
                  href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf"
                  download="AuraAmalia_CV.pdf"
                  class="cv-download-btn"
                >
                  <i data-lucide="download" style="width: 14px; height: 14px"></i>
                  Unduh PDF
                </a>
                <button @click="closeCVModal" class="cv-modal-close" aria-label="Tutup">
                  <span>&times;</span>
                </button>
              </div>
            </div>
            <div class="cv-modal-body">
              <iframe
                src="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf#toolbar=0"
                class="cv-preview-frame"
                title="CV Aura Amalia"
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, nextTick, onUnmounted } from 'vue'
import profileImg from '/aurabd.jpeg'
import AmbientBubbles from './AmbientBubbles.vue'
import { vTilt, vMagnet } from '../directives/pointer'

const showCVModal = ref(false)

function openCVModal() {
  showCVModal.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    if (window.lucide) window.lucide.createIcons()
  })
}

function closeCVModal() {
  showCVModal.value = false
  document.body.style.overflow = ''
}

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>
