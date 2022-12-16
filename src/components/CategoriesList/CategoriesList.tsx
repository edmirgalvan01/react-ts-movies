import { useNavigate } from "react-router-dom";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";
import "./CategoriesList.css";

export const CategoriesList = () => {
  const navigate = useNavigate();

  const { categories, loading } = useGetAllCategories();

  return (
    <div className="categories flex flex-column gap-1">
      <h1 className="categories--title">Categorias</h1>
      <div className="categories-list flex flex-column gap-1">
        {categories?.map((category) => {
          return (
            <div
              onClick={() =>
                navigate(
                  `/react-ts-movies/categoria/${category.name}/${category.id}`
                )
              }
              key={category?.id}
              className="category pointer flex gap-2 align-items-center"
            >
              <div className="category--letter flex justify-content-center align-items-center">
                <p>{category?.name[0].toUpperCase()}</p>
              </div>
              <p className="category--name">{category?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
