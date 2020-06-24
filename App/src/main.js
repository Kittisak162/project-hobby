import Vue from 'vue';
import Ionic from '@ionic/vue';
import VueAxios from 'vue-axios'
import axios from 'axios';

import router from './router';
import store from './store';
import i18n from './i18n';

import App from './App.vue';

import './vee-validate';
import './registerServiceWorker';
import './app.scss';

Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
