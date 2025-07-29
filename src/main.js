import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
// import router from './router'
import VeeValidatePlugin from './includes/validation.js'

const app = createApp(App)

app.use(createPinia())
// app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
