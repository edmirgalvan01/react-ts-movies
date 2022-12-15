import { MoviesListLayoutWithMainTitle } from "../MoviesListLayout/MoviesListLayout";
import { useGetMoviesBySearch } from "../../hooks/useGetMoviesBySearch";
import { Header } from "../Header/Header";
import "./SearchPage.css";

export const SearchPage = () => {
  //get keyword by url
  const keyword: string = location.pathname.split("/")[2];

  //Formated keyword
  const decodedKeyword = decodeURI(keyword);

  const { response, loading } = useGetMoviesBySearch(keyword);

  return (
    <>
      <Header />
      <div className="search-page">
        <MoviesListLayoutWithMainTitle
          mainTitle="¡Hola! Aqui verás los resultados de tu busqueda"
          title={decodedKeyword}
          moviesList={response?.results}
          loading={loading}
        />
      </div>
    </>
  );
};
