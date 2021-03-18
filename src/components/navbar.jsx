import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class NavBar extends Component {
  state = {
    search: "",
    loggedin: false,
  };

  componentDidMount() {
    this.auth();
  }

  updateSearch = (e) => {
    var s = e.target.value;

    this.setState({ search: s });
    // console.log(this.state.search);
  };

  auth = async () => {
    await axios
      .get("http://localhost:5000/auth", { withCredentials: true })
      .then((res) => {
        if (res.data.condition === true) {
          this.setState({ loggedin: true });
        } else {
          this.setState({ loggedin: false });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <nav className="header_navbar ">
          <div className="header_elements">
            <img
              id="logo"
              className="header_elements"
              src="https://i.ibb.co/xS84xry/movieflix.png"
            ></img>
            <div className="header_elements">
              <a className="navhome" href="/">
                Home
              </a>
            </div>
          </div>
          <div className="header_elements ">
            <form action={"/search/" + this.state.search}>
              <input
                onChange={this.updateSearch}
                className="form-control "
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {this.state.loggedin == true ? (
              <a href="/logout" className="authentication">
                Log out
              </a>
            ) : (
              <React.Fragment>
                <a href="/login" className="authentication">
                  Sign In
                </a>

                <a href="/register" className="authentication">
                  Sign Up
                </a>
              </React.Fragment>
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
