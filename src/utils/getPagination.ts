export const handlePagination = (total: number, page: number, limit = 8) => {
  const totalPages = Math.ceil(total / limit);
  return { currentPage: page, totalPages };
};
