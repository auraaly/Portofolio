<template>
  <div class="log-block log-cert">
    <div class="section-head entrance">
      <span class="section-badge">
        <small>Kedalaman · 25 m</small>
        Sertifikat
      </span>
      <div class="divider-line"></div>
    </div>

    <div class="certs-grid">
      <article
        v-for="(cert, i) in certs"
        :key="cert.title"
        class="glass cert-card entrance"
        :style="{ '--entrance-delay': `${0.08 * i}s` }"
      >
        <span class="cert-index" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="cert-issuer">{{ cert.issuer }}</span>
        <h4 class="cert-title">{{ cert.title }}</h4>
        <p class="cert-desc">{{ cert.desc }}</p>
        <div class="cert-footer">
          <span class="cert-year">{{ cert.year }}</span>
          <span class="cert-stamp">
            <i data-lucide="check"></i>
            Completed
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const certs = [
  {
    issuer: 'Amazon Web Services',
    title: 'AWS Academy Cloud Foundations',
    desc: 'Mempelajari konsep dasar cloud computing, infrastruktur global AWS, model layanan (IaaS, PaaS, SaaS), keamanan, dan cara mengelola sumber daya cloud.',
    year: '2026',
  },
  {
    issuer: 'DBS Foundation Coding Camp 2026',
    title: 'Full Stack Web Developer',
    desc: 'Menyelesaikan program Coding Camp intensif mencakup pengembangan frontend, backend, database, hingga deployment proyek web secara nyata bersama tim.',
    year: '2026',
  },
]
</script>
