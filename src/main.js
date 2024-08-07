import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/index.css';
import BaseButton from '@/components/BaseButton.vue';
import { openAlert } from '@/plugins/alertPlugin';
import VueEasyLightbox from 'vue-easy-lightbox';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
app.component('BaseButton', BaseButton);
app.use(VueEasyLightbox);
app.use(
  AOS.init({
    duration: 1000,
  }),
);
app.config.globalProperties.$openAlert = openAlert;
app.mount('#app');
