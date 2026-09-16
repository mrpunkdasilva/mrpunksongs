"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="header-wrapper sticky top-0 z-50 bg-[#080E1A]/95 backdrop-blur-md border-b border-[rgba(252,93,127,0.3)]">
      <header className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="flex items-center gap-4 no-underline" onClick={closeMenu}>
          <h1 className="text-2xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] gradient-text">
            MrPunkSongs
          </h1>
        </Link>

        <button
          className="md:hidden p-2 z-50"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#EFEFEF]" />
          ) : (
            <Menu className="w-6 h-6 text-[#EFEFEF]" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#EFEFEF] text-lg relative py-1 transition-colors hover:text-[#21DEEA] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#FC5D7F] after:to-[#21DEEA] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left no-underline"
          >
            Home
          </Link>
          <Link
            href="/music"
            className="text-[#EFEFEF] text-lg relative py-1 transition-colors hover:text-[#21DEEA] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#FC5D7F] after:to-[#21DEEA] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left no-underline"
          >
            Músicas
          </Link>
        </nav>
      </header>

      <div className="h-[2px] bg-gradient-to-r from-[#FC5D7F] to-[#21DEEA]" />

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#080E1A]/98 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-10">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[#EFEFEF] text-2xl font-[family-name:var(--font-protest-guerrilla)] hover:text-[#21DEEA] transition-all duration-300 no-underline"
          >
            Home
          </Link>
          <Link
            href="/music"
            onClick={closeMenu}
            className="text-[#EFEFEF] text-2xl font-[family-name:var(--font-protest-guerrilla)] hover:text-[#21DEEA] transition-all duration-300 no-underline"
          >
            Músicas
          </Link>
        </div>
      )}
    </div>
  );
}
