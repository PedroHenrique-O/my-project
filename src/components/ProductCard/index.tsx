import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { DeleteProduct } from "./components/DeleteProduct";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const limitedDescription =
    product.description?.length > 100
      ? product.description.substring(0, 100) + "..."
      : product.description;

  const handleOnClickBrand = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/?search=" + product.brand);
  };

  const handleOnClickCategory = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/?search=" + product.category);
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="flex-1">
        <CardTitle className="text-lg font-bold truncate">
          {product.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 truncate">
          {limitedDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-gray-500 flex items-center gap-1 text-sm">
          <span>Category:</span>
          <span
            onClick={handleOnClickCategory}
            className={badgeVariants({
              variant: "outline",
              className: "text-xs",
            })}
          >
            {" "}
            {product?.category}
          </span>
        </div>
        {product?.brand && (
          <div className="text-gray-500 flex items-center gap-1 text-sm">
            <span>Brand:</span>
            <span
              onClick={handleOnClickBrand}
              className={badgeVariants({
                variant: "outline",
                className: "text-xs",
              })}
            >
              {product.brand}
            </span>
          </div>
        )}

        <DeleteProduct product={product} />
      </CardContent>
    </Card>
  );
};
