import { createApp } from 'vue'
import App from './App.vue'
import fishGame from 'fish-game'
const app = createApp(App)
app.use(fishGame)
    .mount('#app')
