<template>
  <div class="preloader" :class="{ sinking, diving }" aria-hidden="true">
    <!-- Langit -->
    <div class="pl-sky">
      <span class="pl-sun"></span>

      <span class="cloud c1"></span>
      <span class="cloud c2"></span>
      <span class="cloud c3"></span>
      <span class="cloud c4"></span>

      <svg class="bird b1" viewBox="0 0 24 10" fill="none">
        <path
          d="M1 8Q6 1 12 8Q18 1 23 8"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
      <svg class="bird b2" viewBox="0 0 24 10" fill="none">
        <path
          d="M1 8Q6 1 12 8Q18 1 23 8"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
      <svg class="bird b3" viewBox="0 0 24 10" fill="none">
        <path
          d="M1 8Q6 1 12 8Q18 1 23 8"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Laut -->
    <div class="pl-sea">
      <svg class="ripple r1" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path
          d="M0 60C150 30 350 90 600 60S1050 30 1200 60 1650 90 1800 60 2250 30 2400 60V120H0Z"
        />
      </svg>
      <svg class="ripple r2" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path
          d="M0 70C200 40 400 100 700 70S1100 40 1400 70 1900 100 2100 70 2300 50 2400 70V120H0Z"
        />
      </svg>
      <svg class="ripple r3" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path
          d="M0 80C250 55 500 105 800 80S1300 55 1600 80 2050 105 2250 80 2350 65 2400 80V120H0Z"
        />
      </svg>
    </div>

    <!-- HUD di horizon -->
    <div class="pl-hud">
      <p class="pl-name">Aura Amalia</p>
      <p class="pl-sub">Menyelam ke dalam portofolio&hellip;</p>
      <div class="pl-bar">
        <span :style="{ width: pct + '%' }"></span>
      </div>
      <span class="pl-pct">{{ Math.round(pct) }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['done'])

const pct = ref(0)
const sinking = ref(false)
const diving = ref(false)

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const DURATION = reduced ? 300 : 2300

let rafId = 0
let t1 = 0
let t2 = 0

function finish() {
  sinking.value = true
  t1 = setTimeout(
    () => {
      diving.value = true
      t2 = setTimeout(() => emit('done'), reduced ? 150 : 700)
    },
    reduced ? 120 : 900,
  )
}

onMounted(() => {
  document.body.classList.add('no-scroll')

  const start = performance.now()
  const easeOut = (x) => 1 - Math.pow(1 - x, 3)

  function tick(now) {
    const p = Math.min((now - start) / DURATION, 1)
    pct.value = easeOut(p) * 100
    if (p < 1) {
      rafId = requestAnimationFrame(tick)
    } else {
      finish()
    }
  }
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  clearTimeout(t1)
  clearTimeout(t2)
  document.body.classList.remove('no-scroll')
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 100;
  overflow: hidden;
}

.preloader.diving {
  opacity: 0;
  transition: opacity 0.65s ease;
}

/* ---------- Langit ---------- */
.pl-sky {
  position: absolute;
  inset: 0 0 50% 0;
  background: linear-gradient(180deg, #8ec9f0 0%, #bfe3f8 55%, #eaf6ff 100%);
}

.pl-sun {
  position: absolute;
  top: 14%;
  right: 16%;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 252, 230, 0.95) 0%,
    rgba(255, 244, 200, 0.5) 45%,
    transparent 72%
  );
}

.cloud {
  position: absolute;
  height: 26px;
  border-radius: 999px;
  background: #fff;
  opacity: 0.92;
  animation: cloud-drift 9s ease-in-out infinite alternate;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: inherit;
  border-radius: 50%;
}

.c1 {
  width: 120px;
  top: 22%;
  left: 12%;
  animation-duration: 11s;
}
.c1::before {
  width: 46px;
  height: 46px;
  top: -22px;
  left: 20px;
}
.c1::after {
  width: 34px;
  height: 34px;
  top: -14px;
  left: 62px;
}

.c2 {
  width: 88px;
  top: 38%;
  left: 58%;
  animation-duration: 13s;
  animation-delay: -4s;
}
.c2::before {
  width: 36px;
  height: 36px;
  top: -17px;
  left: 15px;
}
.c2::after {
  width: 26px;
  height: 26px;
  top: -10px;
  left: 47px;
}

.c3 {
  width: 66px;
  top: 16%;
  left: 74%;
  opacity: 0.75;
  animation-duration: 15s;
  animation-delay: -8s;
}
.c3::before {
  width: 28px;
  height: 28px;
  top: -13px;
  left: 12px;
}
.c3::after {
  width: 20px;
  height: 20px;
  top: -8px;
  left: 37px;
}

.c4 {
  width: 96px;
  top: 52%;
  left: 32%;
  opacity: 0.6;
  animation-duration: 12s;
  animation-delay: -6s;
}

@keyframes cloud-drift {
  from {
    transform: translateX(-14px);
  }
  to {
    transform: translateX(18px);
  }
}

.bird {
  position: absolute;
  width: 26px;
  color: #35648c;
  opacity: 0.8;
  animation: bird-fly 16s linear infinite;
}

.b1 {
  top: 20%;
  left: -4%;
}
.b2 {
  top: 27%;
  left: -9%;
  width: 19px;
  animation-delay: -6s;
  animation-duration: 21s;
}
.b3 {
  top: 33%;
  left: -14%;
  width: 14px;
  animation-delay: -12s;
  animation-duration: 26s;
}

@keyframes bird-fly {
  from {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(30vw) translateY(-12px);
  }
  50% {
    transform: translateX(55vw) translateY(6px);
  }
  to {
    transform: translateX(115vw) translateY(-8px);
  }
}

/* ---------- Laut ---------- */
/* Warna air disamakan dengan gradien zona hero (#bee7fa -> #8fd3f0)
   supaya transisi masuk ke hero mulus tanpa lompatan warna */
.pl-sea {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-low) 100%);
  transform: translateY(49.8%);
  transition: transform 0.95s cubic-bezier(0.7, 0, 0.25, 1);
  will-change: transform;
}

.preloader.sinking .pl-sea {
  transform: translateY(0);
}

.ripple {
  position: absolute;
  left: 0;
  width: 200%;
  height: 34px;
  fill: rgba(255, 255, 255, 0.2);
}

.r1 {
  top: 4%;
  animation: wave-slide 9s linear infinite reverse;
}
.r2 {
  top: 26%;
  height: 44px;
  fill: rgba(255, 255, 255, 0.13);
  animation: wave-slide 14s linear infinite;
}
.r3 {
  top: 52%;
  height: 56px;
  fill: rgba(255, 255, 255, 0.09);
  animation: wave-slide 19s linear infinite reverse;
}

@keyframes wave-slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ---------- HUD ---------- */
.pl-hud {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  transition: opacity 0.45s ease;
}

.preloader.sinking .pl-hud {
  opacity: 0;
}

.pl-name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 4.5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #0b3a5c;
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.55),
    0 10px 28px rgba(13, 92, 140, 0.25);
  animation:
    name-in 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) both,
    name-track 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@keyframes name-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes name-track {
  from {
    letter-spacing: 0.22em;
  }
  to {
    letter-spacing: 0.04em;
  }
}

.pl-sub {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-family: var(--font-mono);
  color: #2e6489;
  opacity: 0;
  animation: name-in 1.2s 0.35s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.pl-bar {
  width: min(260px, 56vw);
  height: 3px;
  border-radius: 999px;
  background: rgba(11, 58, 92, 0.18);
  overflow: hidden;
  margin-top: 6px;
}

.pl-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #0d5c8c, #22d3ee);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.7);
  transition: width 0.1s linear;
}

.pl-pct {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #1e6fa8;
  letter-spacing: 0.14em;
}

@media (prefers-reduced-motion: reduce) {
  .cloud,
  .bird,
  .ripple {
    animation: none !important;
  }
}
</style>
