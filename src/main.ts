import "@/shared/assets/base.css"

import { createApp } from 'vue'
import { router } from './app/router/routes'
import App from "../src/app/App.vue"

createApp(App).use(router).mount('#app')
