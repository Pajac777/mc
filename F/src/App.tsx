import { useState } from 'react';
import { Play, CheckCircle2, MonitorPlay, Zap, ShieldCheck, Star, Heart, MessageCircle } from 'lucide-react';

function ButtonCTA({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center px-8 py-5 text-lg md:text-xl font-display font-bold uppercase tracking-widest text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)] cursor-pointer ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2 font-bold">{children}</span>
      </button>
    );
  }
  return (
    <a 
      href="#checkout" 
      className={`group relative inline-flex items-center justify-center px-8 py-5 text-lg md:text-xl font-display font-bold uppercase tracking-widest text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)] ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 font-bold">{children}</span>
    </a>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-200 font-sans relative overflow-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* Ambient Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Urgency Bar */}
      <div className="bg-yellow-400 text-black px-[12px] pt-[12px] pb-3 mt-0 text-center text-sm md:text-base font-bold tracking-wide uppercase flex items-center justify-center gap-2 z-50 relative shadow-md">
        <span>🔥</span> O FILME MAIS COMENTADO DO MOMENTO
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 pt-16 md:pt-24 pb-16 flex flex-col items-center text-center">
          
          <h1 className="text-[30px] md:text-6xl lg:text-7xl font-display font-bold uppercase text-white mb-[24px] px-0 pt-0 -ml-[13px] -mr-[13px] leading-[1.1] max-w-4xl tracking-wide drop-shadow-lg">
            O filme que revela a história por trás do <span className="text-yellow-400">Rei do Pop</span>
          </h1>
          
          <p className="text-[16px] md:text-xl text-slate-300 max-w-3xl mb-12 font-light leading-relaxed -ml-[11px] -mr-[13px] mt-0 pt-0 pl-0">
            Conheça a trajetória de Michael Jackson, o artista que mudou a música, a dança e a cultura mundial para sempre.
          </p>

          {/* VSL Placeholder */}
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative mb-12">
            <iframe
              width="100%"
              height="700"
              src="https://www.youtube.com/embed/L_Mve31X2UE?rel=0&controls=1&playsinline=1"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Offer Card */}
          <div id="checkout" className="w-full max-w-md bg-[#0a0f1c] rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
             {/* Glow inside card */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-400/5 blur-[50px] pointer-events-none" />
             
             <h3 className="font-display text-2xl font-bold uppercase text-white tracking-widest mb-6">O que você vai receber:</h3>
             
             <ul className="space-y-4 mb-8 text-left">
               {[
                 "Filme Completo Michael HD",
                 "Dublado e legendado",
                 "Acesso imediato e vitalício",
                 "Pagamento único"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                   <span className="text-slate-300">{item}</span>
                 </li>
               ))}
             </ul>

             <div className="text-center mb-8">
               <span className="text-sm text-slate-400 uppercase tracking-widest block mb-2">Por apenas</span>
               <div className="font-display text-5xl font-bold text-white tracking-wider">R$ 5,00</div>
             </div>

             <ButtonCTA className="w-full text-base py-5" onClick={() => setIsModalOpen(true)}>
               Quero completo por R$5,00
             </ButtonCTA>
          </div>

        </section>

        {/* BENEFTIS SECTION */}
        <section className="py-24 bg-[#0a0f1c]/50 relative border-y border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <MonitorPlay className="w-10 h-10 text-yellow-400 mb-4" />
                <h4 className="font-display text-xl font-bold uppercase text-white tracking-widest mb-2">Qualidade HD</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Assista em qualquer dispositivo com imagem e som de cinema.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                <h4 className="font-display text-xl font-bold uppercase text-white tracking-widest mb-2">Acesso Imediato</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Liberado no seu e-mail no mesmo minuto após a confirmação.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <ShieldCheck className="w-10 h-10 text-yellow-400 mb-4" />
                <h4 className="font-display text-xl font-bold uppercase text-white tracking-widest mb-2">Compra Segura</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Plataforma blindada para você comprar com total tranquilidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="py-24 bg-[#090d16] border-y border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-[21px] font-bold text-center uppercase text-white mb-16 tracking-wide drop-shadow-md">
              Quem assistiu, <span className="text-yellow-400">amou</span> ❤️
            </h2>

            <img 
              src="https://iili.io/CBScV2I.jpg" 
              alt="Depoimentos" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/5"
            />
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-32 container mx-auto px-4 flex flex-col items-center text-center relative">
          {/* Bottom Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-6 tracking-wider z-10">
            A oportunidade <span className="text-yellow-400">acaba em breve</span>
          </h2>
          <p className="text-slate-400 mb-10 tracking-widest uppercase text-sm z-10">Não perca a chance de garantir sua cópia em HD.</p>
          
          <ButtonCTA className="z-10" onClick={() => setIsModalOpen(true)}>
            Quero completo por R$5,00
          </ButtonCTA>
        </section>

      </main>
      
      {/* Modal / Popup Premium */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#0a0f1c] border-2 border-yellow-400 rounded-2xl p-5 md:p-8 shadow-[0_0_50px_rgba(250,204,21,0.15)] overflow-hidden">
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white tracking-widest mb-1 text-center">Pacote Premium</h3>
            <div className="font-display text-3xl md:text-4xl font-bold text-yellow-400 tracking-wider text-center mb-1">R$ 10</div>
            <div className="text-center text-slate-400 uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6">Acesso vitalício</div>

            <p className="text-white font-bold mb-3 md:mb-4 text-xs md:text-sm">Você recebe:</p>
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-6 text-slate-300 text-xs md:text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🎬 Filme Completo Michael HD</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🔥 Materiais bônus de fã</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🎥 Documentário exclusivo</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Michael Jackson's Ghosts - 1997</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Moonwalker - 1988</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Dublado e legendado</span></li>
            </ul>

            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded p-2 md:p-3 mb-5 md:mb-6">
              <p className="text-yellow-400 text-[10px] md:text-xs text-center font-bold">⚠️ Depois que sair dessa tela essa oferta desaparece.</p>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://ggcheckout.app/checkout/v5/QBYwzVO1Bg2MxWTBU3H3"
                className="w-full relative inline-flex items-center justify-center px-2 py-3 md:px-6 md:py-4 text-[12px] sm:text-sm md:text-base font-display font-bold uppercase tracking-wide md:tracking-widest text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-yellow-300 shadow-md cursor-pointer whitespace-nowrap"
              >
                Pacote Premium por R$10
              </a>

              <a 
                href="https://ggcheckout.app/checkout/v5/Y25OYUYn49zTE5oNsLyB"
                className="w-full relative inline-flex items-center justify-center px-1 py-3 md:px-6 md:py-4 text-[10px] sm:text-[11px] md:text-sm font-display font-bold uppercase tracking-wide md:tracking-widest text-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-md cursor-pointer whitespace-nowrap"
              >
                Continuar apenas o filme por R$5
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-[#04060d]">
        <p className="text-slate-600 text-xs">Pirataria é crime. Todos os direitos reservados. 2026.</p>
      </footer>
    </div>
  );
}
