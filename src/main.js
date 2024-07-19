import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/index.css';
import BaseButton from '@/components/BaseButton.vue';

const app = createApp(App);
app.component('BaseButton', BaseButton);
app.mount('#app');
