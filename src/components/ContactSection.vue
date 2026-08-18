<template>
  <section id="contact" class="section-wrap">
    <div class="container">
      <div class="contact-label reveal-scale">
        <span>// kontak</span>
        <div></div>
      </div>

      <div class="contact-layout contact-layout-single">
        <div class="contact-intro reveal-left d1">
          <p class="contact-kicker">Mari bekerja sama</p>
          <h2>Terhubung untuk ide berikutnya.</h2>
          <p>
            Jika ingin berdiskusi mengenai PKL, proyek, atau kolaborasi, silakan hubungi saya
            melalui salah satu kanal berikut.
          </p>
          
          <div class="contact-details stagger-children" ref="itemsRef">
            <a
              v-for="item in contactItems"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener"
              class="contact-item"
            >
              <span class="contact-item-label">{{ item.label }}</span>
              <span class="contact-item-value">{{ item.value }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { observeReveal } from '../composables/useScrollReveal.js'

const itemsRef = ref(null)

const contactItems = [
  { label: 'Email', value: 'auramalia30@gmail.com', href: 'mailto:auramalia30@gmail.com' },
  { label: 'WhatsApp', value: '+62 821 5268 3875', href: 'https://wa.me/6282152683875' },
  { label: 'LinkedIn', value: 'linkedin.com/in/auramaliaa', href: 'https://linkedin.com/in/auramaliaa' },
  { label: 'GitHub', value: 'github.com/auraaly', href: 'https://github.com/auraaly' },
]

observeReveal('#contact .reveal-scale, #contact .reveal-left', { threshold: 0.1 })

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }),
    { threshold: 0.12 },
  )
  if (itemsRef.value) observer.observe(itemsRef.value)
})
</script>

<style scoped>
.contact-layout-single {
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: 0 auto;
}
</style>
