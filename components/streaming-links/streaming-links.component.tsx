"use client";

import { Music2, Video } from "lucide-react";
import { AudioVisualizer } from "@/components/audio-visualizer/audio-visualizer.component";

const platforms = [
  {
    name: "Spotify",
    icon: Music2,
    url: "https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS",
    color: "#1DB954",
    hoverShadow: "0 0 20px_rgba(29,185,84,0.5)",
  },
  {
    name: "TikTok",
    icon: Video,
    url: "https://www.tiktok.com/@mrpunkdasilva",
    color: "#EFEFEF",
    hoverShadow: "0 0 20px_rgba(239,239,239,0.3)",
  },
];

export function StreamingLinks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-center text-[#21DEEA] neon-cyan mb-4 animate-fade-in">
          Onde Escutar
        </h2>

        <div className="mb-8">
          <AudioVisualizer />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-4 p-8 bg-black/50 border border-[rgba(252,93,127,0.2)] rounded-2xl transition-all duration-300 hover:border-[rgba(252,93,127,0.5)] hover:bg-black/70 hover:scale-105 no-underline animate-slide-up delay-${(index + 1) * 100}`}
              style={{
                ["--hover-shadow" as string]: platform.hoverShadow,
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-slow"
                style={{
                  backgroundColor: `${platform.color}20`,
                  border: `2px solid ${platform.color}`,
                }}
              >
                <platform.icon
                  className="w-8 h-8"
                  style={{ color: platform.color }}
                />
              </div>
              <span className="text-[#EFEFEF] font-bold uppercase tracking-wider group-hover:text-[#21DEEA] transition-colors">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
