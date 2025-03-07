import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'virtual:uno.css';
import '@unocss/reset/sanitize/sanitize.css'
import { setupStyle } from './styles'

setupStyle()
const app = createApp(App)
app.use(router)
app.mount('#app')
