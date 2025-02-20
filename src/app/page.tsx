import { getProducts } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts(); 

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">List of Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
