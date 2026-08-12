<template>
  <section id="projects" class="section-wrap">
    <div class="container">

      <!-- Label -->
      <div class="section-label reveal">
        <span class="label-comment">// selected-projects</span>
        <div class="label-line"></div>
      </div>

      <h2 class="section-heading reveal d1">Proyek.</h2>

      <!-- Project cards -->
      <div class="projects-grid">
        <article
          v-for="(p, i) in projects"
          :key="p.slug"
          class="project-card reveal"
          :class="`d${i + 1}`"
        >
          <!-- Card header: file tab -->
          <div class="card-tab">
            <div class="tab-dots">
              <span class="tdot red"></span>
              <span class="tdot yellow"></span>
              <span class="tdot green"></span>
            </div>
            <span class="tab-filename">{{ p.filename }}</span>
            <span class="tab-badge" :style="{ background: p.badgeColor }">{{ p.badge }}</span>
          </div>

          <!-- Thumbnail -->
          <div class="card-thumb">
            <img :src="p.thumb" :alt="p.title" class="thumb-img" />
            <div class="thumb-overlay">
              <span class="thumb-tag">{{ p.type }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="card-body">
            <h3 class="proj-title">{{ p.title }}</h3>
            <p class="proj-desc">{{ p.desc }}</p>

            <!-- Comment-style bullets -->
            <ul class="proj-bullets">
              <li v-for="b in p.bullets" :key="b" class="proj-bullet">
                <span class="bullet-comment">// </span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <!-- Tech tags -->
            <div class="proj-tags">
              <span
                v-for="t in p.tech"
                :key="t.name"
                class="tag"
                :style="{ '--tc': t.color }"
              >&lt;{{ t.name }}&gt;</span>
            </div>
          </div>

          <!-- Footer with GitHub button -->
          <div class="card-footer" v-if="p.github">
            <a 
              :href="p.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-github"
            >
              <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    slug: 'ekskul',
    filename: 'ekskul.php',
    badge: 'PHP',
    badgeColor: 'rgba(167,139,250,0.2)',
    type: 'Web App',
    title: 'Website Ekstrakurikuler',
    thumb: 'Ekstrakurikuler.png',
    desc: 'Platform digital untuk manajemen kegiatan ekstrakurikuler sekolah — mulai dari pendaftaran siswa, pengelolaan jadwal, hingga laporan administrasi.',
    bullets: [
      'Pendaftaran siswa ke kegiatan ekskul secara online',
      'Manajemen jadwal dan data anggota per ekskul',
      'Dashboard admin dengan ringkasan aktivitas',
    ],
    tech: [
      { name: 'PHP',       color: '#a78bfa' },
      { name: 'MySQL',     color: '#38bdf8' },
      { name: 'Bootstrap', color: '#fb923c' },
      { name: 'HTML',      color: '#f87171' },
      { name: 'CSS',       color: '#38bdf8' },
    ],
    github: 'https://github.com/auraaly/ekstrakurikuler',
  },
  {
    slug: 'kas-kelas',
    filename: 'kas-kelas.php',
    badge: 'PHP',
    badgeColor: 'rgba(167,139,250,0.2)',
    type: 'Web App',
    title: 'Website Kas Kelas',
    thumb: 'KasKelas.png',
    desc: 'Aplikasi pengelolaan keuangan kelas berbasis web untuk mencatat pemasukan, pengeluaran, dan memantau laporan kas secara transparan.',
    bullets: [
      'Pencatatan transaksi pemasukan dan pengeluaran',
      'Laporan keuangan dengan grafik visual',
      'Histori pembayaran per anggota kelas',
    ],
    tech: [
      { name: 'PHP',       color: '#a78bfa' },
      { name: 'MySQL',     color: '#38bdf8' },
      { name: 'Bootstrap', color: '#fb923c' },
      { name: 'HTML',      color: '#f87171' },
      { name: 'CSS',       color: '#38bdf8' },
    ],
    github: 'https://github.com/auraaly/KasKelas',
  },
]
</script>



