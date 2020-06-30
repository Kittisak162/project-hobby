import {  Plugins, Storage } from '@capacitor/core';
// import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';
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
  async register({ commit }, payload) {
    try {
      const registerData = {
        name: payload.name,
        email: payload.email,
        password1: payload.password,
        password2: payload.passwordConfirmation
      }
      const registerResponse = await authService.register(registerData)
      const token = registerResponse.data.key;
      await Storage.set({ key: 'TOKEN', value: token });
      const userResponse = await authService.getCurrentUser(token);
      const user = userResponse.data;
      commit('setUser', user);
      router.push({ name: 'Home' });
    } catch (error) {
      console.error(error);
    }
  },
  async login({ commit }, payload) {
    try {
      const loginData = {
        email: payload.email,
        password: payload.password
      }
      const loginResponse = await authService.login(loginData);
      const token = loginResponse.data.key;
      await Storage.set({ key: 'TOKEN', value: token });
      const userResponse = await authService.getCurrentUser(token);
      const user = userResponse.data;
      commit('setUser', user);
      router.push({ name: 'Home' });
    } catch (error) {
      console.error(error);
    }
  },
  async loginFacebook({commit}) {
    try {
      const { FacebookLogin } = Plugins;
      const result = await FacebookLogin.login({ permissions: ['email', 'public_profile'] });
      if (result.accessToken) {
        console.log(result.accessToken.token)
        const accessToken = result.accessToken.token;
        const response = await authService.facebookOauth(accessToken);
        console.log(response.data)
      } else {
        console.log('error');
      }
      commit('setUser', null);
    } catch (error) {
      console.error(error.response);
    }
  },
  async getCurrentUser({commit}, payload) {
    const token = payload;
    const userResponse = await authService.getCurrentUser(token)
    const user = userResponse.data;
    commit('setUser', user);
  },
  logout({commit}) {
    commit('setUser', null);
    Storage.remove({ key: 'TOKEN' });
    router.push({ name: 'Login' });
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
