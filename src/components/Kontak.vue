<template>
  <section id="contact" class="section-wrap">
    <div class="twinkle-stars" aria-hidden="true"></div>
    <div class="container">
      <!-- Badge section -->
      <div class="section-divider">
        <span class="section-badge">Kontak</span>
        <div class="divider-line"></div>
      </div>

      <!-- Header teks ajakan -->
      <div class="contact-header">
        <h2 class="contact-title">Mari Terhubung</h2>
        <p class="contact-subtitle">
          Tertarik untuk berkolaborasi atau diskusi proyek? Silakan hubungi saya melalui tautan berikut.
        </p>
      </div>

      <!-- Grid 2 kolom kartu kontak -->
      <div class="contact-grid">
        <a
          v-for="item in contactItems"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener"
          class="contact-card-simple"
        >
          <div class="card-info">
            <span class="card-label">{{ item.label }}</span>
            <span class="card-value">{{ item.value }}</span>
          </div>
          <div class="card-arrow">↗</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data kontak yang bisa dihubungi
const contactItems = [
  { label: 'Email', value: 'auramalia30@gmail.com', href: 'mailto:auramalia30@gmail.com' },
  { label: 'WhatsApp', value: '+62 821 5268 3875', href: 'https://wa.me/6282152683875' },
  { label: 'LinkedIn', value: 'auramaliaa', href: 'https://linkedin.com/in/auramaliaa' },
  { label: 'GitHub', value: 'auraaly', href: 'https://github.com/auraaly' },
]
</script>



