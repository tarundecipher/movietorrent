import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  state = {
    url_photo: "",
    url_video: "",
    project_info: "",
    project_title: "",
  };

  getinfo = () => {
    axios
      .get("http://localhost:5000/info/")
      .then((res) => res.data.map((data) => console.log(data.url_photo)));
  };

  onChangePhoto = (e) => {
    this.setState({
      url_photo: e.target.value,
    });
  };

  onChangeVideo = (e) => {
    this.setState({
      url_video: e.target.value,
    });
  };

  onChangeInfo = (e) => {
    this.setState({
      project_info: e.target.value,
    });
  };

  onChangeTitle = (e) => {
    this.setState({
      project_title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const info = {
      url_photo: this.state.url_photo,
      url_video: this.state.url_video,
      project_info: this.state.project_info,
      project_title: this.state.project_title,
    };
    axios
      .post("http://localhost:5000/info/add", info)
      .then((res) => console.log(res));
  };

  render() {
    return (
      <React.Fragment>
        {this.getinfo()}
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1" style={{ color: "white" }}>
              url_photo
            </label>
            <input
              class="form-control"
              id="url_photo"
              placeholder="name@example.com"
              onChange={this.onChangePhoto}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" style={{ color: "white" }}>
              Example select
            </label>
            <input
              class="form-control"
              id="url_video"
              placeholder="name@example.com"
              onChange={this.onChangeVideo}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1" style={{ color: "white" }}>
              Project info
            </label>
            <textarea
              class="form-control"
              id="project_info"
              rows="3"
              onChange={this.onChangeInfo}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" style={{ color: "white" }}>
              project_title
            </label>
            <input
              class="form-control"
              id="project_title"
              placeholder="name@example.com"
              onChange={this.onChangeTitle}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Test;
