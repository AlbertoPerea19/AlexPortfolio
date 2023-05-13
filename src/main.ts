import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";
import translations from "@/i18n/i18n";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';

import "@/assets/global.scss";


const i18n = createI18n({
   locale: "es",
   fallbackLocale: "es",
   legacy: false,
   messages: translations
});

const app = createApp(App)

app.use(router)
app.use(i18n);
app.mount('#app')
