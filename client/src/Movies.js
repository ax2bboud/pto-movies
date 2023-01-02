import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props)
    const movies = props.movies
    this.state = {
      movies: movies ? movies : []
    }
  }

  fetchMoviesData = () => {
    axios.get('/api/movies') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      this.setState({
        movies: response.data
      });
    }) 
  }

  componentDidMount(){
    this.fetchMoviesData()
  }

  render() {
    return (
      <div className="Movies">
        <div className="Movies-logo-container">
          <img alt="PTO movies logo" className="Movies-logo-image" src="genius-logo-on-white.svg"></img>
          <h1>PTO Movies</h1>
        </div>
        <ul className="Movies-list">
          {this.state.movies.map(
              movie => (
                  <li className="Movies-list-item" key={movie.id}>
                    <img className="Movies-image" alt="Movie thumbnail" src={movie.thumbnail}></img>
                    <Link to={`/movie/${movie.id}`} className="Movies-link">
                      {movie.name}
                    </Link>
                  </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default Movies;
