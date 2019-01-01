import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
import Home from "./Home";
import Page from "./Page";
import SignUp from "../containers/signUp/SignUp";
import Login from "../containers/login/Login";

import postQuestion from "../containers/questions/postQuestion";
const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Page>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/postQuestion" component={postQuestion} />
          </div>
        </Page>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
