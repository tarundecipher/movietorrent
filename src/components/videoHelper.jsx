import React, { Component } from "react";
import Videos from "./videos";
import axios from "axios";

class VideoHelper extends Component {
  state = {
    imgurls: [],
    leftMargin: 20,
  };
  constructor(props) {
    super(props);
    this.getinfo();
  }

  getinfo = () => {
    var genre = this.props.genre;
    console.log(genre);
    var search =
      "https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=like_count&" +
      "genre=" +
      genre;
    if (genre === "Most Liked") {
      axios
        .get(
          "https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=like_count"
        )
        .then((res) => {
          console.log(res.data.data.movies);
          this.setState({
            imgurls: res.data.data.movies.map((movies) => movies),
          });
        });
    } else {
      axios
        .get(
          search
          // { genre }
        )
        .then((res) => {
          console.log(res.data.data.movies);
          this.setState({
            imgurls: res.data.data.movies.map((movies) => movies),
          });
        });
    }
  };

  handleLeft = () => {
    this.setState({
      leftMargin:
        this.state.leftMargin - 800 > -7000 ? this.state.leftMargin - 800 : 20,
    });
  };

  handleRight = () => {
    this.setState({
      leftMargin:
        this.state.leftMargin + 800 > 20 ? 20 : this.state.leftMargin + 800,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            color: "white",
            fontSize: "20px",
            marginBottom: "-30px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          {this.props.genre}
        </h1>
        <Videos
          imgurls={this.state.imgurls}
          leftMargin={this.state.leftMargin}
          slideleft={this.handleLeft}
          slideright={this.handleRight}
        />
      </React.Fragment>
    );
  }
}

export default VideoHelper;
