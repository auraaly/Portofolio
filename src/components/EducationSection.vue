<template>
  <section id="education" class="section-wrap">
    <div class="container">

      <!-- Badge judul section -->
      <div class="section-divider">
        <span class="section-badge">Pendidikan</span>
        <div class="divider-line"></div>
      </div>

      <!-- Layout timeline centered -->
      <div class="edu-layout">
        <div class="edu-timeline">
          <!-- Garis vertical timeline -->
          <div class="edu-timeline-line"></div>

          <!-- Card pendidikan -->
          <div class="edu-entry">
            <!-- Dot biru di timeline -->
            <div class="edu-dot"></div>
            
            <!-- Card info pendidikan -->
            <div class="edu-card">
              <div class="edu-card-top">
                <!-- Icon graduation cap -->
                <div class="edu-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <!-- Badge periode tahun -->
                <div class="edu-meta">
                  <span class="edu-period">2024 — Sekarang</span>
                </div>
              </div>

              <!-- Nama sekolah dan jurusan -->
              <h3 class="edu-school">SMK Negeri 7 Samarinda</h3>
              <p class="edu-program">Pengembangan Perangkat Lunak dan Gim (PPLG)</p>

            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-header { margin-bottom: 48px; }

.section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}
.label-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--blue);
  background: rgba(56,189,248,0.08);
  border: 1px solid rgba(56,189,248,0.2);
  padding: 4px 12px;
  border-radius: 99px;
  white-space: nowrap;
}
.label-line { flex: 1; height: 1px; background: var(--border); }

.edu-title {
  font-family: var(--display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--t1);
  letter-spacing: -0.03em;
}
.edu-title-accent {
  background: linear-gradient(135deg, var(--blue), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Layout */
.edu-layout {
  display: flex;
  justify-content: center;
}

/* Timeline */
.edu-timeline {
  position: relative;
  width: 100%;
  max-width: 560px;
}

.edu-timeline-line {
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--blue), transparent);
}

.edu-entry {
  position: relative;
  padding-left: 52px;
}

.edu-dot {
  position: absolute;
  left: 11px;
  top: 24px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--blue);
  border: 3px solid var(--bg);
  box-shadow: 0 0 12px rgba(56,189,248,0.5);
}

.edu-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color var(--tf), transform var(--tf), box-shadow var(--tf);
}
.edu-card:hover {
  border-color: var(--blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(56,189,248,0.1);
}

.edu-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edu-icon-wrap {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56,189,248,0.1);
  border: 1px solid rgba(56,189,248,0.2);
  border-radius: var(--r-sm);
  color: var(--blue);
}

.edu-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.edu-period {
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--t2);
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 99px;
  background: var(--surface);
}

.edu-status {
  font-family: var(--mono);
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--green);
  background: rgba(74,222,128,0.1);
  border: 1px solid rgba(74,222,128,0.25);
  padding: 3px 10px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.edu-status::before {
  content: '';
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
}

.edu-school {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--t1);
  line-height: 1.3;
}

.edu-program {
  font-size: 0.88rem;
  color: var(--blue);
  font-weight: 600;
}

.edu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.edu-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  background: rgba(56,189,248,0.06);
  border: 1px solid rgba(56,189,248,0.15);
  border-radius: 99px;
  color: var(--t2);
}

/* Highlight grid kanan */
.edu-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.edu-highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  text-align: center;
  transition: border-color var(--tf), transform var(--tf);
}
.edu-highlight-card:hover {
  border-color: var(--border-b);
  transform: translateY(-4px);
}

.edu-hl-icon { font-size: 1.8rem; }
.edu-hl-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t3);
}
.edu-hl-val {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--t1);
}

@media (max-width: 860px) {
  .edu-layout { grid-template-columns: 1fr; gap: 32px; }
  .edu-highlight { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 560px) {
  .edu-highlight { grid-template-columns: repeat(2, 1fr); }
  .edu-entry { padding-left: 40px; }
}
</style>
