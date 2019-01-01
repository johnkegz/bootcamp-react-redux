import React from "react";
import { shallow } from "enzyme";
import { Login } from "../src/containers/login/Login";
import loginReducer from "../src/reducers/loginReducer";


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

// it("Test login Action", () => {

//   fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
//   const data = {email: "w@gmail.com", password: "12345678"}
//   const store = mockStore();
//   store.dispatch(LoginAction(data)).then(()=>{
//     expect(store.getActions()).toEqual([
//       { type: "USER_VERIFIED", payload: value }
//     ]);
//   });
// });
