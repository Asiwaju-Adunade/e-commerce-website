"use client";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumb = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Cart",
        link: "/cart",
    },
];

import { useCart } from "@/context/CartContext";

export default function Page() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <main className="mb-5 max-w-6xl mx-auto px-4 py-8">
       {/* Breadcrumb section  */}
       <Breadcrumb className="font-satoshi mb-2">
         <BreadcrumbList className="text-base sm:text-base  gap-3">
           {breadcrumb.map((item, index) => [
             <BreadcrumbItem key={`${item.id}-item`}>
               <BreadcrumbLink 
                 render={<Link href={item.link} />} 
                 className={index === breadcrumb.length - 1 ? "text-black" : "text-gray-500 hover:text-black transition-colors"}
               >
                 {item.name}
               </BreadcrumbLink> 
             </BreadcrumbItem>,
             
             /* Separator (only if not last item) */
             index !== breadcrumb.length - 1 && (
               <BreadcrumbSeparator key={`${item.id}-sep`} />
             )
           ])}
         </BreadcrumbList>
        </Breadcrumb>

       {/* Future Cart Content goes here */}
       <h1 className="font-bold md:text-4xl text-3xl mb-5">Your Cart</h1>

       {/* cart items */}
       <div className="mx-auto gap-5 w-full items-start flex flex-col md:flex-row">
         
         {/* Cart Items List */}
         <div className="border border-gray-200 w-full md:w-[715px] p-4 md:p-6 rounded-2xl flex flex-col gap-6">
           {cartItems.length === 0 ? (
             <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
           ) : (
             cartItems.map((item, index) => (
               <div key={item.id} className="w-full">
                 <div className="flex gap-4 w-full">
                   
                   {/* Item Image */}
                   <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-xl shrink-0 relative overflow-hidden">
                     <Image 
                       src={item.image} 
                       alt={item.name} 
                       fill 
                       className="object-cover" 
                     />
                   </div>
                   
                   {/* Item Details */}
                   <div className="flex flex-col justify-between grow w-full">
                     {/* Top Row: Name & Delete Icon */}
                     <div className="flex justify-between items-start">
                       <div className="flex flex-col gap-1">
                         <h3 className="font-bold text-lg md:text-xl font-satoshi text-black">{item.name}</h3>
                         <p className="text-sm font-satoshi text-black">
                           Size: <span className="text-gray-500 capitalize">One Size</span>
                         </p>
                         <p className="text-sm font-satoshi text-black">
                           Color: <span className="text-gray-500 capitalize">Default</span>
                         </p>
                       </div>
                       <button onClick={() => removeFromCart(item.id)} className="shrink-0 ml-2 cursor-pointer">
                         <Image src="/icons/deleteicon.svg" alt="delete" width={24} height={24} />
                       </button>
                     </div>
                     
                     {/* Bottom Row: Price & Quantity */}
                     <div className="flex justify-between items-center mt-2 md:mt-4">
                       <p className="font-bold text-xl md:text-2xl font-satoshi text-black">${item.price*item.quantity}</p>
                       
                       <div className="flex justify-between items-center bg-[#F0F0F0] rounded-full px-4 md:px-5 py-2 w-[100px] md:w-[126px] h-10 md:h-11">
                         <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-black font-medium text-lg leading-none cursor-pointer">-</button>
                         <span className="font-medium text-sm text-black">{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-black font-medium text-lg leading-none cursor-pointer">+</button>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Separator  bottom line */}
                 {index !== cartItems.length - 1 && (
                   <div className="w-full bg-gray-200 h-px mt-6"></div>
                 )}
               </div>
             ))
           )}
         </div>
          
          {/* second card items */}
          <div className="border-gray-200 border space-y-3 w-85 h-96 py-5 p-3 ml-5 md:ml-0 rounded-2xl">
            {/* summary card */}
             <h1 className="font-bold"> Order Summary</h1>
            <div className="flex justify-between ">
               <p className="text-gray-500 text-sm">Subtotal</p>
               <p className="font-bold">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between ">
               <p className="text-gray-500 text-sm">Discount (-20%)</p>
               <p className="font-bold text-red-500">-${(cartTotal * 0.2).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
               <p className="text-gray-500 text-sm"> Delivery fee</p>
               <p className="font-bold">$15.00</p>
            </div>

            {/* border bottom line  */}
            <div className="w-full bg-gray-200 h-px mt-5"></div>

             {/* total part */}
            <div className="flex my-5 justify-between">
               <p className="text-gray-500 text-sm"> Total</p>
               <p className="font-bold"> ${(cartTotal > 0 ? cartTotal * 0.8 + 15 : 0).toFixed(2)}</p>
            </div>

            {/* button part  */}
            <div className="flex justify-between   gap-2">
              <div className="flex bg-gray-100 h-10 p-3 w-80 rounded-full items-center px-2">
                <Image src="/icons/labelicon.svg" alt="label icon" width={20} height={20} />
                <Input type="text" placeholder="Add promo code" className="outline-none border-none" />
              </div>
               <Button className="rounded-full w-30 h-10"> Apply</Button>
            </div>

            {/* checkout button */}
              <Button className="rounded-full mt-3 w-full h-12"> Checkout  <Image src="/icons/nexticon.svg" alt="next icon" width={20} height={20} /></Button>
          </div>
        </div>
      </main>
    </>
  );
}