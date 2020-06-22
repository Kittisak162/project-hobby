import Vue from 'vue';
import VueI18n from 'vue-i18n';

import th from './langs/th.json';
import en from './langs/en.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'th',
  fallbackLocale: 'th',
  messages: { th, en }
});

export default i18n;
