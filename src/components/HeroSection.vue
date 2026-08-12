<template>
  <section id="hero" class="hero">
    <div class="container hero-container">

      <!-- LEFT: Teks -->
      <div class="hero-left">
        <div class="hero-heading">
          <p class="hello-text">Halo, saya</p>
          <h1 class="hero-name">Aura Amalia</h1>
          <p class="hero-tagline">Junior Full Stack Developer</p>
        </div>

        <p class="hero-desc">
          Siswa <strong>SMK Negeri 7 Samarinda</strong> jurusan PPLG.
          Belajar membangun web yang fungsional dan rapi, mulai
          dari antarmuka yang nyaman sampai backend yang berjalan lancar.
        </p>

        <div class="hero-ctas">
          <a href="#projects" class="cta-primary">Lihat Proyek →</a>
          <a href="#contact" class="cta-outline">Hubungi Saya</a>
        </div>

        <div class="hero-stats">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.display }}</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Foto -->
      <div class="hero-right">
        <div class="glass-frame">
          <img :src="profileImg" alt="Aura Amalia" class="hero-img" />
        </div>

        <div class="tech-pills">
          <span v-for="t in techPills" :key="t" class="tech-pill">{{ t }}</span>
        </div>
      </div>
 </div>
  </section>
</template>

<script setup>
import profileImg from '../../aurabd.jpeg'

</script>