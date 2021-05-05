import { useCookies } from 'react-cookie';


class Auth {

  constructor() {
    this.authenticated = false;
  }

  logIn(cb) {
    this.authenticated = true;
  }
  logOut(cb) {
    this.authenticated = false;
    cb()
  }

  isAuthenticated() {
    return this.authenticated
  }
}

export default new Auth()