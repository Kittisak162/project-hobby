import axios from 'axios';
import { authUrls } from '@/configs';

const register = registerData => {
  const body = registerData;
  return axios.post(authUrls.register, body);
}

const login = loginData => {
  const body = loginData;
  return axios.post(authUrls.login, body);
}

const getCurrentUser = token => {
  const configRequest = {
    headers: {
      authorization: `Token ${token}`
    }
  }
  return axios.get(authUrls.userInfo, configRequest);
}

export default {
  register,
  login,
  getCurrentUser
}
