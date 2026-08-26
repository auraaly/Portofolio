<template>
  <section id="projects" class="section-pad">
    <div class="container">
      <div class="section-head entrance">
        <span class="section-badge">
          <small>Kedalaman · 15 m</small>
          Proyek Pilihan
        </span>
        <div class="divider-line"></div>
      </div>

      <div class="projects-grid">
        <article
          v-for="(p, i) in projects"
          :key="p.slug"
          class="glass glass-hover project-card entrance"
          v-tilt="{ max: 3.5 }"
          :style="{ '--entrance-delay': `${0.08 * i}s` }"
          role="button"
          tabindex="0"
          :aria-label="`Lihat detail proyek ${p.title}`"
          @click="openProject(p)"
          @keydown.enter.prevent="openProject(p)"
          @keydown.space.prevent="openProject(p)"
        >
          <div class="project-img-box">
            <img :src="p.thumb" :alt="p.title" class="project-img" loading="lazy" />
            <span class="project-badge">{{ p.badge }}</span>
            <span class="detail-hint">
              <i data-lucide="maximize-2"></i>
              Lihat Detail
            </span>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc clamp-3">{{ p.desc }}</p>

            <div class="project-tech-tags">
              <span v-for="t in p.tech" :key="t.name" class="tech-tag">{{ t.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="active" class="pm-overlay" @click="closeProject">
          <div class="pm-container" role="dialog" aria-modal="true" @click.stop>
            <figure class="pm-figure">
              <img :src="active.thumb" :alt="active.title" />
              <span class="pm-caustic" aria-hidden="true"></span>
              <span class="project-badge">{{ active.badge }}</span>
              <button class="pm-close" aria-label="Tutup detail proyek" @click="closeProject">
                &times;
              </button>
            </figure>

            <div class="pm-body">
              <div class="pm-main">
                <h3 class="pm-title pm-anim" style="--d: 0.05s">{{ active.title }}</h3>

                <p class="pm-desc pm-anim" style="--d: 0.12s">{{ active.desc }}</p>

                <h4 class="pm-sub pm-anim" style="--d: 0.19s">
                  <i data-lucide="life-buoy"></i>
                  Masalah yang Diselesaikan
                </h4>
                <p class="pm-problem pm-anim" style="--d: 0.24s">{{ active.problem }}</p>

                <h4 class="pm-sub pm-anim" style="--d: 0.31s">
                  <i data-lucide="list-checks"></i>
                  Fitur Utama
                </h4>
                <ul class="pm-feats pm-anim" style="--d: 0.36s">
                  <li v-for="f in active.features" :key="f" class="bullet-item">
                    <span class="bullet-dot"></span>
                    <span>{{ f }}</span>
                  </li>
                </ul>
              </div>

              <aside class="pm-side pm-anim" style="--d: 0.2s">
                <div class="pm-info">
                  <span class="pm-info-label">Peran Saya</span>
                  <span class="pm-info-value">{{ active.role }}</span>
                </div>
                <div class="pm-info">
                  <span class="pm-info-label">Jenis Proyek</span>
                  <span class="pm-info-value">
                    <i data-lucide="users" class="pm-info-icon"></i>
                    {{ active.team }}
                  </span>
                </div>
                <div class="pm-info">
                  <span class="pm-info-label">Tahun</span>
                  <span class="pm-info-value">{{ active.year }}</span>
                </div>

                <div class="pm-side-divider"></div>

                <span class="pm-info-label">Teknologi</span>
                <div class="pm-tech">
                  <span v-for="t in active.tech" :key="t.name" class="tech-tag">{{ t.name }}</span>
                </div>
              </aside>
            </div>

            <footer class="pm-foot pm-anim" style="--d: 0.42s">
              <a
                href="https://github.com/auraaly"
                target="_blank"
                rel="noopener"
                class="btn btn-deep"
              >
                <i data-lucide="github" class="btn-icon"></i>
                Lihat di GitHub
              </a>
              <button class="btn neon-btn" @click="askDetail">
                Tanya Detail
                <i data-lucide="arrow-up-right" class="btn-icon"></i>
              </button>
            </footer>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, nextTick, onUnmounted } from 'vue'
import { vTilt } from '../directives/pointer'

const active = ref(null)

function openProject(p) {
  active.value = p
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    if (window.lucide) window.lucide.createIcons()
  })
}

function closeProject() {
  active.value = null
  document.body.style.overflow = ''
}

function askDetail() {
  closeProject()
  setTimeout(() => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 120)
}

function onKey(e) {
  if (e.key === 'Escape' && active.value) closeProject()
}

window.addEventListener('keydown', onKey)

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

const projects = [
  {
    slug: 'ekskul',
    badge: 'PHP',
    title: 'Sistem Ekstrakurikuler',
    thumb: '/Ekstrakurikuler.png',
    year: '2025',
    role: 'Fullstack Developer',
    team: 'Mandiri',
    desc: 'Platform digital untuk manajemen kegiatan ekstrakurikuler sekolah seperti pendaftaran siswa, pengelolaan jadwal, dan laporan administrasi.',
    problem:
      'Pendaftaran ekskul di sekolah masih lewat kertas dan pencatatan manual — data anggota sering tumpang tindih, jadwal mudah bentrok, dan panitia repot merangkum laporan saat akhir semester.',
    features: [
      'Pendaftaran siswa ke kegiatan ekskul secara online',
      'Manajemen jadwal dan data anggota per ekskul',
      'Dashboard admin dengan ringkasan aktivitas',
    ],
    tech: [{ name: 'PHP' }, { name: 'MySQL' }, { name: 'Bootstrap' }, { name: 'HTML' }, { name: 'CSS' }],
  },
  {
    slug: 'explore-bali',
    badge: 'PHP',
    title: 'Sistem Eksplorasi Bali',
    thumb: '/ExploreBali.png',
    year: '2025',
    role: 'Fullstack Developer',
    team: 'Kelompok · 3 orang',
    desc: 'Platform informasi wisata digital untuk menjelajahi destinasi terbaik di Bali dengan pencarian destinasi dan kategori wisata.',
    problem:
      'Informasi wisata Bali tersebar di banyak blog yang susah dibandingkan, tidak terkategorikan, dan tidak ada satu sumber rapi untuk mencari destinasi sesuai minat perjalanan.',
    features: [
      'Pencarian dan filter destinasi berdasarkan kategori',
      'Informasi destinasi lengkap dengan deskripsi & lokasi',
      'Antarmuka responsif dengan hero section interaktif',
    ],
    tech: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    slug: 'kas-kelas',
    badge: 'PHP',
    title: 'Sistem Kas Kelas',
    thumb: '/KasKelas.png',
    year: '2024',
    role: 'Fullstack Developer',
    team: 'Mandiri',
    desc: 'Platform digital pengelolaan keuangan kelas berbasis web untuk mencatat pemasukan, pengeluaran, dan memantau laporan kas secara transparan.',
    problem:
      'Kas kelas dicatat di buku tulis dan kabar seputar saldo hanya lewat chat — sering tidak update, bukti transaksi hilang, dan teman-teman tidak bisa memantau dana kas secara terbuka.',
    features: [
      'Pencatatan transaksi pemasukan dan pengeluaran',
      'Laporan keuangan dengan grafik visual',
      'Histori pembayaran per anggota kelas',
    ],
    tech: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Bootstrap' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
]
</script>

<style scoped>
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ---------- Modal detail ---------- */
.pm-overlay {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(2, 12, 24, 0.82);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.pm-container {
  width: min(940px, 100%);
  max-height: min(88vh, 840px);
  overflow-y: auto;
  overscroll-behavior: contain;
  border-radius: var(--r-xl);
  background: linear-gradient(180deg, #0c385c 0%, #071f36 60%, #041524 100%);
  border: 1px solid rgba(143, 211, 240, 0.22);
  box-shadow: 0 40px 90px rgba(2, 12, 24, 0.7);
  animation: modal-slide-up 0.38s cubic-bezier(0.2, 0.7, 0.25, 1);
}

.pm-figure {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #041524;
}

.pm-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: pm-zoom-in 1.4s cubic-bezier(0.2, 0.65, 0.25, 1) both;
}

/* Kilau cahaya air berjalan pelan di atas screenshot */
.pm-caustic {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.pm-caustic::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(190, 235, 255, 0.09) 44%,
    rgba(255, 255, 255, 0.14) 50%,
    rgba(190, 235, 255, 0.09) 56%,
    transparent 70%
  );
  animation: wave-slide 11s linear infinite;
}

.pm-figure .project-badge {
  z-index: 2;
}

.pm-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(4, 21, 36, 0.58);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  color: #eaf6ff;
  font-size: 1.2rem;
  line-height: 1;
  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.pm-close:hover {
  background: rgba(34, 211, 238, 0.28);
  transform: rotate(90deg);
}

.pm-body {
  display: grid;
  grid-template-columns: 1.55fr 0.95fr;
  gap: clamp(20px, 3vw, 32px);
  padding: clamp(20px, 3vw, 32px) clamp(20px, 3vw, 32px) 6px;
}

.pm-title {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.6vw, 1.85rem);
  letter-spacing: -0.01em;
  color: #f2faff;
  margin-bottom: 12px;
}

.pm-desc,
.pm-problem {
  font-size: 0.94rem;
  line-height: 1.75;
  color: #c9e4f5;
}

.pm-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 22px 0 10px;
  font-family: var(--font-display);
  font-size: 0.98rem;
  color: #7dd3fc;
}

.pm-sub svg {
  width: 16px;
  height: 16px;
}

.pm-feats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pm-feats .bullet-item {
  color: #bcd9ec;
}

.pm-side {
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: var(--r-lg);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(143, 211, 240, 0.16);
}

.pm-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.pm-info-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(188, 217, 236, 0.66);
}

.pm-info-value {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  font-size: 0.93rem;
  color: #eff7fd;
}

.pm-info-icon {
  width: 14px;
  height: 14px;
  color: var(--accent);
}

.pm-side-divider {
  height: 1px;
  margin: 4px 0;
  background: linear-gradient(90deg, rgba(143, 211, 240, 0.28), transparent);
}

.pm-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.pm-foot {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
  padding: 18px clamp(20px, 3vw, 32px) clamp(20px, 3vw, 28px);
}

/* Blok konten modal muncul berjenjang */
.pm-anim {
  animation: pm-fade-rise 0.5s cubic-bezier(0.2, 0.65, 0.25, 1) both;
  animation-delay: var(--d, 0s);
}

@keyframes pm-fade-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pm-zoom-in {
  from {
    transform: scale(1.06);
  }
  to {
    transform: scale(1);
  }
}

@media (max-width: 720px) {
  .pm-body {
    grid-template-columns: 1fr;
  }

  .pm-foot .btn {
    flex: 1;
    justify-content: center;
  }
}
</style>
