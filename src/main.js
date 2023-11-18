
import './style.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import PrimeVue from 'primevue/config/config.esm'

import App from './App.vue'
import { createApp } from 'vue';



const app = createApp(App);
app.use(PrimeVue);
app.mount("#app")
