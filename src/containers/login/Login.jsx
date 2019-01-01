
import React from "react";
import LoginAction from '../../actions/loginAction';
import { connect } from 'react-redux';

export class Login extends React.Component{
    state = {
        email: "",
        password: ""
      };
    
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            pass_word: this.state.password
          }
          this.props.LoginAction(data);
          
      };
    
editDataHeading() {
    return (
      <div className="card-header unique-color-dark  white-text text-center mt-0 py-4">
        <span>Login</span>
      </div>
    );
  }

  email() {
    return (
      <input
        type="email"
        name="email"
        id="email"
        onChange={this.onChange}
        required
        className="form-control font-weight-light"
        value={this.state.email}
        placeholder = "email"
        required
      />
    );
  }
  password() {
    return (
      <input
        type="password"
        name="password"
        id="password"
        onChange={this.onChange}
        required
        className="form-control font-weight-light"
        value={this.state.password}
        placeholder="password"
        required
      />
    );
  }


  editSaveButton() {
    return (
      <button
        id="login"
        className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 "
        type="submit"
      >
        Save
      </button>
    );
  }

  showEditData() {
    return (
      <div className="card-body">
        <h4 className="card-title">
        </h4>
          <div className="card-body font-weight-light">
           
         
          <br />
          
          <div>{this.email()}</div>
          <div>{this.password()}</div>
          <br />
          </div>
        
        <hr />
        <div className="text-center mt-4">
          <div>{this.editSaveButton()}</div>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.LoginResults.item.access_token){
        localStorage.setItem("token", this.props.LoginResults.item.access_token);
        alert("you have successfully logined in");
        window.location.replace("/");
        }
    return (
      <div className="body-container ">
        
          <div className="row">
            <div className="col-md-6 ">
              <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
                <div>{this.editDataHeading()}</div>
                <form onSubmit={this.onSubmit}>
                  <div>{this.showEditData()}</div>
                </form>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export const mapStateToProps = state => {
    return {
      LoginResults: state.login
    };
  };
export const mapDispatchToProps = dispatch => ({
    LoginAction: data => dispatch(LoginAction(data))
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);

