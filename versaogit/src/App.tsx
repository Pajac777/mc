import { useRef, useEffect } from 'react';
import { Play, CheckCircle2, MonitorPlay, Zap, ShieldCheck, Star, Heart, MessageCircle, ChevronRight, ChevronLeft, Clock } from 'lucide-react';

export default function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const carouselImages = [
    "https://iili.io/CBSmbXp.jpg",
    "https://iili.io/CBUKH4R.jpg",
    "https://iili.io/Co21R5P.jpg",
    "https://iili.io/Co21TgV.jpg",
    "https://iili.io/Co215e1.jpg",
    "https://iili.io/Co21AdB.jpg"
  ];

  useEffect(() => {
    // Litevideo
    const script = document.createElement('script');
    script.src = "https://app.litevideo.net/p.js";
    script.async = true;
    document.body.appendChild(script);

    // Notiflix
    const notiflixScript = document.createElement('script');
    notiflixScript.src = "https://cdn.jsdelivr.net/npm/notiflix@2.6.0/dist/notiflix-aio-2.6.0.min.js";
    notiflixScript.async = true;
    document.body.appendChild(notiflixScript);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
        var position = "left-bottom";
        var color = "verde";
        var animation = "from-left";
        var product_name = "";
        var phrase = "acabou de comprar";
        var timeout = 4000;
        var type_name = "masc, fem";
        var min_time = 4;
        var max_time = 20;
        var names_masc = ['Jose', 'Joao', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'Andre', 'Fernando', 'Fabiano', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cicero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];
        var names_fem = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];

        function show_notification() {
            if (typeof Notiflix === 'undefined') {
                setTimeout(show_notification, 1000);
                return;
            }
            
            var msg_final = "";
            var option = {
                position: position,
                cssAnimationStyle: animation,
                plainText: false,
                timeout: timeout
            };

            if (type_name == "masc") {
                msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
            } else if (type_name == "fem") {
                msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
            } else {
                var array_aux = ["masc", "fem"];
                if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
                    msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
                } else {
                    msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
                }
            }
 
            msg_final += decodeURIComponent(escape(" " + phrase + " " + product_name));
 
            if (color == "verde") Notiflix.Notify.Success(msg_final, option);
            if (color == "azul") Notiflix.Notify.Info(msg_final, option);
            if (color == "vermelho") Notiflix.Notify.Failure(msg_final, option);
            if (color == "amarelo") Notiflix.Notify.Warning(msg_final, option);
 
            var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
            setTimeout(show_notification, rand * 1000);
        }
        setTimeout(show_notification, 4 * 1000);
    `;
    document.body.appendChild(inlineScript);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.body.contains(notiflixScript)) document.body.removeChild(notiflixScript);
      if (document.body.contains(inlineScript)) document.body.removeChild(inlineScript);
    };
  }, []);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-200 font-sans relative overflow-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* Ambient Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Urgency Bar */}
      <div align="center" style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'Arial', backgroundColor: '#D11111', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '0px', paddingRight: '0px' }}>
        Desconto só <span style={{ color: '#FFFF00' }}>HOJE</span> nessa página <span style={{ color: '#FFFF00' }}>
          {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
        </span>
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 pt-16 md:pt-24 pb-16 flex flex-col items-center text-center">
          
          <h1 className="text-[30px] md:text-6xl lg:text-7xl font-display font-bold uppercase text-white mb-[24px] px-0 pt-0 -ml-[13px] -mr-[13px] leading-[1.1] max-w-4xl tracking-wide drop-shadow-lg">
            ASSISTA AO FILME COMPLETO DO <span className="text-yellow-400">MICHAEL JACKSON</span>
          </h1>
          
          <p className="text-[16px] md:text-xl text-slate-300 max-w-3xl mb-8 font-light leading-relaxed -ml-[11px] -mr-[13px] mt-0 pt-0 pl-0">
            O filme mais comentado do momento já está disponível para <strong className="text-white font-bold">assistir agora.</strong>
          </p>

          <div className="flex items-center justify-center gap-2 mb-2 md:mb-3 text-[12px] md:text-[14px] font-semibold text-white/90 uppercase tracking-wide whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,197,94,0.6)] flex-shrink-0"></span>
            VEJA COMO ASSISTIR
          </div>

          {/* VSL Placeholder */}
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative mb-12">
            <div dangerouslySetInnerHTML={{ __html: '<lt-v2 v="241d548a-6297-4405-b432-119dc1ca33fa" ar="9:16" sc="0" st="0" ib="22c55e" ps="xlarge" pe="4x" ph="8" tc="Como Baixar"></lt-v2>' }} />
          </div>

          {/* Offers Section */}
          <div id="checkout" className="w-full max-w-lg mx-auto flex flex-col gap-10 relative z-10">
            {/* R$ 10 Plan - Featured */}
            <div className="relative w-full bg-[#0a0f1c] border-2 border-yellow-400 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(250,204,21,0.15)] flex flex-col overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1.5 rounded-b-xl text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md z-20">
                🔥 MAIS ESCOLHIDO PELOS FÃS
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-400/10 blur-[50px] pointer-events-none" />
              
              <h3 className="font-display text-[18px] sm:text-xl md:text-2xl font-bold uppercase text-white tracking-[0.1em] sm:tracking-widest mb-1 text-center mt-4 relative z-10 w-full leading-snug">LEVE A EXPERIÊNCIA<br /> <span className="text-yellow-400">COMPLETA</span> DO REI DO POP</h3>
              <div className="font-display text-4xl md:text-5xl font-bold text-yellow-400 tracking-wider text-center mb-1 mt-4 relative z-10">R$ 10</div>
              <div className="text-center text-slate-400 uppercase tracking-widest text-xs md:text-sm mb-6 relative z-10">Acesso vitalício</div>

              <p className="text-white font-bold mb-4 text-xs md:text-sm relative z-10">O que você vai receber:</p>
              <ul className="space-y-3 mb-8 text-slate-300 text-xs md:text-sm flex-grow relative z-10">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🎬 Filme Completo Michael em <strong className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-1 rounded border border-yellow-400/20">4K</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🎥 Documentário exclusivo</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>🔥 Filmes bônus de fã</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Michael Jackson's Ghosts - 1997</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Moonwalker - 1988</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" /><span>⭐ Dublado e legendado</span></li>
              </ul>

              <a 
                href="https://ggcheckout.app/checkout/v5/QBYwzVO1Bg2MxWTBU3H3"
                className="mt-auto w-full relative inline-flex items-center justify-center px-4 py-4 md:px-6 md:py-5 text-xs sm:text-sm md:text-base font-display font-bold uppercase tracking-widest text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-300 shadow-md cursor-pointer whitespace-nowrap AB relative z-10"
              >
                SIM! QUERO A EXPERIÊNCIA COMPLETA
              </a>
            </div>

            {/* R$ 5 Plan */}
            <div className="relative w-full bg-[#0a0f1c] rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl flex flex-col overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-400/5 blur-[50px] pointer-events-none" />
               
               <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-white tracking-widest mb-6 relative z-10 text-center">APENAS O FILME</h3>

               <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-wider text-center mb-1 relative z-10">R$ 5</div>
               <div className="text-center text-slate-400 uppercase tracking-widest text-xs md:text-sm mb-6 relative z-10">Acesso vitalício</div>
               
               <p className="text-white font-bold mb-4 text-xs md:text-sm relative z-10">O que você vai receber:</p>
               <ul className="space-y-3 mb-8 text-slate-300 text-xs md:text-sm flex-grow relative z-10">
                 {[
                   "Filme Completo Michael HD",
                   "Dublado e legendado",
                   "Pagamento único"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0" />
                     <span className="text-slate-300">{item}</span>
                   </li>
                 ))}
               </ul>

               <a 
                 href="https://ggcheckout.app/checkout/v5/Y25OYUYn49zTE5oNsLyB"
                 className="mt-auto w-full relative inline-flex items-center justify-center px-2 py-4 md:px-6 md:py-5 text-xs sm:text-[13px] md:text-sm font-display font-bold uppercase tracking-wide text-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] cursor-pointer whitespace-nowrap relative z-10"
               >
                 CONTINUAR APENAS O FILME POR R$5
               </a>
            </div>
          </div>

        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="py-24 bg-[#090d16] border-y border-white/10">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-display text-[21px] font-bold text-center uppercase text-white mb-16 tracking-wide drop-shadow-md">
              Quem assistiu, <span className="text-yellow-400">amou</span> ❤️
            </h2>

            <div className="relative">
              <button 
                onClick={scrollLeft}
                className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 -mt-3 z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-gray-200 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div ref={carouselRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {carouselImages.map((src, i) => (
                  <div key={i} className="w-[85%] sm:w-full flex-shrink-0 snap-center">
                    <img 
                      src={src} 
                      alt={`Depoimento ${i + 1}`} 
                      className="w-full rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/5 object-cover"
                    />
                  </div>
                ))}
              </div>
              <button 
                onClick={scrollRight}
                className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 -mt-3 z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-gray-200 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <img 
                src="https://iili.io/CBUKoGf.webp" 
                alt="Depoimentos 3" 
                className="w-full rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/5 object-cover"
              />
              <img 
                src="https://iili.io/CBUKx44.jpg" 
                alt="Depoimentos 4" 
                className="w-full rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/5 object-cover"
              />
            </div>
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

        {/* FINAL CTA SECTION */}
        <section className="py-32 container mx-auto px-4 flex flex-col items-center text-center relative">
          {/* Bottom Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-6 tracking-wider z-10">
            A oportunidade <span className="text-yellow-400">acaba em breve</span>
          </h2>
          <p className="text-slate-400 mb-10 tracking-widest uppercase text-sm z-10">Não perca a chance de garantir sua cópia em HD.</p>
          
          <a href="#checkout" className="group relative inline-flex items-center justify-center px-8 py-5 text-lg md:text-xl font-display font-bold uppercase tracking-widest text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)] z-10 animate-pulse">
            QUERO ASSISTIR AGORA
          </a>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-[#04060d]">
        <p className="text-slate-600 text-xs">Pirataria é crime. Todos os direitos reservados. 2026.</p>
      </footer>
    </div>
  );
}
