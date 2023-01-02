import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";
import './Movie.css';

class Movie extends Component {

    constructor(props) {
        super(props)
        const movie = props.movie
        this.state = {
                movie: movie ? movie : {
                    name: "",
                    genre: "",
                    market_price: "",
                    image: "",
                    thumbnail: "",
                    owner: ""
            }
        }
    }

    fetchMovieData = (id) => {
        axios.get(`/api/movies/${id}`) // You can simply make your requests to "/api/whatever you want"
            .then((response) => {
                this.setState({
                    movie: response.data
                });
            })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchMovieData(id)
    }

    render() {
        return (
            <div className="Movie">
                <img className="Movie-image" alt="Movie poster" src={this.state.movie.image}></img>
                <span className="Movie-name">Name: {this.state.movie.name}</span>
                <span className="Movie-genre">Genre(s): {this.state.movie.genre}</span>
                <span className="Movie-owner">Owner: {this.state.movie.owner}</span>
                <span className="Movie-market-price">Price: {this.state.movie.market_price}</span>
                <Link className="Movies-list-link" to="/">Return to List</Link>
            </div>
        );
    }
}

export default withRouter(Movie);
