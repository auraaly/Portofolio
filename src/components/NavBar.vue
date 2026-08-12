<template>
  <header class="nav" :class="{ scrolled, hidden: navHidden }">
    <div class="nav-inner container">


      <!-- Desktop links -->
      <nav class="nav-links" role="navigation">
        <a
          v-for="l in links"
          :key="l.id"
          :href="'#' + l.id"
          class="nav-link"
          :class="{ active: active === l.id }"
        >
          {{ l.label }}
        </a>
      </nav>


      <!-- Hamburger -->
      <button
        class="burger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="l in links"
        :key="l.id"
        :href="'#' + l.id"
        class="mob-link"
        @click="menuOpen = false"
      >
        {{ l.label }}
      </a>
      <div class="mob-avail">
        <span class="avail-dot"></span>
        Terbuka untuk PKL dan magang
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled  = ref(false)
const navHidden = ref(false)
const menuOpen  = ref(false)
const active    = ref('hero')
let lastY = 0

const links = [
  { id: 'hero',         label: 'Beranda',   num: '01' },
  { id: 'about',        label: 'Tentang',   num: '02' },
  { id: 'skills',       label: 'Kemampuan', num: '03' },
  { id: 'projects',     label: 'Proyek',    num: '04' },
  { id: 'contact',      label: 'Kontak',    num: '05' },
]

const sections = ['hero','about','skills','experience','projects','education','certificates','contact']

function onScroll() {
  const y = window.scrollY
  scrolled.value  = y > 40
  navHidden.value = y > 200 && y > lastY + 8
  if (y < lastY - 5 || y < 200) navHidden.value = false
  lastY = y

  const pos = y + 140
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop <= pos) { active.value = sections[i]; break }
  }
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>



