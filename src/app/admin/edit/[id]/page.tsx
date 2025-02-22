"use client";
import { useEffect, useState } from "react";
import ProductForm from "@/components/admin/ProductForm";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { getProduct, Product } from "@/lib/products";

interface EditProductPageProps {
  params: { id: string };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(params.id);
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [params.id]);

  if (loading) return <p className="text-center text-gray-500">Loading product...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <button onClick={() => router.back()} className="flex items-center text-blue-500 hover:underline mb-4">
        <FaArrowLeft className="mr-2" /> Return
      </button>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Edit Product</h1>
      <ProductForm product={product} />
    </main>
  );
}
