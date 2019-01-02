import { LOGIN } from "./types";

export const LoginAction = (data) => dispatch =>{
  return fetch("https://bootcamp-react-redux.herokuapp.com/api/v1/auth/login", {
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

  export default LoginAction;