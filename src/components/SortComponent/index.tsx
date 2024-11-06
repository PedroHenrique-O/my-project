"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "brand" | "title" | null | "none";

export const SortComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sortBy, setSortBy] = useState<SortOption>(() => {
    const sortParam = searchParams.get("sort");
    return sortParam === "brand" || sortParam === "title" ? sortParam : null;
  });

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());

    if (sortBy) {
      currentParams.set("sort", sortBy);
    } else {
      currentParams.delete("sort");
    }

    const newUrl = `?${currentParams.toString()}`;
    router.push(newUrl);
  }, [sortBy, router, searchParams]);

  return (
    <div className="flex items-center">
      <label htmlFor="sort" className="mr-2 text-sm font-medium">
        Sort by:
      </label>
      <Select
        value={sortBy ?? "none"}
        onValueChange={(value) =>
          setSortBy(value === "none" ? null : (value as SortOption))
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>{" "}
          <SelectItem value="brand">Brand</SelectItem>
          <SelectItem value="title">Title</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
