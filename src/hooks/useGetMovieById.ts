import { useEffect, useState } from "react";

import { getMovieById } from "../services/movies.services";
import { SingleMovieType } from "../types/movies.type";

export const useGetMovieById = (id: number) => {
  const [response, setResponse] = useState<SingleMovieType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovieById(id)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading };
};
