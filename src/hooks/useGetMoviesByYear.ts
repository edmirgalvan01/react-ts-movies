import { getMoviesByYear } from "../services/movies.services";
import { MoviesResponseType } from "../types/movies.type";
import { useEffect, useState } from "react";

export const useGetMoviesByYear = (year: number) => {
  const [response, setResponse] = useState<MoviesResponseType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMoviesByYear(year)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading };
};
