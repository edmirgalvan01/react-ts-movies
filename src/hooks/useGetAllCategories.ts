import { getAllCategories } from "../services/categories.services";
import { useEffect, useState } from "react";
import { CategoryType } from "../types/categories.type";

export const useGetAllCategories = () => {
  const [categories, setCategories] = useState<Array<CategoryType>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};
