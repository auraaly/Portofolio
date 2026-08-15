<template>
  <section id="certificates" class="section-wrap">
    <div class="container">

      <!-- Label -->
      <div class="section-label reveal-rotate">
        <span class="label-comment">// achievements</span>
        <div class="label-line"></div>
      </div>

      <h2 class="section-heading reveal-rotate d1">Sertifikat.</h2>

      <!-- Certificate cards -->
      <div class="certs-grid">
        <div
          v-for="(cert, i) in certs"
          :key="cert.title"
          class="cert-card reveal-rotate spotlight"
          :class="`d${i + 2}`"
          :style="{ '--gc': cert.glowColor }"
          @mousemove="moveSpotlight"
          @mouseleave="resetSpotlight"
        >
          <!-- Gradient glow border -->
          <div class="cert-glow" :style="{ '--gc': cert.glowColor }"></div>

           <!-- Title -->
          <h3 class="cert-title">{{ cert.title }}</h3>
          <!-- Issuer -->
          <div class="cert-issuer mono-tag">{{ cert.issuer }}</div>

          <!-- Description -->
          <p class="cert-desc">{{ cert.desc }}</p>

          <!-- Footer -->
          <div class="cert-footer">
            <span class="cert-year">{{ cert.year }}</span>
            <span class="cert-verified">
              <span class="verified-dot"></span>
              Verified
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { observeReveal } from '../composables/useScrollReveal.js'

const certs = [
  {
    issuer: 'Amazon Web Services',
    title: 'AWS Academy Cloud Foundations',
    desc: 'Mempelajari konsep dasar cloud computing, infrastruktur global AWS, model layanan (IaaS, PaaS, SaaS), keamanan, dan cara mengelola sumber daya cloud.',
    year: '2026',
    glowColor: '#fb923c',
    link: '',
  },
  {
    issuer: 'DBS Foundation · Coding Camp 2026',
    title: 'Full Stack Web Developer',
    desc: 'Menyelesaikan program Coding Camp intensif — mencakup pengembangan frontend, backend, database, hingga deployment proyek web secara nyata bersama tim.',
    year: '2026',
    glowColor: '#38bdf8',
    link: '',
  },
]

function moveSpotlight(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
  card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
}

function resetSpotlight(e) {
  const card = e.currentTarget
  card.style.setProperty('--mouse-x', '50%')
  card.style.setProperty('--mouse-y', '50%')
}

observeReveal('#certificates .reveal-rotate', { threshold: 0.12 })
</script>

<style scoped>
.cert-card { position: relative; }
.cert-card.spotlight::before { z-index: 3; }
</style>
