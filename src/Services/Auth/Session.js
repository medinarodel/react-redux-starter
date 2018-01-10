export default class Session {
  static isLoggedIn() {
    return !!window.localStorage.drCalixData
  }

  static create(userObject) {
    window.localStorage.drCalixData = JSON.stringify(userObject)
  }

  static currentUser() {
    if (window.localStorage.drCalixData) {
      return JSON.parse(window.localStorage.drCalixData);
    } else {
      return {};
    }
  }

  static logout() {
    delete window.localStorage.drCalixData
  }

  static createRedirect(path) {
    window.localStorage.redirectTo = path
  }

  static redirectTo() {
    let path = window.localStorage.redirectTo
    window.localStorage.redirectTo = "/"; //clear
    if (path) {
      return path
    }else{
      return "/"
    }
  }
}