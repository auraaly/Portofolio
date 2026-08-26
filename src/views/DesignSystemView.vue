<template>
  <div class="ds-page">
    <header class="ds-topbar">
      <div class="ds-topbar-inner container">
        <router-link to="/" class="back-link">
          <i data-lucide="arrow-left"></i>
          Portofolio
        </router-link>
        <span class="ds-crumb">aura.amalia / design-system</span>
      </div>
    </header>

    <section class="ds-hero">
      <div class="container">
        <p class="ds-kicker">Ocean Dive &middot; Versi 2</p>
        <h1 class="ds-title">Design System</h1>
        <p class="ds-subtitle">
          Fondasi visual tema &ldquo;Perjalanan Menyelam&rdquo; — palet zona, tipografi, dan
          komponen bubble-glass beserta variasi hover-nya.
        </p>
      </div>
    </section>

    <!-- ===================== WARNA PER ZONA ===================== -->
    <section class="ds-section container">
      <h2 class="ds-h2"><span>01</span>Palet Zona</h2>
      <p class="ds-note">
        Empat zona membentuk gradien kontinu dari permukaan sampai dasar laut. Setiap zona mewarisi
        variabel teks, kaca, dan glow-nya sendiri.
      </p>

      <div class="ds-zone-stack">
        <div class="ds-zone ds-zone-surface">
          <div class="ds-zone-head">
            <strong>Zona Permukaan</strong>
            <small>Hero</small>
          </div>
          <div class="swatches">
            <figure class="swatch">
              <i :style="{ background: '#BEE7FA' }"></i>
              <figcaption>--sky-top<br />#BEE7FA</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#8FD3F0' }"></i>
              <figcaption>--sky-low<br />#8FD3F0</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#0B3A5C' }"></i>
              <figcaption>--ink (teks)<br />#0B3A5C</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#1E88C7' }"></i>
              <figcaption>--primary-a<br />#1E88C7</figcaption>
            </figure>
          </div>
        </div>

        <div class="ds-zone zone-mid">
          <div class="ds-zone-head">
            <strong>Zona Laut Tengah</strong>
            <small>Kemampuan &middot; Proyek</small>
          </div>
          <div class="swatches">
            <figure class="swatch">
              <i :style="{ background: '#4FB3E0' }"></i>
              <figcaption>--mid-a<br />#4FB3E0</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#1E6FA8' }"></i>
              <figcaption>--mid-b<br />#1E6FA8</figcaption>
            </figure>
          </div>
        </div>

        <div class="ds-zone zone-deep">
          <div class="ds-zone-head">
            <strong>Zona Laut Dalam</strong>
            <small>Pendidikan &middot; Sertifikat</small>
          </div>
          <div class="swatches">
            <figure class="swatch">
              <i :style="{ background: '#0E4A78' }"></i>
              <figcaption>--deep-a<br />#0E4A78</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#083254' }"></i>
              <figcaption>--deep-b<br />#083254</figcaption>
            </figure>
          </div>
        </div>

        <div class="ds-zone zone-abyss">
          <div class="ds-zone-head">
            <strong>Zona Dasar Laut</strong>
            <small>Kontak &middot; Footer</small>
          </div>
          <div class="swatches">
            <figure class="swatch">
              <i :style="{ background: '#0A2540' }"></i>
              <figcaption>--abyss-a<br />#0A2540</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#041524' }"></i>
              <figcaption>--abyss-b<br />#041524</figcaption>
            </figure>
            <figure class="swatch">
              <i :style="{ background: '#22D3EE' }"></i>
              <figcaption>--accent<br />#22D3EE</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== TIPOGRAFI ===================== -->
    <section class="ds-section container">
      <h2 class="ds-h2"><span>02</span>Tipografi</h2>
      <div class="typo-list">
        <div class="typo-row">
          <code>Bricolage Grotesque 700 &middot; clamp 2.4–4rem</code>
          <p class="t-display">Aura Amalia</p>
        </div>
        <div class="typo-row">
          <code>Bricolage Grotesque 700 &middot; clamp 1.5–2rem</code>
          <p class="t-heading">Proyek Pilihan</p>
        </div>
        <div class="typo-row">
          <code>Manrope 400 &middot; 0.88–1rem / lh 1.75</code>
          <p class="t-body">
            Siswa SMK Negeri 7 Samarinda jurusan PPLG, tertarik mendalami pengembangan perangkat
            lunak dari sisi frontend maupun backend.
          </p>
        </div>
        <div class="typo-row">
          <code>JetBrains Mono 400 &middot; 0.62–0.78rem / tracking lebar</code>
          <p class="t-mono">KEDALAMAN · 15 M</p>
        </div>
      </div>
    </section>

    <!-- ===================== KOMPONEN ===================== -->
    <section class="ds-section container-wide">
      <h2 class="ds-h2"><span>03</span>Komponen</h2>

      <!-- Tombol di konteks terang -->
      <div class="demo-band ctx-light">
        <p class="band-label">Konteks terang — Zona Permukaan</p>
        <div class="row">
          <button class="btn btn-primary">
            <i data-lucide="file-text" class="btn-icon"></i> Lihat CV Saya
          </button>
          <button class="btn btn-outline">
            Lihat Proyek <i data-lucide="arrow-right" class="btn-icon"></i>
          </button>
          <button class="btn btn-ghost">
            Hubungi Saya <i data-lucide="arrow-down" class="btn-icon"></i>
          </button>
        </div>
      </div>

      <!-- Tombol di konteks gelap -->
      <div class="demo-band zone-mid plankton-layer">
        <p class="band-label">Konteks gelap — Laut Tengah ke bawah</p>
        <div class="row">
          <button class="btn btn-primary">Lihat CV Saya</button>
          <button class="btn btn-outline">
            Lihat Proyek <i data-lucide="arrow-right" class="btn-icon"></i>
          </button>
          <button class="btn btn-ghost">Hubungi Saya</button>
          <button class="btn neon-btn">
            <i data-lucide="send" class="btn-icon"></i> Hubungi Saya
          </button>
          <button class="btn btn-deep">
            <i data-lucide="download" class="btn-icon"></i> Unduh CV
          </button>
        </div>
      </div>

      <!-- Chip skill -->
      <div class="demo-grid">
        <div class="demo-panel zone-mid">
          <p class="band-label">Chip Skill</p>
          <div class="group-chips">
            <div v-for="c in chips" :key="c.name" class="chip-icon">
              <img
                :src="c.icon"
                :alt="c.name"
                class="chip-img"
                :class="{ 'img-invert': c.invert }"
              />
              <span class="chip-name">{{ c.name }}</span>
            </div>
          </div>
        </div>

        <div class="demo-panel zone-mid">
          <p class="band-label">Gelembung (motif semua section)</p>
          <div class="bubble-demo">
            <AmbientBubbles :count="9" />
            <span class="bubble-demo-note">naik &middot; goyang &middot; tembus cahaya</span>
          </div>
        </div>
      </div>

      <!-- Kartu proyek -->
      <div class="demo-band zone-mid">
        <p class="band-label">Card Proyek &mdash; hover: naik + glow border</p>
        <div class="projects-grid">
          <article class="glass glass-hover project-card">
            <div class="project-img-box ds-thumb">
              <span class="project-badge">PHP</span>
            </div>
            <div class="project-content">
              <h3 class="project-title">Judul Proyek</h3>
              <p class="project-desc">
                Deskripsi singkat satu atau dua baris tentang sistem yang dibangun.
              </p>
              <ul class="project-bullets">
                <li class="bullet-item">
                  <span class="bullet-dot"></span><span>Fitur utama pertama</span>
                </li>
                <li class="bullet-item">
                  <span class="bullet-dot"></span><span>Fitur utama kedua</span>
                </li>
              </ul>
              <div class="project-tech-tags">
                <span class="tech-tag">PHP</span><span class="tech-tag">MySQL</span
                ><span class="tech-tag">Bootstrap</span>
              </div>
              <div class="card-footer">
                <a href="#" class="card-link" @click.prevent
                  ><i data-lucide="github" class="btn-icon"></i>GitHub</a
                >
                <a href="#" class="card-link" @click.prevent
                  >Tanya Detail<i data-lucide="arrow-up-right" class="btn-icon"></i
                ></a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Kartu sertifikat -->
      <div class="demo-band zone-deep">
        <p class="band-label">Card Sertifikat</p>
        <div class="certs-grid">
          <article class="glass glass-hover cert-card">
            <span class="cert-issuer">Penerbit Sertifikasi</span>
            <h4 class="cert-title">Nama Sertifikat yang Cukup Panjang</h4>
            <p class="cert-desc">
              Deskripsi singkat materi yang dikuasai selama program berlangsung.
            </p>
            <div class="cert-footer">
              <span class="cert-year">2026</span>
              <span class="cert-stamp"><i data-lucide="check"></i>Completed</span>
            </div>
          </article>
        </div>
      </div>

      <!-- Bentuk & bayangan -->
      <div class="demo-band ctx-light">
        <p class="band-label">Radius &amp; bayangan</p>
        <div class="shape-row">
          <figure class="shape glass" style="border-radius: 20px">
            <figcaption>--r-lg · 20px</figcaption>
          </figure>
          <figure class="shape glass" style="border-radius: 28px">
            <figcaption>--r-xl · 28px</figcaption>
          </figure>
          <figure class="shape glass" style="border-radius: 999px">
            <figcaption>pill · 999px</figcaption>
          </figure>
          <figure class="shape shape-shadow" style="border-radius: 28px">
            <figcaption>shadow · 44px blur</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <footer class="ds-footer">
      <div class="container">
        <span>&copy; {{ year }} Aura Amalia &mdash; Design System Ocean Dive v2</span>
        <router-link to="/" class="ds-footer-link">Kembali menyelam &#8594;</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AmbientBubbles from '../components/AmbientBubbles.vue'

const year = new Date().getFullYear()

const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const chips = [
  { name: 'Vue.js', icon: `${base}/vuejs/vuejs-original.svg` },
  { name: 'Tailwind', icon: `${base}/tailwindcss/tailwindcss-original.svg` },
  { name: 'GitHub', icon: `${base}/github/github-original-wordmark.svg`, invert: true },
  { name: 'Figma', icon: `${base}/figma/figma-original.svg` },
]

onMounted(() => {
  if (window.lucide) window.lucide.createIcons()
})
</script>

<style scoped>
.ds-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #041524 0%, #0a2540 100%);
}

.ds-topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 14px 0;
  background: rgba(4, 21, 36, 0.75);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(143, 211, 240, 0.14);
}

.ds-topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #bfe6f7;
  transition: color 0.25s ease;
}

.back-link:hover {
  color: var(--accent);
}

.back-link svg {
  width: 15px;
  height: 15px;
}

.ds-crumb {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  color: rgba(188, 217, 236, 0.55);
}

.ds-hero {
  padding: clamp(56px, 8vw, 96px) 0 clamp(24px, 4vw, 40px);
}

.ds-kicker {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.ds-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  color: #eff7fd;
  letter-spacing: -0.02em;
}

.ds-subtitle {
  margin-top: 14px;
  max-width: 60ch;
  line-height: 1.75;
  color: #bcd9ec;
}

.ds-section {
  padding: clamp(36px, 5vw, 64px) 0;
}

.container-wide {
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
}

.ds-h2 {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.6vw, 1.8rem);
  color: #eff7fd;
  margin-bottom: 10px;
}

.ds-h2 span {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
}

.ds-note {
  max-width: 68ch;
  font-size: 0.92rem;
  line-height: 1.7;
  color: #bcd9ec;
  margin-bottom: 30px;
}

/* --- Zona stack --- */
.ds-zone-stack {
  display: grid;
  gap: 14px;
  border-radius: var(--r-xl);
  overflow: hidden;
  border: 1px solid rgba(143, 211, 240, 0.18);
}

.ds-zone {
  position: relative;
  padding: 26px clamp(18px, 3vw, 34px);
}

.ds-zone-surface {
  --z-txt: #0b3a5c;
  --z-txt-soft: #2e6489;
  background: linear-gradient(90deg, var(--sky-top), var(--sky-low));
}

.ds-zone-head strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--z-txt, #eff7fd);
}

.ds-zone-head small {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--z-txt-soft, #bcd9ec);
}

.swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 18px;
}

.swatch {
  width: 128px;
}

.swatch i {
  display: block;
  height: 58px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 22px rgba(2, 12, 24, 0.25);
}

.swatch figcaption {
  margin-top: 8px;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  line-height: 1.5;
  color: var(--z-txt-soft, #bcd9ec);
}

/* --- Tipografi --- */
.typo-list {
  display: grid;
  gap: 8px;
}

.typo-row {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 18px;
  align-items: center;
  padding: 20px 22px;
  border-radius: var(--r-lg);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(143, 211, 240, 0.14);
}

.typo-row code {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  line-height: 1.6;
  color: #7dd3fc;
}

.t-display {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2rem, 4.4vw, 3.2rem);
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, #eaf6ff, #7dd3fc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.t-heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  color: #eff7fd;
}

.t-body {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #bcd9ec;
  max-width: 70ch;
}

.t-mono {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  color: var(--accent);
}

@media (max-width: 720px) {
  .typo-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

/* --- Band demo --- */
.demo-band {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-xl);
  padding: clamp(24px, 4vw, 40px);
  margin-bottom: 22px;
  border: 1px solid rgba(143, 211, 240, 0.14);
}

.ctx-light {
  --z-txt: #0b3a5c;
  --z-txt-soft: #2e6489;
  --z-btn-brd: rgba(11, 58, 92, 0.42);
  --z-glass: rgba(255, 255, 255, 0.44);
  --z-brd: rgba(11, 58, 92, 0.14);
  --z-line: rgba(11, 58, 92, 0.26);
  background: linear-gradient(120deg, var(--sky-top), var(--sky-low));
}

.band-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--z-txt-soft, #bcd9ec);
  margin-bottom: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  position: relative;
  z-index: 2;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
  margin-bottom: 22px;
}

.demo-panel {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-xl);
  padding: clamp(22px, 3vw, 34px);
  border: 1px solid rgba(143, 211, 240, 0.14);
}

.bubble-demo {
  position: relative;
  height: 210px;
  border-radius: var(--r-lg);
  border: 1.5px dashed rgba(143, 211, 240, 0.3);
  overflow: hidden;
}

.bubble-demo-note {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: rgba(188, 217, 236, 0.6);
}

/* --- Thumb placeholder kartu proyek --- */
.ds-thumb {
  background:
    radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.25), transparent 45%),
    linear-gradient(135deg, #1e88c7, #083254);
}

.shape-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.shape {
  width: 130px;
  height: 84px;
  display: grid;
  place-items: center;
}

.shape figcaption {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--z-txt-soft, #bcd9ec);
}

.shape-shadow {
  background: #fff;
  border: none;
  box-shadow: 0 22px 44px rgba(11, 58, 92, 0.35);
}

/* --- Footer halaman DS --- */
.ds-footer {
  padding: 30px 0 44px;
  border-top: 1px solid rgba(143, 211, 240, 0.12);
}

.ds-footer .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.82rem;
  color: rgba(188, 217, 236, 0.65);
}

.ds-footer-link {
  font-weight: 600;
  color: #7dd3fc;
}

.ds-footer-link:hover {
  color: var(--accent);
}
</style>
