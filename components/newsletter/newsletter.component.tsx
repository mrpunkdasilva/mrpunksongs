"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080E1A]" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#21DEEA] to-transparent opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase font-[family-name:var(--font-protest-guerrilla)] text-[#FC5D7F] neon-pink mb-4 animate-fade-in">
          Fique por Dentro
        </h2>
        <p className="text-[#AFAFAF] mb-10 text-lg animate-fade-in delay-100" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          Receba novidades, lançamentos e bastidores diretamente no seu email.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-slide-up delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            required
            className="flex-1 px-6 py-4 bg-black/50 border border-[rgba(252,93,127,0.3)] rounded-full text-[#EFEFEF] placeholder-[#AFAFAF] focus:outline-none focus:border-[#FC5D7F] focus:shadow-[0_0_15px_rgba(252,93,127,0.3)] transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-[#FC5D7F] to-[#FC5D7F]/80 text-[#080E1A] font-bold uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,93,127,0.5)] hover:scale-105 flex items-center justify-center gap-2"
          >
            {isSubmitted ? (
              <>
                <Check className="w-5 h-5" />
                Enviado!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Inscrever
              </>
            )}
          </button>
        </form>

        <p className="text-[#AFAFAF]/60 text-sm mt-6 animate-fade-in delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          Sem spam. Apenas rock psicodélico de qualidade.
        </p>
      </div>
    </section>
  );
}
