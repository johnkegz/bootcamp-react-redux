
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
    signup: signUpReducer,
    login: loginReducer,
});
