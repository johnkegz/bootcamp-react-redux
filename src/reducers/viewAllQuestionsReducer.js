import { ALL_QUESTIONS } from "../actions/types";
  const initialState = {
    item: {},
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ALL_QUESTIONS:
        return {
          ...state,
          item: action.payload
        };
      
      default:
        return state;
    }
  }
  