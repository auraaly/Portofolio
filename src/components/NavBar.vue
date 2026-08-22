<template>
  <header class="nav" :class="{ scrolled, hidden: navHidden, 'dark-zone': isDarkZone }">
    <div class="nav-inner container">

      <!-- Link navigasi desktop -->
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

      <!-- Hamburger menu mobile -->
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

    <!-- Menu dropdown mobile -->
    <div class="mobile-menu" :class="{ open: menuOpen, dark: isDarkZone }">
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

const scrolled    = ref(false)
const navHidden   = ref(false)
const menuOpen    = ref(false)
const active      = ref('hero')
const isDarkZone  = ref(false) // true saat scroll melewati zona dusk ke malam
let lastY = 0

const links = [
  { id: 'hero',         label: 'Beranda'    },
  { id: 'skills',       label: 'Kemampuan'  },
  { id: 'projects',     label: 'Proyek'     },
  { id: 'education',    label: 'Pendidikan' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact',      label: 'Kontak'     },
]

const sections = ['hero', 'skills', 'projects', 'education', 'certificates', 'contact']

// Section yang termasuk zona malam (dark zone)
const darkSections = ['education', 'certificates', 'contact']

function onScroll() {
  const y = window.scrollY

  scrolled.value  = y > 40
  navHidden.value = y > 200 && y > lastY + 8
  if (y < lastY - 5 || y < 200) navHidden.value = false
  lastY = y

  // Deteksi section aktif
  const pos = y + 140
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop <= pos) {
      active.value = sections[i]
      break
    }
  }

  // Deteksi apakah sedang di zona malam
  isDarkZone.value = darkSections.includes(active.value)
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>



