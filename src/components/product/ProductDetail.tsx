"use client";
import Image from "next/image";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <Image src='https://placehold.co/500x300' alt={product.title} width={500} height={300} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-blue-500 mt-4">${product.price.toFixed(2)}</p>

      {/* Controles de cantidad */}
      <div className="flex items-center mt-4">
        <button
          className="bg-gray-200 px-3 py-2 rounded-l-md hover:bg-gray-300 transition"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          <FaMinus />
        </button>
        <span className="px-4 py-2 border">{quantity}</span>
        <button
          className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300 transition"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <FaPlus />
        </button>
      </div>

      {/* Botón de agregar al carrito */}
      <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}
