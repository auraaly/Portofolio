<template>
  <section id="projects" class="section-wrap">
    <div class="container">

      <!-- Badge dan garis pembatas section -->
      <div class="section-divider">
        <span class="section-badge">Proyek Pilihan</span>
        <div class="divider-line"></div>
      </div>

      <!-- Grid kartu proyek -->
      <div class="projects-grid">
        <div
          v-for="p in projects"
          :key="p.slug"
          class="project-card"
        >
          <!-- Gambar preview proyek dengan badge -->
          <div class="project-img-box">
            <img :src="p.thumb" :alt="p.title" class="project-img" />
            <span class="project-badge">{{ p.badge }}</span>
          </div>

          <!-- Konten detail proyek -->
          <div class="project-content">
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc">{{ p.desc }}</p>

            <!-- List fitur utama proyek -->
            <ul class="project-bullets">
              <li v-for="b in p.bullets" :key="b" class="bullet-item">
                <span class="bullet-dot">•</span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <!-- Tag teknologi yang dipakai -->
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
// Data proyek yang pernah dikerjain
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

</script>

<style scoped>
/* Grid 3 kolom untuk kartu proyek */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Kartu proyek dengan efek hover */
.project-card {
  background: #102035;
  border: 1px solid #223a5e;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

/* Hover: angkat card dikit dan ubah border jadi biru */
.project-card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

/* Container gambar proyek */
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

/* Gambar proyek */
.project-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

/* Zoom in dikit pas hover */
.project-card:hover .project-img {
  transform: scale(1.03);
}

/* Badge bahasa pemrograman (PHP, JS, dll) */
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

/* Konten teks di bawah gambar */
.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Judul proyek */
.project-title {
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

/* Deskripsi singkat proyek */
.project-desc {
  font-size: 0.88rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 12px;
}

/* List fitur utama */
.project-bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
  list-style: none;
  padding: 0;
}

/* Item fitur dengan dot biru */
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

/* Container chip teknologi */
.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  margin-top: auto;
}

/* Chip teknologi individual */
.tech-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: #7dd3fc;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
}

/* Responsive: 1 kolom di mobile */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
