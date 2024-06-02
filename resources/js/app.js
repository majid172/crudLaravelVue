import './bootstrap';
import { createApp } from "vue";
import App from './app.vue'
import '../scss/style.scss';
import router from './router';
import { createPinia } from "pinia";
import * as bootstrap from 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
