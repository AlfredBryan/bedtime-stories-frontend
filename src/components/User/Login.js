import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  //Admin login function
  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    axios
      .post("https://dragon-legend-5.herokuapp.com/api/v1/user/login", {
        email,
        password
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.data.token);
          this.props.history.replace("/profile");
        }
      })
      .catch(error => {
        if (error) {
          this.setState({
            errorMessage: "Error: confirm details and try again"
          });
        }
      });
  };

  //text change handler
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 className="form-signin-heading">sign in now</h2>
            <div className="login-wrap">
              <div className="user-login-info">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button
                onClick={this.handleSubmit}
                className="btn btn-lg btn-login btn-block"
                type="submit"
              >
                Sign in
              </button>
              <div className="registration">
                Don't have an account yet?
                <Link to="/register">Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
