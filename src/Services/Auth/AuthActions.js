import axios from "axios";

export function loginUser(user={}) {
  return function(dispatch) {
    dispatch({type: "LOGIN_USER_PENDING"});

    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "LOGIN_USER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOGIN_USER_REJECTED", payload: err})
      })
  }
}

export function registerUser(user={}) {
  return function(dispatch) {
    dispatch({type: "REGISTER_USER_PENDING"});

    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "REGISTER_USER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "REGISTER_USER_REJECTED", payload: err})
      })
  }
}


export function logoutUser(user={}) {
  return function(dispatch) {
    dispatch({type: "LOGOUT_USER_PENDING"});

    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "LOGOUT_USER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOGOUT_USER_REJECTED", payload: err})
      })
  }
}
