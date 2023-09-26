import useProducts from "./useProducts";
import useCategories from "./useCategories";

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
  let isLoading = isProductsLoading || isCategoriesLoading;
  let isError = isProductsError || isCategoriesError;

  return {
    isLoading,
    isError,
    products,
    categories,
    error: {
      productsError,
      categoriesError,
    },
  };
}
