import { onMounted, onUnmounted } from 'vue'

// Custom Composable untuk mendeteksi elemen saat masuk ke layar (scroll reveal)
// Menambahkan class '.visible' ke elemen begitu muncul di layar browser

export function useScrollReveal(targets, options = {}) {
  const { threshold = 0.15 } = options
  let observer = null

  // Pasang IntersectionObserver saat komponen dipasang
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold },
    )

    const list = Array.isArray(targets) ? targets : [targets]
    list.forEach((t) => {
      if (t.value) observer.observe(t.value)
    })
  })

  // Bersihkan pemantau saat komponen dicopot
  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}

// Fungsi utama memantau elemen berdasarkan selector CSS (misal: '.reveal-scale')
export function observeReveal(selector, options = {}) {
  const { threshold = 0.12, once = true } = options
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (once) observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
