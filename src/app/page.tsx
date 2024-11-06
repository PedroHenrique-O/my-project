import { getProducts } from "@/actions/getProducts";
import { DialogComponent } from "@/components/DialogComponent";
import FormProducts from "@/components/FormProduct";
import { InputSearch } from "@/components/InputSearch";
import { PaginationComponent } from "@/components/PaginationComponent";
import { ProductListing } from "@/components/ProductListing";
import { SortComponent } from "@/components/SortComponent";
import { Button } from "@/components/ui/button";
import { ProductProvider } from "@/context/productContext";

interface IHomeProps {
  searchParams: { page?: string; search?: string; sort?: string };
}

export default async function Home({ searchParams }: IHomeProps) {
  const { page, search, sort } = await searchParams;
  const { products, currentPage, totalPages } = await getProducts({
    page,
  });

  return (
    <ProductProvider initialProducts={products}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <InputSearch /> <SortComponent />
          </div>
          <DialogComponent
            content={<FormProducts />}
            asChild
            title="New Course"
            description="Create a new course"
          >
            <Button> New Course </Button>
          </DialogComponent>
        </div>

        <ProductListing sortBy={sort || ""} search={search || ""} />

        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </ProductProvider>
  );
}
