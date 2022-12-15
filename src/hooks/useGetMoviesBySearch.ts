import { getMoviesByKeyword } from "../services/movies.services";
import { useState, useEffect } from "react";
import { MoviesResponseType } from "../types/movies.type";

export const useGetMoviesBySearch = (keyword: string) => {
  const [response, setResponse] = useState<MoviesResponseType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMoviesByKeyword(keyword)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading };
};
