"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Product, deleteProduct } from "@/lib/products";

interface AdminProductListProps {
  products: Product[];
}

export default function AdminProductList({ products }: AdminProductListProps) {
  const [loading, setLoading] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    setLoading(id); 

    const success = await deleteProduct(id);
    if (success) {
      alert("Product successfully deleted");
      window.location.reload();
    } else {
      alert("Failed to delete product");
    }

    setLoading(null); 
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-3 px-4 text-gray-900">{product.title}</td>
              <td className="py-3 px-4 text-gray-900">${product.price.toFixed(2)}</td>
              <td className="py-3 px-4 flex justify-center gap-3">
                <Link href={`/admin/edit/${product.id}`} className="text-blue-500 hover:underline">
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-700 transition flex items-center"
                  disabled={loading === product.id}
                >
                  {loading === product.id ? "Deleting..." : <FaTrash />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
