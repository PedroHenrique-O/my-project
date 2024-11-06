export function filterProducts(products: IProduct[], searchTerm: string) {
  if (!searchTerm) return products;

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return products.filter((product) => {
    const titleMatch = product.title
      ?.toLowerCase()
      ?.includes(lowerCaseSearchTerm);
    const brandMatch = product.brand
      ?.toLowerCase()
      ?.includes(lowerCaseSearchTerm);

    return titleMatch || brandMatch;
  });
}
