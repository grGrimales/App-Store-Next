interface EditProductPageProps {
  params: { id: string };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const { id } = params;

  console.log(id);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Edit Product {id}</h1>
    </main>
  );
}
