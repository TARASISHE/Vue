import { createApp } from 'vue'
import App from './App.vue'
import  router from './router'
import './assets/tailwind.css'
import Vuelidate from 'vuelidate'


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDj6Fsz-Aem3ydUr-LwZB8FrEBsjhb_qgA",
  authDomain: "vue-training-dd609.firebaseapp.com",
  projectId: "vue-training-dd609",
  storageBucket: "vue-training-dd609.appspot.com",
  messagingSenderId: "64576047074",
  appId: "1:64576047074:web:082cf1d2d185c4699f5bbb",
  measurementId: "G-9PRKZZT4J6"
};


initializeApp(firebaseConfig);




const app = createApp(App);
app.use(router);
app.use(Vuelidate)

app.mount('#app');