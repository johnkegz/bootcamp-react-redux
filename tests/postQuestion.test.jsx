import React from "react";
import { shallow } from "enzyme";
import  { PostQuestion } from "../src/containers/questions/postQuestion";
import postQuestionReducer from "../src/reducers/postQuestionReducer";

it("postQuestion test", () => {
  const props = {
    LoginResults: {
      item: { access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDY0MTE3MzMsIm5iZiI6MTU0NjQxMTczMywianRpIjoiYWFmNGZiNDUtOWVjMS00MGJkLTljOWMtM2Y0NzczYjk3YTBkIiwiZXhwIjoxNTQ2NDEyNjMzLCJpZGVudGl0eSI6MywiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.wl4KA3e9X0oPtjWiJ81aro69F1dEdR4oxqr--MzLC0M" }
    },
    PostQuestionAction: data => jest.fn()
  };
  
  const component = shallow(<PostQuestion {...props} />);
  expect(component).toMatchSnapshot();
  const instance = component.instance();
  
  const e = {
    preventDefault: () => {}
  };

  instance.onSubmit(e);
});

it("Test PostQuestion reducder", () => {
  const initialState = {
    item: {}
  };
  const action = {
    type: "POST_QUESTION",
    payload: {}
  };
  expect(postQuestionReducer(undefined, action)) !== initialState;
});
