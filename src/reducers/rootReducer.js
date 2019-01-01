
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";
import postQuestionReducer from "./postQuestionReducer";

export default combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    postQuestion: postQuestionReducer,
});
