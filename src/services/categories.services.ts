import { CategoryType } from "../types/categories.type";
import { API_KEY_URL, API_URL } from "../env";

export const getAllCategories = (): Promise<Array<CategoryType>> => {
  return fetch(`${API_URL}/genre/movie/list${API_KEY_URL}`)
    .then((response) => response.json())
    .then((data) => data.genres)
    .catch((err) => console.error(err));
};
