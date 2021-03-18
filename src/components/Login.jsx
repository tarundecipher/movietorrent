import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
class Login extends Component {
  state = {
    Username: "",
    Password: "",
    loggedin: false,
  };

  auth = async () => {
    let bool = false;
    await axios
      .get(
        "http://localhost:5000/auth",

        { withCredentials: true }
      )
      .then((res) => {
        bool = true;
      })
      .catch(() => {
        bool = false;
      });
    return bool;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(
        "http://localhost:5000/login",
        {
          UserName: this.state.Username,
          Password: this.state.Password,
        },
        { withCredentials: true }
      )
      .then(async (res) => {
        console.log(res);
        console.log(await this.auth());
        this.setState({ loggedin: true });
      });
  };

  handleUsername = (event) => {
    let Username = event.target.value;
    this.setState({ Username: Username });
  };
  handlePassword = (event) => {
    let Password = event.target.value;
    this.setState({ Password: Password });
  };
  render() {
    if (this.state.loggedin == true) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleUsername}
              placeholder="Username"
            ></input>
            <input
              type="password"
              onChange={this.handlePassword}
              placeholder="Password"
            ></input>
            <button>Submit</button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default Login;
