import React, { Component } from "react";
import axios from "axios";
import NavBar from "./navbar";

class Description extends Component {
  state = { project_title: "", project_info: "", coverimg: "" };

  constructor(props) {
    super(props);
    this.getinfo();
  }

  getinfo = () => {
    var temp = String(this.props.match.params.id);
    console.log(temp);
    temp = "?movie_id=" + temp;
    axios.get("https://yts.mx/api/v2/movie_details.json" + temp).then((res) => {
      console.log(res.data.data.movie.description_full);
      this.setState({
        project_info: res.data.data.movie.description_full,
        project_title: res.data.data.movie.title_english,
        coverimg: res.data.data.movie.background_image_original,
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" style={{ float: "left" }}>
          <h1 className="description" style={{ color: "white" }}>
            {this.state.project_title}
          </h1>
          <h4 className="description" style={{ color: "white" }}>
            {this.state.project_info}
          </h4>
        </div>
        <img className="backgroundimg" src={this.state.coverimg}></img>
      </React.Fragment>
    );
  }
}
export default Description;
