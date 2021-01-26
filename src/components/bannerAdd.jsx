import React, { Component } from "react";
import axios from "axios";

class BannerAdd extends Component {
  state = {
    url_photo: "",
  };

  onChangePhoto = (e) => {
    this.setState({
      url_photo: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const info = {
      url_photo: this.state.url_photo,
    };
    axios
      .post("http://localhost:5000/banner/add", info)
      .then((res) => console.log(res));
  };

  render() {
    return (
      <React.Fragment>
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

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BannerAdd;
