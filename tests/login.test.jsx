import React from "react";
import { shallow } from "enzyme";
import { Login } from "../src/containers/login/Login";
import loginReducer from "../src/reducers/loginReducer";
import { LoginAction } from "../src/actions/loginAction";
import mockStore from "./mockStore";

it("login test", () => {
  const props = {
    LoginResults: {
      item: { access_token: "cfcvfcccrtcc" }
    },
    LoginAction: data => jest.fn()
  };

  const component = shallow(<Login {...props} />);
  expect(component).toMatchSnapshot();
  const instance = component.instance();
  
  const e = {
    preventDefault: () => {}
  };

  instance.onSubmit(e);
});

it("Test login reducder", () => {
  const initialState = {
    item: {}
  };
  const action = {
    type: "LOGIN",
    payload: {}
  };
  expect(loginReducer(undefined, action)) !== initialState;
});

it("test login action", () => {
  const accessToken = "tokentokensecret";
  const store = mockStore({});
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  store.dispatch(LoginAction());
  expect(store.getActions()).toEqual([]);
});
