import React from "react";
import { shallow } from "enzyme";
import SingleQuestion from "../src/containers/questions/SingleQuestion";
import singleQuestionReducer from "../src/reducers/singleQuestionReducer";

it("login test", () => {
  const props = {
    LoginResults: {
      item: { access_token: "cfcvfcccrtcc" }
    },
    match: {params: {id: 1}},
    ViewSingleQuestion: {item: { answers: [{answer: "it is that boy",
    answer_date: "Tue, 02 Oct 2018 00:00:00 GMT",
    answer_id: 1,
    question_id: 1,
    user_id: 1},{answer: "it is that boy",
    answer_date: "Tue, 02 Oct 2018 00:00:00 GMT",
    answer_id: 2,
    question_id: 1,
    user_id: 1}],
    question_date: "Tue, 02 Oct 2018 00:00:00 GMT",
    question_id: 1,
    questions: "what is andela",
    user_id: 1,
    user_name: "kegz"}},
    SingleQuestionAction: () => jest.fn()
  };

  const component = shallow(<SingleQuestion {...props} SingleQuestionAction={jest.fn()} />);
  expect(component).toMatchSnapshot();
  
});

it("Test SingleQuestion reducder", () => {
  const initialState = {
    item: {}
  };
  const action = {
    type: "SINGLE_QUESTION",
    payload: {}
  };
  expect(singleQuestionReducer(undefined, action)) !== initialState;
});

