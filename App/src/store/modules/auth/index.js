import { Storage } from '@capacitor/core';
import router from '@/router';
import authService from '@/services/auth';

const state = {
  user: null
}

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  }
}

const actions = {
  register({ dispatch }, payload) {
    const registerData = {
      name: payload.name,
      email: payload.email,
      password1: payload.password,
      password2: payload.passwordConfirmation
    }
    authService.register(registerData)
      .then(async response => {
        const token = response.data.key;
        await Storage.set({ key: 'TOKEN', value: token });
        await dispatch('getCurrentUser', token);
        router.push({ name: 'Home' });
      })
      .catch(error => {
        console.error(error.response);
      })
  },
  login({ dispatch }, payload) {
    const loginData = {
      email: payload.email,
      password: payload.password
    }
    authService.login(loginData)
      .then(async response => {
        const token = response.data.key;
        await Storage.set({ key: 'TOKEN', value: token });
        await dispatch('getCurrentUser', token);
        router.push({ name: 'Home' });
      })
      .catch(error => {
        console.error(error.response);
      })
  },
  getCurrentUser({commit}, payload) {
    const token = payload;
    authService.getCurrentUser(token)
      .then(response => {
        const user = response.data;
        commit('setUser', user);
      })
      .catch(error => {
        console.error(error.response)
      })
  }
}

const getters = {
  userInfo(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return !!state.user;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
