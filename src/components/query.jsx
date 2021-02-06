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
    query = '"' + query + '"';

    var search =
      "https://api.themoviedb.org/3/search/movie?api_key=35361fe30128f961c910034da9008f70&query=" +
      query;

    axios.get(search).then((res) => {
      this.setState({
        movies: res.data.results.map((movies) => movies),
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
                src={"https://image.tmdb.org/t/p/w500" + url.poster_path}
              ></img>
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Query;
