import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmaBBq7nVXrQbmkQaqVDapMBZoJ3niuVg",
  authDomain: "ndi-teste.firebaseapp.com",
  projectId: "ndi-teste",
  storageBucket: "ndi-teste.appspot.com",
  messagingSenderId: "327911452595",
  appId: "1:327911452595:web:7d6feaa3e05b52f5d0a5c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)
  .use(IonicVue)
  .use(router);

  
app.use(VueAxios, axios);


app.axios.defaults.baseURL = "/api/";
app.axios.defaults.withCredentials = true;
app.axios.defaults.xsrfCookieName = "csrftoken";
app.axios.defaults.xsrfHeaderName = "X-CSRFToken";


router.isReady().then(() => {
  app.mount('#app');
});