"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/shopify";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.title} was added to your cart`);
  };

  return (
    <Card className="flex flex-col h-full group overflow-hidden border-transparent hover:border-gray-200 transition-all duration-300">
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="relative aspect-square w-full bg-[#F0EEED] rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="space-y-1 flex-grow">
          <h3 className="font-bold text-sm md:text-base line-clamp-1">{product.title}</h3>
          {product.ratings && <Rating rating={product.ratings} />}
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg md:text-xl">${product.price}</span>
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full mt-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
