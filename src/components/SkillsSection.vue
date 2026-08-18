<template>
  <section id="skills" class="section-wrap">
    <div class="container">

      <div class="section-divider reveal-scale">
        <span class="section-badge">Kemampuan</span>
        <div class="divider-line"></div>
      </div>

      <div class="skills-body">

        <div class="skills-group reveal-scale d2">
          <div class="group-label">
            <span class="group-dot dot-red"></span>
            Frontend
          </div>
          <div class="group-chips">
            <div v-for="s in frontendSkills" :key="s.name" class="chip-icon">
              <img :src="s.icon" :alt="s.name" class="chip-img" />
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

        <div class="skills-group reveal-scale d3">
          <div class="group-label">
            <span class="group-dot dot-purple"></span>
            Backend
          </div>
          <div class="group-chips">
            <div v-for="s in backendSkills" :key="s.name" class="chip-icon">
              <img :src="s.icon" :alt="s.name" class="chip-img" />
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

        <div class="skills-group reveal-scale d4">
          <div class="group-label">
            <span class="group-dot dot-green"></span>
            Tools
          </div>
          <div class="group-chips">
            <div v-for="s in toolsSkills" :key="s.name" class="chip-icon">
              <img :src="s.icon" :alt="s.name" class="chip-img" :class="{ 'img-invert': s.invert }" />
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Fungsi pengamat animasi scroll saat elemen kemampuan muncul di layar
import { observeReveal } from '../composables/useScrollReveal.js'

// URL dasarcdn ikon devicon untuk mengambil logo teknologi secara otomatis
const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// Daftar keahlian bagian Frontend (tampilan depan)
const frontendSkills = [
  { name: 'HTML5',      icon: `${base}/html5/html5-original.svg` },
  { name: 'CSS3',       icon: `${base}/css3/css3-original.svg` },
  { name: 'JavaScript', icon: `${base}/javascript/javascript-original.svg` },
  { name: 'Vue.js',     icon: `${base}/vuejs/vuejs-original.svg` },
  { name: 'Bootstrap',  icon: `${base}/bootstrap/bootstrap-original.svg` },
  { name: 'Tailwind',   icon: `${base}/tailwindcss/tailwindcss-original.svg` },
]

// Daftar keahlian bagian Backend (pemrosesan data server)
const backendSkills = [
  { name: 'PHP',     icon: `${base}/php/php-original.svg` },
  { name: 'MySQL',   icon: `${base}/mysql/mysql-original.svg` },
  { name: 'Node.js', icon: `${base}/nodejs/nodejs-original.svg` },
]

// Daftar peralatan & tools pengembangan yang biasa digunakan
const toolsSkills = [
  { name: 'Git',     icon: `${base}/git/git-original.svg` },
  { name: 'GitHub',  icon: `${base}/github/github-original-wordmark.svg`, invert: true },
  { name: 'VS Code', icon: `${base}/vscode/vscode-original.svg` },
  { name: 'Figma',   icon: `${base}/figma/figma-original.svg` },
]

// Aktifkan pemantau animasi scroll pada seksi kemampuan ini
observeReveal('#skills .reveal-scale', { threshold: 0.1 })
</script>

<style scoped>
.chip-img {
  width: 2.8rem;
  height: 2.8rem;
  object-fit: contain;
  transition: transform var(--tf);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}
.img-invert {
  filter: invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}
.chip-icon:hover .chip-img {
  transform: scale(1.15) translateY(-2px);
}
</style>
