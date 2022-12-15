import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home";
import ReactDOM from "react-dom/client";
import React from "react";
import "./main.css";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { TrendingMovies } from "./components/TrendingMovies/TrendingMovies";
import { TrendingShows } from "./components/TrendingShows/TrendingShows";
import { CategoryPage } from "./components/CategoryPage/CategoryPage";
import { YearPage } from "./components/YearPage/YearPage";
import { MoviePage } from "./components/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buscar/:keyword",
    element: <SearchPage />,
  },
  {
    path: "/popular/peliculas",
    element: <TrendingMovies />,
  },
  {
    path: "/popular/shows",
    element: <TrendingShows />,
  },
  {
    path: "/categoria/:categoryName/:categoryId",
    element: <CategoryPage />,
  },
  {
    path: "/año/:year",
    element: <YearPage />,
  },
  {
    path: "/pelicula/:movieId",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
