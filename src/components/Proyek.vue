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



