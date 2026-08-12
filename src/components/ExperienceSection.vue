<template>
  <section id="experience" class="section-wrap">
    <div class="container">

      <div class="section-label reveal">
        <span class="label-tag">Pengalaman</span>
        <div class="label-line"></div>
      </div>

      <div class="exp-layout">

        <!-- Kiri: heading -->
        <div class="exp-left reveal d1">
          <h2 class="exp-heading">Riwayat<br/><span class="heading-blue">Pengalaman.</span></h2>
        </div>

        <!-- Kanan: card -->
        <div class="exp-card glass-card reveal d2">

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
          <ul class="exp-bullets">
            <li v-for="(d, i) in details" :key="i" class="exp-bullet reveal" :class="`d${i+2}`">
              <span class="bullet-dot"></span>
              <span>{{ d }}</span>
            </li>
          </ul>

          <!-- Tech stack — chip biasa -->
          <div class="exp-tech reveal d5">
            <span v-for="t in techStack" :key="t" class="tech-chip">{{ t }}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const details = [
  'Mengembangkan aplikasi web full-stack menggunakan PHP, MySQL, dan JavaScript.',
  'Mengimplementasikan backend API dan pengelolaan database relasional.',
  'Berkolaborasi dalam tim menggunakan Git & GitHub untuk version control.',
  'Merancang antarmuka responsif dengan Bootstrap dan prinsip UX yang baik.',
  'Menerapkan best practices dalam pengembangan perangkat lunak modern.',
]

const techStack = ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Git', 'GitHub']

let obs = null
onMounted(() => {
  obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('#experience .reveal').forEach(el => obs.observe(el))
})
onUnmounted(() => obs?.disconnect())
</script>



