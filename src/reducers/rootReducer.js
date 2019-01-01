
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";

export default combineReducers({
    signup: signUpReducer
});
