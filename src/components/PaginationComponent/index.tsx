import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalPages,
}) => {
  const pageLimit = 5;
  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  const endPage = Math.min(totalPages, startPage + pageLimit - 1);

  if (endPage === totalPages) {
    startPage = Math.max(1, totalPages - pageLimit + 1);
  }

  return (
    <Pagination>
      <PaginationItem>
        <PaginationPrevious
          href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
        />
      </PaginationItem>

      {startPage > 1 && (
        <>
          <PaginationItem>
            <PaginationLink href={`?page=1`}>1</PaginationLink>
          </PaginationItem>
          {startPage > 2 && (
            <PaginationItem>
              <PaginationLink href="#">...</PaginationLink>
            </PaginationItem>
          )}
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <PaginationItem key={startPage + index}>
          <PaginationLink
            href={`?page=${startPage + index}`}
            className={currentPage === startPage + index ? "font-bold" : ""}
          >
            {startPage + index}
          </PaginationLink>
        </PaginationItem>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink href="#">...</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href={`?page=${totalPages}`}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        </>
      )}

      <PaginationItem>
        <PaginationNext
          href={currentPage < totalPages ? `?page=${currentPage + 1}` : "#"}
        />
      </PaginationItem>
    </Pagination>
  );
};
