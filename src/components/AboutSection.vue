<template>
  <section id="about" class="section-wrap">
    <div class="container">

      <div class="section-label reveal-left">
        <span class="label-comment">// about-me</span>
        <div class="label-line"></div>
      </div>

      <div class="about-layout">

        <!-- Kiri: bio -->
        <div class="about-left">
          <h2 class="about-heading reveal-left d1">Tentang Saya</h2>

          <p class="about-bio reveal-left d2">
            Halo! Saya <strong>Aura Amalia</strong>, siswa kelas XII jurusan
            Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK Negeri 7 Samarinda.
            Saya tertarik mendalami dunia pengembangan perangkat lunak, mulai dari
            membangun website hingga memahami alur kerja sebuah sistem dari sisi
            frontend maupun backend. Saya senang belajar hal baru dan mencoba
            menerapkannya langsung lewat proyek-proyek kecil.
          </p>

          <p class="about-bio reveal-left d3">
            Ke depannya, saya ingin terus mengasah kemampuan di bidang teknologi
            dan siap melangkah ke jenjang berikutnya, baik itu kuliah maupun karier
            sebagai developer.
          </p>
        </div>

        <!-- Kanan: info card -->
        <div class="about-right reveal-right d2">
          <div class="about-info-card spotlight">
            <div class="info-row">
              <div class="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">Domisili</span>
                <span class="info-value">Samarinda, Indonesia</span>
              </div>
            </div>

            <div class="info-divider"></div>

            <div class="info-row">
              <div class="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">Status</span>
                <span class="info-value">PKL · Dinas Komunikasi dan Informatika Kota Samarinda</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { observeReveal } from '../composables/useScrollReveal.js'

observeReveal('#about .reveal-left, #about .reveal-right', { threshold: 0.12 })
</script>

<style scoped>
.spotlight::before { z-index: 2; }
</style>
