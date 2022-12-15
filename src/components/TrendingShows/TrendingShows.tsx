import { MoviesListLayoutWithMainTitle } from "../MoviesListLayout/MoviesListLayout";
import { useGetTrendingMedia } from "../../hooks/useGetTrendingMovies";
import { Header } from "../Header/Header";

export const TrendingShows = () => {
  const { response, loading } = useGetTrendingMedia("tv", "week");
  return (
    <>
      <Header />
      <MoviesListLayoutWithMainTitle
        mainTitle="¡Hola! Aqui veras los shows de TV mas populares"
        moviesList={response?.results}
        loading={loading}
        title="Shows de TV populares"
      />
    </>
  );
};
