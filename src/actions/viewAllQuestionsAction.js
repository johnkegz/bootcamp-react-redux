import { ALL_QUESTIONS } from "./types";

export const ViewAllQuestionsAction = () => dispatch =>{
   
  fetch("http://127.0.0.1:5000/api/v1/questions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: ALL_QUESTIONS,
        payload: resp
      });
    });
  }
