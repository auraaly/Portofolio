<template>
  <section id="projects" class="section-wrap">
    <div class="container">

      <div class="section-label reveal-right">
        <span class="label-comment">// selected-projects</span>
        <div class="label-line"></div>
      </div>

      <h2 class="section-heading reveal-right d1">Proyek.</h2>

      <div class="proj-list reveal-left d2">
        <div
          v-for="(p, i) in projects"
          :key="p.slug"
          class="proj-item"
          :class="{ active: active === i }"
          @click="toggle(i)"
        >
          <!-- Header — selalu keliatan -->
          <div class="proj-item-header">
            <div class="proj-item-left">
              <span class="proj-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="proj-item-title">{{ p.title }}</span>
            </div>
            <div class="proj-item-right">
              <span class="proj-type-badge">{{ p.type }}</span>
              <span class="proj-chevron">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- Body — expand saat active -->
          <Transition name="expand">
            <div v-if="active === i" class="proj-item-body">
              <div class="proj-body-inner">

                <!-- Foto -->
                <div class="proj-img-wrap">
                  <div class="card-tab">
                    <div class="tab-dots">
                      <span class="tdot red"></span>
                      <span class="tdot yellow"></span>
                      <span class="tdot green"></span>
                    </div>
                    <span class="tab-filename">{{ p.filename }}</span>
                    <span class="tab-badge">{{ p.badge }}</span>
                  </div>
                  <img :src="p.thumb" :alt="p.title" class="proj-img" />
                </div>

                <!-- Detail -->
                <div class="proj-detail">
                  <p class="proj-desc">{{ p.desc }}</p>

                  <ul class="proj-bullets">
                    <li v-for="b in p.bullets" :key="b" class="proj-bullet">
                      <span class="bullet-dot"></span>
                      <span>{{ b }}</span>
                    </li>
                  </ul>

                  <div class="proj-tags">
                    <span
                      v-for="t in p.tech"
                      :key="t.name"
                      class="tag"
                      :style="{ '--tc': t.color }"
                    >{{ `<${t.name}>` }}</span>
                  </div>

                  <div v-if="p.github" class="proj-footer">
                    <a :href="p.github" target="_blank" rel="noopener noreferrer" class="btn-github">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { observeReveal } from '../composables/useScrollReveal.js'

const active = ref(null)

function toggle(i) {
  active.value = active.value === i ? null : i
}

const projects = [
  {
    slug: 'ekskul',
    filename: 'ekskul.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Ekstrakurikuler',
    thumb: '/Ekstrakurikuler.png',
    desc: 'Platform digital untuk manajemen kegiatan ekstrakurikuler sekolah — mulai dari pendaftaran siswa, pengelolaan jadwal, hingga laporan administrasi.',
    bullets: [
      'Pendaftaran siswa ke kegiatan ekskul secara online',
      'Manajemen jadwal dan data anggota per ekskul',
      'Dashboard admin dengan ringkasan aktivitas',
    ],
    tech: [
      { name: 'PHP', color: '#a78bfa' },
      { name: 'MySQL', color: '#38bdf8' },
      { name: 'Bootstrap', color: '#fb923c' },
      { name: 'HTML', color: '#f87171' },
      { name: 'CSS', color: '#60a5fa' },
    ],
    github: 'https://github.com/auraaly/ekstrakurikuler',
  },
  {
    slug: 'explore-bali',
    filename: 'explore-bali.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Eksplorasi Bali',
    thumb: '/ExploreBali.png',
    desc: 'Platform informasi wisata digital untuk menjelajahi destinasi terbaik di Bali — dilengkapi pencarian destinasi, kategori wisata, dan tampilan yang menarik.',
    bullets: [
      'Pencarian dan filter destinasi wisata berdasarkan kategori',
      'Tampilan informasi destinasi lengkap dengan deskripsi dan lokasi',
      'Antarmuka responsif dengan hero section yang interaktif',
    ],
    tech: [
      { name: 'PHP', color: '#a78bfa' },
      { name: 'MySQL', color: '#38bdf8' },
      { name: 'JavaScript', color: '#facc15' },
      { name: 'HTML', color: '#f87171' },
      { name: 'CSS', color: '#60a5fa' },
    ],
    github: null,
  },
  {
    slug: 'kas-kelas',
    filename: 'kas-kelas.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Kas Kelas',
    thumb: '/KasKelas.png',
    desc: 'Aplikasi pengelolaan keuangan kelas berbasis web untuk mencatat pemasukan, pengeluaran, dan memantau laporan kas secara transparan.',
    bullets: [
      'Pencatatan transaksi pemasukan dan pengeluaran',
      'Laporan keuangan dengan grafik visual',
      'Histori pembayaran per anggota kelas',
    ],
    tech: [
      { name: 'PHP', color: '#a78bfa' },
      { name: 'MySQL', color: '#38bdf8' },
      { name: 'Bootstrap', color: '#fb923c' },
      { name: 'HTML', color: '#f87171' },
      { name: 'CSS', color: '#60a5fa' },
    ],
    github: 'https://github.com/auraaly/KasKelas',
  },
]

observeReveal('#projects .reveal-right, #projects .reveal-left', { threshold: 0.1 })
</script>

<style scoped>
/* List */
.proj-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
}

/* Item */
.proj-item {
  border-bottom: 1px solid var(--border);
  transition: background var(--tf);
  cursor: pointer;
}
.proj-item:last-child { border-bottom: none; }
.proj-item:hover { background: rgba(56,189,248,0.04); }
.proj-item.active { background: rgba(56,189,248,0.06); }

/* Header */
.proj-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  gap: 16px;
  user-select: none;
}

.proj-item-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.proj-num {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--t3);
  font-weight: 600;
  flex-shrink: 0;
}

.proj-item-title {
  font-family: var(--display);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: var(--t1);
  transition: color var(--tf);
}
.proj-item.active .proj-item-title,
.proj-item:hover .proj-item-title { color: var(--blue); }

.proj-item-right {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.proj-type-badge {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--purple);
  border: 1px solid rgba(167,139,250,0.3);
  padding: 3px 10px;
  border-radius: 99px;
}

.proj-chevron {
  color: var(--t3);
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color var(--tf);
}
.proj-item.active .proj-chevron {
  transform: rotate(180deg);
  color: var(--blue);
}

/* Expand body */
.proj-item-body {
  overflow: hidden;
}

.proj-body-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0;
  border-top: 1px solid var(--border);
}

/* Foto */
.proj-img-wrap {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
}

.proj-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 260px;
  display: block;
}

/* Detail */
.proj-detail {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.proj-desc { font-size: 0.9rem; color: var(--t2); line-height: 1.8; }

.proj-bullets { display: flex; flex-direction: column; gap: 10px; }
.proj-bullet {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--t2);
  line-height: 1.6;
}
.bullet-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--blue);
  flex-shrink: 0;
  margin-top: 6px;
}

.proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }

.proj-footer { }

/* Transition */
.expand-enter-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.expand-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-12px);
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 600px;
}

@media (max-width: 768px) {
  .proj-item-header { padding: 20px; }
  .proj-body-inner { grid-template-columns: 1fr; }
  .proj-img-wrap { border-right: none; border-bottom: 1px solid var(--border); }
  .proj-img { min-height: 200px; max-height: 220px; }
  .proj-detail { padding: 24px 20px; }
  .proj-type-badge { display: none; }
}
</style>
