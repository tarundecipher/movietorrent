import React, { Component } from "react";
import axios from "axios";

class Carousel extends Component {
  state = {
    imgurls: [
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SOTY2v3/538f6dab-db1f-41c1-8962-cf91f49b830f._UR3000,600_SX3000_FMwebp_.jpg",
    ],
  };

  // getbanner = () => {
  //   axios.get("http://localhost:5000/banner/").then((res) => {
  //     this.setState({ imgurls: res.data.map((data) => data.url_photo) });
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={this.state.imgurls[0]}
                alt="First slide"
              />
            </div>
            {this.state.imgurls.map((url, index) =>
              index != 0 ? (
                <div className="carousel-item">
                  <img className="d-block w-100" src={url} alt="Second slide" />
                </div>
              ) : (
                <div></div>
              )
            )}
            ;
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
