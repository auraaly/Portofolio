<template>
  <section id="skills" class="section-pad">
    <div class="container">
      <div class="section-head entrance">
        <span class="section-badge">
          <small>Kedalaman · 10 m</small>
          Kemampuan
        </span>
        <div class="divider-line"></div>
      </div>

      <div class="skills-grid">
        <article
          v-for="(group, gi) in skillGroups"
          :key="group.label"
          class="glass glass-hover skill-group entrance"
          :style="{ '--entrance-delay': `${0.08 * gi}s` }"
        >
          <div class="skill-label">
            <span class="skill-dot" :class="group.dot"></span>
            {{ group.label }}
          </div>
          <div class="group-chips">
            <div
              v-for="(skill, si) in group.items"
              :key="skill.name"
              class="chip-icon"
              :style="{ '--chip-i': si }"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="chip-img"
                :class="{ 'img-invert': skill.invert }"
                @error="hideImg"
              />
              <span class="chip-name">{{ skill.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skillGroups = [
  {
    label: 'Frontend',
    dot: 'dot-cyan',
    items: [
      { name: 'HTML5', icon: `${base}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${base}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${base}/javascript/javascript-original.svg` },
      { name: 'Vue.js', icon: `${base}/vuejs/vuejs-original.svg` },
      { name: 'Bootstrap', icon: `${base}/bootstrap/bootstrap-original.svg` },
      { name: 'Tailwind', icon: `${base}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    label: 'Backend',
    dot: 'dot-ice',
    items: [
      { name: 'PHP', icon: `${base}/php/php-original.svg` },
      { name: 'MySQL', icon: `${base}/mysql/mysql-original.svg` },
    ],
  },
  {
    label: 'Tools',
    dot: 'dot-foam',
    items: [
      { name: 'Git', icon: `${base}/git/git-original.svg` },
      { name: 'GitHub', icon: `${base}/github/github-original-wordmark.svg`, invert: true },
      { name: 'VS Code', icon: `${base}/vscode/vscode-original.svg` },
      { name: 'Figma', icon: `${base}/figma/figma-original.svg` },
    ],
  },
]

function hideImg(e) {
  e.target.style.display = 'none'
}
</script>
