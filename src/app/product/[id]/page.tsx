import { getProduct } from "@/lib/products";
import ProductDetail from "@/components/product/ProductDetail";

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return <h1 className="text-center text-gray-600">Producto no encontrado.</h1>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </main>
  );
}
