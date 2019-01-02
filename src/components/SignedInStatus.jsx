import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export class SignedInStatus extends Component {
signedIn(){
return <div><ul className="navbar-nav ml-auto">
<li>
<NavLink to="/postQuestion" className="navbar-brand">
          post question
        </NavLink>
</li>

<li>
  <NavLink to={"/signout"} className={"navbar-brand"}>
    sign out
  </NavLink>
</li>
</ul></div>;
}
signedOut(){
  return <div><ul className="navbar-nav ml-auto">
  
  <li>
    <NavLink to={"/login"} className={"navbar-brand"}>
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to={"/signup"} className={"navbar-brand"}>
      signup
    </NavLink>
  </li>
  </ul></div>;
  }
  render() {
    const token = localStorage.getItem("token");

    if (token) {
      return <div>{this.signedIn()}</div>;
    } else {
      return <div>{this.signedOut()}</div>;
    }
  }
}

export default (SignedInStatus);
