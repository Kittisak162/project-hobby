import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Home.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'Login' }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
];

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
