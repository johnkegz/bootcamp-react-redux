import { POST_QUESTION } from "./types";

export const PostQuestionAction = (data) => dispatch =>{
  
  return fetch("https://stackoverflow-lite2.herokuapp.com/api/v1/questions", {
    method: "POST",
    body: JSON.stringify(data),
    
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  })
    .then(res => res.json())
    .then(resp => {
        
      dispatch({
        type: POST_QUESTION,
        payload: resp
      });
    });
  }
