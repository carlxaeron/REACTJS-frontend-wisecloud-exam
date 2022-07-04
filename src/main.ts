import { createApp } from 'vue';
import './styles/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from '@/router';

library.add(faCaretDown);
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
