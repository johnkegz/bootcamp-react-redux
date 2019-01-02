import { SIGN_UP } from "./types";

export const signUpAction = (data) => dispatch =>{
  return fetch("http://127.0.0.1:5000/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: SIGN_UP,
        payload: resp
      });
    });
  }
