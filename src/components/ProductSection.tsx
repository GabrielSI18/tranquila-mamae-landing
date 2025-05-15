
import { Button } from "@/components/ui/button";
const ProductSection = () => {
  return <section className="section bg-gradient-to-b from-background to-primary/30" id="produto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl border border-primary/20 overflow-hidden">
              <div className="w-full">
                <img 
                  src="/imagem1.png" 
                  alt="Mãe segurando bebê com carinho em fundo lilás" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7519 4.43097C11.1526 3.51756 12.467 3.51756 12.8677 4.43097L14.7133 8.69995L19.4187 9.20277C20.4159 9.32054 20.8147 10.5682 20.0899 11.2627L16.6752 14.5165L17.458 19.1954C17.6262 20.1836 16.5727 20.9319 15.6938 20.4405L11.8098 18.246L7.9258 20.4405C7.04692 20.9319 5.99339 20.1836 6.16154 19.1954L6.94437 14.5165L3.52968 11.2627C2.80484 10.5682 3.20364 9.32054 4.2009 9.20277L8.90629 8.69995L10.7519 4.43097Z" fill="#FFD700" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7519 4.43097C11.1526 3.51756 12.467 3.51756 12.8677 4.43097L14.7133 8.69995L19.4187 9.20277C20.4159 9.32054 20.8147 10.5682 20.0899 11.2627L16.6752 14.5165L17.458 19.1954C17.6262 20.1836 16.5727 20.9319 15.6938 20.4405L11.8098 18.246L7.9258 20.4405C7.04692 20.9319 5.99339 20.1836 6.16154 19.1954L6.94437 14.5165L3.52968 11.2627C2.80484 10.5682 3.20364 9.32054 4.2009 9.20277L8.90629 8.69995L10.7519 4.43097Z" fill="#FFD700" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7519 4.43097C11.1526 3.51756 12.467 3.51756 12.8677 4.43097L14.7133 8.69995L19.4187 9.20277C20.4159 9.32054 20.8147 10.5682 20.0899 11.2627L16.6752 14.5165L17.458 19.1954C17.6262 20.1836 16.5727 20.9319 15.6938 20.4405L11.8098 18.246L7.9258 20.4405C7.04692 20.9319 5.99339 20.1836 6.16154 19.1954L6.94437 14.5165L3.52968 11.2627C2.80484 10.5682 3.20364 9.32054 4.2009 9.20277L8.90629 8.69995L10.7519 4.43097Z" fill="#FFD700" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7519 4.43097C11.1526 3.51756 12.467 3.51756 12.8677 4.43097L14.7133 8.69995L19.4187 9.20277C20.4159 9.32054 20.8147 10.5682 20.0899 11.2627L16.6752 14.5165L17.458 19.1954C17.6262 20.1836 16.5727 20.9319 15.6938 20.4405L11.8098 18.246L7.9258 20.4405C7.04692 20.9319 5.99339 20.1836 6.16154 19.1954L6.94437 14.5165L3.52968 11.2627C2.80484 10.5682 3.20364 9.32054 4.2009 9.20277L8.90629 8.69995L10.7519 4.43097Z" fill="#FFD700" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7519 4.43097C11.1526 3.51756 12.467 3.51756 12.8677 4.43097L14.7133 8.69995L19.4187 9.20277C20.4159 9.32054 20.8147 10.5682 20.0899 11.2627L16.6752 14.5165L17.458 19.1954C17.6262 20.1836 16.5727 20.9319 15.6938 20.4405L11.8098 18.246L7.9258 20.4405C7.04692 20.9319 5.99339 20.1836 6.16154 19.1954L6.94437 14.5165L3.52968 11.2627C2.80484 10.5682 3.20364 9.32054 4.2009 9.20277L8.90629 8.69995L10.7519 4.43097Z" fill="#FFD700" />
                  </svg>
                  <span className="text-sm font-medium text-muted-foreground ml-2">4.9/5 (387 avaliações)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Apresentando o <span className="text-primary-foreground">Mamãe Tranquila</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              O Mamãe Tranquila é um sistema completo desenvolvido por especialistas em maternidade e pediatria para ajudar mães de primeira viagem a superar os desafios dos primeiros meses com mais confiança, tranquilidade e alegria.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Diferente de dicas genéricas encontradas na internet, nosso método foi testado e aprovado por milhares de mães que descobriram como tornar a maternidade uma jornada mais leve e prazerosa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Completo e Acessível</h3>
                  <p className="text-muted-foreground text-sm">Acesso imediato a todo o conteúdo desenvolvido para simplificar sua rotina como mãe.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Baseado em Evidências</h3>
                  <p className="text-muted-foreground text-sm">Conteúdo desenvolvido por pediatras, psicólogos e consultoras de amamentação e sono infantil.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Suporte Contínuo</h3>
                  <p className="text-muted-foreground text-sm">Acesso ao nosso grupo exclusivo de mães e atendimento prioritário com nossa equipe.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="shadow-lg text-white font-semibold text-lg py-6 px-8 rounded-full w-full md:w-auto bg-violet-800 hover:bg-violet-700">
              Quero minha maternidade mais leve
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductSection;
