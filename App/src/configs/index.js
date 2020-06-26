const rootUrl = 'http://192.168.43.115:8000';

const authUrls = {
  register: `${rootUrl}/api/v1/auth/registration/`,
  login: `${rootUrl}/api/v1/auth/login/`,
  userInfo: `${rootUrl}/api/v1/auth/user/`,
}

const apiUrls = {}

export { rootUrl, authUrls, apiUrls };
