import { handlePagination } from "@/utils/getPagination";

const limit = 8;

const fetchProducts = async (skip: number) => {
  const data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return (await data.json()) as { products: IProduct[]; total: number };
};

export const getProducts = async (searchParams: { page?: string }) => {
  const page = parseInt(searchParams.page || "1", 10);
  const skip = (page - 1) * limit;

  const { products, total } = await fetchProducts(skip);

  const pagination = handlePagination(total, page, limit);

  return { products, total, ...pagination };
};
