<template>
  <section id="contact" class="section-pad">
    <div class="container">
      <!-- Umpan ikan anglerfish: menggantung dari kegelapan di atas panel -->
      <div class="angler-lure" aria-hidden="true">
        <svg viewBox="0 0 140 150" fill="none">
          <path
            class="lure-stem"
            d="M70 0C70 44 46 64 41 106"
            stroke="rgba(125, 211, 252, 0.42)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle class="lure-halo" cx="41" cy="116" r="15" />
          <circle class="lure-orb" cx="41" cy="116" r="6.5" />
        </svg>
      </div>

      <div class="section-head entrance">
        <span class="section-badge">
          <small>Dasar Laut · 40 m</small>
          Kontak
        </span>
        <div class="divider-line"></div>
      </div>

      <div v-tilt="{ max: 2 }" class="sonar-panel glass entrance" style="--entrance-delay: 0.1s">
        <!-- Gelombang sonar memancar dari sudut kanan -->
        <span class="sonar-rings" aria-hidden="true"><i></i><i></i><i></i></span>

        <div class="sonar-copy cp-anim" style="--d: 0.1s">
          <p class="sonar-status">
            <span class="status-dot"></span>
            Terbuka untuk kolaborasi &amp; magang
          </p>
          <h2 class="sonar-title">Kirim sinyal,<br />aku yang merespons.</h2>
          <p class="sonar-sub">
            Perjalanan menyelamnya sampai di sini — sekarang giliran kamu yang menghubungi.
            Pilih salah satu saluran di bawah; paling cepat balasnya lewat email dan WhatsApp.
          </p>
          <div class="sonar-actions">
            <a href="mailto:auramalia30@gmail.com" class="btn neon-btn">
              <i data-lucide="send"></i>
              Kirim Email
            </a>
            <a
              href="/AuraAmalia_SMKN7_CV_ATS_REVISI.pdf"
              download="AuraAmalia_CV.pdf"
              class="btn btn-deep"
            >
              <i data-lucide="download"></i>
              Unduh CV
            </a>
          </div>
        </div>

        <nav class="sonar-channels cp-anim" style="--d: 0.28s" aria-label="Saluran kontak">
          <span class="channel-line" aria-hidden="true"></span>
          <a
            v-for="c in channels"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="channel-node"
            :title="c.value"
          >
            <span class="node-circle">
              <i :data-lucide="c.icon"></i>
            </span>
            <span class="node-label">{{ c.label }}</span>
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import { vTilt } from '../directives/pointer'

const channels = [
  { label: 'Email', value: 'auramalia30@gmail.com', href: 'mailto:auramalia30@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', value: '+62 821 5268 3875', href: 'https://wa.me/6282152683875', icon: 'message-circle' },
  { label: 'LinkedIn', value: 'linkedin.com/in/auramaliaa', href: 'https://linkedin.com/in/auramaliaa', icon: 'linkedin' },
  { label: 'GitHub', value: 'github.com/auraaly', href: 'https://github.com/auraaly', icon: 'github' },
]
</script>

<style scoped>
.sonar-panel {
  position: relative;
  overflow: hidden;
  padding: clamp(26px, 4vw, 44px);
  display: flex;
  flex-direction: column;
  gap: clamp(26px, 3.5vw, 40px);
}

/* ---------- Salinan kiri ---------- */
.sonar-copy {
  position: relative;
  z-index: 1;
  max-width: 560px;
}

.sonar-status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8fd8c9;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.09);
  box-shadow: inset 0 0 0 1px rgba(52, 211, 153, 0.32);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.16);
  animation: dot-pulse 2s ease-in-out infinite;
}

.sonar-title {
  margin-top: 18px;
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 4.4vw, 3rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #f2faff;
  text-wrap: balance;
}

.sonar-sub {
  margin-top: 16px;
  font-size: 0.97rem;
  line-height: 1.75;
  color: #bcd9ec;
  text-wrap: pretty;
}

.sonar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

/* ---------- Deretan saluran ---------- */
.sonar-channels {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.channel-line {
  position: absolute;
  top: 31px;
  left: 36px;
  right: 36px;
  height: 0;
  border-top: 1.5px dashed rgba(125, 211, 252, 0.3);
}

.channel-node {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 76px;
}

.node-circle {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  color: #bfe8ff;
  background: rgba(10, 37, 64, 0.55);
  border: 1px solid rgba(125, 211, 252, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 10px 24px rgba(2, 12, 24, 0.45);
  transition:
    transform 0.28s cubic-bezier(0.34, 1.45, 0.5, 1),
    background 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease,
    box-shadow 0.28s ease;
}

.node-circle svg,
.node-circle i {
  width: 22px;
  height: 22px;
}

.channel-node:hover .node-circle {
  transform: translateY(-6px);
  background: linear-gradient(135deg, #22d3ee, #0891b2);
  border-color: rgba(190, 245, 255, 0.7);
  color: #04222c;
  box-shadow:
    0 0 0 5px rgba(34, 211, 238, 0.16),
    0 16px 32px rgba(2, 12, 24, 0.55);
}

.node-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(188, 217, 236, 0.72);
  transition: color 0.25s ease;
}

.channel-node:hover .node-label {
  color: #eafcff;
}

/* ---------- Cincin sonar ---------- */
.sonar-rings {
  position: absolute;
  top: -70px;
  right: -70px;
  width: 340px;
  height: 340px;
  pointer-events: none;
}

.sonar-rings i {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(34, 211, 238, 0.35);
  animation: ring-pulse 3.6s cubic-bezier(0.2, 0.6, 0.3, 1) infinite;
}

.sonar-rings i:nth-child(2) {
  animation-delay: 1.2s;
}

.sonar-rings i:nth-child(3) {
  animation-delay: 2.4s;
}

@keyframes ring-pulse {
  0% {
    transform: scale(0.25);
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* Blok konten muncul berjenjang */
.cp-anim {
  animation: cp-rise 0.6s cubic-bezier(0.2, 0.65, 0.25, 1) both;
  animation-delay: var(--d, 0s);
}

@keyframes cp-rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 720px) {
  .sonar-channels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    row-gap: 24px;
  }

  .channel-line {
    display: none;
  }

  .sonar-rings {
    right: -120px;
    opacity: 0.6;
  }

  .sonar-actions .btn {
    flex: 1;
    justify-content: center;
  }
}
</style>
