"use client";
import ProductForm from "@/components/admin/ProductForm";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function CreateProductPage() {
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <button onClick={() => router.back()} className="flex items-center text-blue-500 hover:underline mb-4">
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Add Product</h1>
      <ProductForm />
    </main>
  );
}
