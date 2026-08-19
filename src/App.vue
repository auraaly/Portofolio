<template>
  <!-- Scroll progress bar -->
  <div id="scroll-progress" :style="{ width: scrollPct + '%' }"></div>

  <NavBar />
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
    <CertificatesSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
// Impor Reactivity API dari Vue
import { ref, onMounted, onUnmounted } from 'vue'

// Impor semua komponen halaman portofolio
import NavBar                  from './components/NavBar.vue'
import HeroSection             from './components/HeroSection.vue'
import SkillsSection           from './components/SkillsSection.vue'
import ProjectsSection         from './components/ProjectsSection.vue'
import EducationSection        from './components/EducationSection.vue'
import CertificatesSection     from './components/CertificatesSection.vue'
import ContactSection          from './components/ContactSection.vue'
import FooterSection           from './components/FooterSection.vue'

// State variabel utama
const scrollPct  = ref(0)        // Persentase scroll halaman (buat progress bar di paling atas)

// Dipanggil tiap kali layar di-scroll
function onScroll() {
  // Hitung persentase scroll dari atas sampai bawah halaman
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollPct.value = docH > 0 ? (window.scrollY / docH) * 100 : 0

}

// Pasang event listener pas komponen pertama kali dimuat
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

// Bersihin event listener pas komponen dilepas biar hemat memori
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
