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

  

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="footer-copy"> &copy; {{ year }} Aura Amalia.</span>

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
