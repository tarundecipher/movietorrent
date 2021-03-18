import React, { Component } from "react";
import axios from "axios";
import NavBar from "./navbar";

class Description extends Component {
  state = {
    project_title: "",
    project_info: "",
    coverimg: "",
    torrents: [],
    imdb: "",
    video: "",
    loggedin: false,
  };

  constructor(props) {
    super(props);
    this.getinfo();
    this.auth();
  }

  getinfo = () => {
    var temp = String(this.props.match.params.id);
    var search =
      "https://api.themoviedb.org/3/movie/" +
      temp +
      "?api_key=35361fe30128f961c910034da9008f70";

    axios.get(search).then((res) => {
      this.setState({
        project_info: res.data.overview,
        project_title: res.data.original_title,
        coverimg: "https://image.tmdb.org/t/p/w500" + res.data.backdrop_path,

        imdb: res.data.vote_average,
      });
    });
    search =
      "https://api.themoviedb.org/3/movie/" +
      temp +
      "/videos?api_key=35361fe30128f961c910034da9008f70";
    axios.get(search).then((res) => {
      this.setState({
        video: res.data.results[0].key,
      });
    });
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
    if (this.state.loggedin == true) {
      return (
        <React.Fragment>
          <NavBar />
          <img className="backgroundimg" src={this.state.coverimg}></img>
          <div className="container" style={{ float: "left" }}>
            <h1 className="description" style={{ color: "white" }}>
              {this.state.project_title}
            </h1>
            <p style={{ color: "white" }}>Vote Average: {this.state.imdb}</p>
            <p className="description" style={{ color: "white" }}>
              {this.state.project_info}
            </p>

            <div>
              <p style={{ color: "white", marginRight: "10px" }}>Trailer :</p>
            </div>
          </div>
          <div className="container-fluid" style={{ float: "right" }}>
            <iframe
              width="100%"
              height="315"
              style={{ border: "none" }}
              src={"https://www.youtube.com/embed/" + this.state.video}
            ></iframe>
          </div>
          <div className="container-fluid links">
            <p style={{ color: "white" }}>Download From: </p>

            <a
              style={{ color: "white", marginLeft: "10px" }}
              href={
                "https://movietorrent-b8018.web.app/search/" +
                this.state.project_title
              }
            >
              DOWNLOAD
            </a>
          </div>
          <div class="form-group container-fluid">
            <label for="comment" style={{ color: "white" }}>
              Comment:
            </label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <img className="backgroundimg" src={this.state.coverimg}></img>
          <div className="container" style={{ float: "left" }}>
            <h1 className="description" style={{ color: "white" }}>
              {this.state.project_title}
            </h1>
            <p style={{ color: "white" }}>Vote Average: {this.state.imdb}</p>
            <p className="description" style={{ color: "white" }}>
              {this.state.project_info}
            </p>

            <div>
              <p style={{ color: "white", marginRight: "10px" }}>Trailer :</p>
            </div>
          </div>
          <div className="container-fluid" style={{ float: "right" }}>
            <iframe
              width="100%"
              height="315"
              style={{ border: "none" }}
              src={"https://www.youtube.com/embed/" + this.state.video}
            ></iframe>
          </div>
          <div className="container-fluid links">
            <p style={{ color: "white" }}>Download From: </p>

            <a
              style={{ color: "white", marginLeft: "10px" }}
              href={
                "https://movietorrent-b8018.web.app/search/" +
                this.state.project_title
              }
            >
              DOWNLOAD
            </a>
          </div>
          <div className="container-fluid">
            <a href="/login" style={{ textDecoration: "none" }}>
              <h3 style={{ color: "white" }}>Login to Post Comments</h3>
            </a>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Description;
