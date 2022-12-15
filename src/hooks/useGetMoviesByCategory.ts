import { useEffect, useState } from "react";
import { getMoviesByCategory } from "../services/movies.services";
import { MoviesResponseType } from "../types/movies.type";

export const useGetMoviesByCategory = (categoryId: string) => {
  const [response, setResponse] = useState<MoviesResponseType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMoviesByCategory(categoryId)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading };
};
