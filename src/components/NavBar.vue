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
        <span v-if="isDark" class="theme-text">Mode Gelap</span>
        <span v-else class="theme-text">Mode Terang</span>
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



