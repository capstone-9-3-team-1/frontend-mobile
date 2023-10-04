import useProducts from "./useProducts";
import useCategories from "./useCategories";
import useArticles from "./useArticles";

export default function useHomeData() {
  const {
    isLoading: isProductsLoading,
    isError: isProductsError,
    data: products,
    error: productsError,
  } = useProducts();

  const {
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    data: categories,
    error: categoriesError,
  } = useCategories();

  const {
    isLoading: isArticlesLoading,
    isError: isArticlesError,
    data: articles,
    error: articlesError,
  } = useArticles();



  let isLoading = isProductsLoading || isCategoriesLoading || isArticlesLoading;
  let isError = isProductsError || isCategoriesError || isArticlesError;

  return {
    isLoading,
    isError,
    products,
    categories,
    articles,
    error: {
      productsError,
      categoriesError,
      articlesError,
    },
  };
}
