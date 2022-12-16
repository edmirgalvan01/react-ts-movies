import { useGetMovieById } from "../../hooks/useGetMovieById";
import { BiHomeAlt } from "react-icons/bi";
import "./MoviePage.css";

export const MoviePage = () => {
  const movieId: number = parseInt(location.pathname.split("/")[3]);

  const { response: movie, loading } = useGetMovieById(movieId);

  const backgroundStyles = `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.35)), url(https://image.tmdb.org/t/p/original${movie?.poster_path})`;

  return (
    <div className="movie-page vw-100 vh-100">
      <div
        style={{ background: backgroundStyles }}
        className="movie-page--movie py-2 flex gap-1 flex-column justify-content-center"
      >
        <h1>{movie?.title}</h1>
        <div className="movie-page--movie__info flex gap-1">
          <p>{movie?.release_date}</p>
          <p>{movie?.status}</p>
        </div>
        <p className="movie-page--movie__description">{movie?.overview}</p>
        <div className="movie-page--movie__categories mt-2 flex gap-1 justify-content-between">
          {movie?.genres.map((category) => (
            <p key={category.id}>{category.name}</p>
          ))}
        </div>
      </div>
      <div className="movie-page--icon flex justify-content-center align-items-center w-100">
        <BiHomeAlt size={35} />
      </div>
    </div>
  );
};
