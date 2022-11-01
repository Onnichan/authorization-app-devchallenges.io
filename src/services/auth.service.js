import { ApiRequest } from ".";

const login = (user, pass) =>
  ApiRequest.post("auth/login", {
    email: user,
    password: pass,
  });

const oauthSuccessLogin = () =>
  ApiRequest.get("auth/login/success", { withCredentials: true });

const register = (name, lastname, email, password, confirmPassword) =>
  ApiRequest.post("auth/register", {
    name,
    lastname,
    email,
    password,
    confirmPassword,
  });

const logout = () => {
  ApiRequest.get("auth/logout");
};

export default {
  login,
  oauthSuccessLogin,
  register,
  logout,
};
