import { createApp } from 'vue'
import type { App as VueApp } from 'vue'
import App from './App.vue'
// import './styles/main.scss'

const app: VueApp<Element> = createApp(App)

app.mount('#app')
