import Link from "next/link";
import { Globe, Music2, Video } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080E1A]/95 pt-16 pb-6 overflow-visible animate-fade-in">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FC5D7F] to-transparent shadow-[0_0_15px_rgba(252,93,127,0.5)] animate-gradient" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="flex flex-col">
          <h3 className="text-[#21DEEA] text-xl mb-5 uppercase tracking-widest font-[family-name:var(--font-protest-guerrilla)]">
            MrPunkSongs
          </h3>
          <p className="text-[#AFAFAF] leading-relaxed text-sm">
            Músicas, streaming e tudo sobre Mr Punk da Silva.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#21DEEA] text-xl mb-5 uppercase tracking-widest font-[family-name:var(--font-protest-guerrilla)]">
            Links
          </h3>
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-[#EFEFEF] no-underline transition-all duration-300 hover:text-[#FC5D7F] w-fit relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#FC5D7F] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/music"
              className="text-[#EFEFEF] no-underline transition-all duration-300 hover:text-[#FC5D7F] w-fit relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#FC5D7F] after:transition-all after:duration-300 hover:after:w-full"
            >
              Músicas
            </Link>
          </nav>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#21DEEA] text-xl mb-5 uppercase tracking-widest font-[family-name:var(--font-protest-guerrilla)]">
            Conecte-se
          </h3>
          <div className="flex gap-5">
            <a
              href="https://www.tiktok.com/@mrpunkdasilva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#EFEFEF] text-2xl transition-all duration-300 hover:text-[#21DEEA] hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(33,222,234,0.5)]"
            >
              <Video className="w-6 h-6" />
            </a>
            <a
              href="https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="text-[#EFEFEF] text-2xl transition-all duration-300 hover:text-[#21DEEA] hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(33,222,234,0.5)]"
            >
              <Music2 className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/mrpunkdasilva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#EFEFEF] text-2xl transition-all duration-300 hover:text-[#21DEEA] hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(33,222,234,0.5)]"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative pt-5">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(252,93,127,0.5)] to-transparent mb-5" />
        <p className="text-[#AFAFAF] text-sm text-center">
          &copy; {currentYear} MrPunkSongs. Feito com{" "}
          <span className="text-[#FC5D7F]">♥</span> e{" "}
          <span className="text-[#21DEEA]">♫</span>
        </p>
      </div>
    </footer>
  );
}
