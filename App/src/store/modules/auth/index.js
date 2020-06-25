import axios from 'axios';
import router from '@/router'
import { authUrls } from '@/config';

const state = {
  user: {}
}

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  }
}

const actions = {
  register({commit}, payload) {
    const registerData = {
      name: payload.name,
      email: payload.email,
      password1: payload.password,
      password2: payload.passwordConfirmation
    }
    axios.post(authUrls.register, registerData)
      .then(() => {
        commit('setUser', null);
        router.push({ name: 'Home' });
      })
      .catch(error => {
        console.error(error.response);
      })
  },
  login({commit}, payload) {
    const loginData = {
      email: payload.email,
      password: payload.password
    }
    axios.post(authUrls.login, loginData)
      .then(() => {
        commit('setUser', null);
        router.push({ name: 'Home' });
      })
      .catch(error => {
        console.error(error.response);
      })
  }
}

const getters = {
  getUser(state) {
    return state.user;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
