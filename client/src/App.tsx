import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard, { Movie } from "./MovieCard";

// url to fetch movies
const API_URL = "http://localhost:8081/v1/movies";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies("");
  }, []);

  const getMovies = async (keyword: string) => {
    const response = await fetch(`${API_URL}?keyword=${keyword}`);
    const data = await response.json();
    setMovies(data);
  };

  return (
    <div className="app">
      <h1>MovieDB</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => getMovies(searchTerm)}
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
