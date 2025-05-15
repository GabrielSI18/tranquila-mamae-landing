
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ZapIcon, List, User } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="section bg-white" id="beneficios">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Benefícios que Transformam sua Experiência como Mãe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Mamãe Tranquila foi desenvolvido para resolver os desafios reais que você enfrenta todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Reduz Ansiedade e Insegurança</h3>
              <p className="text-muted-foreground text-sm">
                Aprenda técnicas comprovadas para acalmar sua mente e se tornar mais confiante nos cuidados com o bebê.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9 7.93992L15.52 10.5599C16.29 11.3299 16.29 12.5899 15.52 13.3599L9 19.8699H5V15.8699L11.52 9.34992C12.29 8.57992 13.55 8.57992 14.32 9.34992L12.9 7.93992ZM18 20.0001H13L15.97 17.0301L18 19.0601V20.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 3V7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3">Melhora o Sono do Bebê e da Mãe</h3>
              <p className="text-muted-foreground text-sm">
                Métodos suaves e eficazes para estabelecer rotinas de sono saudáveis para seu bebê, permitindo que você também descanse.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Cria uma Rotina mais Leve</h3>
              <p className="text-muted-foreground text-sm">
                Estabeleça um ritmo diário que funcione para você e seu bebê, tornando o dia a dia mais previsível e tranquilo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <ZapIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Mais Energia e Confiança</h3>
              <p className="text-muted-foreground text-sm">
                Recupere sua vitalidade e autoconfiança com estratégias práticas para cuidar de si mesma enquanto cuida do bebê.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
              <User className="h-12 w-12 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Receba atendimento personalizado</h3>
              <p className="text-muted-foreground">
                Além de todo o conteúdo, você terá acesso ao nosso grupo exclusivo de suporte onde consultores especializados respondem suas dúvidas e oferecem orientações específicas para seu caso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
