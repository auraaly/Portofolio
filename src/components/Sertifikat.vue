<template>
  <section id="certificates" class="section-wrap">
    <div class="container">

      <!-- Badge section -->
      <div class="section-divider">
        <span class="section-badge">Sertifikat</span>
        <div class="divider-line"></div>
      </div>

      <!-- Grid kartu sertifikat -->
      <div class="certs-grid">
        <div
          v-for="(cert, i) in certs"
          :key="cert.title"
          class="cert-card"
        >
          <!-- Judul sertifikat -->
          <h3 class="cert-title">{{ cert.title }}</h3>
          
          <!-- Penerbit sertifikat -->
          <div class="cert-issuer mono-tag">{{ cert.issuer }}</div>

          <!-- Deskripsi singkat apa yang dipelajari -->
          <p class="cert-desc">{{ cert.desc }}</p>

          <!-- Footer: tahun dan badge verified -->
          <div class="cert-footer">
            <span class="cert-year">{{ cert.year }}</span>
            <span class="cert-verified">
              <span class="verified-dot"></span>
              Verified
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Data sertifikat yang udah didapet
const certs = [
  {
    issuer: 'Amazon Web Services',
    title: 'AWS Academy Cloud Foundations',
    desc: 'Mempelajari konsep dasar cloud computing, infrastruktur global AWS, model layanan (IaaS, PaaS, SaaS), keamanan, dan cara mengelola sumber daya cloud.',
    year: '2026',
    glowColor: '#fb923c', // Orange buat glow effect
    link: '',
  },
  {
    issuer: 'DBS Foundation Coding Camp 2026',
    title: 'Full Stack Web Developer',
    desc: 'Menyelesaikan program Coding Camp intensif mencakup pengembangan frontend, backend, database, hingga deployment proyek web secara nyata bersama tim.',
    year: '2026',
    glowColor: '#38bdf8', // Biru buat glow effect
    link: '',
  },
]

</script>



