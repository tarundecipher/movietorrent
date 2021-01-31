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
  };

  constructor(props) {
    super(props);
    this.getinfo();
  }

  getinfo = () => {
    var temp = String(this.props.match.params.id);

    temp = "?movie_id=" + temp;
    axios.get("https://yts.mx/api/v2/movie_details.json" + temp).then((res) => {
      // console.log(res.data.data.movie.rating);
      this.setState({
        project_info: res.data.data.movie.description_full,
        project_title: res.data.data.movie.title_english,
        coverimg: res.data.data.movie.background_image_original,
        torrents: res.data.data.movie.torrents,
        imdb: res.data.data.movie.rating,
      });
      // console.log(this.state.imdb);
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <img className="backgroundimg" src={this.state.coverimg}></img>
        <div className="container" style={{ float: "left" }}>
          <h1 className="description" style={{ color: "white" }}>
            {this.state.project_title}
          </h1>
          <p style={{ color: "white" }}>IMDb {this.state.imdb}</p>
          <p className="description" style={{ color: "white" }}>
            {this.state.project_info}
          </p>

          <div className="links">
            <p style={{ color: "white", marginRight: "10px" }}>
              Available In :
            </p>
            {this.state.torrents.map((torrent) => (
              <p style={{ color: "white", marginRight: "10px" }}>
                <a href={torrent.url} style={{ color: "white" }}>
                  {torrent.quality}
                </a>
              </p>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Description;
