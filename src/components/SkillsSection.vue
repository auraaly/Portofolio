<template>
  <section id="skills" class="section-wrap">
    <div class="container">

      <div class="skills-label reveal">
        <span class="label-comment">// kemampuan</span>
        <div class="label-line"></div>
      </div>

      <h2 class="skills-title reveal d1">Kemampuan</h2>

      <div class="skills-body">

        <div class="skills-group reveal d2">
          <div class="group-label">
            <span class="group-dot dot-red"></span>
            Frontend
          </div>
          <div class="group-chips">
            <span v-for="s in frontendSkills" :key="s" class="chip">{{ s }}</span>
          </div>
        </div>

        <div class="skills-group reveal d3">
          <div class="group-label">
            <span class="group-dot dot-purple"></span>
            Backend
          </div>
          <div class="group-chips">
            <span v-for="s in backendSkills" :key="s" class="chip">{{ s }}</span>
          </div>
        </div>

        <div class="skills-group reveal d4">
          <div class="group-label">
            <span class="group-dot dot-green"></span>
            Tools
          </div>
          <div class="group-chips">
            <span v-for="s in toolsSkills" :key="s" class="chip">{{ s }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Bootstrap']
const backendSkills  = ['PHP', 'MySQL', 'REST API']
const toolsSkills    = ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Figma', 'AWS']

let obs = null
onMounted(() => {
  obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('#skills .reveal').forEach(el => obs.observe(el))
})
onUnmounted(() => obs?.disconnect())
</script>
