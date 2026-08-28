<template>
  <div class="log-block">
    <h3 class="log-title entrance">
      <i data-lucide="graduation-cap"></i>
      Pendidikan
      <span class="log-line"></span>
    </h3>

    <div class="edu-layout">
      <div class="edu-timeline">
        <div class="edu-timeline-line reveal-draw-y"></div>

        <div
          v-for="(edu, i) in eduList"
          :key="edu.school"
          class="edu-entry entrance"
          :class="i % 2 === 0 ? 'from-right' : 'from-left'"
          :style="{ '--entrance-delay': `${(0.5 + 0.25 * i).toFixed(2)}s` }"
        >
          <div class="edu-dot"></div>
          <div class="edu-card glass">
            <div class="edu-card-top">
              <div class="edu-icon-wrap" v-html="edu.icon"></div>
              <span class="edu-period">{{ edu.period }}</span>
            </div>
            <h4 class="edu-school">{{ edu.school }}</h4>
            <p class="edu-program">{{ edu.program }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const capIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
  <path d="M6 12v5c3 3 9 3 12 0v-5" />
</svg>`

const bookIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 7v14" />
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
</svg>`

const eduList = [
  {
    school: 'SMK Negeri 7 Samarinda',
    program: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
    period: '2024 — Sekarang',
    icon: capIcon,
  },
  {
    school: 'SMP Negeri 16 Samarinda',
    program: 'Sekolah Menengah Pertama',
    period: '2022 — 2024',
    icon: bookIcon,
  },
]
</script>
