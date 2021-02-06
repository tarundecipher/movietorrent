import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="allslider">
          <div
            className="arrows "
            style={{ marginTop: "100px", marginBottom: "-120px" }}
          >
            <img
              onClick={this.props.slideright}
              className="arrow_element "
              src="https://i.ibb.co/6nfQQH7/arrowleft.jpg"
            />

            <img
              onClick={this.props.slideleft}
              className="arrow_element"
              src="https://i.ibb.co/m0Jm3VC/arrowright.jpg"
            />
          </div>
          <div
            className="body_videos_all"
            style={{ marginLeft: String(this.props.leftMargin) + "px" }}
          >
            {this.props.imgurls.map((url) => (
              <div>
                <Link to={`/${url.id}`}>
                  <img
                    className="body_videos"
                    src={"https://image.tmdb.org/t/p/w500" + url.poster_path}
                  ></img>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Videos;
