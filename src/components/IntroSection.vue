<script setup>
import { ref, onMounted } from 'vue'

// Signal untuk memberitahu komponen utama bahwa intro sudah selesai
const emit = defineEmits(['finish'])

const isLoading = ref(true)

onMounted(() => {
  // Animasi berjalan selama 2.5 detik lalu menghilang
  setTimeout(() => {
    isLoading.value = false
    // Kirim event 'finish' ke parent (App.vue / Landing Page)
    setTimeout(() => {
      emit('finish')
    }, 800) // Waktu penyesuaian durasi animasi CSS exit
  }, 2500)
})
</script>

<template>
  <Transition name="splash-fade">
    <div v-if="isLoading" class="intro-overlay">
      <div class="intro-content">
        <!-- Gelembung Air Dekoratif -->
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>

        <!-- Teks Tema Laut -->
        <h1 class="intro-title">Mulai Menyelam...</h1>
        <p class="intro-subtitle">Dari pesisir pantai hingga kedalaman samudra digital.</p>

        <!-- Loading Bar Gaya Air Laut -->
        <div class="wave-bar">
          <div class="wave-progress"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Container Overlay Fullscreen */
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fef3c7; /* Warna Pasir Warm Cream */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

.intro-content {
  position: relative;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #451a03; /* Warna Cokelat Kayu Pasir */
  padding: 2rem;
}

.intro-title {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.intro-subtitle {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

/* Loading Bar (Progress Air Laut) */
.wave-bar {
  width: 180px;
  height: 6px;
  background: rgba(69, 26, 3, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.wave-progress {
  width: 100%;
  height: 100%;
  background: #06b6d4; /* Warna Laut Toska */
  border-radius: 10px;
  animation: fillWater 2s ease-in-out infinite;
}

@keyframes fillWater {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}

/* Gelembung Air Animasi */
.bubble {
  position: absolute;
  background: rgba(6, 182, 212, 0.2);
  border-radius: 50%;
  animation: floatUp 3s infinite ease-in;
}

.bubble-1 {
  width: 20px;
  height: 20px;
  left: 10%;
  bottom: -20px;
  animation-delay: 0.2s;
}

.bubble-2 {
  width: 35px;
  height: 35px;
  right: 15%;
  bottom: -30px;
  animation-delay: 1s;
}

@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-120px); opacity: 0; }
}

/* Transisi Keluar (Slide Up & Fade Out) */
.splash-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.splash-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%); /* Efek tirai menyapu ke atas */
}
</style>