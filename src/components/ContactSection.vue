<template>
  <section id="contact" class="section-wrap">
    <div class="container">
      <div class="contact-label reveal">
        <span>// kontak</span>
        <div></div>
      </div>

      <div class="contact-layout">
        <div class="contact-intro reveal d1">
          <p class="contact-kicker">Mari bekerja sama</p>
          <h2>Terhubung untuk ide berikutnya.</h2>
          <p>
            Jika ingin berdiskusi mengenai PKL, proyek, atau kolaborasi, silakan hubungi saya
            melalui salah satu kanal berikut.
          </p>
          
          <div class="contact-details">
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

        <div class="contact-form-card reveal d2">
          <h3 class="form-heading">Kirim Pesan</h3>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Nama</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="form-input" 
                placeholder="Nama lengkap Anda"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="form-input" 
                placeholder="email@example.com"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Pesan</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                class="form-textarea" 
                placeholder="Tulis pesan Anda di sini..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="form-submit">
              <span>Kirim Pesan</span>
              <span class="submit-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const contactItems = [
  { label: 'Email', value: 'auramalia30@gmail.com', href: 'mailto:auramalia30@gmail.com' },
  { label: 'WhatsApp', value: '+62 821 5268 3875', href: 'https://wa.me/6282152683875' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/auramaliaa',
    href: 'https://linkedin.com/in/auramaliaa',
  },
  { label: 'GitHub', value: 'github.com/auraaly', href: 'https://github.com/auraaly' },
]

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  const { name, email, message } = formData.value
  const mailtoLink = `mailto:auramalia30@gmail.com?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`
  window.location.href = mailtoLink
  
  // Reset form
  formData.value = { name: '', email: '', message: '' }
}

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('#contact .reveal').forEach((element) => observer.observe(element))
})
onUnmounted(() => observer?.disconnect())
</script>
