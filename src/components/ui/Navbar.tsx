import Link from "next/link";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <FaHome size={20} />   App Store Next
        </Link>
        <div className="flex gap-4">
          <Link href="/admin" className="hover:underline flex items-center gap-2">
              
            Admin
          </Link>
          <Link href="/cart" className="hover:underline flex items-center gap-2">
            <FaShoppingCart size={20} /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
