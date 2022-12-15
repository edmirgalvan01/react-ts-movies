import { getTrendingMedia } from "../services/movies.services";
import { MoviesResponseType } from "../types/movies.type";
import { useState, useEffect } from "react";

export const useGetTrendingMedia = (media: string, timeWindow: string) => {
  const [response, setResponse] = useState<MoviesResponseType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTrendingMedia(media, timeWindow)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading };
};
