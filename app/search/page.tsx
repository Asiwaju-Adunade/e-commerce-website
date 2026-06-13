"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { searchProducts, Product } from "@/lib/shopify";
import { Search } from "lucide-react";

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResults() {
            setLoading(true);
            const data = await searchProducts(query);
            setResults(data);
            setLoading(false);
        }
        
        if (query) {
            fetchResults();
        } else {
            setResults([]);
            setLoading(false);
        }
    }, [query]);

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-10 min-h-[60vh]">
            <div className="flex items-center gap-3 mb-8">
                <Search className="w-8 h-8 text-black" />
                <h1 className="text-2xl font-heading font-bold">
                    Search Results for "{query}"
                </h1>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-500 text-lg animate-pulse">Searching...</p>
                </div>
            ) : results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {results.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-[#F0F0F0] rounded-3xl">
                    <p className="text-2xl font-bold text-gray-400">No matching products was found.</p>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen text-center py-20">Loading search...</div>}>
            <SearchResults />
        </Suspense>
    );
}
