// Entry point aplikasi Vue
// Di sini kita import framework Vue, komponen utama, dan styling global

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Bikin instance Vue dan mount ke element #app di index.html
createApp(App).mount('#app')
