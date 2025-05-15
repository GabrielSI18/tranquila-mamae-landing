import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const OfferSection = () => {
  return <section className="section bg-white" id="oferta">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary py-4 px-6 bg-violet-800">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                Oferta Especial por Tempo Limitado
              </h3>
            </div>
            
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-muted-foreground line-through text-lg">De R$ 297,00</span>
                    <span className="bg-secondary/20 text-secondary-foreground text-sm px-2 py-1 rounded">50% OFF</span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl md:text-5xl font-bold text-primary-foreground">R$ 147,00</span>
                    <span className="text-muted-foreground ml-2">à vista ou em até 12x</span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Acesso imediato a todo o conteúdo</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Grupo de suporte exclusivo</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Atendimento prioritário</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Frete grátis para todo Brasil</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-accent/20 p-3 rounded-lg mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#FFDEE2" stroke="#d84e6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8V13" stroke="#d84e6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.9945 16H12.0035" stroke="#d84e6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm">Oferta válida somente até meia-noite de hoje. Não perca essa oportunidade!</p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <Button size="lg" className="shadow-xl text-white font-semibold text-xl py-7 px-8 rounded-full mb-4 bg-violet-800 hover:bg-violet-700">
                    Quero minha maternidade mais leve
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-muted-foreground">Compra 100% segura e protegida</span>
                  </div>
                  
                  <div className="bg-primary/10 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E5DEFF" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#5b42d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h4 className="font-bold text-lg">Garantia de 7 dias</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Teste o produto por 7 dias. Se não ficar satisfeita por qualquer motivo, devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                    </p>
                  </div>
                  
                  <div className="flex justify-center gap-3">
                    <img src="https://placehold.co/40x25/png" alt="Visa" className="h-6 w-auto" />
                    <img src="https://placehold.co/40x25/png" alt="Mastercard" className="h-6 w-auto" />
                    <img src="https://placehold.co/40x25/png" alt="Amex" className="h-6 w-auto" />
                    <img src="https://placehold.co/40x25/png" alt="Pix" className="h-6 w-auto" />
                    <img src="https://placehold.co/40x25/png" alt="Boleto" className="h-6 w-auto" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default OfferSection;