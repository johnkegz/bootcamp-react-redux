import React from "react";
import { shallow } from "enzyme";
import { Home } from "../src/components/Home";
import viewAllQuestionsReducer from "../src/reducers/viewAllQuestionsReducer";

it("login test", () => {
  const props = {
    
    ViewAllQuestionResults: {item:{question_date: "Tue, 02 Oct 2018 00:00:00 GMT",
    question_id: 1,
    questions: "what is andela",
    user_id: 1,
    user_name: "kegz"}},
    ViewAllQuestionsAction: data => jest.fn()
  };

  const component = shallow(<Home {...props} />);
  expect(component).toMatchSnapshot();
});

it("Test ViewAllQuestions reducder", () => {
  const initialState = {
    item: {}
  };
  const action = {
    type: "ALL_QUESTIONS",
    payload: {}
  };
  expect(viewAllQuestionsReducer(undefined, action)) !== initialState;
});

