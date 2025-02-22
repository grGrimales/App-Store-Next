"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct, updateProduct, Product } from "@/lib/products";

interface ProductFormProps {
  product?: Product;
}

export default function ProductForm({ product }: ProductFormProps) {
  const isEditing = !!product;
  const router = useRouter();
  const [title, setTitle] = useState(product?.title || "");
  const [price, setPrice] = useState(product?.price.toString() || "");
  const [description, setDescription] = useState(product?.description || "");
  const [images, setImages] = useState(product?.images.join(", ") || "");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price.toString());
      setDescription(product.description);
      setImages(product.images.join(", "));
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct(product!.id.toString(), {
          title,
          price: Number(price),
          description,
          images: images.split(",").map((img) => img.trim()),
        });
        alert("Product updated successfully!");
      } else {
        await createProduct({
          title,
          price: Number(price),
          description,
          images: images.split(",").map((img) => img.trim()),
        });
        alert("Product created successfully!");
      }
      router.push("/admin");
    } catch (error) {
      alert("Failed to save product");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <label className="block mb-2 font-semibold">Product Name</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded-md mb-4" required />

      <label className="block mb-2 font-semibold">Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border px-3 py-2 rounded-md mb-4" required />

      <label className="block mb-2 font-semibold">Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border px-3 py-2 rounded-md mb-4" required />

      <label className="block mb-2 font-semibold">Image URLs (comma-separated)</label>
      <input type="text" value={images} onChange={(e) => setImages(e.target.value)} className="w-full border px-3 py-2 rounded-md mb-4" />

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        {isEditing ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
}
