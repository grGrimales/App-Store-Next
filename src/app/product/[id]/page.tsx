import { getProduct, getProducts } from "@/lib/products";
import ProductDetail from "@/components/product/ProductDetail";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const { id } = params;
  const product = await getProduct(id);

  return {
    title: product ? product.title : "Product Not Found",
    description: product ? `Details of ${product.title}` : "This product does not exist.",
  };
}

export default async function ProductDetailPage(props: { params: Params }) {
  const params = await props.params;
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    return <h1 className="text-center text-gray-600">Product not found</h1>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </main>
  );
}
