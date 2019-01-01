import { LOGIN } from "../actions/types";
  const initialState = {
    item: {},
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          item: action.payload
        };
      
      default:
        return state;
    }
  }
  