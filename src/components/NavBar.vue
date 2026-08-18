<template>
  <header class="nav" :class="{ scrolled, hidden: navHidden }">
    <div class="nav-inner container">

      <!-- Link navigasi untuk layar desktop -->
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

      <!-- Tombol ganti tema (dark mode / light mode) -->
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

      <!-- Tombol hamburger menu untuk mobile -->
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

    <!-- Menu dropdown untuk versi mobile -->
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

// State untuk UI navbar
const scrolled  = ref(false)  // Navbar jadi transparan atau opaque
const navHidden = ref(false)  // Navbar disembunyiin pas scroll ke bawah
const menuOpen  = ref(false)  // Menu mobile dibuka atau ditutup
const active    = ref('hero') // Section mana yang lagi aktif
let lastY = 0                 // Posisi scroll terakhir buat deteksi arah scroll

// State untuk dark mode
const isDark = ref(true)

// Terapin tema (dark atau light) ke halaman dan simpan di localStorage
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

// Ganti tema pas tombol bulan/matahari diklik
function toggleTheme() {
  applyTheme(!isDark.value)
}

// Load tema yang disimpan di browser pas pertama kali buka
function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') applyTheme(false)
  else applyTheme(true)
}

// Daftar link menu navigasi
const links = [
  { id: 'hero',         label: 'Beranda'    },
  { id: 'skills',       label: 'Kemampuan'  },
  { id: 'projects',     label: 'Proyek'     },
  { id: 'education',    label: 'Pendidikan' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact',      label: 'Kontak'     },
]

// Daftar ID section untuk deteksi active menu
const sections = ['hero','skills','projects','education','certificates','contact']

// Fungsi yang jalan tiap kali user scroll
function onScroll() {
  const y = window.scrollY
  
  // Navbar jadi opaque pas scroll lebih dari 40px
  scrolled.value  = y > 40
  
  // Hide navbar pas scroll ke bawah cepat
  navHidden.value = y > 200 && y > lastY + 8
  
  // Show navbar lagi pas scroll ke atas atau di bagian atas halaman
  if (y < lastY - 5 || y < 200) navHidden.value = false
  lastY = y

  // Deteksi section mana yang lagi keliatan di layar, buat highlight menu
  const pos = y + 140
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop <= pos) { 
      active.value = sections[i]
      break 
    }
  }
}

// Setup listener scroll pas component mount
onMounted(() => {
  lastY = window.scrollY
  initTheme()
  window.addEventListener('scroll', onScroll, { passive: true })
})

// Bersihin listener pas component unmount
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>



