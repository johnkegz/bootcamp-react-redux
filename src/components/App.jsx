import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
const App = () => (
    <Router>
      <React.Fragment>
        <Page>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </div>
        </Page>
      </React.Fragment>
    </Router>
  );

export default App;
