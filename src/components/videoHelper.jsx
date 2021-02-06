import React, { Component } from "react";
import Videos from "./videos";
import axios from "axios";

class VideoHelper extends Component {
  state = {
    imgurls: [],
    genre: "",
    leftMargin: 20,
  };
  constructor(props) {
    super(props);
    this.getinfo();
  }
  componentDidMount() {
    this.getgenre = this.getgenre.bind(this);
    this.getgenre();
  }

  getgenre = () => {
    var temp = this.props.genre;
    var temp2 = "";

    for (var i = 0; i < temp.length; i++) {
      if (temp[i] != "_") {
        temp2 = temp2 + temp[i];
      } else {
        temp2 = temp2 + " ";
      }
    }
    temp2 = temp2.toUpperCase();

    this.setState({ genre: temp2 });
  };
  getinfo = () => {
    var genr = this.props.genre;

    var search =
      "https://api.themoviedb.org/3/movie/" +
      genr +
      "?api_key=35361fe30128f961c910034da9008f70&&page=2";

    axios.get(search).then((res) => {
      // console.log(res.data.results);
      this.setState({
        imgurls: res.data.results.map((movies) => movies),
      });
    });

    var search =
      "https://api.themoviedb.org/3/movie/" +
      genr +
      "?api_key=35361fe30128f961c910034da9008f70&&page=1";

    axios.get(search).then((res) => {
      // console.log(res.data.results);
      this.setState({
        imgurls: this.state.imgurls.concat(
          res.data.results.map((movies) => movies)
        ),
      });
    });
    var search =
      "https://api.themoviedb.org/3/movie/" +
      genr +
      "?api_key=35361fe30128f961c910034da9008f70&&page=3";

    axios.get(search).then((res) => {
      // console.log(res.data.results);
      this.setState({
        imgurls: this.state.imgurls.concat(
          res.data.results.map((movies) => movies)
        ),
      });
    });
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
          {this.state.genre}
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
