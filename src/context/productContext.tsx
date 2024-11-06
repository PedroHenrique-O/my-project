"use client";

import { createContext, useState } from "react";

interface IProductContext {
  products: IProduct[];
  addProduct: (newProduct: Partial<Omit<IProduct, "id">>) => Promise<void>;
  updateProduct: (updatedProduct: Partial<IProduct>) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

const ProductProvider = ({
  children,
  initialProducts = [],
}: {
  children: React.ReactNode;
  initialProducts: IProduct[];
}) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  console.log(products);

  const addProduct = async (newProduct: Partial<Omit<IProduct, "id">>) => {
    console.log(newProduct, "newProduct");
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const addedProduct = await response.json();

      setProducts((prevProducts) => [...prevProducts, addedProduct]);

      console.log("Added product:", addedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (updatedProduct: Partial<IProduct>) => {
    try {
      //   const response = await fetch(
      //     `https://dummyjson.com/products/${updatedProduct.id}`,
      //     {
      //       method: "PATCH",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(updatedProduct),
      //     }
      //   );

      // const updatedProductData = await response.json();

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id
            ? { ...product, ...updatedProduct }
            : product
        )
      );

      console.log("Updated product:", updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      const deletedProductData = await response.json();
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );

      console.log("Deleted product:", deletedProductData);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
