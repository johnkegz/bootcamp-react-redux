import { SINGLE_QUESTION } from "./types";

export const SingleQuestionAction = idn => dispatch =>{
   const id = idn;
    // return fetch(`http://127.0.0.1:5000/api/v1/questions/${id}`, {
    return fetch(`https://stackoverflow-lite2.herokuapp.com/api/v1/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: SINGLE_QUESTION,
        payload: resp
      });
    });
  }
  
