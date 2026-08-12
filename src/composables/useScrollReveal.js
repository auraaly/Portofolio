import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useScrollReveal — attaches an IntersectionObserver to one or more element refs.
 * Each observed element gets `.visible` added when it enters the viewport.
 *
 * @param {Ref | Ref[]} targets  — single ref or array of refs pointing to DOM elements
 * @param {object}      options
 * @param {number}      options.threshold  — default 0.15
 */
export function useScrollReveal(targets, options = {}) {
  const { threshold = 0.15 } = options
  let observer = null

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

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
