import { MusicPlayer } from "@/components/music-player/music-player.component";

const sampleTracks = [
  { id: "1", title: "Música 1", duration: "3:45" },
  { id: "2", title: "Música 2", duration: "4:12" },
  { id: "3", title: "Música 3", duration: "3:58" },
  { id: "4", title: "Música 4", duration: "5:01" },
];

export default function MusicPage() {
  return (
    <main className="flex-1 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-center text-[#21DEEA] neon-cyan mb-4 animate-fade-in">
          Músicas
        </h1>
        <p className="text-[#AFAFAF] text-center mb-12 max-w-2xl mx-auto animate-fade-in delay-100" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          Ouça minhas faixas e descubra o som de Mr Punk da Silva.
        </p>

        <div className="animate-slide-up delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <MusicPlayer tracks={sampleTracks} />
        </div>

        <div className="mt-16 text-center animate-slide-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-[#FC5D7F] neon-pink mb-6">
            Mais Músicas
          </h2>
          <p className="text-[#AFAFAF] mb-8">
            Novas faixas em breve. Fique ligado!
          </p>
          <a
            href="https://open.spotify.com/artist/4WofOP5mA0N8rheRFIHRBS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1DB954] text-white font-bold uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,185,84,0.5)] hover:scale-105 no-underline"
          >
            Ouvir no Spotify
          </a>
        </div>
      </div>
    </main>
  );
}
