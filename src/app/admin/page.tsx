import AdminProductList from "@/components/admin/AdminProductList";
import { getProducts } from "@/lib/products";
import Link from "next/link";

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <Link href="/admin/create" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          + Add Product
        </Link>
      </div>
      <AdminProductList products={products} />
    </main>
  );
}
