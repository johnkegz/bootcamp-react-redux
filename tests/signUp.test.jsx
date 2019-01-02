import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "../src/containers/signUp/SignUp";
import signUpReducer from "../src/reducers/signUpReducer";

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

// it("Test signUp reducder", () => {
//   const initialState = {
//     item: {}
//   };
//   const action = {
//     type: "SIGN_UP",
//     payload: {}
//   };
//   expect(signUpReducer(undefined, action)) !== initialState;
// });