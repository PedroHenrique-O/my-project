import { SortOption } from "@/components/SortComponent";

/**
 * Helper function to sort an array of products by a given sort option.
 *
 * @param products - Array of products to be sorted.
 * @param sortBy - The sorting option ("brand", "title", or null).
 * @returns A new array of products sorted by the given sort option.
 */
export const sortProducts = (
  products: IProduct[],
  sortBy: SortOption
): IProduct[] => {
  if (!sortBy) {
    return products;
  }

  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    if (sortBy === "brand") {
      return a.brand?.localeCompare(b.brand);
    }
    if (sortBy === "title") {
      return a.title?.localeCompare(b.title);
    }
    return 0;
  });

  return sortedProducts;
};
