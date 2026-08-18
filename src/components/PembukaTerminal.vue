<template>
  <Teleport to="body">
    <Transition name="terminal-fade">
      <div v-if="tampilkanLayar" class="terminal-loader-overlay">
        <!-- Ambient Glow Orbs -->
        <div class="bg-glow orb-blue"></div>
        <div class="bg-glow orb-purple"></div>

        <!-- Terminal Box -->
        <div class="terminal-box">
          <!-- Terminal Header -->
          <div class="terminal-header">
            <div class="dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="title">
              <span>aura@portfolio:~ (zsh)</span>
            </div>
          </div>

          <!-- Terminal Content -->
          <div class="terminal-body">
            <div class="line command-line">
              <span class="prompt">aura@portfolio ~ %</span>
              <span class="command">{{ teksKetik }}</span>
              <span class="cursor">█</span>
            </div>

            <!-- Execution Logs -->
            <div class="logs" v-if="tampilkanLog">
              <div class="log-item info-step fade-in-step">
                <span class="step-num">[1/3]</span> Memulai proses build...
              </div>
              <div class="log-item info-step fade-in-step" v-if="tahapServer >= 2">
                <span class="step-num">[2/3]</span> Mengompilasi modul Vue...
              </div>
              <div class="log-item success-step fade-in-step" v-if="tahapServer >= 3">
                <span class="check">✔</span> Build selesai dalam 340ms
              </div>
              <div class="log-item info-link fade-in-step" v-if="tahapServer >= 3">
                <span class="arrow">➜</span> Output: <span class="link">dist/index.html</span>
              </div>
            </div>
          </div>

          <!-- Progress Bar at Bottom -->
          <div class="terminal-footer" v-if="tampilkanLog">
            <div class="progress-bar" :style="{ width: nilaiProgress + '%' }"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['finish'])

const tampilkanLayar = ref(true)
const teksKetik      = ref('')
const tampilkanLog   = ref(false)
const tahapServer    = ref(1)
const nilaiProgress  = ref(0)

const perintah = 'npm run build'

onMounted(() => {
  document.body.style.overflow = 'hidden'

  // Mengetik perintah "npm run build" per huruf (santai 95ms per huruf)
  let indeksHuruf = 0
  const timerKetik = setInterval(() => {
    if (indeksHuruf < perintah.length) {
      teksKetik.value += perintah[indeksHuruf]
      indeksHuruf++
    } else {
      clearInterval(timerKetik)
      mulaiJalankanServer()
    }
  }, 95)
})

function mulaiJalankanServer() {
  setTimeout(() => {
    tampilkanLog.value = true

    setTimeout(() => { tahapServer.value = 2 }, 650)
    setTimeout(() => { tahapServer.value = 3 }, 1400)

    // Progress bar lebih tenang & dapat dinikmati (interval 28ms)
    const timerProgress = setInterval(() => {
      nilaiProgress.value += 1.8
      if (nilaiProgress.value >= 100) {
        nilaiProgress.value = 100
        clearInterval(timerProgress)
        selesaiLoading()
      }
    }, 28)
  }, 400)
}

function selesaiLoading() {
  setTimeout(() => {
    tampilkanLayar.value = false
    document.body.style.overflow = ''
    emit('finish')
  }, 600)
}
</script>

<style scoped>
.terminal-loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background-color: #0a1628;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'DM Mono', 'Fira Code', monospace;
}

/* Ambient glow matching background */
.bg-glow {
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.22;
}
.orb-blue { top: 20%; right: 20%; background: #38bdf8; }
.orb-purple { bottom: 20%; left: 20%; background: #a78bfa; }

.terminal-box {
  width: 90%;
  max-width: 540px;
  background: #102035;
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 14px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(56, 189, 248, 0.2);
  overflow: hidden;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
}

/* Header */
.terminal-header {
  height: 42px;
  background: #0a1628;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
}

.dots {
  display: flex;
  gap: 7px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.red { background: #f87171; }
.dot.yellow { background: #facc15; }
.dot.green { background: #4ade80; }

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #7dd3fc;
}

/* Body */
.terminal-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.88rem;
  line-height: 1.6;
  min-height: 200px;
}

.command-line {
  display: flex;
  align-items: center;
  gap: 10px;
}

.prompt {
  color: #38bdf8;
  font-weight: 600;
}

.command {
  color: #f8fafc;
  font-weight: 600;
}

.cursor {
  color: #38bdf8;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Logs Output */
.logs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
}

.log-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
}

.fade-in-step {
  animation: fadeInStep 0.3s ease-out forwards;
}

@keyframes fadeInStep {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-num {
  color: #a78bfa;
  font-weight: bold;
}

.info-step { color: #94a3b8; }
.success-step { color: #4ade80; font-weight: 500; }
.info-link { color: #7dd3fc; }

.link {
  color: #38bdf8;
  text-decoration: underline;
}

.arrow { color: #38bdf8; }
.check { font-weight: bold; color: #4ade80; }

/* Footer Progress Bar */
.terminal-footer {
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  width: 100%;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #a78bfa);
  transition: width 0.03s linear;
}

/* Overlay Transition — Slide Up Like a Modern Curtain */
.terminal-fade-leave-active {
  transition: transform 0.75s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.75s cubic-bezier(0.77, 0, 0.175, 1);
}
.terminal-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
