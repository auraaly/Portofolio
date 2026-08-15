<template>
  <section id="experience" class="section-wrap">
    <div class="container">

      <div class="section-label reveal-left">
        <span class="label-tag">Pengalaman</span>
        <div class="label-line"></div>
      </div>

      <div class="exp-layout">

        <!-- Kiri: heading -->
        <div class="exp-left reveal-left d1">
          <h2 class="exp-heading">Riwayat<br/><span class="heading-blue">Pengalaman.</span></h2>
        </div>

        <!-- Kanan: card -->
        <div class="exp-card glass-card reveal-right d2 spotlight" ref="expCardRef">

          <!-- Header card -->
          <div class="exp-card-top">         
            <div class="exp-title-wrap">
              <h3 class="exp-role">Full Stack Web Developer</h3>
              <p class="exp-org">
                <span class="org-name">Coding Camp 2026</span>
                <span class="org-sep">·</span>
                <span class="org-sub">DBS Foundation</span>
              </p>
            </div>
            <span class="exp-year">2026</span>
          </div>

          <div class="exp-divider"></div>

          <!-- Bullet points — normal, bukan log style -->
          <ul class="exp-bullets stagger-children" ref="bulletsRef">
            <li v-for="(d, i) in details" :key="i" class="exp-bullet">
              <span class="bullet-dot"></span>
              <span>{{ d }}</span>
            </li>
          </ul>

          <!-- Tech stack — chip biasa -->
          <div class="exp-tech reveal-pop d5 stagger-children" ref="techRef">
            <span v-for="t in techStack" :key="t" class="tech-chip">{{ t }}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { observeReveal } from '../composables/useScrollReveal.js'

const expCardRef = ref(null)
const bulletsRef = ref(null)
const techRef = ref(null)

const details = [
  'Mengembangkan aplikasi web full-stack menggunakan PHP, MySQL, dan JavaScript.',
  'Mengimplementasikan backend API dan pengelolaan database relasional.',
  'Berkolaborasi dalam tim menggunakan Git & GitHub untuk version control.',
  'Merancang antarmuka responsif dengan Bootstrap dan prinsip UX yang baik.',
  'Menerapkan best practices dalam pengembangan perangkat lunak modern.',
]

const techStack = ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Git', 'GitHub']

observeReveal('#experience .reveal-left, #experience .reveal-right, #experience .reveal-pop', { threshold: 0.1 })

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  ;[bulletsRef, techRef].forEach((r) => r.value && observer.observe(r.value))
})
</script>

<style scoped>
.exp-card { position: relative; }
.exp-card.spotlight::before { z-index: 2; }
</style>
