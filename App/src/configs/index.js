const rootUrl = 'http://localhost:8000';

const authUrls = {
  register: `${rootUrl}/api/v1/auth/registration/`,
  login: `${rootUrl}/api/v1/auth/login/`,
  facebookOauth: `${rootUrl}/api/v1/auth/social/facebook`,
  userInfo: `${rootUrl}/api/v1/auth/user/`,
}

const apiUrls = {}

export { rootUrl, authUrls, apiUrls };
