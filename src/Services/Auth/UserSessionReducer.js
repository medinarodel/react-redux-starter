import Session from './Session'

const initialState = {
  fetching: false,
  fetched: false,
  user: Session.currentUser(),
  errors: [],
  isLoggedIn: Session.isLoggedIn(),
};

export default function reducer(state=initialState, action) {
    switch (action.type) {
      case "LOGIN_USER_PENDING":
        return {...state, fetching: true}

      case "LOGIN_USER_REJECTED":
        return {...state, fetching: false, error: action.payload}

      case "LOGIN_USER_FULFILLED":
        Session.create(action.payload) // save to local storage
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
          isLoggedIn: true
        }

      case "LOGOUT_USER_PENDING":
        return {...state, fetching: true}

      case "LOGOUT_USER_REJECTED":
        return {...state, fetching: false, error: action.payload}

      case "LOGOUT_USER_FULFILLED":
        Session.logout() // remove from local storage
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: {},
          isLoggedIn: false
        }
      default:
        return state
    }
}