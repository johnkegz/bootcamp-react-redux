import { SINGLE_QUESTION } from "./types";

export const SingleQuestionAction = idn => dispatch =>{
   const id = idn;
    return fetch(`https://bootcamp-react-redux.herokuapp.com/api/v1/questions/${id}`, {
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
  
