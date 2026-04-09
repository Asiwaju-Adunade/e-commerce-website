// "use client";

// import Navbar from "@/components/ui/navbar";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <section className="relative w-full mx-auto h-screen bg-[#F2F0F1] overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute right-0 top-0 w-[50%] h-full min-w-screen z-0">
//           <Image
//             src="/svgs/landingimg.png"
//             alt="Hero Image"
//             fill
//             className="object-cover object-top"
//             priority
//           />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 pt-20 pl-20">
//           {/* FIND CLOTHES THAT MATCHES YOUR STYLE */}
//           <h1
//             className="text-black font-bold text-6xl leading-[64px] w-[577px] m-0"
//             style={{ fontFamily: "'Integral CF', sans-serif" }}
//           >
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>

//           {/* Description */}
//           <p
//             className="text-black/60 font-normal text-[16px] leading-[22px] w-[545px] mt-[32px]"
//             style={{ fontFamily: "'Satoshi', sans-serif" }}
//           >
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of
//             style.
//           </p>

//           {/* Shop Now Button */}
//           <button
//             className="flex flex-row justify-center items-center px-[54px] py-[16px] gap-[12px] bg-black rounded-[62px] w-[210px] h-[52px] mt-[32px] text-white font-medium text-[16px] leading-[22px] hover:bg-gray-800 transition"
//             style={{ fontFamily: "'Satoshi', sans-serif" }}
//           >
//             Shop Now
//           </button>

//           {/* Stats Section (Frame 57) */}
//           <div className="flex flex-row items-center gap-[32px] w-[596px] h-[74px] mt-[48px]">
//             {/* Stat 1 */}
//             <div className="flex flex-col items-start w-[141px]">
//               <div
//                 className="text-black font-bold text-[40px] leading-[54px] -my-[2px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 200+
//               </div>
//               <div
//                 className="text-black/60 font-normal text-[16px] leading-[22px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 International Brands
//               </div>
//             </div>

//             {/* Separator 1 */}
//             <div className="w-[1px] h-[74px] bg-black/10"></div>

//             {/* Stat 2 */}
//             <div className="flex flex-col items-start w-[156px]">
//               <div
//                 className="text-black font-bold text-[40px] leading-[54px] -my-[2px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 2,000+
//               </div>
//               <div
//                 className="text-black/60 font-normal text-[16px] leading-[22px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 High-Quality Products
//               </div>
//             </div>

//             {/* Separator 2 */}
//             <div className="w-[1px] h-[74px] bg-black/10"></div>

//             {/* Stat 3 */}
//             <div className="flex flex-col items-start w-[171px]">
//               <div
//                 className="text-black font-bold text-[40px] leading-[54px] -my-[2px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 30,000+
//               </div>
//               <div
//                 className="text-black/60 font-normal text-[16px] leading-[22px]"
//                 style={{ fontFamily: "'Satoshi', sans-serif" }}
//               >
//                 Happy Customers
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }








"use client";

import Navbar from "@/components/ui/navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative w-full min-h-screen bg-[#F2F0F1] overflow-hidden">

        {/* DESKTOP IMAGE (right side background) */}
        <div className="absolute right-0 top-0 w-screen h-full z-0 hidden md:block">
          <Image
            src="/svgs/landingimg.png"
            alt="Hero"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24">

          <div className="max-w-xl space-y-6">

            {/* HEADING */}
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Integral CF', sans-serif" }}
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-black/60 text-base leading-relaxed"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your sense
              of style.
            </p>

            {/* BUTTON */}
            <button
              className="bg-black text-sm w-52 text-white py-4 rounded-full hover:bg-gray-800 transition"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Shop Now
            </button>

            {/* STATS */}
            <div className="flex flex-wrap items-center gap-6 pt-6">

              <div>
                <p className="text-3xl md:text-4xl font-bold">200+</p>
                <p className="text-black/60 text-sm">
                  International Brands
                </p>
              </div>

              <div className="hidden md:block w-0.5 h-12 bg-black/10" />

              <div>
                <p className="text-3xl md:text-4xl font-bold">2,000+</p>
                <p className="text-black/60 text-sm">
                  High-Quality Products
                </p>
              </div>

              <div className="hidden md:block w-0.5 h-12 bg-black/10" />

              <div>
                <p className="text-3xl md:text-4xl font-bold">30,000+</p>
                <p className="text-black/60 text-sm">
                  Happy Customers
                </p>
              </div>

            </div>
          </div>

          {/* MOBILE IMAGE (shown only on small screens) */}
          <div className="mt-10 md:hidden">
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
    </>
  );
}