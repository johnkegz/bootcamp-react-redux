import { LOGIN } from "./types";

export const LoginAction = (data) => dispatch =>{
  fetch("http://127.0.0.1:5000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: LOGIN,
        payload: resp
      });
    });
  }
