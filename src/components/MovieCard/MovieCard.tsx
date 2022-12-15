import { useNavigate } from "react-router-dom";
import { MovieType } from "../../types/movies.type";
import "./MovieCard.css";

interface Props {
  movie: MovieType;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const getMovieContent = (): JSX.Element => {
    //if there is posther path
    if (movie.poster_path) {
      return (
        <img
          className="movie-card--img"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        />
      );
    } else {
      return <p className="movie-card--title text-center">{movie.title}</p>;
    }
  };

  return (
    <div
      onClick={() => navigate(`/pelicula/${movie.id}`)}
      className="movie-card flex justify-content-center align-items-center"
    >
      {getMovieContent()}
    </div>
  );
};
