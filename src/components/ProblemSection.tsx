
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section className="section bg-white" id="problema">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            O Que Ninguém Te Contou Sobre a Maternidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A maioria das mães de primeira viagem enfrenta desafios que raramente são discutidos abertamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-md border-primary/10 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Insegurança e Dúvidas Constantes</h3>
                <p className="text-muted-foreground mb-4">
                  "Estou fazendo isso certo?" "Por que meu bebê não para de chorar?" - são perguntas que atormentam mães iniciantes diariamente.
                </p>
                <p className="mt-auto text-sm border-t pt-4 border-primary/10 text-muted-foreground">
                  <em>"Parecia que todo mundo sabia cuidar do meu filho melhor do que eu."</em> - Relato comum
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-primary/10 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Exaustão e Privação de Sono</h3>
                <p className="text-muted-foreground mb-4">
                  O sono interrompido e a adaptação à nova rotina criam um ciclo de cansaço que afeta o bem-estar físico e emocional da mãe.
                </p>
                <p className="mt-auto text-sm border-t pt-4 border-primary/10 text-muted-foreground">
                  <em>"Eu não me lembro de ter dormido mais de 2 horas seguidas nos primeiros meses."</em> - Experiência comum
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-primary/10 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ansiedade e Sobrecarga Mental</h3>
                <p className="text-muted-foreground mb-4">
                  A responsabilidade de cuidar de um ser completamente dependente gera uma sobrecarga emocional e mental intensa.
                </p>
                <p className="mt-auto text-sm border-t pt-4 border-primary/10 text-muted-foreground">
                  <em>"Sempre temia que algo ruim pudesse acontecer se eu não checasse o bebê a cada 5 minutos."</em> - Sentimento frequente
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-primary/10 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26 9.01997 9.02C9.00997 8.85 8.99997 8.67 8.99997 8.5C8.99997 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.85 9.01 9.02 9.02C12.19 9.26 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Perda da Identidade e Tempo para Si</h3>
                <p className="text-muted-foreground mb-4">
                  Muitas mães sentem que perderam sua identidade pessoal ao se dedicarem integralmente aos cuidados do bebê.
                </p>
                <p className="mt-auto text-sm border-t pt-4 border-primary/10 text-muted-foreground">
                  <em>"Às vezes passavam dias sem que eu conseguisse nem mesmo tomar um banho tranquilo."</em> - Realidade compartilhada
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
