import React from "react";
import { shallow } from "enzyme";
import SignOut from "../src/components/signOut";


it("test signout", () => {
  const component = shallow(<SignOut />);
  expect(component).toMatchSnapshot();
});
