import React, { Component } from "react";
class signUp extends Component {
  state = {
    Username: "",
    Password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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

export default signUp;
