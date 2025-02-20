import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const products = [
  { id: "1", name: "Laptop Gamer", price: 1200 },
  { id: "2", name: "Mouse Inalámbrico", price: 50 },
  { id: "3", name: "Teclado Mecánico", price: 80 },
];

export default function AdminProductList() {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">Precio</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">${product.price.toFixed(2)}</td>
            <td className="py-2 px-4 flex gap-3">
              <Link href={`/admin/edit/${product.id}`} className="text-blue-500 hover:underline">
                <FaEdit />
              </Link>
              <button className="text-red-500 hover:underline">
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
