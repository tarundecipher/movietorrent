import axios from "axios";
import React, { Component } from "react";

import { Redirect } from "react-router";
class logout extends Component {
  state = {};
  async componentDidMount() {
    await this.logout();
  }
  async logout() {
    await axios.get("http://localhost:5000/logout", { withCredentials: true });
  }
  render() {
    return <Redirect to="/"></Redirect>;
  }
}

export default logout;
