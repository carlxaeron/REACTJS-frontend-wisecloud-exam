import { createApp } from 'vue';
import App from './App.vue';

import './styles/app.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/router";

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
