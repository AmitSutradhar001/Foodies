"use client";

import { useState } from "react";
import Link from "next/link";
import LogoImg from "@/public/logo.png";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="text-white sm:hidden">
        {/* Hamburger / Close Button */}
        <div className="flex h-10 w-full justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-6 flex flex-col justify-between items-center"
          >
            {/* Top Line */}
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>

            {/* Middle Line (Hidden when open) */}
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>

            {/* Bottom Line */}
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </button>
          <Image src={LogoImg} className="h-16 w-16" alt="Logo" priority />
        </div>

        {/* Mobile Menu with Smooth Open/Close Animation */}
        <div
          className={`absolute left-0 mt-2 w-48 bg-white border border-blue-500 rounded-md shadow-lg z-20 transform origin-top transition-all duration-500 ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="text-black">
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/meals"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/community"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
