"use client";

export function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A] via-[#0d1525] to-[#080E1A]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-[#21DEEA] neon-cyan mb-6">
              Sobre
            </h2>
            <p className="text-[#AFAFAF] text-lg leading-relaxed mb-6">
              Mr Punk da Silva é um artista de rock psicodélico que mistura
              sons retrô com atitude contemporânea. Suas músicas são uma
              viagem sonora que transporta o ouvinte para outro plano.
            </p>
            <p className="text-[#AFAFAF] text-lg leading-relaxed mb-8">
              Com influências que vão de Pink Floyd a Tame Impala, o som é
              uma fusão de guitarras distorcidas, synths hipnóticos e
              letras que exploram a consciência expandida.
            </p>

            <div className="flex gap-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-[#FC5D7F] font-[family-name:var(--font-protest-guerrilla)]">∞</span>
                <p className="text-[#AFAFAF] text-sm mt-1">Viagens Sonoras</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-[#21DEEA] font-[family-name:var(--font-protest-guerrilla)]">24/7</span>
                <p className="text-[#AFAFAF] text-sm mt-1">Psicodelia</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-[#FC5D7F] font-[family-name:var(--font-protest-guerrilla)]">★</span>
                <p className="text-[#AFAFAF] text-sm mt-1">Rock Puro</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FC5D7F]/20 to-[#21DEEA]/20 border border-[rgba(252,93,127,0.3)] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/placeholder-artist.jpg')] bg-cover bg-center opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#EFEFEF] font-[family-name:var(--font-protest-guerrilla)] text-xl uppercase">
                  Rock Psicodélico
                </p>
                <p className="text-[#AFAFAF] text-sm">
                  Desde 2024
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FC5D7F]/10 rounded-full blur-xl animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#21DEEA]/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
