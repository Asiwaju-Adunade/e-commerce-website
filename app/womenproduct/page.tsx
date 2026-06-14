"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/ui/testimonials";
import { ProductCard } from "@/components/ui/product-card";
import { getWomenProducts, Product } from "@/lib/shopify";

const reviews = [
    {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        id: 2,
        name: "Alex K.",
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        id: 3,
        name: "James L.",
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        id: 4,
        name: "Mooen",
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
];

export default function Page() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleNewArrivals, setVisibleNewArrivals] = useState(4);
    const [visibleTopSelling, setVisibleTopSelling] = useState(4);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            const data = await getWomenProducts();
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    // Split products for UI sections (New Arrivals vs Top Selling)
    const newArrivals = products.slice(0, visibleNewArrivals);
    
    // Use the second half of the fetched products for Top Selling
    const half = Math.floor(products.length / 2);
    const topSelling = products.slice(half, half + visibleTopSelling);

    return (
        <>
        {/* new arrivals section */}
        <section>
            <h1 className="text-center text-3xl md:text-4xl font-heading my-5 font-bold mt-2 uppercase tracking-wider">NEW ARRIVALS</h1>
            
            {loading ? (
                <div className="flex justify-center my-10">Loading products...</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1240px] gap-6 px-4">
                    {newArrivals.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            {/* button part */}
            {visibleNewArrivals < half && (
                <div className="flex items-center my-8 cursor-pointer justify-center px-4">
                    <Button 
                        onClick={() => setVisibleNewArrivals(prev => prev + 4)}
                        className="bg-white rounded-full border border-gray-200 cursor-pointer text-black p-6 md:w-60 w-full hover:bg-gray-50 transition-colors"
                    >
                        View All
                    </Button>
                </div>
            )}

            <div className="border-b border-gray-200 max-w-[1240px] mt-7 mx-auto px-4"></div>
        </section>


        {/* TOP SELLING SECTION */}
        <section>
            <h1 className="text-center text-3xl md:text-4xl font-heading my-5 font-bold uppercase tracking-wider">TOP SELLING</h1>
            
            {loading ? (
                <div className="flex justify-center my-20">Loading products...</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1240px] gap-6 px-4">
                    {topSelling.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            {/* button part */}
            {half + visibleTopSelling < products.length && (
                <div className="flex items-center mt-8 mb-10 cursor-pointer justify-center px-4">
                    <Button 
                        onClick={() => setVisibleTopSelling(prev => prev + 4)}
                        className="bg-white rounded-full border border-gray-200 text-black p-6 md:w-60 w-full hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                         View All
                    </Button>
                </div>
            )}
            <div className="border-b border-gray-200 max-w-[1240px] mt-7 mx-auto px-4"></div>
        </section>


        {/* BROWSE BY DRESS STYLE SECTION */}
        <section className="bg-[#F0F0F0] max-w-[1240px] mx-auto my-15 rounded-[40px] p-8 md:p-16">
            <h1 className="font-bold text-center font-heading mb-10 text-3xl md:text-5xl uppercase">
                BROWSE BY DRESS STYLE
            </h1>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
                 {/* CASUAL */}
                 <div className="relative w-full h-[190px] md:h-[289px] rounded-3xl overflow-hidden md:col-span-1">
                    <Image src="/productimages/casual.png" alt="casual"  fill/>
                 </div>

                 {/* FORMAL */}
                 <div className="relative w-full h-[190px] md:h-[289px] rounded-3xl overflow-hidden md:col-span-2">
                    <Image src="/productimages/formalmobile.png" alt="formal" fill className=" md:hidden" />
                    <Image src="/productimages/formal.png" alt="formal" fill className=" hidden md:block" />
                 </div>

                 {/* PARTY */}
                 <div className="relative w-full h-[190px] md:h-[289px] rounded-3xl overflow-hidden md:col-span-2">
                    <Image src="/productimages/partymobile.png" alt="party" fill className=" md:hidden" />
                    <Image src="/productimages/party.png" alt="party" fill className="hidden md:block" />
                 </div>

                 {/* GYM */}
                 <div className="relative w-full h-[190px] md:h-[289px] rounded-3xl overflow-hidden md:col-span-1">
                    <Image src="/productimages/gym.png" alt="gym" fill  />
                 </div>
            </div>
        </section>

                {/* REVIEWS SECTION */}
                    <Testimonials reviews={reviews} title="OUR HAPPY CUSTOMERS" />
        </>
    );
}