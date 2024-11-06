"use client";

import { useContext } from "react";
import { ProductCard } from "../ProductCard";
import { ProductContext } from "@/context/productContext";
import { filterProducts } from "@/utils/filterProducts";
import { DialogComponent } from "../DialogComponent";
import FormProducts from "../FormProduct";
import { sortProducts } from "@/utils/sortProducts";
import { SortOption } from "../SortComponent";

interface IProductListingProps {
  search: string;
  sortBy: string;
}
export function ProductListing({ search, sortBy }: IProductListingProps) {
  const { products } = useContext(ProductContext);

  const searchTerm = search || "";
  const initialSortBy = sortBy as SortOption;

  const filteredProducts = filterProducts(products, searchTerm);

  const sortedProducts = sortProducts(filteredProducts, initialSortBy);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sortedProducts.map((product) => (
        <DialogComponent
          asChild={false}
          content={<FormProducts product={product} />}
          key={product.id}
          title={product.title}
        >
          <ProductCard key={product.id} product={product} />
        </DialogComponent>
      ))}
    </div>
  );
}
