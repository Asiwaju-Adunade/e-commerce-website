"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getMenProducts, Product} from "@/lib/shopify";
import { ProductCard } from "@/components/ui/product-card";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
          async function fetchProducts() {
              setLoading(true);
              const data = await getMenProducts();
              setProducts(data);
              setLoading(false);
          }
          fetchProducts();
      }, []);
  return (
    <>
      <section className="relative w-full md:max-h-200  bg-[#F2F0F1] overflow-hidden">

        {/* DESKTOP IMAGE (right side background) */}
         <div className=" absolute mx-auto  right-0 left-0 max-w-[1240px]  w-screen h-full z-0 hidden md:block">
          <Image
            src="/svgs/landingimg.png"
            alt="Hero"
            fill
            className="object-cover object-top"
            priority
          />
         </div>

        {/* CONTENT */}
        <div className="relative z-10  max-w-[1240px] mx-auto px-6 ">
          <div className="max-w-xl p-4 md:py-20">

            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3 max-w-2xl font-heading">
              FIND CLOTHES 
              THAT MATCH YOUR STYLE
            </h1>
            
          <div className="space-y-6">
            {/* DESCRIPTION */}
            <p
              className="text-black/60 text-base leading-relaxed"
            >
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            {/* BUTTON */}
            <Button
            variant="default"
            size="lg"
              className="bg-black text-sm w-full cursor-pointer md:w-60 h-12 text-white rounded-full hover:bg-gray-800 transition"
            >
              Shop Now
            </Button>

            {/* STATS */}
            <div className="flex flex-wrap mx-auto md:mx-0 justify-center md:justify-start gap-6">
              <div>
                <p className="text-3xl md:text-4xl font-bold">200+</p>
                <p className="text-black/60 text-xs md:text-sm">
                  International Brands
                </p>
              </div>

              {/* side straight line */}    
              <div className="w-0.5 h-12 bg-black/10" />

              <div>
                <p className="text-3xl md:text-4xl font-bold">2,000+</p>
                <p className="text-black/60 text-xs md:text-sm">
                  High-Quality Products
                </p>
              </div>

                {/* side straight line */}
              <div className="hidden md:block w-0.5 h-12 bg-black/10" />

              <div className=" text-center md:text-left mx-auto md:mx-0">
                <p className="text-3xl md:text-4xl font-bold">30,000+</p>
                <p className="text-black/60 text-xs md:text-sm">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* MOBILE IMAGE (shown only on small screens) */}
          <div className="md:hidden">
            <Image
              src="/svgs/mobileimg.png"
              alt="Mobile Hero"
              width={500}
              height={500}
              className="w-full object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/*  marquee animation for black designer background */}
      <section className="bg-black overflow-hidden w-full">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <Image 
              key={i} 
              src="/svgs/black.png" 
              alt="designer" 
              width={1440} 
              height={50} 
              className="h-[40px] md:h-[70px] w-auto max-w-none object-contain shrink-0" 
              priority 
            />
          ))}
        </div>
      </section>

      {/* Men Products Section */}
      <section className="max-w-[1240px] mx-auto px-4 my-12 md:px-6">
        <h1 className="text-center text-3xl md:text-4xl font-heading  mb-5 font-bold uppercase tracking-wider">MEN COLLECTION</h1>
        
        {loading ? (
            <div className="flex justify-center">Loading products...</div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {products.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )}
      </section>
    </>
  );
}