import React from "react";
import { shallow } from "enzyme";
import SingleQuestion from "../src/containers/questions/SingleQuestion";
import singleQuestionReducer from "../src/reducers/singleQuestionReducer";
import mockStore from "./mockStore";
import { SingleQuestionAction } from "../src/actions/singleQuestionAction";
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

  const component = shallow(<SingleQuestion {...props} />);
  expect(component).toMatchSnapshot();
  const instance = component.instance();
  console.log(instance);
  
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
it("test single question action", () => {
  const accessToken = "tokentokensecret";
  const store = mockStore({});
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  store.dispatch(SingleQuestionAction());
  expect(store.getActions()).toEqual([]);
});

