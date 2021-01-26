import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="allslider">
          <div
            className="arrows"
            style={{ marginTop: "100px", marginBottom: "-120px" }}
          >
            <a
              onClick={this.props.slideright}
              className="previous round arrow_element"
            >
              &#8249;
            </a>
            <a
              onClick={this.props.slideleft}
              className="next round arrow_element"
            >
              &#8250;
            </a>
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
                    src={url.large_cover_image}
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
