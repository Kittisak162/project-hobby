import Vue from 'vue';
import { extend, ValidationProvider } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

Vue.component('validation-provider', ValidationProvider);

extend('required', required);
extend('email', email);
