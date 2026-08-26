<template>
  <div class="ambient-bubbles" aria-hidden="true">
    <span
      v-for="b in bubbles"
      :key="b.id"
      class="amb-bubble"
      :style="{
        left: b.left,
        bottom: b.bottom,
        width: b.size + 'px',
        height: b.size + 'px',
        animationDuration: b.dur + 's',
        animationDelay: b.delay + 's',
        '--op': b.op,
      }"
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  count: { type: Number, default: 10 },
})

const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

const n = small ? Math.ceil(props.count / 2) : props.count

const bubbles = Array.from({ length: n }, (_, i) => ({
  id: i,
  left: `${(i * 83 + 7) % 94}%`,
  bottom: `${-8 - ((i * 29) % 30)}%`,
  size: 6 + ((i * 17) % 24),
  dur: 10 + ((i * 7) % 13),
  delay: -((i * 4.3) % 18),
  op: 0.25 + ((i * 11) % 40) / 100,
}))
</script>

<style scoped>
.ambient-bubbles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.amb-bubble {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: radial-gradient(
    circle at 32% 30%,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.08) 42%,
    transparent 68%
  );
  opacity: var(--op, 0.4);
  animation: bubble-rise linear infinite;
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30vh) translateX(8px);
  }
  50% {
    transform: translateY(-60vh) translateX(-6px);
  }
  75% {
    transform: translateY(-90vh) translateX(7px);
  }
  100% {
    transform: translateY(-125vh) translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .amb-bubble {
    animation: none;
    opacity: 0.12;
  }
}
</style>
