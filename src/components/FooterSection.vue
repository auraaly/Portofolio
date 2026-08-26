<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-copy">&copy; {{ year }} Aura Amalia.</span>
      <router-link to="/design-system" class="footer-note ds-link"
        >Design System &#8594;</router-link
      >
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.ds-link {
  transition: color 0.25s ease;
}

.ds-link:hover {
  color: var(--accent);
}
</style>
