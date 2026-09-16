"use client";

import { MapPin, Calendar } from "lucide-react";

const tourDates = [
  {
    id: "1",
    date: "Em Breve",
    venue: "A Definir",
    city: "Sua Cidade",
    status: "soon",
  },
];

export function TourDates() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A] via-[#0d1525] to-[#080E1A]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FC5D7F]/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-center text-[#21DEEA] neon-cyan mb-4 animate-fade-in">
          Shows
        </h2>
        <p className="text-[#AFAFAF] text-center mb-16 max-w-2xl mx-auto animate-fade-in delay-100" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          Próximas apresentações e eventos
        </p>

        <div className="space-y-4">
          {tourDates.map((tour, index) => (
            <div
              key={tour.id}
              className="group flex flex-col sm:flex-row items-center justify-between p-6 bg-black/50 border border-[rgba(252,93,127,0.2)] rounded-xl transition-all duration-300 hover:border-[rgba(252,93,127,0.5)] hover:bg-black/70 animate-slide-up"
              style={{
                opacity: 0,
                animationFillMode: 'forwards',
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div className="flex items-center gap-6 mb-4 sm:mb-0">
                <div className="text-center min-w-[80px]">
                  <Calendar className="w-5 h-5 text-[#FC5D7F] mx-auto mb-1" />
                  <span className="text-[#EFEFEF] font-bold font-[family-name:var(--font-protest-guerrilla)] text-lg">
                    {tour.date}
                  </span>
                </div>

                <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#FC5D7F] to-transparent hidden sm:block" />

                <div>
                  <h3 className="text-[#EFEFEF] font-bold text-lg group-hover:text-[#21DEEA] transition-colors">
                    {tour.venue}
                  </h3>
                  <div className="flex items-center gap-2 text-[#AFAFAF]">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.city}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-2 border border-[#21DEEA] text-[#21DEEA] rounded-full text-sm font-bold uppercase tracking-wider">
                Em Breve
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-[#AFAFAF] mb-6">
            Quer me contratar para um show?
          </p>
          <a
            href="mailto:contato@mrpunksongs.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#FC5D7F] text-[#FC5D7F] font-bold uppercase rounded-full transition-all duration-300 hover:bg-[#FC5D7F]/10 hover:shadow-[0_0_20px_rgba(252,93,127,0.3)] no-underline"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
