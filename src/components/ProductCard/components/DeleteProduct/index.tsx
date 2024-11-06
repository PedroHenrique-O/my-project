import { ProductContext } from "@/context/productContext";
import { Trash2Icon } from "lucide-react";
import { useContext } from "react";

interface IDeleteProductProps {
  product: IProduct;
}
export function DeleteProduct({ product }: IDeleteProductProps) {
  const { deleteProduct } = useContext(ProductContext);
  const handleDeleteProduct = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteProduct(product.id);
  };

  return (
    <div className="w-full m-1">
      <Trash2Icon
        onClick={handleDeleteProduct}
        className="w-4 h-4 ml-auto hover:text-red-500 cursor-pointer"
      />
    </div>
  );
}
