<template>
  <footer class="footer">
    <!-- Scan-line overlay -->
    <div class="scanline-overlay" aria-hidden="true"></div>

    <!-- Marquee strip -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span v-for="n in 2" :key="n" class="marquee-inner">
          <span v-for="item in marqueeItems" :key="item" class="marquee-item">
            <span class="mi-dot">◆</span> {{ item }}
          </span>
        </span>
      </div>
    </div>

    <!-- Main footer content -->
    <div class="footer-main container">
      <!-- Left: Logo + tagline -->
      <div class="footer-brand">
        <a href="#hero" class="footer-logo">
          <span class="fl-blue">&lt;</span>
          <span class="fl-name">Aura</span>
          <span class="fl-purple">.</span>
          <span class="fl-dev">dev</span>
          <span class="fl-blue">/&gt;</span>
        </a>
        <p class="footer-tagline">
          Junior Full Stack Developer<br />
          <span class="ft-mono">Samarinda, Indonesia</span>
        </p>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="footer-copy"> &copy; {{ year }} Aura Amalia. All rights reserved. </span>
        <span class="footer-built mono-tag">
          Built with
          <span class="fb-vue">Vue 3</span>
          +
          <span class="fb-vite">Vite</span>
          · {{ year }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const marqueeItems = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Vue.js 3',
  'PHP',
  'MySQL',
  'Bootstrap',
  'Git',
  'GitHub',
  'REST API',
  'PPLG',
  'Full Stack',
  'Coding Camp 2026',
  'DBS Foundation',
  'AWS Cloud',
]

</script>
