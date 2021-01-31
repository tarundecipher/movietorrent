import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class Query extends Component {
  state = {
    movies: [],
  };

  constructor(props) {
    super(props);
    this.getinfo();
  }

  getinfo = () => {
    var query = String(this.props.match.params.query);
    // console.log(this);
    // console.log(query);
    var search =
      "https://yts.mx/api/v2/list_movies.json?limit=50&query_term=" + query;

    axios.get(search).then((res) => {
      // console.log(res.data.data.movies);
      this.setState({
        movies: res.data.data.movies.map((movies) => movies),
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container text-center">
          {this.state.movies.map((url) => (
            <Link to={`/${url.id}`}>
              <img
                className="query img-thumbnail "
                src={url.medium_cover_image}
              ></img>
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Query;
