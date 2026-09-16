"use client";

import { Play, ExternalLink } from "lucide-react";

const featuredTracks = [
  {
    id: "1",
    title: "Viagem Cósmica",
    duration: "5:23",
    gradient: "from-[#FC5D7F] to-[#a855f7]",
  },
  {
    id: "2",
    title: "Neon Psicodélico",
    duration: "4:47",
    gradient: "from-[#21DEEA] to-[#3b82f6]",
  },
  {
    id: "3",
    title: "Rock do Outro Mundo",
    duration: "6:12",
    gradient: "from-[#f97316] to-[#FC5D7F]",
  },
];

export function FeaturedTracks() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[#080E1A]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-center text-[#FC5D7F] neon-pink mb-4 animate-fade-in">
          Faixas em Destaque
        </h2>
        <p className="text-[#AFAFAF] text-center mb-16 max-w-2xl mx-auto animate-fade-in delay-100" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          As músicas que estão definindo o som
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTracks.map((track, index) => (
            <div
              key={track.id}
              className={`group relative bg-black/50 border border-[rgba(252,93,127,0.2)] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[rgba(252,93,127,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(252,93,127,0.2)] animate-slide-up`}
              style={{
                opacity: 0,
                animationFillMode: 'forwards',
                animationDelay: `${(index + 1) * 150}ms`,
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${track.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-[#080E1A]/80 rounded-full flex items-center justify-center hover:bg-[#FC5D7F] transition-colors">
                    <Play className="w-8 h-8 text-[#EFEFEF] ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#EFEFEF] font-bold text-lg font-[family-name:var(--font-protest-guerrilla)] group-hover:text-[#21DEEA] transition-colors">
                  {track.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#AFAFAF] text-sm">{track.duration}</span>
                  <a
                    href="https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AFAFAF] hover:text-[#1DB954] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1DB954] text-white font-bold uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,185,84,0.5)] hover:scale-105 no-underline"
          >
            Ver Todas no Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
