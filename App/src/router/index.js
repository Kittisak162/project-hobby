import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import { Storage } from '@capacitor/core';

import store from '@/store';

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
    meta: { requiresAuth: true },
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

router.beforeEach(async (to, from, next) => {
  try {
    const requiresAuth = to.matched.some(item => item.meta.requiresAuth);
    if (!from.name) {
      const { value } = await Storage.get({ key: 'TOKEN' });
      const token = value;
      store.dispatch('getCurrentUser', token);
      if (requiresAuth && !token)
        next('/login');
      else if (!requiresAuth && !!token)
        next('/home');
      else
        next();
    } else {
      const isAuthenticated = store.getters.isAuthenticated;
      if (requiresAuth && !isAuthenticated)
        next('/login');
      else if (!requiresAuth && isAuthenticated)
        next('/home');
      else
        next();
    }
  } catch (error) {
    console.error(error);
  }
});

export default router;
