<template>
  <section id="education" class="section-wrap">
    <div class="container">

      <div class="section-label reveal-scale">
        <span class="label-tag">Pendidikan</span>
        <div class="label-line"></div>
      </div>

      <div class="edu-card reveal-scale d1 spotlight">
        <div class="edu-info">
          <h3 class="edu-school">SMK Negeri 7 Samarinda</h3>
          <p class="edu-program">Pengembangan Perangkat Lunak dan Gim (PPLG)</p>
        </div>
        <span class="edu-period">2024 — Sekarang</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { observeReveal } from '../composables/useScrollReveal.js'

observeReveal('#education .reveal-scale', { threshold: 0.12 })
</script>

<style scoped>
.section-wrap { padding: 80px 0; }

.section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}
.label-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--blue);
  background: rgba(56,189,248,0.08);
  border: 1px solid rgba(56,189,248,0.2);
  padding: 4px 12px;
  border-radius: 99px;
  white-space: nowrap;
}
.label-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* Card sederhana */
.edu-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  transition: border-color 0.2s ease, transform 0.25s ease;
  flex-wrap: wrap;
  position: relative;
}
.edu-card:hover { border-color: var(--border-b); transform: translateY(-4px); }

.edu-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.edu-info { flex: 1; min-width: 200px; }

.edu-school {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 4px;
}
.edu-program {
  font-size: 0.88rem;
  color: var(--blue);
  font-weight: 500;
}

.edu-period {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--t2);
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 99px;
  background: var(--surface);
  white-space: nowrap;
}

.edu-card.spotlight::before { z-index: 2; }

@media (max-width: 560px) {
  .edu-card { padding: 20px; gap: 14px; }
  .edu-period { width: 100%; text-align: center; }
}
</style>
