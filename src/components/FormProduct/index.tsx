"use client";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TagsInput } from "../ui/TagsInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProductContext } from "@/context/productContext";
import { useDismissModal } from "@/hooks/useDismissDialog";

const formSchema = z.object({
  title: z.string(),
  categories: z.array(z.string()).nonempty("Please at least one item"),
  brand: z.array(z.string()).nonempty("Please at least one item"),
  description: z.string(),
});

interface IFormProductsProps {
  product?: Partial<IProduct>;
}

export default function FormProducts({
  product: { id, title = "", category = "", description = "", brand = "" } = {},
}: IFormProductsProps) {
  const { addProduct, updateProduct } = useContext(ProductContext);
  const { dismiss } = useDismissModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      categories: category ? category.split(",") : [],
      description,
      brand: brand ? brand.split(",") : [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const isEditing = id !== undefined;
    try {
      if (!isEditing) {
        addProduct({
          title: values.title,
          category: values.categories.join(", "),
          description: values.description,
          brand: values.brand.join(", "),
        });

        dismiss();

        form.reset();
      }

      if (isEditing) {
        updateProduct({
          id: id,
          title: values.title,
          category: values.categories.join(", "),
          description: values.description,
          brand: values.brand.join(", "),
        });

        dismiss();
      }

      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" type="" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Categories"
                />
              </FormControl>
              <FormDescription>Add tags.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Brand"
                />
              </FormControl>
              <FormDescription>Add Brands.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" type="" {...field} />
              </FormControl>
              <FormDescription>Product description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
