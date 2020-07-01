const rootUrl = 'http://localhost:8000';

const authUrls = {
  register: `${rootUrl}/rest_auth/v1/registration/`,
  login: `${rootUrl}/rest_auth/v1/login/`,
  facebookOauth: `${rootUrl}/rest_auth/v1/social/facebook`,
  googleOauth: `${rootUrl}/rest_auth/v1/social/google`,
  userInfo: `${rootUrl}/rest_auth/v1/user/`,
}

const apiUrls = {}

export { rootUrl, authUrls, apiUrls };
