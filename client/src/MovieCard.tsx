interface Props {
  movie: Movie;
}

interface Movie {
  title: string;
  year: number;
  rating: number;
  type: string;
  imageName: string;
}

const imageUrl = "http://localhost:8081/images/";
const jpgExtension = ".jpg";

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie" key={movie.title}>
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img
          src={
            movie.imageName !== "N/A"
              ? imageUrl + movie.imageName + jpgExtension
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>

      <div>
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
