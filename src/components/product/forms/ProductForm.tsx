"use client";
import { useState } from "react";

const products = [
  { id: "1", name: "Laptop Gamer", price: 1200 },
  { id: "2", name: "Mouse Inalámbrico", price: 50 },
  { id: "3", name: "Teclado Mecánico", price: 80 },
];

interface ProductFormProps {
  productId?: string;
}

export default function ProductForm({ productId }: ProductFormProps) {
  const isEditing = !!productId;
  const product = isEditing ? products.find((p) => p.id === productId) : null;

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      console.log("Edit:", { id: productId, name, price });
    } else {
      console.log("Add:", { name, price });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <label className="block mb-2 font-semibold">Name of product</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded-md mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Precio</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border px-3 py-2 rounded-md mb-4"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        {isEditing ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
}
