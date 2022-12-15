import { MoviesListLayoutWithMainTitle } from "../MoviesListLayout/MoviesListLayout";
import { useGetMoviesByYear } from "../../hooks/useGetMoviesByYear";
import { Header } from "../Header/Header";
import "./YearPage.css";

export const YearPage = () => {
  const year = parseInt(location.pathname.split("/")[2]);

  const { response, loading } = useGetMoviesByYear(year);

  return (
    <>
      <Header />
      <div className="search-page">
        <MoviesListLayoutWithMainTitle
          mainTitle={`¡Hola! Aqui verás los resultados del año ${year}`}
          title={year.toString()}
          moviesList={response?.results}
          loading={loading}
        />
      </div>
    </>
  );
};
