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

      <!-- Theme toggle -->
      <button
        class="theme-toggle"
        aria-label="Toggle dark mode"
        @click="toggleTheme"
      >
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>

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

const isDark = ref(true)

function applyTheme(dark) {
  isDark.value = dark
  if (dark) {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

function toggleTheme() {
  applyTheme(!isDark.value)
}

function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') applyTheme(false)
  else applyTheme(true)
}

const links = [
  { id: 'hero',         label: 'Beranda'    },
  { id: 'skills',       label: 'Kemampuan'  },
  { id: 'projects',     label: 'Proyek'     },
  { id: 'education',    label: 'Pendidikan' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact',      label: 'Kontak'     },
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
  initTheme()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>



