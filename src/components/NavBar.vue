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
  window.addEventListener('scroll', onScroll, { passive: true })
})

// Bersihin listener pas component unmount
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>



