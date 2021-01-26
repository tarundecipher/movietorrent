import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header_navbar">
          <img
            id="logo"
            className="header_elements"
            src="https://i.ibb.co/JtvsWhn/tarunlogo.png"
          ></img>
          <div className="header_elements">
            <a className="navhome" href="/">
              Home
            </a>
          </div>

          <div className="header_elements">
            <form class="form-inline my-2 my-lg-0 " id="searchform">
              <input
                class="form-control mr-sm-2 "
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
