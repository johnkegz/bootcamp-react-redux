import { SIGN_UP } from "../actions/types";
  const initialState = {
    item: {},
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          item: action.payload
        };
      
      default:
        return state;
    }
  }
  