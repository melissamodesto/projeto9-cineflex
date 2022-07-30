import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './styleMovieList.css';

const urlAPI = "https://mock-api.driven.com.br/api/v7/cineflex/movies";

function Movie(movie) {
  return (
    <Link to={`/sessions/${movie.id}`}>
      <img className="movie" src={movie.image} alt={movie.title} />
    </Link>
  );
}

function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const request = axios.get(urlAPI);

    request.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie key={index} image={movie.posterURL} id={movie.id} />
      ))}
    </div>
  );
}

export default function MovieList() {
  return (
    <>
      <List />
    </>
  );
}