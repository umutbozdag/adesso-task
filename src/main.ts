import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key } from './composables/store';
import './main.scss';
import store from './store';

createApp(App).use(store, key).use(router).mount('#app');
