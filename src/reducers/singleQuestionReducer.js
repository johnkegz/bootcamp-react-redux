import { SINGLE_QUESTION } from "../actions/types";
  const initialState = {
    item: {},
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SINGLE_QUESTION:
        return {
          ...state,
          item: action.payload
        };
      
      default:
        return state;
    }
  }
  