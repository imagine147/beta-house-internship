"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenubar = () => setMenuOpen(false);

  const openMenubar = () => {
    if (window.innerWidth <= 1024) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleClickOutside = (event) => {
    if (navRef?.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="bg-[#1D293F1F]  w-full fixed top-0 z-9999 shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 cursor-pointer">
          <span className="rounded-[100%] bg-[#3D9970] px-1 py-0.5"><h1 className="text-lg">BH</h1></span>
          <div className="text-lg font-bold">BetaHouse</div>
        </Link>
        <button className="absolute right-4 top-6 md:hidden text-white cursor-pointer" onClick={openMenubar}>
          {menuOpen ? ( <IoClose className="w-[32px] h-[32px]"/> ) : ( <HiMenuAlt4 className="w-[32px] h-[32px]" />)}
        </button>

        {/* Mobile nav */}
        <div ref={navRef}
            className={`absolute top-full right-0 w-full bg-white shadow-lg p-5 md:hidden flex flex-col gap-4 z-50 transition-all ${
              menuOpen ? 'block' : 'hidden'
            }`}>
          <div>
            <ul className="flex flex-col  gap-4 text-[#CAD4DE] text-sm py-2">
              <Link href="/" passHref onClick={() => { handleSetActive(''); closeMenubar(); }}  className="hover:text-[#2C6A4D] cursor-pointer">Home</Link>
              <div className="border-b border-b-[#CAD4DE]"></div>
              <Link href="#properties" passHref onClick={() => { handleSetActive('properties'); closeMenubar(); }} className="hover:text-[#2C6A4D] cursor-pointer">Properties</Link>
              <div className="border-b border-b-[#CAD4DE]"></div>
              <li className="hover:text-[#2C6A4D] cursor-pointer">About Us</li>
              <div className="border-b border-b-[#CAD4DE]"></div>
              <li className="hover:text-[#2C6A4D] cursor-pointer">Blog</li>
              <div className="border-b border-b-[#CAD4DE]"></div>
              <li className="hover:text-[#2C6A4D] cursor-pointer">Contact Us</li>
              <div className="border-b border-b-[#CAD4DE]"></div>
            </ul>

            <div className="w-full flex items-center gap-4 text-sm py-4">
              <Link href="/auth/signin" passHref onClick={() => { handleSetActive('signin'); closeMenubar(); }} className="w-1/2 text-[#3D9970] px-6 py-2 rounded hover:bg-[#2C6A4D] border border-[#3D9970]">Sign In</Link>
              <Link href="/auth/signin" passHref onClick={() => { handleSetActive('signin'); closeMenubar(); }} className="w-1/2 bg-[#3D9970] text-white px-6 py-2 rounded-md hover:bg-[#2C6A4D]">Login</Link>
            </div>
          </div>
        </div>

        {/* Dessktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-white text-sm py-2">
            <Link href="/" className="hover:border-b cursor-pointer">Home</Link>
            <Link href="#properties" className="hover:border-b cursor-pointer">Properties</Link>
            <li className="hover:border-b cursor-pointer">About Us</li>
            <li className="hover:border-b cursor-pointer">Blog</li>
            <li className="hover:border-b cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/auth/signin" passHref><button className="text-white px-6 py-2 rounded hover:bg-[#2C6A4D] border">Sign In</button></Link>
          <Link href="/auth/signin"><button className="bg-[#3D9970] text-white px-6 py-2 rounded-md hover:bg-[#2C6A4D] cursor-pointer">Login</button></Link>
        </div>
      </div>
    </div>
  )
}