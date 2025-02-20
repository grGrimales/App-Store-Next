import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[] | string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
const { images, title, id, price } = product;

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
      <Image
        src={images[0] || images[1] } 
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm">${price.toFixed(2)}</p>
      <Link href={`/product/${id}`}>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
          <FaEye size={20} /> View Product
        </button>
      </Link>
    </div>
  );
}
