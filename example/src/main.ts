import { createApp } from 'vue';
import './style.css';
import { guid } from '@nw-web/utils';
import App from './App.vue';
console.log(guid());
createApp(App).mount('#app');
