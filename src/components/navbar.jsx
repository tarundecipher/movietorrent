import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NavBar extends Component {
  state = {
    search: "",
  };

  updateSearch = (e) => {
    var s = e.target.value;

    this.setState({ search: s });
    // console.log(this.state.search);
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
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
