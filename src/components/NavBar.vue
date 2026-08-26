<template>
  <header class="nav" :class="[zoneClass, { scrolled }]">
    <div class="nav-inner">
      <button class="nav-brand" @click="scrollTop">
        <span class="nav-brand-dot"></span>
        aura.amalia
      </button>

      <nav class="nav-links" role="navigation">
        <button
          v-for="l in links"
          :key="l.id"
          class="nav-link"
          :class="{ active: active === l.id }"
          @click="goTo(l.id)"
        >
          {{ l.label }}
        </button>
      </nav>

      <button
        class="burger"
        :class="{ open: menuOpen }"
        aria-label="Buka menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <button
        v-for="l in links"
        :key="l.id"
        class="mob-link"
        :class="{ active: active === l.id }"
        @click="goTo(l.id)"
      >
        {{ l.label }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const active = ref('hero')

const links = [
  { id: 'hero', label: 'Tentang' },
  { id: 'skills', label: 'Kemampuan' },
  { id: 'projects', label: 'Proyek' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact', label: 'Kontak' },
]

const sections = ['hero', 'skills', 'projects', 'education', 'certificates', 'contact']

const zoneClass = computed(() => {
  if (active.value === 'hero') return ''
  if (active.value === 'skills' || active.value === 'projects') return 'mid-z'
  return 'deep-z'
})

function goTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  const y = window.scrollY
  scrolled.value = y > 40

  const pos = y + 150
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (!el) continue
    const top = el.getBoundingClientRect().top + y
    if (top <= pos) {
      active.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
