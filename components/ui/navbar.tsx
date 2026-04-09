"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showBackground, setShowBackground] = useState(true);

    return (
    <>
        {showBackground && (
        <div className="relative flex items-center justify-center p-3 bg-black text-sm text-white py-3">
             <p> Sign up and get 20% off on your first order. <span className="underline">Sign Up Now</span></p>
             <div className="hidden md:block absolute right-4 cursor-pointer">
                <X onClick={() => setShowBackground(false)}/>
             </div>
        </div>
        )}
            <nav className="border-b border-gray-200 max-w-6xl mx-auto mt-5">
            <div className="flex gap-5 px-5 items-center justify-between py-4">

                {/* LEFT SECTION (Mobile + Logo) */}
                <div className="flex items-center px-5 max-w-4xl gap-4">
                    {/* Hamburger (Mobile Only) */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                    {/* text */}
                    <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
                </div>

                {/* DESKTOP NAV VIEW */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <p>Shop</p>
                        <Image
                            src="/svgs/dropdown.svg"
                            alt="dropdown"
                            width={10}
                            height={10}
                        />
                    </div>

                    <p className="cursor-pointer">On Sale</p>
                    <p className="cursor-pointer">New Arrivals</p>
                    <p className="cursor-pointer">Brands</p>

                    {/* Search Bar */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-[300px]">
                        <Image
                            src="/svgs/searchimg.svg"
                            alt="search"
                            width={18}
                            height={18}
                        />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent outline-none text-sm w-full"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/svgs/cartimage.svg"
                            alt="cart"
                            width={20}
                            height={20}
                        />
                        <Image
                            src="/svgs/signinimg.svg"
                            alt="signin"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                {/* MOBILE ICONS */}
                <div className="flex md:hidden px-5 cursor-pointer items-center gap-5">
                    <Image
                        src="/svgs/searchmobile.svg"
                        alt="search"
                        width={30}
                        height={20}
                    />
                    <Image
                        src="/svgs/cartimage.svg"
                        alt="cart"
                        width={30}
                        height={20}
                    />
                    <Image
                        src="/svgs/signinimg.svg"
                        alt="signin"
                        width={30}
                        height={20}
                    />
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3">
                    <p className="cursor-pointer">Shop</p>
                    <p className="cursor-pointer">On Sale</p>
                    <p className="cursor-pointer">New Arrivals</p>
                    <p className="cursor-pointer">Brands</p>
                </div>
            )}
        </nav>
    </>
    );
}