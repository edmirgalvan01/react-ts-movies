import { useGetMoviesByCategory } from "../../hooks/useGetMoviesByCategory";
import { Header } from "../Header/Header";
import { MoviesListLayoutWithMainTitle } from "../MoviesListLayout/MoviesListLayout";

export const CategoryPage = () => {
  const categoryId: string = location.pathname.split("/")[3];
  const decodedCategory = decodeURI(location.pathname.split("/")[2]);

  const { response, loading } = useGetMoviesByCategory(categoryId);

  return (
    <>
      <Header />
      <div className="search-page">
        <MoviesListLayoutWithMainTitle
          mainTitle={`¡Hola! Aqui verás los resultados de ${decodedCategory}`}
          title={decodedCategory}
          moviesList={response?.results}
          loading={loading}
        />
      </div>
    </>
  );
};
