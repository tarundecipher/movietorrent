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
          <form
            className="container col-4"
            style={{ marginTop: "150px" }}
            onSubmit={this.handleSubmit}
          >
            <img
              src="https://i.ibb.co/xS84xry/movieflix.png"
              style={{ height: "100px", width: "300px", marginLeft: "50px" }}
            ></img>
            <div class="form-group ">
              <label for="exampleInputEmail1" style={{ color: "white" }}>
                Username
              </label>
              <input
                onChange={this.handleUsername}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
              ></input>
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" style={{ color: "white" }}>
                Password
              </label>
              <input
                onChange={this.handlePassword}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <div class="form-group form-check"></div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default Login;
