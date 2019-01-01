import React from "react";
import App from "../src/components/App";

import { mount,shallow } from "enzyme";
import Page from "../src/components/Page";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

it("should render without crashing", () => {
  expect(mount.bind(null, <App />)).not.toThrow();
}); 

it("Test header", () => {
  const editor = shallow(<Header />);
  expect(editor.find("nav.navbar").length).toEqual(1);
});

it("Test page", () => {
  const editor = shallow(<Page />);
  expect(editor.find("div.container").length).toEqual(1);
});

it("Test Footer", () => {
  const editor = shallow(<Footer />);
  expect(editor.find("div.container").length).toEqual(1);
});
