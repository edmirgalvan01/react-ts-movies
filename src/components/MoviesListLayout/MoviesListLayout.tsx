import { MovieType } from "../../types/movies.type";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MoviesListLayout.css";

interface Props {
  loading?: boolean;
  title?: string;
  moviesList?: Array<MovieType>;
  mainTitle?: string;
}

export const MoviesListLayout = ({ title, moviesList, loading }: Props) => {
  const handleContent = () => {
    if (loading) {
      <p>Cargando...</p>;
    } else {
      //If there aren't movies
      if (moviesList?.length === 0) {
        return <p>No hay resultados</p>;
      } else {
        return moviesList?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ));
      }
    }
  };

  return (
    <div className="movies-list--movies flex flex-column gap-1">
      <h1 className="movies-list--movies__title">{title}</h1>
      <div className="movies-list--movies__list flex flex-wrap gap-2 justify-content-center">
        {handleContent()}
      </div>
    </div>
  );
};

export const MoviesListLayoutWithMainTitle = ({
  mainTitle,
  title,
  moviesList,
  loading,
}: Props) => {
  return (
    <div className="movies-list flex flex-column gap-1 p-2">
      <h1 className="movies-list--title">{mainTitle}</h1>
      <MoviesListLayout
        title={title}
        moviesList={moviesList}
        loading={loading}
      />
    </div>
  );
};
