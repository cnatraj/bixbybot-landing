import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')