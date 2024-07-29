import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/index.css';
import BaseButton from '@/components/BaseButton.vue';
import { openAlert } from '@/plugins/alertPlugin';

const app = createApp(App);
app.component('BaseButton', BaseButton);
app.config.globalProperties.$openAlert = openAlert;
app.mount('#app');
