import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "../src/containers/signUp/SignUp";
import signUpReducer from "../src/reducers/signUpReducer";
import { signUpAction } from "../src/actions/signUpAction";
import mockStore from "./mockStore";

it('sign up test', () => {
  const props = {
    signUpResults: {
      item: { message: "you have successfully created an account" }
    },
    signupAction: data => jest.fn()
  };
  
  const component = shallow(
    <SignUp {...props} onChange={jest.fn} />
  );
  expect(component).toMatchSnapshot();
  const instance = component.instance();
  const e = {
    preventDefault: () => {}
  };
  instance.onSubmit(e);
});

it("Test signUp reducder", () => {
  const initialState = {
    item: {}
  };
  const action = {
    type: "SIGN_UP",
    payload: {}
  };
  expect(signUpReducer(undefined, action)) !== initialState;
});

it("test sign up action", () => {
  const accessToken = "tokentokensecret";
  const store = mockStore({});
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  store.dispatch(signUpAction());
  expect(store.getActions()).toEqual([]);
});
