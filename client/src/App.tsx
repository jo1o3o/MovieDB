import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// url to fetch movies
const API_URL = "http://localhost:8081/v1/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <input
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => console.log(searchTerm)}
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
