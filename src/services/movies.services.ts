import {
  MoviesResponseType,
  MovieType,
  SingleMovieType,
} from "../types/movies.type";
import { API_KEY_URL, API_URL } from "../env";

/**
 * @desc Get trending movies by specific time
 * @param timeWindow The time to get trending movies => week or day
 * @param media Show the trending media in the results => all, movie, tv or person
 * @return Promise
 */
export const getTrendingMedia = (
  media: string,
  timeWindow: string
): Promise<MoviesResponseType> => {
  return fetch(`${API_URL}/trending/${media}/${timeWindow}${API_KEY_URL}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

/**
 * @desc Get movies by keyword
 * @param keyword
 * @return Promise
 */
export const getMoviesByKeyword = (
  keyword: string
): Promise<MoviesResponseType> => {
  return fetch(`${API_URL}/search/movie/${API_KEY_URL}&query=${keyword}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

/**
 * @desc Get movies by category
 * @param categoryId
 * @return Promise
 */
export const getMoviesByCategory = (
  categoryId: string
): Promise<MoviesResponseType> => {
  return fetch(
    `${API_URL}/discover/movie/${API_KEY_URL}&with_genres=${categoryId}`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

/**
 * @desc Get movies by year
 * @param year
 * @return Promise
 */
export const getMoviesByYear = (year: number): Promise<MoviesResponseType> => {
  return fetch(
    `${API_URL}/discover/movie/${API_KEY_URL}&primary_release_year=${year}`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

/**
 * @desc Get movies by year
 * @param year
 * @return Promise
 */
export const getMovieById = (movieId: number): Promise<SingleMovieType> => {
  return fetch(`${API_URL}/movie/${movieId}${API_KEY_URL}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
