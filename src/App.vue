<template>
  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <NavBar />
  <main>
    <Hero />
    <Kemampuan />
    <Proyek />
    <Pendidikan />
    <Sertifikat />
    <Kontak />
  </main>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar     from './components/NavBar.vue'
import Hero       from './components/Hero.vue'
import Kemampuan  from './components/Kemampuan.vue'
import Proyek     from './components/Proyek.vue'
import Pendidikan from './components/Pendidikan.vue'
import Sertifikat from './components/Sertifikat.vue'
import Kontak     from './components/Kontak.vue'
import Footer     from './components/Footer.vue'

const scrollPct = ref(0)

function onScroll() {
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
