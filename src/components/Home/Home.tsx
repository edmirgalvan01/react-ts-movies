import { CategoriesList } from "../CategoriesList/CategoriesList";
import { Header } from "../Header/Header";
import { HomeSearch } from "../HomeSearch/HomeSearch";
import { TrendingSection } from "../TrendingSection/TrendingSection";
import { YearsList } from "../YearsList/YearsList";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home p-2 flex flex-column gap-2">
        <p className="home--title">¡Hola! Aquí podrás encontrar nuevas cosas</p>
        <HomeSearch />
        <TrendingSection
          title="Peliculas populares"
          description="Las peliculas mejor votadas de la ultima semana"
          navigateTo={`/popular/peliculas`}
        />
        <TrendingSection
          title="Shows de TV populares"
          description="Los shows de TV mejor votados de la ultima semana"
          navigateTo={`/popular/shows`}
        />
        <CategoriesList />
        <YearsList />
      </div>
    </>
  );
};
