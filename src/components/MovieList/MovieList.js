import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styleMovieList.css";

const loading = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif";
const urlAPI = "https://mock-api.driven.com.br/api/v7/cineflex/movies";

function Movie(movie) {
  return (
    <Link to={`/sessao/${movie.id}`}>
      <img className="movie" src={movie.image} alt={movie.title} />
    </Link>
  );
}

function List() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const request = axios.get(urlAPI);

    request.then((response) => {
      setMovies(response.data);
    });
  }, []);

  if (movies === null) {
    return (
      <div className="loading">
        <img
          src={loading}
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="subtitle">
        <h1>Selecione o filme</h1>
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Movie key={index} image={movie.posterURL} id={movie.id} />
        ))}
      </div>
    </>
  );
}

export default function MovieList() {
  return (
    <>
      <List />
    </>
  );
}
