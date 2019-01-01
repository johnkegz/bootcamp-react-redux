
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";
import postQuestionReducer from "./postQuestionReducer";
import viewAllQuestionsReducer from "./viewAllQuestionsReducer"
import singleQuestionReducer from "./singleQuestionReducer";

export default combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    postQuestion: postQuestionReducer,
    allQuestions: viewAllQuestionsReducer,
    singleQuestion: singleQuestionReducer
});
