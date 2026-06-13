"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    icon: "/icons/twitter.svg",
    alt: "Twitter",
    width: 15,
    height: 15,
    bgClass: "bg-white hover:bg-black",
    iconClass: "group-hover:invert",
  },
  {
    id: 2,
    icon: "/icons/facebook.svg",
    alt: "Facebook",
    width: 15,
    height: 15,
    bgClass: "bg-white hover:bg-black",
    iconClass: "invert group-hover:invert-0",
  },
  {
    id: 3,
    icon: "/icons/insta.svg",
    alt: "Instagram",
    width: 15,
    height: 15,
    bgClass: "bg-white hover:bg-black",
    iconClass: "group-hover:invert",
  },
  {
    id: 4,
    icon: "/icons/github.svg",
    alt: "Github",
    width: 15,
    height: 15,
    bgClass: "bg-white hover:bg-black",
    iconClass: "group-hover:invert",
  },
];

const footerColumns = [
  {
    id: 1,
    title: "COMPANY",
    links: ["About", "Features", "Works", "Careers"],
  },
  {
    id: 2,
    title: "HELP ",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    id: 3,
    title: "FAQ",
    links: ["My Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    id: 4,
    title: "RESOURCES",
    links: [
      "Free eBooks",
      "Development Tutorials",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const paymentMethodsIcons = [
  {
    id: 1,
    icon: "/icons/Visa.svg",
    alt: "Visa",
    width: 100,
    height: 80,
  },
  {
    id: 2,
    icon: "/icons/mastercard.svg",
    alt: "Mastercard",
    width: 100,
    height: 80,
  },
  {
    id: 3,
    icon: "/icons/paypal.svg",
    alt: "PayPal",
    width: 100,
    height: 80,
  },
  {
    id: 4,
    icon: "/icons/pay.svg",
    alt: "Apple Pay",
    width: 100,
    height: 80,
  },
  {
    id: 5,
    icon: "/icons/GPay.svg",
    alt: "Google Pay",
    width: 100,
    height: 80,
  },
];

export default function Footer() {
  return (
    //  light gray background
    <footer className="bg-gray-100 w-full pt-15 pb-10 md:pt-25 md:mt-20 mt-35">
      <div className="px-4 w-full">

        {/* Black background Newsletter Section */}
        <section className="bg-black rounded-3xl px-5 py-8 md:px-15 md:py-8 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto -mt-45 mb-10">
          <h1 className="font-bold text-white text-3xl md:text-4xl w-full md:max-w-xl text-center md:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS 
          </h1>

          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-85 mt-6 md:mt-0">
            <div className="flex items-center bg-white rounded-full px-4 gap-3 w-full h-12">
              <Image
                src="/svgs/email.svg"
                alt="email icon"
                height={24}
                width={24}
                className="opacity-40"
              />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="focus-visible:ring-0 px-0 text-base h-full bg-transparent placeholder:text-gray-400 border-none"
              />
            </div>

           {/* Subscribe to newsletter button */}
            <Button className="bg-white text-black font-medium text-base rounded-full w-full h-12 hover:bg-gray-200">
              Subscribe to Newsletter
            </Button>
          </div>
        </section>

        {/* Footer Main Content */}
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-[180px] mt-16">

          {/* Left Side: SHOP.CO and social links */}
          <div className="flex flex-col gap-6 w-full -mt-6 lg:w-[248px]">
            <h1 className="font-bold text-3xl text-black">SHOP.CO</h1>
            <p className="text-lg text-gray-500">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

                {/* SOCIALS ICONS */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href="#"
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 group  ${social.bgClass}`}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={social.width}
                    height={social.height}
                    className={social.iconClass}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full grow justify-between">
            {footerColumns.map((col) => (
              <div key={col.id} className="flex flex-col gap-6">
                <h3 className="font-medium text-black">{col.title}</h3>
                <ul className="flex flex-col gap-4 text-gray-500">
                  {col.links.map((link, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-black">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="border-b border-gray-300 max-w-6xl mx-auto mt-10"></div>

        {/* Last Row: Copyright & Payment Methods */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* Left: Copyright */}
          <div className="text-gray-500 text-sm mt-3 md:mt-0 text-center md:text-left">
            Shop.co &copy; {new Date().getFullYear()}. All Rights Reserved
          </div>

          {/* Right: Payment Methods */}
          <div className="flex gap-3 mt-2 ">
            {paymentMethodsIcons.map((icon) => (
              <Link key={icon.id} href="#">
                <Image
                  src={icon.icon}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
