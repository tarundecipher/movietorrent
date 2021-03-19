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
    movie_id: "12",
    comment: "",
    payload: "",
    comments: [],
  };

  constructor(props) {
    super(props);
    this.getinfo();
    this.auth();
    this.getcomments();
  }

  handleComment = (event) => {
    const comment = event.target.value;
    this.setState({ comment: comment });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/comments", {
        payload: this.state.payload,
        movie_id: this.state.movie_id,
        comment: this.state.comment,
      })
      .then(window.location.reload());
  };

  getcomments = () => {
    let temp = String(this.props.match.params.id);
    let search = "http://localhost:5000/comments/" + temp;
    axios.get(search).then((res) => {
      this.setState({ comments: res.data.comments });
      console.log(this.state.comments);
    });
  };

  getinfo = async () => {
    let temp = String(this.props.match.params.id);

    let search =
      "https://api.themoviedb.org/3/movie/" +
      temp +
      "?api_key=35361fe30128f961c910034da9008f70";

    await axios.get(search).then((res) => {
      this.setState({
        project_info: res.data.overview,
        project_title: res.data.original_title,
        coverimg: "https://image.tmdb.org/t/p/w500" + res.data.backdrop_path,

        imdb: res.data.vote_average,
        movie_id: temp,
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
          this.setState({ payload: res.data.payload });
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
            {/* <p style={{ color: "white" }}>Download From: </p> */}
            <form
              action={
                "https://movietorrent-b8018.web.app/search/" +
                this.state.project_title
              }
              style={{ marginBottom: "10px" }}
            >
              <button className="btn btn-info">DOWNLOAD</button>
            </form>
          </div>
          {/* need to add comments here---------------------*/}
          {this.state.comments.map((comment) => (
            <div className="container-fluid comments">
              <p style={{ color: "white" }}>
                <strong>{comment.UserName}</strong>
                <br></br>
                {comment.comment}
              </p>
            </div>
          ))}
          <div class="form-group container-fluid">
            <form onSubmit={this.handleSubmit}>
              <label for="comment" style={{ color: "white" }}>
                Comment:
              </label>
              <textarea
                onChange={this.handleComment}
                class="form-control"
                rows="5"
                id="comment"
              ></textarea>
              <div style={{ marginTop: "5px" }}>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
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
            <form
              action={
                "https://movietorrent-b8018.web.app/search/" +
                this.state.project_title
              }
              style={{ marginBottom: "10px" }}
            >
              <button className="btn btn-info">DOWNLOAD</button>
            </form>
          </div>

          {this.state.comments.map((comment) => (
            <div className="container-fluid comments">
              <p style={{ color: "white" }}>
                <strong>{comment.UserName}</strong>
                <br></br>
                {comment.comment}
              </p>
            </div>
          ))}
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
