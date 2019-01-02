import { SIGN_UP } from "./types";

export const signUpAction = (data) => dispatch =>{
  return fetch("https://stackoverflow-lite2.herokuapp.com/api/v1/auth/signup", {
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
