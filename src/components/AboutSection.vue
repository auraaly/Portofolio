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

        <!-- Kanan: info cards -->
        <div class="about-right reveal-right d2">
          <div class="about-cards stagger-children" ref="cardsRef">
            <div class="about-card spotlight" v-for="(card, i) in infoCards" :key="i">
              <div class="about-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="card.icon"></svg>
              </div>
              <div class="about-card-content">
                <span class="about-card-label">{{ card.label }}</span>
                <span class="about-card-val">{{ card.value }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { observeReveal } from '../composables/useScrollReveal.js'

const cardsRef = ref(null)

const infoCards = [
  {
    label: 'Domisili',
    value: 'Samarinda, Indonesia',
    icon: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>',
  },
  {
    label: 'Status',
    value: 'PKL · Dinas Komunikasi dan Informatika Kota Samarinda',
    icon: '<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>',
  },
]

observeReveal('#about .reveal-left, #about .reveal-right', { threshold: 0.12 })

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  if (cardsRef.value) observer.observe(cardsRef.value)
})
</script>

<style scoped>
.spotlight::before { z-index: 2; }
</style>
