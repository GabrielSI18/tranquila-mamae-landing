
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="section bg-gradient-to-b from-primary/20 to-background" id="depoimentos">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            O Que Outras Mães Estão Dizendo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das histórias de mães que transformaram sua experiência com a maternidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-primary/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                </div>
                
                <p className="italic text-muted-foreground mb-6">
                  "Depois de quase dois meses sem dormir direito, as dicas do Mamãe Tranquila ajudaram a estabelecer uma rotina que funcionou para meu filho. Hoje dormimos melhor e consigo aproveitar mais a maternidade."
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                    {/* Placeholder for user image */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">CP</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Carla Pereira</h4>
                    <p className="text-sm text-muted-foreground">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                </div>
                
                <p className="italic text-muted-foreground mb-6">
                  "A ansiedade estava me consumindo até que encontrei o Mamãe Tranquila. O conteúdo sobre como lidar com as emoções pós-parto foi um divisor de águas para mim. Sinto que recuperei minha confiança como mãe."
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                    {/* Placeholder for user image */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-semibold">MO</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mariana Oliveira</h4>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4892 3.16106C11.7002 2.70134 12.2998 2.70134 12.5108 3.16106L14.6717 7.90941L19.9596 8.52786C20.4662 8.5881 20.6759 9.20632 20.3057 9.55436L16.505 13.1135L17.541 18.3657C17.6458 18.8679 17.1209 19.2586 16.6775 19.0155L12 16.4349L7.32254 19.0155C6.87915 19.2586 6.35421 18.8679 6.45899 18.3657L7.49496 13.1135L3.69428 9.55436C3.32408 9.20632 3.53379 8.5881 4.04044 8.52786L9.32832 7.90941L11.4892 3.16106Z" fill="#FFD700"/>
                  </svg>
                </div>
                
                <p className="italic text-muted-foreground mb-6">
                  "O suporte do grupo foi fundamental para mim. Ter contato com outras mães passando pelos mesmos desafios e receber orientações da equipe me fez sentir acolhida e apoiada. Recomendo para todas as mães de primeira viagem!"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                    {/* Placeholder for user image */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold">LS</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Luiza Santos</h4>
                    <p className="text-sm text-muted-foreground">Belo Horizonte, MG</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
