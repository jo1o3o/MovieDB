import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// url to fetch movies
const API_URL = "http://localhost:8081/v1/movies";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const movies = await response.json();
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="app">
      <h1>MovieDB</h1>

      <div className="search">
        <input placeholder="Search for movies" />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => console.log("Search box not yet implemented")}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
