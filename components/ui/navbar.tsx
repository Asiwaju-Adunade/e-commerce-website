"use client";
import { useState } from "react";
import { X, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "./input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showBackground, setShowBackground] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const { cartCount } = useCart();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <>
            {/* TOP BLACK BANNER */}
            {showBackground && (
                <div className="relative flex items-center justify-center bg-black text-white text-sm py-3">
                    <p>
                        Sign up and get 20% off on your first order.{" "}
                        <span className="underline cursor-pointer">Sign Up Now</span>
                    </p>
                    {/* close button  */}
                    <X
                        onClick={() => setShowBackground(false)}
                        className="hidden md:block absolute right-6 cursor-pointer"
                    />
                </div>
            )}

            {/* NAVBAR */}
            <nav>
                <div className="max-w-[1240px] mx-auto flex items-center gap-10 py-4 px-4">
                    {/* LEFT (LOGO + MOBILE MENU) */}

                    <div className="flex items-center gap-4">
                        {/* Hamburger menu */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>

                        {/* bolden text  */}
                        <h1 className="text-3xl font-bold font-heading">SHOP.CO</h1>
                    </div>

                    {/* DESKTOP NAV VIEW */}
                    <div className="hidden md:flex items-center gap-15 justify-center">
                        {/* LINKS */}
                        <div className="flex items-center gap-8">
                            <Link href="/homepage" >Men</Link>

                            <Link href="makeup" className="cursor-pointer">
                                Cosmetics
                            </Link>

                            <Link href="womenproduct" className="cursor-pointer">
                                Women
                            </Link>

                            <Link href="perfume" className="cursor-pointer">
                                Perfume
                            </Link>
                        </div>

                        {/* SEARCH BAR INPUT */}
                        <form onSubmit={handleSearch} className="flex items-center gap-3 bg-[#F0F0F0] rounded-full px-4 py-2 w-[577px] max-w-lg">
                            {/* search icon */}
                            <button type="submit">
                                <Search className="w-5 h-5 text-gray-500" />
                            </button>

                            <Input
                                type="text"
                                placeholder="Search for products..."
                                className="bg-transparent outline-none border-none text-sm w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </div>

                    {/* RIGHT ICONS: CART, SIGNIN */}
                    <div className="flex items-center ml-8 md:ml-0 gap-8">
                        {/* search icon for mobile */}
                        <div className="md:hidden cursor-pointer" onClick={() => {
                            const q = window.prompt("Search for products:");
                            if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
                        }}>
                            <Search className="w-6 h-6 text-black" />
                        </div>

                        {/* cart icon */}
                        <Link href="/cart" className="relative cursor-pointer">
                            <ShoppingCart className="w-6 h-6 text-black" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* signin icon */}
                        <User className="w-6 h-6 text-black cursor-pointer hidden md:block" />
                    </div>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden px-6 pb-4 flex flex-col cursor-pointer space-y-3">
                        <Link href="homepage">Men</Link>
                        <Link href="makeup">Cosmetics</Link>
                        <Link href="womenproduct">Women</Link>
                        <Link href="perfume">Perfume</Link>
                    </div>
                )}

                 {/* border bottom line */}
                 <div className="border-b border-gray-200 max-w-[1220px] mx-auto"> </div>
            </nav>
        </>
    );
}