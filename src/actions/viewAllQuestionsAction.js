import { ALL_QUESTIONS } from "./types";

export const ViewAllQuestionsAction = () => dispatch =>{
   
  fetch("https://stackoverflow-lite2.herokuapp.com/api/v1/questions", {
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
