"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import { Interactive3D } from "@/components/interactive-3d/interactive-3d.component";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A] via-[#0a0f1f] to-[#080E1A]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FC5D7F]/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#21DEEA]/5 rounded-full blur-[120px]" />

      <Interactive3D />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] gradient-text mb-6 leading-none animate-fade-in">
          Mr Punk&apos;s
          <br />
          Songs
        </h1>

        <p className="text-[#AFAFAF] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          Música que vibra. Atitude que inspira.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <Link
            href="/music"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FC5D7F] to-[#FC5D7F]/80 text-[#080E1A] font-bold uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,93,127,0.5)] hover:scale-105 no-underline animate-glow"
          >
            <Play className="w-5 h-5 fill-current" />
            Ouvir Agora
          </Link>

          <a
            href="https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-[#21DEEA] text-[#21DEEA] font-bold uppercase rounded-full transition-all duration-300 hover:bg-[#21DEEA]/10 hover:shadow-[0_0_20px_rgba(33,222,234,0.3)] hover:scale-105 no-underline"
          >
            Spotify
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080E1A] to-transparent" />
    </section>
  );
}
