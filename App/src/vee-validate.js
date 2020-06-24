import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, email, min, regex, confirmed } from 'vee-validate/dist/rules';

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);

extend('required', required);
extend('email', email);
extend('min', min);
extend('regex_password', regex);
extend('confirmed', confirmed);
