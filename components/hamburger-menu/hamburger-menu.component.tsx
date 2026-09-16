"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-black/50 border border-[rgba(252,93,127,0.3)] rounded-full backdrop-blur-md transition-all duration-300 hover:border-[#FC5D7F] hover:shadow-[0_0_15px_rgba(252,93,127,0.3)] hover:scale-110 animate-fade-in"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#EFEFEF]" />
        ) : (
          <Menu className="w-6 h-6 text-[#EFEFEF]" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#080E1A]/98 backdrop-blur-md flex flex-col justify-center items-center gap-10">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[#EFEFEF] text-3xl font-[family-name:var(--font-protest-guerrilla)] hover:text-[#21DEEA] transition-all duration-300 no-underline animate-fade-in delay-100"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            Home
          </Link>
          <Link
            href="/music"
            onClick={closeMenu}
            className="text-[#EFEFEF] text-3xl font-[family-name:var(--font-protest-guerrilla)] hover:text-[#21DEEA] transition-all duration-300 no-underline animate-fade-in delay-200"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            Músicas
          </Link>
        </div>
      )}
    </>
  );
}
