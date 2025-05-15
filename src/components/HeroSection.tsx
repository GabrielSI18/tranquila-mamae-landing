import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-b from-primary/30 to-background">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 text-primary-foreground">
            Ser mãe é mágico… Mas ninguém fala o quanto pode ser desafiador no começo.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl">
            Descubra o que milhares de mães estão fazendo para viver a maternidade com mais leveza, segurança e amor.
          </p>
          
          <Button size="lg" className="shadow-lg text-white font-semibold text-lg py-6 px-8 rounded-full bg-violet-900 hover:bg-violet-800">
            Quero minha maternidade mais leve
          </Button>
          
          <div className="mt-6 flex items-center gap-2 justify-center text-sm text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Oferta por tempo limitado</span>
          </div>
          
          <div className="mt-12 md:mt-16 w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="font-bold text-2xl md:text-3xl text-primary-foreground mb-2">74%</div>
                <p className="text-sm text-muted-foreground">das mães de primeira viagem relatam insegurança nos cuidados com o bebê</p>
              </div>
              
              <div className="p-4">
                <div className="font-bold text-2xl md:text-3xl text-primary-foreground mb-2">82%</div>
                <p className="text-sm text-muted-foreground">sentem exaustão e ansiedade durante os primeiros meses</p>
              </div>
              
              <div className="p-4">
                <div className="font-bold text-2xl md:text-3xl text-primary-foreground mb-2">91%</div>
                <p className="text-sm text-muted-foreground">afirmam que suporte adequado reduziu consideravelmente o estresse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;