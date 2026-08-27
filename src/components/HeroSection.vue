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
          <a
            href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf"
            download="AuraAmalia_CV.pdf"
            v-magnet
            class="btn btn-primary"
          >
            <i data-lucide="download" class="btn-icon"></i>
            Unduh CV
          </a>
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
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import profileImg from '/aurabd.jpeg'
import AmbientBubbles from './effects/AmbientBubbles.vue'
import { vMagnet } from '../directives/pointer'

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
