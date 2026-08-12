<template>
  <section id="about" class="section-wrap">
    <div class="container">

      <div class="section-label reveal">
        <span class="label-comment">// about-me</span>
        <div class="label-line"></div>
      </div>

      <div class="about-layout">

        <!-- Kiri: bio -->
        <div class="about-left">
          <h2 class="about-heading reveal d1">Tentang Saya</h2>

          <p class="about-bio reveal d2">
            Halo! Saya <strong>Aura Amalia</strong>, siswa kelas XII jurusan
            Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK Negeri 7 Samarinda.
            Saya tertarik mendalami dunia pengembangan perangkat lunak, mulai dari
            membangun website hingga memahami alur kerja sebuah sistem dari sisi
            frontend maupun backend. Saya senang belajar hal baru dan mencoba
            menerapkannya langsung lewat proyek-proyek kecil.
          </p>

          <p class="about-bio reveal d3">
            Ke depannya, saya ingin terus mengasah kemampuan di bidang teknologi
            dan siap melangkah ke jenjang berikutnya, baik itu kuliah maupun karier
            sebagai developer.
          </p>
        </div>

        <!-- Kanan: info cards -->
        <div class="about-right reveal d2">
          <div class="about-cards">
            <div class="about-card">
              <div class="about-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <div class="about-card-content">
                <span class="about-card-label">Domisili</span>
                <span class="about-card-val">Samarinda, Indonesia</span>
              </div>
            </div>

            <div class="about-card">
              <div class="about-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>
                </svg>
              </div>
              <div class="about-card-content">
                <span class="about-card-label">Status</span>
                <span class="about-card-val">PKL · Dinas Komunikasi dan Informatika Kota Samarinda</span>
              </div>
            </div>
</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let obs = null
onMounted(() => {
  obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible')
    }),
    { threshold: 0.12 },
  )
  document.querySelectorAll('#about .reveal').forEach((el) => obs.observe(el))
})
onUnmounted(() => obs?.disconnect())
</script>
