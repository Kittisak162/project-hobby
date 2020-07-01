import Vue from 'vue';
import Ionic from '@ionic/vue';
import { registerWebPlugin } from '@capacitor/core';
import { FacebookLogin } from '@rdlabo/capacitor-facebook-login';
import '@codetrix-studio/capacitor-google-auth';

import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import App from '@/App.vue';

import '@/vee-validate';
import '@/registerServiceWorker';
import '@/app.scss';

Vue.config.productionTip = false;

Vue.use(Ionic);

registerWebPlugin(FacebookLogin);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
