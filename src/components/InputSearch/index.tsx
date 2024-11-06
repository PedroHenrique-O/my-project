"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      router.push(`/?search=${encodeURIComponent(value)}`);
    } else {
      router.push(`/`);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    router.push(`/`);
  };

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  return (
    <div className="flex items-center">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />

      {searchTerm && (
        <Button type="button" onClick={handleClearSearch} className="ml-2">
          Clear
        </Button>
      )}
    </div>
  );
};

export { InputSearch };
