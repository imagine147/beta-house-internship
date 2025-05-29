import Link from "next/link"
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export default function Footer() {
  return (
    <div className="w-full bg-[#035A33]">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-14 text-white text-sm py-14">
        <div className="w-full md:w-[379px] flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="rounded-[100%] bg-[#3D9970] px-1 py-0.5"><h1 className="text-lg">BH</h1></span>
            <div className="text-lg font-bold">BetaHouse</div>
          </Link>
          <p>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
          <div className="space-y-2">
            <span className="flex gap-2 items-center"><CiLocationOn /><p>95 Tinubu Estate, Lekki, Lagos</p></span>
            <span className="flex gap-2 items-center"><BsTelephone /><p>+234 903 456 7890</p></span>
            <span className="flex gap-2 items-center"><CiMail /><p>support@rentbetahouse.com</p></span>
          </div>
        </div>

        <div className="w-full md:w-[682px] flex flex-col gap-6 md:flex-row justify-between">
          <ul className="flex flex-col gap-2"><p className="text-base font-bold">Quick Links</p>
            <Link className="cursor-pointer" href="/">Home</Link>
            <Link href="#properties" className="cursor-pointer">Properties</Link>
            <li>About</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>

          <ul className="flex flex-col gap-2"><p className="text-base font-bold">More</p>
            <li>Agents</li>
            <li>Affordable Houses</li>
            <li>FAQ's</li>
          </ul>

          <ul className="flex flex-col gap-2"><p className="text-base font-bold">Popular Search</p>
            <li>Apartment for sale</li>
            <li>Apartment for rent</li>
            <li>3 bedroom flat</li>
            <li>Bungalow</li>
          </ul>
        </div>
      </div>
      <div className="border-b text-[#6F6F6F]"></div>
      <div className="w-11/12 md:w-8/10 mx-auto flex flex-col gap-2 md:flex-row justify-between text-white text-sm pt-6 pb-10 text-center">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}