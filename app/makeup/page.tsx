"use client";
import { useEffect, useState } from "react";
import { getMakeupProducts, Product } from "@/lib/shopify";
import { ProductCard } from "@/components/ui/product-card";

export default function MakeupPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getMakeupProducts();
      setProducts(data);
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10">
      <h1 className="text-3xl text-center font-bold">💄 Cosmetics Collection</h1>

      {loading ? (
        <p>Loading makeup...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}