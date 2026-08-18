<template>
  <section id="contact" class="section-wrap">
    <div class="container">
      <div class="section-divider">
        <span class="section-badge">Kontak</span>
        <div class="divider-line"></div>
      </div>

      <div class="contact-header">
        <h2 class="contact-title">Mari Terhubung</h2>
        <p class="contact-subtitle">
          Tertarik untuk berkolaborasi, diskusi proyek, atau informasi mengenai PKL? Silakan hubungi saya melalui kanal berikut.
        </p>
      </div>

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
const contactItems = [
  { label: 'Email', value: 'auramalia30@gmail.com', href: 'mailto:auramalia30@gmail.com' },
  { label: 'WhatsApp', value: '+62 821 5268 3875', href: 'https://wa.me/6282152683875' },
  { label: 'LinkedIn', value: 'auramaliaa', href: 'https://linkedin.com/in/auramaliaa' },
  { label: 'GitHub', value: 'auraaly', href: 'https://github.com/auraaly' },
]
</script>

<style scoped>
.contact-header {
  text-align: center;
  max-width: 580px;
  margin: 0 auto 36px;
}

.contact-title {
  font-family: var(--display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
}

.contact-subtitle {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.contact-card-simple {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: #102035;
  border: 1px solid #223a5e;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-card-simple:hover {
  border-color: #38bdf8;
  transform: translateY(-2px);
  background: #152540;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-label {
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #38bdf8;
}

.card-value {
  font-size: 0.98rem;
  font-weight: 700;
  color: #ffffff;
  word-break: break-all;
}

.card-arrow {
  font-size: 1.1rem;
  color: #64748b;
  transition: transform 0.2s ease, color 0.2s ease;
}

.contact-card-simple:hover .card-arrow {
  color: #38bdf8;
  transform: translate(3px, -3px);
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<style scoped>
.contact-header {
  text-align: center;
  max-width: 580px;
  margin: 0 auto 36px;
}

.contact-title {
  font-family: var(--display);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 860px;
  margin: 0 auto;
}

.contact-card-modern {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(16, 32, 53, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.15);
  border-radius: 14px;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.contact-card-modern:hover {
  background: rgba(21, 37, 64, 0.95);
  border-color: rgba(56, 189, 248, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(56, 189, 248, 0.15);
}

.card-icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.card-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
}

.contact-card-modern:hover .card-label {
  color: #38bdf8;
}

.card-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f8fafc;
  word-break: break-all;
}

.card-arrow {
  font-size: 1.1rem;
  color: #475569;
  transition: transform 0.2s ease, color 0.2s ease;
}

.contact-card-modern:hover .card-arrow {
  color: #38bdf8;
  transform: translate(3px, -3px);
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
