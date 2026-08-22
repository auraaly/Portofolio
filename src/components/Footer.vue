<template>
  <footer class="footer">
    <div class="moon-silhouette" aria-hidden="true"></div>
    <div class="container footer-bottom-inner">
      <span class="footer-copy">&copy; {{ year }} Aura Amalia.</span>
    </div>
  </footer>
</template>

<script setup>
// Mengambil tahun saat ini secara otomatis untuk hak cipta footer
const year = new Date().getFullYear()
</script>
