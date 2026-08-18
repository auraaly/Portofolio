<template>
  <section id="projects" class="section-wrap">
    <div class="container">

      <div class="section-divider">
        <span class="section-badge">Proyek Pilihan</span>
        <div class="divider-line"></div>
      </div>

      <div class="projects-grid">
        <div
          v-for="p in projects"
          :key="p.slug"
          class="project-card"
        >
          <!-- Gambar Proyek -->
          <div class="project-img-box">
            <img :src="p.thumb" :alt="p.title" class="project-img" />
            <span class="project-badge">{{ p.badge }}</span>
          </div>

          <!-- Konten Detail Proyek -->
          <div class="project-content">
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc">{{ p.desc }}</p>

            <!-- Fitur Utama -->
            <ul class="project-bullets">
              <li v-for="b in p.bullets" :key="b" class="bullet-item">
                <span class="bullet-dot">•</span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <div class="project-tech-tags">
              <span v-for="t in p.tech" :key="t.name" class="tech-tag">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Fungsi pengamat animasi scroll saat proyek muncul di layar
import { observeReveal } from '../composables/useScrollReveal.js'

const active = ref(null)

function toggle(i) {
  active.value = active.value === i ? null : i
}

// Array daftar proyek buatan kamu (berisi judul, gambar, deskripsi, dan teknologi yang dipakai)
const projects = [
  {
    slug: 'ekskul',
    filename: 'ekskul.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Ekstrakurikuler',
    thumb: '/Ekstrakurikuler.png',
    desc: 'Platform digital untuk manajemen kegiatan ekstrakurikuler sekolah seperti pendaftaran siswa, pengelolaan jadwal, dan laporan administrasi.',
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
  },
  {
    slug: 'explore-bali',
    filename: 'explore-bali.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Eksplorasi Bali',
    thumb: '/ExploreBali.png',
    desc: 'Platform informasi wisata digital untuk menjelajahi destinasi terbaik di Bali dengan pencarian destinasi dan kategori wisata.',
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
  },
  {
    slug: 'kas-kelas',
    filename: 'kas-kelas.php',
    badge: 'PHP',
    type: 'Web App',
    title: 'Sistem Kas Kelas',
    thumb: '/KasKelas.png',
    desc: 'Platform digital  pengelolaan keuangan kelas berbasis web untuk mencatat pemasukan, pengeluaran, dan memantau laporan kas secara transparan.',
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
  },
]

// Aktifkan pengamat animasi scroll pada kartu proyek
observeReveal('#projects .reveal-right, #projects .reveal-left', { threshold: 0.1 })
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background: #102035;
  border: 1px solid #223a5e;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.project-img-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #0d1726;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.03);
}

.project-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(10, 22, 40, 0.9);
  border: 1px solid rgba(56, 189, 248, 0.4);
  color: #38bdf8;
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 20px;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.project-desc {
  font-size: 0.88rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 12px;
}

.project-bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
  list-style: none;
  padding: 0;
}

.bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.82rem;
  color: #94a3b8;
  line-height: 1.5;
}

.bullet-dot {
  color: #38bdf8;
  font-weight: bold;
}

.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  margin-top: auto;
}

.tech-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: #7dd3fc;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
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
