
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
  
const FinalCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="section bg-gradient-to-r from-violet-800 to-violet-500 py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
            Garanta agora seu Mamãe Tranquila e comece sua nova fase com mais segurança e leveza
          </h2>
          
          <p className="text-white/90 mb-8 text-lg">
            Junte-se às milhares de mães que estão transformando a maternidade em uma experiência mais tranquila e feliz.
          </p>
          
          <Button size="lg" className="bg-white text-primary-foreground hover:bg-white/90 font-semibold text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
            Quero minha maternidade mais leve
          </Button>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white">Garantia de 7 dias ou seu dinheiro de volta</h4>
              <p className="text-white/80 text-sm">
                Sua compra está protegida. Teste sem risco!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
