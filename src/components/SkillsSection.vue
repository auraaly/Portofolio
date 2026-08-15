<template>
  <section id="skills" class="section-wrap">
    <div class="container">

      <div class="skills-label reveal-scale">
        <span class="label-comment">// kemampuan</span>
        <div class="label-line"></div>
      </div>

      <h2 class="skills-title reveal-scale d1">Kemampuan</h2>

      <div class="skills-body">

        <div class="skills-group reveal-scale d2">
          <div class="group-label">
            <span class="group-dot dot-red"></span>
            Frontend
          </div>
          <div class="group-chips stagger-children" ref="feRef">
            <div v-for="s in frontendSkills" :key="s.name" class="chip-icon">
              <i :class="s.icon" :style="{ color: s.color }"></i>
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

        <div class="skills-group reveal-scale d3">
          <div class="group-label">
            <span class="group-dot dot-purple"></span>
            Backend
          </div>
          <div class="group-chips stagger-children" ref="beRef">
            <div v-for="s in backendSkills" :key="s.name" class="chip-icon">
              <i :class="s.icon" :style="{ color: s.color }"></i>
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

        <div class="skills-group reveal-scale d4">
          <div class="group-label">
            <span class="group-dot dot-green"></span>
            Tools
          </div>
          <div class="group-chips stagger-children" ref="toolsRef">
            <div v-for="s in toolsSkills" :key="s.name" class="chip-icon">
              <i :class="s.icon" :style="{ color: s.color }"></i>
              <span class="chip-name">{{ s.name }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { observeReveal } from '../composables/useScrollReveal.js'

const feRef = ref(null)
const beRef = ref(null)
const toolsRef = ref(null)

const frontendSkills = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' }
]

const backendSkills = [
  { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
  { name: 'REST API', icon: 'fas fa-server', color: '#38bdf8' }
]

const toolsSkills = [
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
  { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
  { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
]

observeReveal('#skills .reveal-scale', { threshold: 0.1 })

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
    { threshold: 0.15 },
  )
  ;[feRef, beRef, toolsRef].forEach((r) => r.value && observer.observe(r.value))
})
</script>
