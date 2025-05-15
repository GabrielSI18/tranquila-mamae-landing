
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="section bg-gradient-to-b from-background to-primary/20" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ainda tem dúvidas? Confira as respostas para as perguntas mais comuns.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-primary/10 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                Esse produto serve para recém-nascidos?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white border-t border-primary/10">
                <p className="text-muted-foreground">
                  Sim! O Mamãe Tranquila foi especialmente desenvolvido para mães com bebês desde o nascimento até o primeiro ano de vida. O conteúdo aborda as diferentes fases do desenvolvimento do bebê, com orientações específicas para cada etapa, inclusive para o período neonatal.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-primary/10 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                Em quanto tempo vejo resultados?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white border-t border-primary/10">
                <p className="text-muted-foreground">
                  Muitas mães relatam perceber melhorias já nos primeiros dias de uso, especialmente nas rotinas de sono e na redução da ansiedade. No entanto, a implementação completa das técnicas e a adaptação do bebê podem levar de 1 a 3 semanas para resultados mais significativos e duradouros.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-primary/10 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                Tem garantia?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white border-t border-primary/10">
                <p className="text-muted-foreground">
                  Sim! Oferecemos garantia de satisfação de 7 dias. Se você não ficar satisfeita com o produto por qualquer motivo, basta entrar em contato conosco dentro desse período e devolveremos 100% do seu investimento, sem perguntas e sem burocracia.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-primary/10 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                Como funciona o suporte?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white border-t border-primary/10">
                <p className="text-muted-foreground">
                  Ao adquirir o Mamãe Tranquila, você terá acesso ao nosso grupo exclusivo de suporte onde poderá interagir com outras mães e com nossa equipe de especialistas. Além disso, oferecemos atendimento prioritário por e-mail e WhatsApp para dúvidas específicas sobre o uso do produto e implementação das técnicas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-primary/10 rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                O produto é físico ou digital?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white border-t border-primary/10">
                <p className="text-muted-foreground">
                  O Mamãe Tranquila está disponível em formato físico e digital. Na versão física, você recebe um kit completo com manual, cartões de rotina, diário da mãe e acessórios para organização. Na versão digital, você tem acesso imediato a todo o conteúdo através de nossa plataforma online.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
