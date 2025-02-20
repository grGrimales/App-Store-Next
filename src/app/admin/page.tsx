import ProductCard from "@/components/product/ProductCard";





type Product = {
  id: number;
  title: string;
  price: number;
  images: string[]; // La API devuelve un array de imágenes
};

export default async function HomePage() {


  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Lista de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      </div>
    </main>
  );
}
