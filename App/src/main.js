import Vue from 'vue';
import Ionic from '@ionic/vue';

import router from './router';
import store from './store';

import App from './App.vue';

import './registerServiceWorker';
import './app.scss';

Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
