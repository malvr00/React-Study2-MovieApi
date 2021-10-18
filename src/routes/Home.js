import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends Component {
  state = {
    isLoadgin: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({ movies, isLoadgin: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoadgin, movies } = this.state;
    return (
      <section className="container">
        {isLoadgin ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          movies.map((movie) => (
            <div className="movies">
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            </div>
          ))
        )}
      </section>
    );
  }
}

export default Home;
