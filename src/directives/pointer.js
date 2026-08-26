// Efek pointer halus: kartu miring 3D mengikuti kursor (v-tilt)
// dan tombol "magnet" yang bergeser mendekati kursor (v-magnet).
// Keduanya hanya aktif di perangkat pointer presisi (mouse) dan
// hormati prefers-reduced-motion.

const fine =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const vTilt = {
  mounted(el, binding) {
    if (!fine || reduced) return

    const max = binding.value?.max ?? 4.5
    let raf = 0
    let started = false

    function move(e) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        if (!started) {
          started = true
          el.style.transition = 'transform 0.16s ease-out'
          el.style.willChange = 'transform'
        }
        el.style.transform = `perspective(950px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(
          px * max
        ).toFixed(2)}deg) translateY(-3px)`
      })
    }

    function leave() {
      cancelAnimationFrame(raf)
      el.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.65, 0.25, 1)'
      el.style.transform = ''
      el.style.willChange = ''
      started = false
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    el._tiltCleanup = () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      el.style.transform = ''
      el.style.willChange = ''
    }
  },
  unmounted(el) {
    el._tiltCleanup?.()
  },
}

export const vMagnet = {
  mounted(el, binding) {
    if (!fine || reduced) return

    const range = binding.value?.range ?? 7
    let raf = 0

    function move(e) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transition = 'transform 0.14s ease-out'
        el.style.transform = `translate(${(px * range).toFixed(1)}px, ${(
          py * range - 1.5
        ).toFixed(1)}px)`
      })
    }

    function leave() {
      cancelAnimationFrame(raf)
      el.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.65, 0.25, 1)'
      el.style.transform = ''
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    el._magnetCleanup = () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      el.style.transform = ''
    }
  },
  unmounted(el) {
    el._magnetCleanup?.()
  },
}
