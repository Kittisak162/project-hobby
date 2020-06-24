import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { configure } from 'vee-validate';
import validations_th from 'vee-validate/dist/locale/th.json';
import validations_en from 'vee-validate/dist/locale/en.json';

import th from './langs/th.json';
import en from './langs/en.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'th',
  fallbackLocale: 'th',
  messages: {
    th: {
      ...th,
      fields: th.validations.fields,
      validations: {
        ...validations_th.messages,
        ...th.validations.messages
      }
    },
    en: {
      ...en,
      fields: en.validations.fields,
      validations: {
        ...validations_en.messages,
        ...en.validations.messages
      }
    }
  }
});

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validations.${values._rule_}`, values);
  }
});

export default i18n;
