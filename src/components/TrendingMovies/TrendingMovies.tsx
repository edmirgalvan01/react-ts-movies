import { MoviesListLayoutWithMainTitle } from "../MoviesListLayout/MoviesListLayout";
import { useGetTrendingMedia } from "../../hooks/useGetTrendingMovies";
import { Header } from "../Header/Header";

export const TrendingMovies = () => {
  const { response, loading } = useGetTrendingMedia("movie", "week");
  return (
    <>
      <Header />
      <MoviesListLayoutWithMainTitle
        mainTitle="¡Hola! Aqui veras las peliculas mas populares"
        moviesList={response?.results}
        loading={loading}
        title="Peliculas populares"
      />
    </>
  );
};
